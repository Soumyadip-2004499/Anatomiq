// STRUCTURE ONLY — no translatable prose lives here.
// Every organ and hotspot is identified by a stable id plus its Terminologia
// Anatomica (TA2) Latin term, which is the canonical key locale files translate
// against. Positions, colours, and model paths are locale-independent.

export type OrganId =
  | "heart"
  | "brain"
  | "lungs"
  | "liver"
  | "kidneys"
  | "eyeball"
  | "intestine"
  | "pancreas"
  | "skin";

export type HotspotStructure = {
  id: string;
  /** Terminologia Anatomica term — the canonical identity across all locales. */
  ta: string;
  position: [number, number, number];
  color: string;
};

export type OrganStructure = {
  id: OrganId;
  model: string;
  icon: string;
  accent: string;
  /** Whether `/anatomy/<id>/*.webp` illustrations exist. */
  illustrated: boolean;
  /** Latin binomial — intentionally identical in every locale. */
  scientificName: string;
  category: string;
  hotspots: HotspotStructure[];
};

export const organStructures: OrganStructure[] = [
  {
    id: "heart",
    model: "/models/heart.glb",
    icon: "♥",
    accent: "#ee7c6a",
    illustrated: true,
    scientificName: "Cor",
    category: "Cardiovascular System",
    hotspots: [
      { id: "aorta", ta: "Aorta", position: [-0.35, 1.65, 0.55], color: "#ee7c6a" },
      { id: "left-atrium", ta: "Atrium sinistrum", position: [0.82, 0.65, 0.5], color: "#f2a33b" },
      { id: "right-atrium", ta: "Atrium dextrum", position: [-0.9, 0.35, 0.55], color: "#6393d8" },
      { id: "left-ventricle", ta: "Ventriculus sinister", position: [0.7, -0.75, 0.65], color: "#f2a33b" },
      { id: "right-ventricle", ta: "Ventriculus dexter", position: [-0.65, -0.68, 0.66], color: "#ee7c6a" },
      { id: "mitral", ta: "Valva atrioventricularis sinistra", position: [0.18, -1.35, 0.48], color: "#d89bc4" },
    ],
  },
  {
    id: "brain",
    model: "/models/brain.glb",
    icon: "◉",
    accent: "#c58696",
    illustrated: true,
    scientificName: "Encephalon",
    category: "Nervous System",
    hotspots: [
      { id: "frontal", ta: "Lobus frontalis", position: [-0.7, 0.65, 0.8], color: "#ee7c6a" },
      { id: "parietal", ta: "Lobus parietalis", position: [0.15, 1.1, 0.65], color: "#f2a33b" },
      { id: "temporal", ta: "Lobus temporalis", position: [0.75, -0.1, 0.82], color: "#6393d8" },
      { id: "cerebellum", ta: "Cerebellum", position: [0.72, -0.9, 0.55], color: "#d89bc4" },
    ],
  },
  {
    id: "lungs",
    model: "/models/lungs.glb",
    icon: "◍",
    accent: "#dd8f8b",
    illustrated: true,
    scientificName: "Pulmones",
    category: "Respiratory System",
    hotspots: [
      { id: "trachea", ta: "Trachea", position: [0, 1.6, 0.2], color: "#6393d8" },
      { id: "right-lung", ta: "Pulmo dexter", position: [-1.2, 0.1, 0.7], color: "#ee7c6a" },
      { id: "left-lung", ta: "Pulmo sinister", position: [1.2, 0.1, 0.7], color: "#f2a33b" },
      { id: "bronchus", ta: "Bronchus principalis", position: [-0.03, 0.3, 0.35], color: "#d89bc4" },
      { id: "base", ta: "Basis pulmonis", position: [-1.14, -1.2, 1], color: "#7fa88a" },
    ],
  },
  {
    id: "liver",
    model: "/models/liver.glb",
    icon: "≈",
    accent: "#b86858",
    illustrated: true,
    scientificName: "Hepar",
    category: "Digestive System",
    hotspots: [
      { id: "right-lobe", ta: "Lobus hepatis dexter", position: [-0.75, 0.35, 0.75], color: "#ee7c6a" },
      { id: "left-lobe", ta: "Lobus hepatis sinister", position: [0.85, 0.25, 0.75], color: "#f2a33b" },
      { id: "portal", ta: "Vena portae hepatis", position: [0.1, -0.3, 0.82], color: "#6393d8" },
    ],
  },
  {
    id: "kidneys",
    model: "/models/kidneys.glb",
    icon: "∞",
    accent: "#c96963",
    illustrated: true,
    scientificName: "Renes",
    category: "Urinary System",
    hotspots: [
      { id: "cortex", ta: "Cortex renalis", position: [-0.9, 0.55, 0.7], color: "#ee7c6a" },
      { id: "medulla", ta: "Medulla renalis", position: [0.85, 0.2, 0.7], color: "#f2a33b" },
      { id: "ureter", ta: "Ureter", position: [0.4, -1.1, 0.5], color: "#6393d8" },
    ],
  },
  {
    id: "eyeball",
    model: "/models/eyeball.glb",
    icon: "⊙",
    accent: "#7294b9",
    illustrated: true,
    scientificName: "Oculus",
    category: "Nervous System",
    hotspots: [
      { id: "cornea", ta: "Cornea", position: [-0.94, 0.05, 1.47], color: "#6393d8" },
      { id: "iris", ta: "Iris", position: [-1.22, -0.53, 1.15], color: "#f2a33b" },
      { id: "optic", ta: "Nervus opticus", position: [1.61, -0.18, 0.54], color: "#d89bc4" },
    ],
  },
  {
    id: "intestine",
    model: "/models/intestine.glb",
    icon: "§",
    accent: "#d78b77",
    illustrated: true,
    scientificName: "Intestinum",
    category: "Digestive System",
    hotspots: [
      { id: "duodenum", ta: "Duodenum", position: [0.6, 0.8, 0.75], color: "#f2a33b" },
      { id: "jejunum", ta: "Jejunum", position: [-0.45, 0.1, 0.82], color: "#ee7c6a" },
      { id: "colon", ta: "Colon", position: [0.75, -0.55, 0.72], color: "#6393d8" },
    ],
  },
  {
    id: "pancreas",
    model: "/models/pancreas.glb",
    icon: "◈",
    accent: "#c69a5e",
    illustrated: true,
    scientificName: "Pancreas",
    category: "Digestive System",
    hotspots: [
      { id: "head", ta: "Caput pancreatis", position: [-1.32, -0.36, 0.55], color: "#ee7c6a" },
      { id: "body", ta: "Corpus pancreatis", position: [0.05, 0.25, 0.45], color: "#f2a33b" },
      { id: "tail", ta: "Cauda pancreatis", position: [1.55, 0.3, 0.35], color: "#6393d8" },
      { id: "duct", ta: "Ductus pancreaticus", position: [-0.61, 0.39, 0.5], color: "#d89bc4" },
    ],
  },
  {
    id: "skin",
    model: "/models/skin.glb",
    icon: "▦",
    accent: "#c99277",
    illustrated: true,
    scientificName: "Integumentum",
    category: "Integumentary System",
    hotspots: [
      { id: "epidermis", ta: "Epidermis", position: [-0.05, 0.88, 1.4], color: "#ee7c6a" },
      { id: "dermis", ta: "Dermis", position: [0.29, 0.05, 1.4], color: "#f2a33b" },
      { id: "hypodermis", ta: "Tela subcutanea", position: [-0.39, -1.15, 1.4], color: "#6393d8" },
      { id: "follicle", ta: "Folliculus pili", position: [0.89, -0.44, 1.4], color: "#d89bc4" },
    ],
  },
];

export const organIds = organStructures.map((organ) => organ.id);
export const structureById = Object.fromEntries(
  organStructures.map((organ) => [organ.id, organ]),
) as Record<OrganId, OrganStructure>;
