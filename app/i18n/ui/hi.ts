import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — शरीर रचना, एक कलाकार की तरह",
    description:
      "हृदय, मस्तिष्क, फेफड़े, यकृत, गुर्दे, नेत्र, आंत, अग्न्याशय और त्वचा — चिकित्सकीय रूप से विस्तृत 3D अंगों को एक संवादात्मक शरीर-रचना कक्ष में देखें।",
    ogTitle: "Anatomiq — शरीर रचना, एक कलाकार की तरह",
    ogDescription: "गहन, चिकित्सकीय रूप से विस्तृत 3D नमूनों के साथ शरीर रचना सीखें।",
    imageAlt: "एक चौकी पर तैरता शारीरिक हृदय, Anatomiq के नाम-चिह्न के साथ",
  },
  brand: { tagline: "शरीर रचना, एक कलाकार की तरह", home: "Anatomiq मुखपृष्ठ" },
  nav: { explore: "अन्वेषण", systems: "तंत्र", lessons: "पाठ", library: "संग्रह", notes: "टिप्पणियाँ" },
  search: { placeholder: "अंग या विषय खोजें…" },
  profile: { open: "शिक्षार्थी प्रोफ़ाइल खोलें" },
  language: { label: "भाषा", choose: "भाषा चुनें" },
  library: {
    title: "अंग संग्रह", open: "अंग संग्रह खोलें", close: "संग्रह बंद करें",
    saved: "सहेजे गए अंग", viewAll: "सभी अंग देखें",
    quoteLine1: "सीखना", quoteLine2: "जिज्ञासा का कार्य है।", quoteSign: "खोजते रहिए!",
  },
  tools: {
    label: "3D दर्शक उपकरण", rotate: "घुमाएँ", zoom: "ज़ूम", isolate: "अलग करें",
    section: "अनुप्रस्थ काट", layers: "परतें", compare: "तुलना", reset: "रीसेट",
  },
  viewer: {
    title: "{organ} — संवादात्मक दर्शक",
    canvas: "संवादात्मक 3D शरीर-रचना मॉडल। घुमाने के लिए खींचें, ज़ूम के लिए स्क्रॉल करें, और किसी संरचना के बारे में पढ़ने के लिए बिंदु पर क्लिक करें।",
    tip: "सुझाव", tipDrag: "घुमाने के लिए खींचें", tipScroll: "ज़ूम के लिए स्क्रॉल करें",
    tipClick: "अधिक जानने के लिए बिंदु पर क्लिक करें",
    loading: "{organ} तैयार हो रहा है", autoRotate: "स्वतः घूर्णन",
    caption: "3D नमूना · बिंदु पर क्लिक करें", structures: "इस नमूने की संरचनाएँ",
  },
  info: {
    kicker: "{organ}", keyFacts: "मुख्य तथ्य", size: "आकार", weight: "भार", daily: "प्रतिदिन",
    location: "स्थिति", bloodSupply: "रक्त आपूर्ति", function: "कार्य",
    medical: "चिकित्सकीय महत्व", didYouKnow: "क्या आप जानते हैं", viewLesson: "पाठ देखें",
    animate: "एनिमेशन", quiz: "प्रश्नोत्तरी", compare: "तुलना",
  },
  compare: {
    title: "अंगों की तुलना", comparing: "तुलना", reference: "संदर्भ",
    primaryRole: "मुख्य भूमिका", scale: "मात्रा", vs: "बनाम", close: "तुलना बंद करें",
  },
  cards: {
    resources: "{organ} — अध्ययन सामग्री",
    microscopic: "सूक्ष्मदर्शी दृश्य", compareOrgans: "अंगों की तुलना", functionAnimation: "कार्य एनिमेशन",
    clinicalNotes: "नैदानिक टिप्पणियाँ", whereItWorks: "कहाँ कार्य करता है", commonConditions: "सामान्य रोग",
    exploreTissue: "ऊतक देखें", openComparison: "तुलना खोलें", playAnimation: "एनिमेशन चलाएँ",
    seeAll: "सभी देखें", seeSystem: "तंत्र देखें",
    playAria: "{organ} का कार्य एनिमेशन चलाएँ", systemAria: "शरीर में {organ} की स्थिति देखें",
  },
  quiz: {
    start: "पहचान प्रश्नोत्तरी शुरू करें", find: "खोजें", progress: "{total} में से {current}",
    correct: "सही", wrong: "बिलकुल नहीं", reveal: "वह है {label}", answer: "{label} हरे रंग में चिह्नित है",
    done: "प्रश्नोत्तरी पूर्ण", score: "{total} में से {score} सही", retry: "फिर से प्रयास करें",
    exit: "प्रश्नोत्तरी छोड़ें", hint: "मॉडल पर संबंधित बिंदु क्लिक करें",
  },
  modal: {
    guided: "निर्देशित खोज", close: "बंद करें", continueExploring: "खोज जारी रखें",
    quizTitle: "{organ} — त्वरित प्रश्नोत्तरी", motionTitle: "{organ} गति में",
    bodyTitle: "शरीर में {organ}", insideTitle: "{organ} के भीतर",
    quizPrompt: "{organ} का सर्वोत्तम वर्णन कौन-सा कथन करता है?",
    quizA: "यह शरीर को बनाए रखने में एक विशिष्ट भूमिका निभाता है",
    quizB: "यह पूर्णतः स्वतंत्र रूप से कार्य करता है",
    quizC: "यह केवल नींद के दौरान सक्रिय रहता है",
    lessonBody:
      "चिह्नित संरचनाओं का अनुसरण करें, नमूने को घुमाएँ और रूप को कार्य से जोड़ें। यह संक्षिप्त अध्ययन एक स्थायी मानसिक प्रतिरूप बनाने के लिए है।",
    systemIntro: "{location}। देखें कि {organ} शेष शरीर से किस प्रकार जुड़ता है।",
    system: "तंत्र", primaryRole: "मुख्य भूमिका", bloodSupply: "रक्त आपूर्ति",
  },
};
