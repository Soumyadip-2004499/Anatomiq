import { organStructures, type HotspotStructure, type OrganId, type OrganStructure } from "../lib/anatomy-data";
import type { OrganContent, OrganContentDictionary } from "./types";

/** Structure joined with the active locale's prose. Components consume this
 *  shape, so they never need to know a translation layer exists. */
export type Hotspot = HotspotStructure & { label: string; detail: string };
export type Organ = Omit<OrganStructure, "hotspots"> & Omit<OrganContent, "hotspots"> & { hotspots: Hotspot[] };

export function buildOrgans(content: OrganContentDictionary): Organ[] {
  return organStructures.map((structure) => {
    const prose = content[structure.id];
    return {
      ...structure,
      ...prose,
      hotspots: structure.hotspots.map((hotspot) => ({
        ...hotspot,
        // Fall back to the Latin term if a locale has not translated this
        // structure yet — never render an empty label.
        label: prose.hotspots[hotspot.id]?.label ?? hotspot.ta,
        detail: prose.hotspots[hotspot.id]?.detail ?? "",
      })),
    };
  });
}

export function indexOrgans(organs: Organ[]): Record<OrganId, Organ> {
  return Object.fromEntries(organs.map((organ) => [organ.id, organ])) as Record<OrganId, Organ>;
}
