export const settings = {
  name: "",
  short_description: "",
  full_description: ``,
  main_keyword: "",
};

export const languages = [
  { code: "ar", language: "Arabic", shouldTranslate: false },
  { code: "am", language: "Amharic", shouldTranslate: false },
  { code: "bg", language: "Bulgarian", shouldTranslate: false },
  { code: "bn", language: "Bengali", shouldTranslate: false },
  { code: "ca", language: "Catalan", shouldTranslate: false },
  { code: "cs", language: "Czech", shouldTranslate: false },
  { code: "da", language: "Danish", shouldTranslate: false },

  { code: "de", language: "German", shouldTranslate: true },

  { code: "el", language: "Greek", shouldTranslate: false },

  { code: "en", language: "English", shouldTranslate: true },
  { code: "en_AU", language: "English (Australia)", shouldTranslate: false },
  { code: "en_GB", language: "English (Great Britain)", shouldTranslate: false },
  { code: "en_US", language: "English (USA)", shouldTranslate: false },

  { code: "es", language: "Spanish", shouldTranslate: true },
  { code: "es_419", language: "Spanish (Latin America and Caribbean)", shouldTranslate: true },

  { code: "et", language: "Estonian", shouldTranslate: false },
  { code: "fa", language: "Persian", shouldTranslate: false },
  { code: "fi", language: "Finnish", shouldTranslate: false },
  { code: "fil", language: "Filipino", shouldTranslate: false },

  { code: "fr", language: "French", shouldTranslate: true },

  { code: "gu", language: "Gujarati", shouldTranslate: false },
  { code: "he", language: "Hebrew", shouldTranslate: false },
  { code: "hi", language: "Hindi", shouldTranslate: false },
  { code: "hr", language: "Croatian", shouldTranslate: false },
  { code: "hu", language: "Hungarian", shouldTranslate: false },

  { code: "id", language: "Indonesian", shouldTranslate: true },
  { code: "it", language: "Italian", shouldTranslate: true },
  { code: "ja", language: "Japanese", shouldTranslate: true },

  { code: "kn", language: "Kannada", shouldTranslate: false },
  { code: "ko", language: "Korean", shouldTranslate: true },

  { code: "lt", language: "Lithuanian", shouldTranslate: false },
  { code: "lv", language: "Latvian", shouldTranslate: false },
  { code: "ml", language: "Malayalam", shouldTranslate: false },
  { code: "mr", language: "Marathi", shouldTranslate: false },
  { code: "ms", language: "Malay", shouldTranslate: false },

  { code: "nl", language: "Dutch", shouldTranslate: true },
  { code: "no", language: "Norwegian", shouldTranslate: false },

  { code: "pl", language: "Polish", shouldTranslate: true },
  { code: "pt_BR", language: "Portuguese (Brazil)", shouldTranslate: true },
  { code: "pt_PT", language: "Portuguese (Portugal)", shouldTranslate: true },

  { code: "ro", language: "Romanian", shouldTranslate: false },

  { code: "ru", language: "Russian", shouldTranslate: true },

  { code: "sk", language: "Slovak", shouldTranslate: false },
  { code: "sl", language: "Slovenian", shouldTranslate: false },
  { code: "sr", language: "Serbian", shouldTranslate: false },
  { code: "sv", language: "Swedish", shouldTranslate: false },
  { code: "sw", language: "Swahili", shouldTranslate: false },
  { code: "ta", language: "Tamil", shouldTranslate: false },
  { code: "te", language: "Telugu", shouldTranslate: false },

  { code: "th", language: "Thai", shouldTranslate: true },
  { code: "tr", language: "Turkish", shouldTranslate: true },
  { code: "uk", language: "Ukrainian", shouldTranslate: true },
  { code: "vi", language: "Vietnamese", shouldTranslate: true },

  { code: "zh_CN", language: "Chinese (China)", shouldTranslate: true },
  { code: "zh_TW", language: "Chinese (Taiwan)", shouldTranslate: true },
];

export const outputDir = "_locales";
export const throttleMs = 2000;
export const maxRetries = 4;
export const retryBaseDelayMs = 2000;
