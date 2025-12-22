#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import OpenAI from "openai";
import {
  settings,
  languages,
  outputDir,
  throttleMs,
  maxRetries,
  retryBaseDelayMs,
} from "./translation-settings.js";

const API_KEY = "PASTE_YOUR_OPENAI_API_KEY_HERE";
const DEFAULT_OUT_DIR = "_locales";
const MODEL = "gpt-4.1-nano";
const DEFAULT_THROTTLE_MS = 2000;
const DEFAULT_MAX_RETRIES = 4;
const DEFAULT_RETRY_BASE_DELAY_MS = 2000;

function validateSettings(settings) {
  const requiredFields = [
    "name",
    "short_description",
    "full_description",
    "main_keyword",
  ];
  for (const field of requiredFields) {
    if (!settings || typeof settings[field] !== "string" || !settings[field].trim()) {
      throw new Error(`settings.${field} must be a non-empty string.`);
    }
  }
}

function validateLanguages(languages) {
  if (!Array.isArray(languages)) {
    throw new Error("languages must be an array.");
  }
  for (const lang of languages) {
    if (!lang || typeof lang.code !== "string" || !lang.code.trim()) {
      throw new Error("Each language must include a non-empty code string.");
    }
    if (typeof lang.language !== "string" || !lang.language.trim()) {
      throw new Error(`Language ${lang.code || ""} must include a language name.`);
    }
    if (typeof lang.shouldTranslate !== "boolean") {
      lang.shouldTranslate = true;
    }
  }
}

function buildMessages({ name, short_description, full_description }) {
  return {
    app_name: {
      message: name,
    },
    app_description: {
      message: short_description,
    },
    store_description: {
      message: full_description,
    },
  };
}

function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object found in response.");
  }
  const slice = text.slice(start, end + 1);
  return JSON.parse(slice);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRateLimitError(error) {
  const message = String(error?.message || "");
  return (
    error?.status === 429 ||
    error?.code === "rate_limit_exceeded" ||
    message.toLowerCase().includes("rate limit")
  );
}

function getRetryAfterMs(error) {
  const header =
    error?.headers?.["retry-after"] ??
    error?.headers?.get?.("retry-after") ??
    error?.response?.headers?.get?.("retry-after");
  const seconds = Number(header);
  if (Number.isFinite(seconds) && seconds > 0) {
    return seconds * 1000;
  }
  return null;
}

async function runWithRetries(fn, options) {
  const retries =
    Number.isFinite(options?.maxRetries) && options.maxRetries >= 0
      ? options.maxRetries
      : DEFAULT_MAX_RETRIES;
  const baseDelay =
    Number.isFinite(options?.retryBaseDelayMs) && options.retryBaseDelayMs > 0
      ? options.retryBaseDelayMs
      : DEFAULT_RETRY_BASE_DELAY_MS;

  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (!isRateLimitError(error) || attempt >= retries) {
        throw error;
      }
      const retryAfterMs = getRetryAfterMs(error);
      const backoff = Math.min(baseDelay * 2 ** attempt, 60000);
      const jitter = Math.floor(Math.random() * 250);
      await sleep((retryAfterMs ?? backoff) + jitter);
      attempt += 1;
    }
  }
}

async function translateSettings(client, settings, language) {
  const prompt = [
    "You are a professional localization translator for Chrome Web Store listings.",
    "Translate the fields into the target language with natural, native-sounding phrasing.",
    "Preserve meaning, SEO intent, and readability.",
    "Keep the main keyword present in the translation (translate or adapt it naturally).",
    "Strict limits: name must be at most 75 characters; short_description must be at most 132 characters.",
    "Return ONLY valid JSON with keys: name, short_description, full_description.",
  ].join(" ");

  const userPayload = {
    target_language: `${language.language} (${language.code})`,
    name: settings.name,
    short_description: settings.short_description,
    full_description: settings.full_description,
    main_keyword: settings.main_keyword,
  };

  const response = await runWithRetries(
    () =>
      client.chat.completions.create({
        model: MODEL,
        temperature: 0.4,
        messages: [
          { role: "system", content: prompt },
          {
            role: "user",
            content: `Translate the following JSON:\n${JSON.stringify(userPayload, null, 2)}`,
          },
        ],
      }),
    {
      maxRetries,
      retryBaseDelayMs,
    }
  );

  const content = response.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error("Empty translation response.");
  }
  return extractJson(content);
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeMessages(outDir, code, messages) {
  const localeDir = path.join(outDir, code);
  await ensureDir(localeDir);
  const filePath = path.join(localeDir, "messages.json");
  await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf8");
}

async function main() {
  validateSettings(settings);
  validateLanguages(languages);

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || API_KEY,
  });

  const resolvedOutDir =
    typeof outputDir === "string" && outputDir.trim() ? outputDir : DEFAULT_OUT_DIR;
  await ensureDir(resolvedOutDir);
  const resolvedThrottleMs =
    Number.isFinite(throttleMs) && throttleMs >= 0 ? throttleMs : DEFAULT_THROTTLE_MS;

  for (const language of languages) {
    const payload =
      language.shouldTranslate
        ? await translateSettings(client, settings, language)
        : {
            name: settings.name,
            short_description: settings.short_description,
            full_description: settings.full_description,
          };

    const messages = buildMessages(payload);
    await writeMessages(resolvedOutDir, language.code, messages);
    console.log(`Wrote ${path.join(resolvedOutDir, language.code, "messages.json")}`);
    if (language.shouldTranslate && resolvedThrottleMs > 0) {
      await sleep(resolvedThrottleMs);
    }
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
