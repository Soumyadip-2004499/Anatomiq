/** Script group decides which font pair loads. Keeping this separate from the
 *  locale list means adding a Latin-script locale costs no extra font weight. */
export type ScriptGroup = "latin" | "cyrillic" | "devanagari" | "arabic" | "sc" | "jp" | "kr";

export type LocaleConfig = {
  code: string;
  /** Endonym — what speakers call the language, shown in the switcher. */
  nativeName: string;
  englishName: string;
  country: string;
  dir: "ltr" | "rtl";
  script: ScriptGroup;
  /** BCP-47 tag for Intl formatting and og:locale. */
  intl: string;
};

export const locales: LocaleConfig[] = [
  { code: "en", nativeName: "English",  englishName: "English",    country: "United States", dir: "ltr", script: "latin",      intl: "en_US" },
  { code: "es", nativeName: "Español",  englishName: "Spanish",    country: "Spain",         dir: "ltr", script: "latin",      intl: "es_ES" },
  { code: "hi", nativeName: "हिन्दी",     englishName: "Hindi",      country: "India",         dir: "ltr", script: "devanagari", intl: "hi_IN" },
  { code: "zh", nativeName: "中文",      englishName: "Chinese",    country: "China",         dir: "ltr", script: "sc",         intl: "zh_CN" },
  { code: "ar", nativeName: "العربية",    englishName: "Arabic",     country: "Egypt",         dir: "rtl", script: "arabic",     intl: "ar_EG" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese", country: "Brazil",        dir: "ltr", script: "latin",      intl: "pt_BR" },
  { code: "fr", nativeName: "Français", englishName: "French",     country: "France",        dir: "ltr", script: "latin",      intl: "fr_FR" },
  { code: "de", nativeName: "Deutsch",  englishName: "German",     country: "Germany",       dir: "ltr", script: "latin",      intl: "de_DE" },
  { code: "ja", nativeName: "日本語",     englishName: "Japanese",   country: "Japan",         dir: "ltr", script: "jp",         intl: "ja_JP" },
  { code: "ru", nativeName: "Русский",  englishName: "Russian",    country: "Russia",        dir: "ltr", script: "cyrillic",   intl: "ru_RU" },
  { code: "id", nativeName: "Indonesia", englishName: "Indonesian", country: "Indonesia",    dir: "ltr", script: "latin",      intl: "id_ID" },
  { code: "ko", nativeName: "한국어",     englishName: "Korean",     country: "South Korea",   dir: "ltr", script: "kr",         intl: "ko_KR" },
];

export const defaultLocale = "en";
export const localeCodes = locales.map((locale) => locale.code);

export function getLocale(code: string): LocaleConfig {
  return locales.find((locale) => locale.code === code) ?? locales[0];
}

export function isLocale(code: string): boolean {
  return localeCodes.includes(code);
}
