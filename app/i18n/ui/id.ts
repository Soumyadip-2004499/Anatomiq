import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomiq — Belajar anatomi seperti seorang seniman",
    description:
      "Jelajahi organ 3D dengan detail medis — jantung, otak, paru-paru, hati, ginjal, mata, usus, pankreas, dan kulit — dalam sanggar anatomi interaktif.",
    ogTitle: "Anatomiq — Belajar anatomi seperti seorang seniman",
    ogDescription: "Pelajari anatomi seperti seorang seniman melalui spesimen 3D yang imersif dan detail secara medis.",
    imageAlt: "Spesimen jantung anatomis melayang di atas alas, di samping logo Anatomiq",
  },
  brand: { tagline: "Belajar anatomi seperti seorang seniman", home: "Beranda Anatomiq" },
  nav: { explore: "Jelajahi", systems: "Sistem", lessons: "Pelajaran", library: "Pustaka", notes: "Catatan" },
  search: { placeholder: "Cari organ atau topik…" },
  profile: { open: "Buka profil pembelajar" },
  language: { label: "Bahasa", choose: "Pilih bahasa" },
  library: {
    title: "Pustaka organ", open: "Buka pustaka organ", close: "Tutup pustaka",
    saved: "Organ tersimpan", viewAll: "Lihat semua organ",
    quoteLine1: "Belajar adalah", quoteLine2: "sebuah tindakan rasa ingin tahu.", quoteSign: "Teruslah menjelajah!",
  },
  tools: {
    label: "Alat penampil 3D", rotate: "Putar", zoom: "Perbesar", isolate: "Isolasi",
    section: "Potongan melintang", layers: "Lapisan", compare: "Bandingkan", reset: "Atur ulang",
  },
  viewer: {
    title: "Penampil interaktif: {organ}",
    canvas: "Model anatomi 3D interaktif. Seret untuk memutar, gulir untuk memperbesar, dan klik titik untuk membaca tentang struktur tersebut.",
    tip: "Tips", tipDrag: "Seret untuk memutar", tipScroll: "Gulir untuk memperbesar",
    tipClick: "Klik titik untuk tahu lebih lanjut",
    loading: "Menyiapkan {organ}", autoRotate: "Putar otomatis",
    caption: "Spesimen 3D · klik sebuah titik", structures: "Struktur pada spesimen ini",
  },
  info: {
    kicker: "{organ}", keyFacts: "Fakta utama", size: "Ukuran", weight: "Berat", daily: "Setiap hari",
    location: "Letak", bloodSupply: "Pasokan darah", function: "Fungsi",
    medical: "Arti klinis", didYouKnow: "Tahukah kamu", viewLesson: "Lihat pelajaran",
    animate: "Animasi", quiz: "Kuis", compare: "Bandingkan",
  },
  compare: {
    title: "Perbandingan organ", comparing: "Membandingkan", reference: "Acuan",
    primaryRole: "Peran utama", scale: "Skala", vs: "vs.", close: "Tutup perbandingan",
  },
  cards: {
    resources: "Sumber belajar: {organ}",
    microscopic: "Tampilan mikroskopis", compareOrgans: "Bandingkan organ", functionAnimation: "Animasi fungsi",
    clinicalNotes: "Catatan klinis", whereItWorks: "Tempat bekerjanya", commonConditions: "Penyakit umum",
    exploreTissue: "Jelajahi jaringan", openComparison: "Buka perbandingan", playAnimation: "Putar animasi",
    seeAll: "Lihat semua", seeSystem: "Lihat sistemnya",
    playAria: "Putar animasi fungsi: {organ}", systemAria: "Lihat letak {organ} di dalam tubuh",
  },
  quiz: {
    start: "Mulai kuis penamaan", find: "Temukan", progress: "{current} dari {total}",
    correct: "Benar", wrong: "Belum tepat", reveal: "Itu adalah {label}", answer: "{label} ditandai dengan warna hijau",
    done: "Kuis selesai", score: "{score} dari {total} benar", retry: "Coba lagi",
    exit: "Keluar dari kuis", hint: "Klik titik yang sesuai pada model",
  },
  modal: {
    guided: "Penjelajahan terpandu", close: "Tutup", continueExploring: "Lanjutkan menjelajah",
    quizTitle: "Kuis singkat: {organ}", motionTitle: "{organ} dalam gerak",
    bodyTitle: "{organ} di dalam tubuh", insideTitle: "Di dalam {organ}",
    quizPrompt: "Pernyataan mana yang paling tepat menggambarkan organ ini ({organ})?",
    quizA: "Ia menjalankan peran khusus dalam menjaga tubuh",
    quizB: "Ia bekerja sepenuhnya sendiri",
    quizC: "Ia hanya aktif saat tidur",
    lessonBody:
      "Ikuti struktur yang disorot, putar spesimennya, dan hubungkan bentuk dengan fungsi. Sesi singkat ini dirancang untuk membangun pemahaman yang bertahan lama.",
    systemIntro: "{location}. Telusuri bagaimana {organ} terhubung dengan bagian tubuh lainnya.",
    system: "Sistem", primaryRole: "Peran utama", bloodSupply: "Pasokan darah",
  },
};
