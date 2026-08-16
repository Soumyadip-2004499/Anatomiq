<<<<<<< HEAD
# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
=======
# Anatomiq
An interactive 3D human anatomy learning platform that lets users explore anatomical structures, view detailed organ information, and test their knowledge with randomized quizzes.

Users can explore 3D anatomical models, view detailed information about different organs and systems, search through the anatomy library, and test their knowledge using randomized quizzes.

---

## ✨ Features

- 🧠 Interactive 3D Human Anatomy Explorer
- 🫀 Explore individual anatomical structures
- 🔍 Search anatomy structures
- 📚 Organized anatomy library
- 👁️ Interactive 3D models
- 🖱️ Mouse and touch-based 3D interaction
- 📖 Detailed anatomical information
- 📝 Organ-specific quizzes
- 🎯 Randomized 5-question MCQ quizzes
- 🔀 Randomized questions and answer options
- 🏆 Perfect-score celebration
- 🌙 Dark Mode
- ☀️ Light Mode
- 🎨 Smooth Dark/Light theme transition
- 🌐 Multi-language support
- 📱 Responsive design for desktop, tablet, and mobile

---

## 🧬 How It Works

Anatomiq combines an interactive 3D viewer with an anatomy information system.

### 1. Select an Organ

Choose an anatomical structure from the Organ Library.

### 2. Explore the 3D Model

Interact with the 3D model using mouse or touch controls.

### 3. Learn

View detailed information about the selected anatomical structure.

### 4. Take a Quiz

Each supported organ has its own quiz containing five multiple-choice questions.

Questions and answer options are randomized for each attempt.

### 5. Test Your Knowledge

Complete the quiz and receive your score.

A special celebration animation appears when all questions are answered correctly.

---

## 🛠️ Tech Stack

- Next.js
- React
- TypeScript
- Three.js
- React Three Fiber
- Drei
- GSAP
- Tailwind CSS
- Lucide React
- next-themes

---

## 📂 Project Structure

```text
Anatomiq/
│
├── app/
│   ├── components/
│   │   ├── AnatomyApp
│   │   ├── OrganViewer
│   │   ├── QuizModal
│   │   ├── Header
│   │   ├── Footer
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── anatomy-data
│   │   ├── quiz-data
│   │   └── ...
│   │
│   ├── [locale]/
│   └── globals.css
│
├── public/
│   ├── models/
│   └── ...
│
├── package.json
├── README.md
├── .gitignore
└── ...
📄 License

This project is intended for educational and portfolio purposes.

© 2026 Soumyadip Chattopadhyay. Built with curiosity.
>>>>>>> d5d5bb66984cc3f996d7e4553a5ad2d03dc4ec90
