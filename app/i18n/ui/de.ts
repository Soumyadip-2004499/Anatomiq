import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — Anatomie lernen wie ein Künstler",
    description:
      "Erkunde medizinisch detaillierte 3D-Organe — Herz, Gehirn, Lunge, Leber, Nieren, Auge, Darm, Bauchspeicheldrüse und Haut — in einem interaktiven Anatomie-Atelier.",
    ogTitle: "Anatomiq — Anatomie lernen wie ein Künstler",
    ogDescription: "Lerne Anatomie wie ein Künstler – mit immersiven, medizinisch detaillierten 3D-Präparaten.",
    imageAlt: "Ein anatomisches Herzpräparat über einem Sockel, daneben der Schriftzug Anatomiq",
  },
  brand: { tagline: "Anatomie lernen wie ein Künstler", home: "Startseite von Anatomiq" },
  nav: { explore: "Entdecken", systems: "Systeme", lessons: "Lektionen", library: "Bibliothek", notes: "Notizen" },
  search: { placeholder: "Organe, Themen suchen…" },
  profile: { open: "Lernprofil öffnen" },
  language: { label: "Sprache", choose: "Sprache wählen" },
  library: {
    title: "Organbibliothek", open: "Organbibliothek öffnen", close: "Bibliothek schließen",
    saved: "Gespeicherte Organe", viewAll: "Alle Organe anzeigen",
    quoteLine1: "Lernen ist", quoteLine2: "ein Akt der Neugier.", quoteSign: "Weiter entdecken!",
  },
  tools: {
    label: "Werkzeuge des 3D-Betrachters", rotate: "Drehen", zoom: "Zoom", isolate: "Isolieren",
    section: "Querschnitt", layers: "Schichten", compare: "Vergleichen", reset: "Zurücksetzen",
  },
  viewer: {
    title: "Interaktiver Betrachter: {organ}",
    canvas: "Interaktives anatomisches 3D-Modell. Ziehen zum Drehen, Scrollen zum Zoomen, auf einen Punkt klicken, um die Struktur zu lesen.",
    tip: "Tipp", tipDrag: "Ziehen zum Drehen", tipScroll: "Scrollen zum Zoomen",
    tipClick: "Auf einen Punkt klicken für mehr",
    loading: "{organ} wird vorbereitet", autoRotate: "Automatisch drehen",
    caption: "3D-Präparat · Punkt anklicken", structures: "Strukturen dieses Präparats",
  },
  info: {
    kicker: "{organ}", keyFacts: "Eckdaten", size: "Größe", weight: "Gewicht", daily: "Täglich",
    location: "Lage", bloodSupply: "Blutversorgung", function: "Funktion",
    medical: "Medizinische Bedeutung", didYouKnow: "Wusstest du", viewLesson: "Lektion ansehen",
    animate: "Animieren", quiz: "Quiz", compare: "Vergleichen",
  },
  compare: {
    title: "Organvergleich", comparing: "Im Vergleich", reference: "Referenz",
    primaryRole: "Hauptaufgabe", scale: "Maßstab", vs: "vs.", close: "Vergleich schließen",
  },
  cards: {
    resources: "Lernmaterial: {organ}",
    microscopic: "Mikroskopische Ansicht", compareOrgans: "Organe vergleichen", functionAnimation: "Funktionsanimation",
    clinicalNotes: "Klinische Notizen", whereItWorks: "Wo es wirkt", commonConditions: "Häufige Erkrankungen",
    exploreTissue: "Gewebe erkunden", openComparison: "Vergleich öffnen", playAnimation: "Animation abspielen",
    seeAll: "Alle ansehen", seeSystem: "System ansehen",
    playAria: "Funktionsanimation abspielen: {organ}", systemAria: "Sehen, wo {organ} im Körper liegt",
  },
  quiz: {
    start: "Beschriftungsquiz starten", find: "Finde", progress: "{current} von {total}",
    correct: "Richtig", wrong: "Nicht ganz", reveal: "Das ist: {label}", answer: "{label} ist grün markiert",
    done: "Quiz beendet", score: "{score} von {total} richtig", retry: "Nochmal",
    exit: "Quiz verlassen", hint: "Klicke den passenden Punkt am Modell an",
  },
  modal: {
    guided: "Geführte Entdeckung", close: "Schließen", continueExploring: "Weiter entdecken",
    quizTitle: "Kurzquiz: {organ}", motionTitle: "{organ} in Bewegung",
    bodyTitle: "{organ} im Körper", insideTitle: "Im Inneren: {organ}",
    quizPrompt: "Welche Aussage beschreibt dieses Organ ({organ}) am besten?",
    quizA: "Es erfüllt eine spezialisierte Aufgabe im Erhalt des Körpers",
    quizB: "Es arbeitet völlig unabhängig",
    quizC: "Es ist nur im Schlaf aktiv",
    lessonBody:
      "Folge den hervorgehobenen Strukturen, drehe das Präparat und verbinde Form mit Funktion. Dieser kurze Lernmoment soll ein tragfähiges mentales Modell aufbauen.",
    systemIntro: "{location}. Verfolge, wie {organ} mit dem übrigen Körper verbunden ist.",
    system: "System", primaryRole: "Hauptaufgabe", bloodSupply: "Blutversorgung",
  },
};
