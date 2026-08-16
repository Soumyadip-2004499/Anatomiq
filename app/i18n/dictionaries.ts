import type { Dictionary, OrganContentDictionary, UiDictionary } from "./types";
import { defaultLocale } from "./config";

/** Explicit maps keep each locale in its own chunk while staying statically
 *  analysable by both build pipelines (next build and vinext/Vite). */
const uiLoaders: Record<string, () => Promise<UiDictionary>> = {
  en: () => import("./ui/en").then((m) => m.ui),
  es: () => import("./ui/es").then((m) => m.ui),
  hi: () => import("./ui/hi").then((m) => m.ui),
  zh: () => import("./ui/zh").then((m) => m.ui),
  ar: () => import("./ui/ar").then((m) => m.ui),
  pt: () => import("./ui/pt").then((m) => m.ui),
  fr: () => import("./ui/fr").then((m) => m.ui),
  de: () => import("./ui/de").then((m) => m.ui),
  ja: () => import("./ui/ja").then((m) => m.ui),
  ru: () => import("./ui/ru").then((m) => m.ui),
  id: () => import("./ui/id").then((m) => m.ui),
  ko: () => import("./ui/ko").then((m) => m.ui),
};

const organLoaders: Record<string, () => Promise<OrganContentDictionary>> = {
  en: () => import("./organs/en").then((m) => m.organs),
  es: () => import("./organs/es").then((m) => m.organs),
  hi: () => import("./organs/hi").then((m) => m.organs),
  zh: () => import("./organs/zh").then((m) => m.organs),
  ar: () => import("./organs/ar").then((m) => m.organs),
  pt: () => import("./organs/pt").then((m) => m.organs),
  fr: () => import("./organs/fr").then((m) => m.organs),
  de: () => import("./organs/de").then((m) => m.organs),
  ja: () => import("./organs/ja").then((m) => m.organs),
  ru: () => import("./organs/ru").then((m) => m.organs),
  id: () => import("./organs/id").then((m) => m.organs),
  ko: () => import("./organs/ko").then((m) => m.organs),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const ui = await (uiLoaders[locale] ?? uiLoaders[defaultLocale])();
  const organs = await (organLoaders[locale] ?? organLoaders[defaultLocale])();
  return { ui, organs };
}
