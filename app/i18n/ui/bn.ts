import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq | থ্রিডি-তে মানব শারীরস্থান অন্বেষণ করুন",
    description:
      "ইন্টারেক্টিভ থ্রিডি মডেল, শারীরবৃত্তীয় তথ্য এবং র্যান্ডমাইজড ক্যুইজের মাধ্যমে মানব শারীরস্থান অন্বেষণ করুন।",
    ogTitle: "Anatomiq | থ্রিডি-তে মানব শারীরস্থান অন্বেষণ করুন",
    ogDescription: "ইন্টারেক্টিভ থ্রিডি মডেল, শারীরবৃত্তীয় তথ্য এবং র্যান্ডমাইজড ক্যুইজের মাধ্যমে মানব শারীরস্থান অন্বেষণ করুন।",
    imageAlt: "প্লিন্থের উপরে ভাসমান একটি শারীরবৃত্তীয় হৃদপিণ্ডের নমুনা, Anatomiq শব্দচিহ্নের পাশে",
  },
  brand: { tagline: "থ্রিডি-তে মানব শারীরস্থান অন্বেষণ করুন", home: "Anatomiq হোম" },
  nav: { explore: "অন্বেষণ করুন", systems: "তন্ত্র", lessons: "পাঠ", library: "লাইব্রেরি", notes: "নোট" },
  search: { placeholder: "অঙ্গ, বিষয় খুঁজুন…" },
  profile: { open: "শিক্ষার্থীর প্রোফাইল খুলুন" },
  language: { label: "ভাষা", choose: "একটি ভাষা নির্বাচন করুন" },
  library: {
    title: "অঙ্গ লাইব্রেরি", open: "অঙ্গ লাইব্রেরি খুলুন", close: "লাইব্রেরি বন্ধ করুন", saved: "সংরক্ষিত অঙ্গ",
    viewAll: "সব অঙ্গ দেখুন",
    quoteLine1: "শেখা হচ্ছে", quoteLine2: "কৌতূহলের একটি কাজ।", quoteSign: "অন্বেষণ চালিয়ে যান!",
  },
  tools: {
    label: "থ্রিডি ভিউয়ার টুলস", rotate: "ঘোরান", zoom: "জুম করুন", isolate: "আলাদা করুন",
    section: "প্রস্থচ্ছেদ", layers: "স্তর", compare: "তুলনা করুন", reset: "রিসেট করুন",
  },
  viewer: {
    title: "{organ} ইন্টারেক্টিভ ভিউয়ার",
    canvas: "ইন্টারেক্টিভ থ্রিডি অ্যানাটমি মডেল। ঘোরাতে ড্র্যাগ করুন, জুম করতে স্ক্রোল করুন এবং সেই কাঠামো সম্পর্কে পড়তে একটি বিন্দুতে ক্লিক করুন।",
    tip: "টিপ", tipDrag: "ঘোরাতে ড্র্যাগ করুন", tipScroll: "জুম করতে স্ক্রোল করুন", tipClick: "আরও জানতে একটি বিন্দুতে ক্লিক করুন",
    loading: "{organ} প্রস্তুত করা হচ্ছে", autoRotate: "অটো রোটেট",
    caption: "থ্রিডি নমুনা · অন্বেষণ করতে একটি বিন্দুতে ক্লিক করুন", structures: "এই নমুনায় কাঠামো",
  },
  info: {
    kicker: "{organ}", keyFacts: "মূল তথ্য", size: "আকার", weight: "ওজন", daily: "দৈনিক",
    location: "অবস্থান", bloodSupply: "রক্ত সরবরাহ", function: "কার্যকারিতা",
    medical: "চিকিৎসাগত গুরুত্ব", didYouKnow: "আপনি কি জানতেন", viewLesson: "পাঠ দেখুন",
    animate: "অ্যানিমেট করুন", quiz: "ক্যুইজ", compare: "তুলনা করুন",
  },
  compare: {
    title: "অঙ্গ তুলনা", comparing: "তুলনা করা হচ্ছে", reference: "রেফারেন্স",
    primaryRole: "প্রধান ভূমিকা", scale: "স্কেল", vs: "বনাম", close: "তুলনা বন্ধ করুন",
  },
  cards: {
    resources: "{organ} শেখার সম্পদ",
    microscopic: "মাইক্রোস্কোপিক দৃশ্য", compareOrgans: "অঙ্গ তুলনা করুন", functionAnimation: "ফাংশন অ্যানিমেশন",
    clinicalNotes: "ক্লিনিক্যাল নোট", whereItWorks: "যেখানে এটি কাজ করে", commonConditions: "সাধারণ অবস্থা",
    exploreTissue: "টিস্যু অন্বেষণ করুন", openComparison: "তুলনা খুলুন", playAnimation: "অ্যানিমেশন প্লে করুন",
    seeAll: "সব দেখুন", seeSystem: "তন্ত্র দেখুন",
    playAria: "{organ} ফাংশন অ্যানিমেশন প্লে করুন", systemAria: "দেখুন শরীরে {organ} কোথায় অবস্থিত",
  },
  quiz: {
    start: "লেবেলিং ক্যুইজ শুরু করুন", find: "খুঁজুন:", progress: "{total}-এর মধ্যে {current}",
    correct: "সঠিক", wrong: "সঠিক নয়", reveal: "ওটি হলো {label}", answer: "{label} সবুজে চিহ্নিত করা হয়েছে",
    done: "ক্যুইজ সম্পন্ন", score: "{total}-এর মধ্যে {score} সঠিক", retry: "আবার চেষ্টা করুন",
    exit: "ক্যুইজ থেকে প্রস্থান করুন", hint: "মডেলে মিল থাকা বিন্দুতে ক্লিক করুন",
  },
  modal: {
    guided: "গাইডেড ডিসকভারি", close: "বন্ধ করুন", continueExploring: "অন্বেষণ চালিয়ে যান",
    quizTitle: "{organ} ক্যুইজ", motionTitle: "চলন্ত অবস্থায় {organ}",
    bodyTitle: "শরীরে {organ}", insideTitle: "{organ}-এর ভেতরে",
    quizPrompt: "কোন বিবৃতিটি {organ}-কে সবচেয়ে ভালোভাবে বর্ণনা করে?",
    quizA: "এটি শরীর বজায় রাখতে একটি বিশেষ ভূমিকা পালন করে",
    quizB: "এটি সম্পূর্ণ স্বাধীনভাবে কাজ করে",
    quizC: "এটি কেবল ঘুমের সময় সক্রিয় থাকে",
    lessonBody:
      "আলোকিত কাঠামোগুলি অনুসরণ করুন, নমুনাটি ঘোরান এবং কাঠামোর সাথে কাজের সম্পর্ক স্থাপন করুন। এই সংক্ষিপ্ত অধ্যয়নের মুহূর্তটি একটি টেকসই মানসিক মডেল তৈরির জন্য ডিজাইন করা হয়েছে।",
    systemIntro: "{location}. শরীর বাকি অংশের সাথে {organ} কীভাবে যুক্ত তা ট্রেস করুন।",
    system: "তন্ত্র", primaryRole: "প্রধান ভূমিকা", bloodSupply: "রক্ত সরবরাহ",
  },
};
