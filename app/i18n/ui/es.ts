import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — Aprende anatomía como un artista",
    description:
      "Explora órganos en 3D con detalle médico — corazón, cerebro, pulmones, hígado, riñones, ojo, intestino, páncreas y piel — en un taller de anatomía interactivo.",
    ogTitle: "Anatomiq — Aprende anatomía como un artista",
    ogDescription: "Aprende anatomía como un artista con especímenes 3D inmersivos y médicamente detallados.",
    imageAlt: "Un corazón anatómico flotando sobre un pedestal, junto al logotipo de Anatomiq",
  },
  brand: { tagline: "Aprende anatomía como un artista", home: "Inicio de Anatomiq" },
  nav: { explore: "Explorar", systems: "Sistemas", lessons: "Lecciones", library: "Biblioteca", notes: "Notas" },
  search: { placeholder: "Buscar órganos, temas…" },
  profile: { open: "Abrir perfil del estudiante" },
  language: { label: "Idioma", choose: "Elige un idioma" },
  library: {
    title: "Biblioteca de órganos", open: "Abrir biblioteca de órganos", close: "Cerrar biblioteca",
    saved: "Órganos guardados", viewAll: "Ver todos los órganos",
    quoteLine1: "Aprender es", quoteLine2: "un acto de curiosidad.", quoteSign: "¡Sigue explorando!",
  },
  tools: {
    label: "Herramientas del visor 3D", rotate: "Girar", zoom: "Zoom", isolate: "Aislar",
    section: "Corte transversal", layers: "Capas", compare: "Comparar", reset: "Restablecer",
  },
  viewer: {
    title: "Visor interactivo: {organ}",
    canvas: "Modelo anatómico 3D interactivo. Arrastra para girar, desplaza para hacer zoom y haz clic en un punto para leer sobre esa estructura.",
    tip: "Consejo", tipDrag: "Arrastra para girar", tipScroll: "Desplaza para hacer zoom",
    tipClick: "Haz clic en un punto para saber más",
    loading: "Preparando {organ}", autoRotate: "Giro automático",
    caption: "Espécimen 3D · haz clic en un punto", structures: "Estructuras de este espécimen",
  },
  info: {
    kicker: "{organ}", keyFacts: "Datos clave", size: "Tamaño", weight: "Peso", daily: "A diario",
    location: "Ubicación", bloodSupply: "Irrigación", function: "Función",
    medical: "Importancia médica", didYouKnow: "¿Sabías que…?", viewLesson: "Ver lección",
    animate: "Animar", quiz: "Cuestionario", compare: "Comparar",
  },
  compare: {
    title: "Comparación de órganos", comparing: "Comparando", reference: "Referencia",
    primaryRole: "Función principal", scale: "Escala", vs: "vs.", close: "Cerrar comparación",
  },
  cards: {
    resources: "Recursos de aprendizaje: {organ}",
    microscopic: "Vista microscópica", compareOrgans: "Comparar órganos", functionAnimation: "Animación funcional",
    clinicalNotes: "Notas clínicas", whereItWorks: "Dónde actúa", commonConditions: "Enfermedades frecuentes",
    exploreTissue: "Explorar el tejido", openComparison: "Abrir comparación", playAnimation: "Reproducir animación",
    seeAll: "Ver todas", seeSystem: "Ver el sistema",
    playAria: "Reproducir la animación funcional: {organ}", systemAria: "Ver dónde se sitúa {organ} en el cuerpo",
  },
  quiz: {
    start: "Empezar el cuestionario", find: "Encuentra", progress: "{current} de {total}",
    correct: "Correcto", wrong: "Casi", reveal: "Eso es: {label}", answer: "{label} está marcado en verde",
    done: "Cuestionario terminado", score: "{score} de {total} aciertos", retry: "Intentar de nuevo",
    exit: "Salir del cuestionario", hint: "Haz clic en el punto correspondiente del modelo",
  },
  modal: {
    guided: "Descubrimiento guiado", close: "Cerrar", continueExploring: "Seguir explorando",
    quizTitle: "Cuestionario rápido: {organ}", motionTitle: "{organ} en movimiento",
    bodyTitle: "{organ} en el cuerpo", insideTitle: "Por dentro: {organ}",
    quizPrompt: "¿Qué afirmación describe mejor este órgano ({organ})?",
    quizA: "Desempeña una función especializada en el mantenimiento del cuerpo",
    quizB: "Funciona de forma completamente independiente",
    quizC: "Solo está activo durante el sueño",
    lessonBody:
      "Sigue las estructuras destacadas, gira el espécimen y relaciona la forma con la función. Este breve momento de estudio busca construir un modelo mental duradero.",
    systemIntro: "{location}. Sigue cómo se conecta {organ} con el resto del cuerpo.",
    system: "Sistema", primaryRole: "Función principal", bloodSupply: "Irrigación",
  },
};
