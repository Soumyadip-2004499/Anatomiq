/**
 * Checks the locale dictionaries for the classes of drift TypeScript cannot see.
 *
 * The `UiDictionary` / `OrganContent` types already force every locale to carry
 * every field, so missing keys fail the build. What they do NOT catch:
 *
 *   1. hotspot keys — typed as `Record<string, …>`, so a missing or misspelled
 *      structure silently falls back to the Latin TA term at runtime;
 *   2. placeholder drift — a `{organ}` present in English but dropped in a
 *      translation renders a literal, broken sentence;
 *   3. strings left identical to English after a copy-paste.
 *
 * (1) and (2) are errors. (3) is reported for review, because plenty of
 * anatomical terms are legitimately identical across languages.
 *
 * Run: npm run i18n:audit
 */
import { organStructures } from "../app/lib/anatomy-data.ts";
import { locales } from "../app/i18n/config.ts";

const RESET = "[0m";
const red = (s) => `[31m${s}${RESET}`;
const yellow = (s) => `[33m${s}${RESET}`;
const green = (s) => `[32m${s}${RESET}`;
const dim = (s) => `[2m${s}${RESET}`;

const placeholders = (value) => (String(value).match(/\{(\w+)\}/g) ?? []).sort().join(",");

/** Depth-first walk yielding [dottedPath, string] for every leaf string. */
function* strings(node, path = []) {
  for (const [key, value] of Object.entries(node)) {
    const next = [...path, key];
    if (typeof value === "string") yield [next.join("."), value];
    else if (Array.isArray(value)) value.forEach((item, i) => { if (typeof item === "string") return void (0); });
    else if (value && typeof value === "object") yield* strings(value, next);
  }
}

const load = async (locale) => ({
  ui: (await import(`../app/i18n/ui/${locale}.ts`)).ui,
  organs: (await import(`../app/i18n/organs/${locale}.ts`)).organs,
});

const base = await load("en");
const expectedHotspots = Object.fromEntries(
  organStructures.map((organ) => [organ.id, organ.hotspots.map((hotspot) => hotspot.id).sort()]),
);
const taByKey = Object.fromEntries(
  organStructures.flatMap((organ) => organ.hotspots.map((h) => [`${organ.id}.${h.id}`, h.ta])),
);

let errors = 0;
let warnings = 0;
const rows = [];

for (const { code } of locales) {
  const dict = await load(code);
  const issues = [];
  let identical = 0;
  let total = 0;

  // 1. hotspot key parity
  for (const organ of organStructures) {
    const got = Object.keys(dict.organs[organ.id].hotspots).sort();
    const want = expectedHotspots[organ.id];
    const missing = want.filter((id) => !got.includes(id));
    const extra = got.filter((id) => !want.includes(id));
    for (const id of missing) issues.push(red(`missing hotspot  ${organ.id}.${id}  ${dim(`(${taByKey[`${organ.id}.${id}`]})`)}`));
    for (const id of extra) issues.push(red(`unknown hotspot  ${organ.id}.${id}`));
    errors += missing.length + extra.length;
  }

  // 2. placeholder parity + 3. untranslated detection, over the UI dictionary
  for (const [path, english] of strings(base.ui)) {
    const translated = path.split(".").reduce((node, key) => node?.[key], dict.ui);
    total += 1;
    if (typeof translated !== "string") continue;
    if (placeholders(english) !== placeholders(translated)) {
      issues.push(red(`placeholder drift ui.${path}  ${dim(`en:[${placeholders(english) || "—"}] ${code}:[${placeholders(translated) || "—"}]`)}`));
      errors += 1;
    }
    if (code !== "en" && translated === english) identical += 1;
  }

  // untranslated prose in the organ dictionary (hotspot labels excluded — those
  // are frequently identical by design, e.g. "Aorta")
  for (const organ of organStructures) {
    for (const [field, english] of Object.entries(base.organs[organ.id])) {
      if (typeof english !== "string") continue;
      total += 1;
      const translated = dict.organs[organ.id][field];
      if (code !== "en" && translated === english) identical += 1;
    }
  }

  warnings += identical;
  rows.push({ code, total, identical, issues });
}

console.log(`\n  locale   strings   same-as-en   status`);
console.log(`  ${"-".repeat(46)}`);
for (const row of rows) {
  const status = row.issues.length ? red(`${row.issues.length} error(s)`) : green("ok");
  const same = row.code === "en" ? dim("—") : row.identical ? yellow(String(row.identical)) : green("0");
  console.log(`  ${row.code.padEnd(8)} ${String(row.total).padEnd(9)} ${same.padEnd(21)} ${status}`);
  for (const issue of row.issues) console.log(`      ${issue}`);
}

console.log(
  `\n  ${errors ? red(`${errors} error(s)`) : green("no errors")}` +
  `  ${warnings ? yellow(`${warnings} string(s) identical to English — review`) : ""}\n`,
);
process.exit(errors ? 1 : 0);
