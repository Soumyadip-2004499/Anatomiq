import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — تعلَّم التشريح كما يفعل الفنان",
    description:
      "استكشف أعضاءً ثلاثية الأبعاد بتفصيل طبي — القلب والدماغ والرئتان والكبد والكليتان والعين والأمعاء والبنكرياس والجلد — في مرسم تشريح تفاعلي.",
    ogTitle: "Anatomiq — تعلَّم التشريح كما يفعل الفنان",
    ogDescription: "تعلَّم التشريح كما يفعل الفنان عبر عيّنات ثلاثية الأبعاد غنية بالتفاصيل الطبية.",
    imageAlt: "عيّنة قلب تشريحية تطفو فوق قاعدة، إلى جانب شعار Anatomiq",
  },
  brand: { tagline: "تعلَّم التشريح كما يفعل الفنان", home: "الصفحة الرئيسية لـ Anatomiq" },
  nav: { explore: "استكشاف", systems: "الأجهزة", lessons: "الدروس", library: "المكتبة", notes: "الملاحظات" },
  search: { placeholder: "ابحث عن عضو أو موضوع…" },
  profile: { open: "فتح ملف المتعلّم" },
  language: { label: "اللغة", choose: "اختر لغة" },
  library: {
    title: "مكتبة الأعضاء", open: "فتح مكتبة الأعضاء", close: "إغلاق المكتبة",
    saved: "الأعضاء المحفوظة", viewAll: "عرض كل الأعضاء",
    quoteLine1: "التعلّم", quoteLine2: "فعلٌ من أفعال الفضول.", quoteSign: "واصل الاستكشاف!",
  },
  tools: {
    label: "أدوات العارض ثلاثي الأبعاد", rotate: "تدوير", zoom: "تكبير", isolate: "عزل",
    section: "مقطع عرضي", layers: "طبقات", compare: "مقارنة", reset: "إعادة ضبط",
  },
  viewer: {
    title: "العارض التفاعلي: {organ}",
    canvas: "نموذج تشريحي ثلاثي الأبعاد تفاعلي. اسحب للتدوير، ومرّر للتكبير، وانقر على نقطة لقراءة وصف تلك البنية.",
    tip: "تلميح", tipDrag: "اسحب للتدوير", tipScroll: "مرّر للتكبير",
    tipClick: "انقر على نقطة لمعرفة المزيد",
    loading: "جارٍ تحضير {organ}", autoRotate: "تدوير تلقائي",
    caption: "عيّنة ثلاثية الأبعاد · انقر على نقطة", structures: "بنى هذه العيّنة",
  },
  info: {
    kicker: "{organ}", keyFacts: "حقائق أساسية", size: "الحجم", weight: "الوزن", daily: "يوميًا",
    location: "الموضع", bloodSupply: "التروية الدموية", function: "الوظيفة",
    medical: "الأهمية الطبية", didYouKnow: "هل تعلم", viewLesson: "عرض الدرس",
    animate: "تحريك", quiz: "اختبار", compare: "مقارنة",
  },
  compare: {
    title: "مقارنة الأعضاء", comparing: "قيد المقارنة", reference: "مرجع",
    primaryRole: "الدور الأساسي", scale: "المقياس", vs: "مقابل", close: "إغلاق المقارنة",
  },
  cards: {
    resources: "مصادر تعلّم: {organ}",
    microscopic: "منظر مجهري", compareOrgans: "مقارنة الأعضاء", functionAnimation: "رسم متحرك للوظيفة",
    clinicalNotes: "ملاحظات سريرية", whereItWorks: "أين يعمل", commonConditions: "الأمراض الشائعة",
    exploreTissue: "استكشاف النسيج", openComparison: "فتح المقارنة", playAnimation: "تشغيل الرسم المتحرك",
    seeAll: "عرض الكل", seeSystem: "عرض الجهاز",
    playAria: "تشغيل الرسم المتحرك لوظيفة {organ}", systemAria: "شاهد موضع {organ} في الجسم",
  },
  quiz: {
    start: "ابدأ اختبار التسمية", find: "حدِّد", progress: "{current} من {total}",
    correct: "صحيح", wrong: "ليس تمامًا", reveal: "هذا هو {label}", answer: "{label} معلَّم باللون الأخضر",
    done: "انتهى الاختبار", score: "{score} من {total} صحيحة", retry: "حاول مرة أخرى",
    exit: "إنهاء الاختبار", hint: "انقر على النقطة المقابلة في النموذج",
  },
  modal: {
    guided: "اكتشاف موجَّه", close: "إغلاق", continueExploring: "واصل الاستكشاف",
    quizTitle: "اختبار سريع: {organ}", motionTitle: "{organ} في حركة",
    bodyTitle: "{organ} في الجسم", insideTitle: "داخل {organ}",
    quizPrompt: "أي العبارات يصف {organ} وصفًا أدق؟",
    quizA: "يؤدي دورًا متخصصًا في الحفاظ على الجسم",
    quizB: "يعمل باستقلال تام",
    quizC: "لا ينشط إلا أثناء النوم",
    lessonBody:
      "تتبّع البنى المميّزة، وأدر العيّنة، واربط الشكل بالوظيفة. هذه الوقفة الدراسية القصيرة مصمّمة لبناء نموذج ذهني راسخ.",
    systemIntro: "{location}. تتبّع كيف يتصل {organ} ببقية الجسم.",
    system: "الجهاز", primaryRole: "الدور الأساسي", bloodSupply: "التروية الدموية",
  },
};
