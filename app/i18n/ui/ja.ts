import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — 芸術家のように解剖学を学ぶ",
    description:
      "心臓・脳・肺・肝臓・腎臓・眼・腸・膵臓・皮膚——医学的に精緻な 3D 標本を、インタラクティブな解剖アトリエで探索できます。",
    ogTitle: "Anatomiq — 芸術家のように解剖学を学ぶ",
    ogDescription: "没入感のある、医学的に精緻な 3D 標本で解剖学を学びましょう。",
    imageAlt: "台座の上に浮かぶ解剖学的な心臓標本と、Anatomiq のロゴ",
  },
  brand: { tagline: "芸術家のように解剖学を学ぶ", home: "Anatomiq ホーム" },
  nav: { explore: "探索", systems: "系統", lessons: "レッスン", library: "ライブラリ", notes: "ノート" },
  search: { placeholder: "臓器やトピックを検索…" },
  profile: { open: "学習者プロフィールを開く" },
  language: { label: "言語", choose: "言語を選択" },
  library: {
    title: "臓器ライブラリ", open: "臓器ライブラリを開く", close: "ライブラリを閉じる",
    saved: "保存した臓器", viewAll: "すべての臓器を見る",
    quoteLine1: "学びとは", quoteLine2: "好奇心のいとなみ。", quoteSign: "探索を続けよう！",
  },
  tools: {
    label: "3D ビューアのツール", rotate: "回転", zoom: "ズーム", isolate: "単独表示",
    section: "断面", layers: "レイヤー", compare: "比較", reset: "リセット",
  },
  viewer: {
    title: "{organ}のインタラクティブビューア",
    canvas: "操作できる 3D 解剖モデルです。ドラッグで回転、スクロールでズーム、点をクリックするとその構造の説明が読めます。",
    tip: "ヒント", tipDrag: "ドラッグで回転", tipScroll: "スクロールでズーム",
    tipClick: "点をクリックして詳しく",
    loading: "{organ}を準備中", autoRotate: "自動回転",
    caption: "3D 標本 · 点をクリック", structures: "この標本の構造",
  },
  info: {
    kicker: "{organ}", keyFacts: "基本データ", size: "大きさ", weight: "重さ", daily: "1日あたり",
    location: "位置", bloodSupply: "血液供給", function: "はたらき",
    medical: "医学的意義", didYouKnow: "豆知識", viewLesson: "レッスンを見る",
    animate: "アニメーション", quiz: "クイズ", compare: "比較",
  },
  compare: {
    title: "臓器の比較", comparing: "比較中", reference: "基準",
    primaryRole: "おもな役割", scale: "スケール", vs: "対", close: "比較を閉じる",
  },
  cards: {
    resources: "{organ}の学習リソース",
    microscopic: "顕微鏡像", compareOrgans: "臓器を比較", functionAnimation: "はたらきのアニメーション",
    clinicalNotes: "臨床メモ", whereItWorks: "はたらく場所", commonConditions: "おもな疾患",
    exploreTissue: "組織を見る", openComparison: "比較を開く", playAnimation: "アニメーションを再生",
    seeAll: "すべて見る", seeSystem: "この系統を見る",
    playAria: "{organ}のはたらきのアニメーションを再生", systemAria: "{organ}が体のどこにあるかを見る",
  },
  quiz: {
    start: "ラベルクイズを始める", find: "探してください：", progress: "{total} 問中 {current} 問目",
    correct: "正解", wrong: "おしい", reveal: "それは{label}です", answer: "{label}は緑で示されています",
    done: "クイズ終了", score: "{total} 問中 {score} 問正解", retry: "もう一度",
    exit: "クイズを終える", hint: "モデル上の該当する点をクリック",
  },
  modal: {
    guided: "ガイド付きの発見", close: "閉じる", continueExploring: "探索を続ける",
    quizTitle: "{organ}のミニクイズ", motionTitle: "動く{organ}",
    bodyTitle: "体のなかの{organ}", insideTitle: "{organ}の内部",
    quizPrompt: "{organ}を最もよく説明しているのはどれでしょう？",
    quizA: "体を保つうえで特化した役割を担っている",
    quizB: "完全に独立して働いている",
    quizC: "睡眠中だけ活動している",
    lessonBody:
      "強調された構造をたどり、標本を回転させて、かたちとはたらきを結びつけましょう。この短い学びは、長く残る理解を育てるためのものです。",
    systemIntro: "{location}。{organ}が体のほかの部分とどうつながるかをたどってみましょう。",
    system: "系統", primaryRole: "おもな役割", bloodSupply: "血液供給",
  },
};
