/**
 * Flattens the locale dictionaries into one JSON file per locale, ready to hand
 * to a TMS (Crowdin, Lokalise, …) or a reviewer.
 *
 * Anatomical terms carry their Terminologia Anatomica identity as translator
 * context, which is the whole point of keying hotspots on `ta`: a reviewer can
 * check a label against the international standard instead of guessing from the
 * English.
 *
 * Run: npm run i18n:export   →   outputs/i18n/<locale>.json + context.json
 */
import { mkdir, writeFile } from "node:fs/promises";
import { organStructures } from "../app/lib/anatomy-data.ts";
import { locales } from "../app/i18n/config.ts";

const OUT = new URL("../outputs/i18n/", import.meta.url);

function flatten(node, path = [], into = {}) {
  for (const [key, value] of Object.entries(node)) {
    const next = [...path, key];
    if (typeof value === "string") into[next.join(".")] = value;
    else if (Array.isArray(value)) value.forEach((item, i) => (into[[...next, i].join(".")] = item));
    else if (value && typeof value === "object") flatten(value, next, into);
  }
  return into;
}

await mkdir(OUT, { recursive: true });

for (const { code } of locales) {
  const ui = (await import(`../app/i18n/ui/${code}.ts`)).ui;
  const organs = (await import(`../app/i18n/organs/${code}.ts`)).organs;
  const flat = { ...flatten(ui, ["ui"]), ...flatten(organs, ["organs"]) };
  await writeFile(new URL(`${code}.json`, OUT), JSON.stringify(flat, null, 2) + "\n");
  console.log(`  ${code}.json  ${Object.keys(flat).length} keys`);
}

// Translator context: the Latin anchor for every structure, plus the English
// source string, keyed exactly as the flattened files are.
const context = {};
for (const organ of organStructures) {
  context[`organs.${organ.id}.scientificName`] = { note: "Latin binomial — do not translate", value: organ.scientificName };
  for (const hotspot of organ.hotspots) {
    context[`organs.${organ.id}.hotspots.${hotspot.id}.label`] = {
      note: "Anatomical structure — match the published Terminologia Anatomica term for this language",
      terminologiaAnatomica: hotspot.ta,
    };
  }
}
await writeFile(new URL("context.json", OUT), JSON.stringify(context, null, 2) + "\n");
console.log(`  context.json  ${Object.keys(context).length} annotated keys`);
