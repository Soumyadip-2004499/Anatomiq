import {
  Cormorant_Garamond,
  DM_Sans,
  Noto_Naskh_Arabic,
  Noto_Sans,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
} from "next/font/google";
import type { ScriptGroup } from "./config";

// The display pair. Cormorant Garamond carries the "atelier" voice and happens
// to ship Cyrillic, so Latin and Russian share it.
const cormorant = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"] });
const cormorantCyrillic = Cormorant_Garamond({ variable: "--font-serif", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"] });
const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin", "latin-ext"] });
const notoSansCyrillic = Noto_Sans({ variable: "--font-sans", subsets: ["cyrillic", "latin"] });

const devanagariSerif = Noto_Serif_Devanagari({ variable: "--font-serif", subsets: ["devanagari", "latin"], weight: ["400", "500", "600"] });
const devanagariSans = Noto_Sans_Devanagari({ variable: "--font-sans", subsets: ["devanagari", "latin"] });

const arabicSerif = Noto_Naskh_Arabic({ variable: "--font-serif", subsets: ["arabic"], weight: ["400", "500", "600"] });
const arabicSans = Noto_Sans_Arabic({ variable: "--font-sans", subsets: ["arabic"] });

const webFonts: Partial<Record<ScriptGroup, { serif: { variable: string }; sans: { variable: string } }>> = {
  latin: { serif: cormorant, sans: dmSans },
  cyrillic: { serif: cormorantCyrillic, sans: notoSansCyrillic },
  devanagari: { serif: devanagariSerif, sans: devanagariSans },
  arabic: { serif: arabicSerif, sans: arabicSans },
};

/**
 * Chinese, Japanese, and Korean use platform fonts rather than web fonts.
 *
 * Two reasons. Practically, Google serves each CJK family as 100+ unicode-range
 * subset files; asking `next/font` for six of them makes the toolchain resolve
 * hundreds of files, which takes down the Cloudflare/vinext dev server.
 * Editorially, a CJK web font is several megabytes even subsetted — far too
 * much for a page that already ships a ~3 MB model — while every CJK platform
 * carries a high-quality system face. These classes live in `globals.css` and
 * set the same `--font-serif` / `--font-sans` variables the web fonts do.
 */
const systemFontClass: Partial<Record<ScriptGroup, string>> = {
  sc: "font-stack-sc",
  jp: "font-stack-jp",
  kr: "font-stack-kr",
};

/** Font classes for a script — only this script's faces are requested. */
export function fontClassName(script: ScriptGroup) {
  const system = systemFontClass[script];
  if (system) return system;
  const pair = webFonts[script] ?? webFonts.latin!;
  return `${pair.serif.variable} ${pair.sans.variable}`;
}
