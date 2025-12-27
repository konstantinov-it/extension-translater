export const settings = {
  name: "",
  short_description: "",
  full_description: ``,
  main_keyword: "",
};

export const languages = [
  { code: "ar", language: "Arabic", country: "Saudi Arabia", shouldTranslate: false },
  { code: "am", language: "Amharic", country: "Ethiopia", shouldTranslate: false },
  { code: "bg", language: "Bulgarian", country: "Bulgaria", shouldTranslate: false },
  { code: "bn", language: "Bengali", country: "Bangladesh", shouldTranslate: false },
  { code: "ca", language: "Catalan", country: "Spain", shouldTranslate: false },
  { code: "cs", language: "Czech", country: "Czech Republic", shouldTranslate: false },
  { code: "da", language: "Danish", country: "Denmark", shouldTranslate: false },

  { code: "de", language: "German", country: "Germany", shouldTranslate: true },

  { code: "el", language: "Greek", country: "Greece", shouldTranslate: false },

  { code: "en", language: "English", country: "United States", shouldTranslate: true },
  { code: "en_AU", language: "English (Australia)", country: "Australia", shouldTranslate: false },
  { code: "en_GB", language: "English (Great Britain)", country: "United Kingdom", shouldTranslate: false },
  { code: "en_US", language: "English (USA)", country: "United States", shouldTranslate: false },

  { code: "es", language: "Spanish", country: "Spain", shouldTranslate: true },
  { code: "es_419", language: "Spanish (Latin America and Caribbean)", country: "Mexico", shouldTranslate: true },

  { code: "et", language: "Estonian", country: "Estonia", shouldTranslate: false },
  { code: "fa", language: "Persian", country: "Iran", shouldTranslate: false },
  { code: "fi", language: "Finnish", country: "Finland", shouldTranslate: false },
  { code: "fil", language: "Filipino", country: "Philippines", shouldTranslate: false },

  { code: "fr", language: "French", country: "France", shouldTranslate: true },

  { code: "gu", language: "Gujarati", country: "India", shouldTranslate: false },
  { code: "he", language: "Hebrew", country: "Israel", shouldTranslate: false },
  { code: "hi", language: "Hindi", country: "India", shouldTranslate: false },
  { code: "hr", language: "Croatian", country: "Croatia", shouldTranslate: false },
  { code: "hu", language: "Hungarian", country: "Hungary", shouldTranslate: false },

  { code: "id", language: "Indonesian", country: "Indonesia", shouldTranslate: true },
  { code: "it", language: "Italian", country: "Italy", shouldTranslate: true },
  { code: "ja", language: "Japanese", country: "Japan", shouldTranslate: true },

  { code: "kn", language: "Kannada", country: "India", shouldTranslate: false },
  { code: "ko", language: "Korean", country: "South Korea", shouldTranslate: true },

  { code: "lt", language: "Lithuanian", country: "Lithuania", shouldTranslate: false },
  { code: "lv", language: "Latvian", country: "Latvia", shouldTranslate: false },
  { code: "ml", language: "Malayalam", country: "India", shouldTranslate: false },
  { code: "mr", language: "Marathi", country: "India", shouldTranslate: false },
  { code: "ms", language: "Malay", country: "Malaysia", shouldTranslate: false },

  { code: "nl", language: "Dutch", country: "Netherlands", shouldTranslate: true },
  { code: "no", language: "Norwegian", country: "Norway", shouldTranslate: false },

  { code: "pl", language: "Polish", country: "Poland", shouldTranslate: true },
  { code: "pt_BR", language: "Portuguese (Brazil)", country: "Brazil", shouldTranslate: true },
  { code: "pt_PT", language: "Portuguese (Portugal)", country: "Portugal", shouldTranslate: true },

  { code: "ro", language: "Romanian", country: "Romania", shouldTranslate: false },

  { code: "ru", language: "Russian", country: "Russia", shouldTranslate: true },

  { code: "sk", language: "Slovak", country: "Slovakia", shouldTranslate: false },
  { code: "sl", language: "Slovenian", country: "Slovenia", shouldTranslate: false },
  { code: "sr", language: "Serbian", country: "Serbia", shouldTranslate: false },
  { code: "sv", language: "Swedish", country: "Sweden", shouldTranslate: false },
  { code: "sw", language: "Swahili", country: "Tanzania", shouldTranslate: false },
  { code: "ta", language: "Tamil", country: "India", shouldTranslate: false },
  { code: "te", language: "Telugu", country: "India", shouldTranslate: false },

  { code: "th", language: "Thai", country: "Thailand", shouldTranslate: true },
  { code: "tr", language: "Turkish", country: "Turkey", shouldTranslate: true },
  { code: "uk", language: "Ukrainian", country: "Ukraine", shouldTranslate: true },
  { code: "vi", language: "Vietnamese", country: "Vietnam", shouldTranslate: true },

  { code: "zh_CN", language: "Chinese (China)", country: "China", shouldTranslate: true },
  { code: "zh_TW", language: "Chinese (Taiwan)", country: "Taiwan", shouldTranslate: true },
];

export const outputDir = "_locales";
export const throttleMs = 2000;
export const maxRetries = 4;
export const retryBaseDelayMs = 2000;
