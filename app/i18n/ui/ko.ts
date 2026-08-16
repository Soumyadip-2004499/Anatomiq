import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — 예술가처럼 배우는 해부학",
    description:
      "심장, 뇌, 폐, 간, 콩팥, 눈, 장, 이자, 피부까지 — 의학적으로 정밀한 3D 장기를 인터랙티브 해부 아틀리에에서 살펴보세요.",
    ogTitle: "Anatomiq — 예술가처럼 배우는 해부학",
    ogDescription: "몰입감 있고 의학적으로 정밀한 3D 표본으로 해부학을 배웁니다.",
    imageAlt: "받침대 위에 떠 있는 해부학적 심장 표본과 Anatomiq 로고",
  },
  brand: { tagline: "예술가처럼 배우는 해부학", home: "Anatomiq 홈" },
  nav: { explore: "탐색", systems: "계통", lessons: "수업", library: "라이브러리", notes: "노트" },
  search: { placeholder: "장기나 주제 검색…" },
  profile: { open: "학습자 프로필 열기" },
  language: { label: "언어", choose: "언어 선택" },
  library: {
    title: "장기 라이브러리", open: "장기 라이브러리 열기", close: "라이브러리 닫기",
    saved: "저장한 장기", viewAll: "모든 장기 보기",
    quoteLine1: "배움은", quoteLine2: "호기심의 행위입니다.", quoteSign: "계속 탐색해 보세요!",
  },
  tools: {
    label: "3D 뷰어 도구", rotate: "회전", zoom: "확대", isolate: "단독 보기",
    section: "단면", layers: "레이어", compare: "비교", reset: "초기화",
  },
  viewer: {
    title: "{organ} 인터랙티브 뷰어",
    canvas: "조작 가능한 3D 해부 모델입니다. 끌어서 회전하고, 스크롤해 확대하며, 점을 클릭하면 해당 구조 설명을 볼 수 있습니다.",
    tip: "도움말", tipDrag: "끌어서 회전", tipScroll: "스크롤해 확대",
    tipClick: "점을 클릭해 자세히 보기",
    loading: "{organ} 준비 중", autoRotate: "자동 회전",
    caption: "3D 표본 · 점을 클릭하세요", structures: "이 표본의 구조",
  },
  info: {
    kicker: "{organ}", keyFacts: "핵심 정보", size: "크기", weight: "무게", daily: "하루",
    location: "위치", bloodSupply: "혈액 공급", function: "기능",
    medical: "의학적 의의", didYouKnow: "알고 계셨나요", viewLesson: "수업 보기",
    animate: "애니메이션", quiz: "퀴즈", compare: "비교",
  },
  compare: {
    title: "장기 비교", comparing: "비교 중", reference: "기준",
    primaryRole: "주요 역할", scale: "규모", vs: "대", close: "비교 닫기",
  },
  cards: {
    resources: "{organ} 학습 자료",
    microscopic: "현미경 소견", compareOrgans: "장기 비교", functionAnimation: "기능 애니메이션",
    clinicalNotes: "임상 노트", whereItWorks: "작용하는 곳", commonConditions: "흔한 질환",
    exploreTissue: "조직 살펴보기", openComparison: "비교 열기", playAnimation: "애니메이션 재생",
    seeAll: "전체 보기", seeSystem: "계통 보기",
    playAria: "{organ} 기능 애니메이션 재생", systemAria: "몸에서 {organ}의 위치 보기",
  },
  quiz: {
    start: "이름 맞히기 퀴즈 시작", find: "찾아보세요:", progress: "{total}문제 중 {current}번",
    correct: "정답", wrong: "아쉬워요", reveal: "그것은 {label}입니다", answer: "{label}은(는) 초록색으로 표시됩니다",
    done: "퀴즈 완료", score: "{total}문제 중 {score}문제 정답", retry: "다시 풀기",
    exit: "퀴즈 끝내기", hint: "모델에서 해당하는 점을 클릭하세요",
  },
  modal: {
    guided: "안내 탐색", close: "닫기", continueExploring: "계속 탐색하기",
    quizTitle: "{organ} 빠른 퀴즈", motionTitle: "움직이는 {organ}",
    bodyTitle: "몸 속의 {organ}", insideTitle: "{organ} 속으로",
    quizPrompt: "{organ}을(를) 가장 잘 설명하는 것은 무엇일까요?",
    quizA: "몸을 유지하는 데 특화된 역할을 맡고 있다",
    quizB: "완전히 독립적으로 작동한다",
    quizC: "잠자는 동안에만 활동한다",
    lessonBody:
      "강조된 구조를 따라가고 표본을 돌려 보며 형태와 기능을 연결해 보세요. 이 짧은 학습은 오래 남는 이해를 쌓기 위한 것입니다.",
    systemIntro: "{location}. {organ}이(가) 몸의 나머지 부분과 어떻게 이어지는지 따라가 보세요.",
    system: "계통", primaryRole: "주요 역할", bloodSupply: "혈액 공급",
  },
};
