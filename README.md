# Anatomiq

### Interactive 3D Human Anatomy Explorer

Anatomiq is a modern, interactive 3D human anatomy exploration platform designed to make learning human anatomy more engaging and intuitive.

The application allows users to explore anatomical structures through interactive 3D models, view medical information about different organs, and test their knowledge using organ-specific randomized quizzes.

The project combines 3D visualization, modern web technologies, responsive design, and interactive learning into a single educational experience.

---

## ✨ Features

### 🧬 Interactive 3D Anatomy

Explore human anatomical structures using interactive 3D models.

- Interactive 3D organ visualization
- Rotate models naturally using mouse or touch
- Zoom using scroll or touch gestures
- Click anatomical hotspots to explore specific structures
- Medical names and descriptions for anatomical parts
- Smooth and responsive 3D rendering

---

### 🫀 Organ Library

Explore the available anatomical structures through an organized organ library.

The library includes structures such as:

- Heart
- Brain
- Lungs
- Liver
- Kidneys
- Pancreas
- Intestine
- Eye
- Skin

Users can select an organ to load its corresponding 3D model and medical information.

---

### 🔍 Organ Search

Quickly find anatomical structures using the built-in search functionality.

The search system allows users to filter the available anatomy library and quickly locate the structure they want to explore.

---

### 📚 Anatomical Information

Each organ provides educational information including:

- Medical name
- Description
- Anatomical structures
- Important facts
- Educational information
- Interactive hotspot details

This makes Anatomiq useful not only for visualization but also for quick anatomy revision.

---

### 🧠 Interactive Quizzes

Each organ has its own quiz system.

Users can select **Take Quiz** from the organ library and answer a randomized set of questions.

Features include:

- 5 questions per quiz
- Organ-specific questions
- Randomized question selection
- Randomized answer options
- Correct/incorrect answer feedback
- Educational explanations
- Score calculation
- Perfect-score celebration

Every quiz attempt can provide a different combination of questions and options, making the learning experience more interactive.

---

### 🎉 Perfect Score Celebration

Achieving a perfect score triggers a visual celebration.

When all quiz questions are answered correctly, colorful paper/confetti particles are released from the top corners of the screen and fall across the viewport.

The celebration is temporary and automatically disappears after a few seconds.

---

### 🌗 Dark & Light Mode

Anatomiq supports both:

- Light Mode
- Dark Mode

The theme system is persistent, allowing returning users to retain their selected theme.

New users start with Light Mode by default.

The interface also includes a smooth theme transition originating from the theme toggle.

---

### 📱 Responsive Design

Anatomiq is designed to work across different screen sizes.

Supported environments include:

- Desktop
- Laptop
- Tablet
- Mobile phones

The mobile experience includes responsive organ navigation, 3D visualization, quizzes, and theme controls.

---

### 🎨 Modern Medical-Atelier Design

The visual language of Anatomiq combines modern interface design with an editorial medical aesthetic.

Typography uses:

- **Cormorant Garamond** for large headings, organ titles, and display typography.
- **DM Sans** for body text, interface elements, buttons, labels, and supporting information.

This combination creates a balance between an elegant medical reference aesthetic and a highly readable modern interface.

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### 3D & Animation

- Three.js
- React Three Fiber
- React Three Drei
- GSAP

### UI & Icons

- Lucide React

### Theme

- next-themes

### Fonts

- Cormorant Garamond
- DM Sans

### Deployment

- GitHub
- Vercel

---

© 2026 Soumyadip Chattopadhyay. Built with curiosity.

## 🏗️ Project Structure

```text
Anatomiq/
│
├── app/
│   ├── components/
│   │   ├── AnatomyApp.tsx
│   │   ├── OrganViewer.tsx
│   │   ├── QuizModal.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── lib/
│   │   ├── anatomy-data.ts
│   │   └── quiz-data.ts
│   │
│   ├── i18n/
│   │
│   ├── globals.css
│   └── ...
│
├── public/
│   └── models/
│       ├── brain.glb
│       ├── heart.glb
│       ├── lungs.glb
│       ├── liver.glb
│       ├── kidneys.glb
│       ├── pancreas.glb
│       ├── intestine.glb
│       ├── eye.glb
│       └── skin.glb
│
├── README.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── ...
