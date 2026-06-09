# Tsindaprovisoire

**Menya amategeko y'umuhanda y'u Rwanda ukoresheje uburyo bw'imikino.**

An interactive Kinyarwanda driving-license quiz built from the official question bank in `questions.pdf`. Practice road rules, traffic signs, and safe-driving scenarios with a game-style UI — on web or mobile.

[![Live app](https://img.shields.io/badge/Live-tsindaprovisoire.vercel.app-00d4ff?style=for-the-badge)](https://tsindaprovisoire.vercel.app)

## Features

- **430 questions** parsed from the Rwanda Highway Code exam PDF
- **4 categories** — vehicle rules, traffic laws, safe driving, and road signs
- **3 game modes**
  - **Quiz** — 20 questions, 30 seconds each, lives and streak scoring
  - **Blitz** — faster pace (15s per question) for quick revision
  - **Study** — browse, search, filter, and reveal answers at your own pace
- **128 questions with images** — road signs and driving scenarios extracted from the PDF
- **Bilingual UI** — Kinyarwanda questions with a gaming-inspired interface

## Live demo

**https://tsindaprovisoire.vercel.app**

## Tech stack

| Layer     | Tools                                          |
| --------- | ---------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language  | TypeScript                                     |
| Styling   | Tailwind CSS v4                                |
| Animation | Framer Motion                                  |
| Icons     | Lucide React                                   |
| Hosting   | [Vercel](https://vercel.com)                   |

## Project structure

```
tsindaprovisoire/
├── questions.pdf              # Source question bank (Kinyarwanda)
└── quiz-app/
    ├── app/                   # Pages: landing, /quiz, /study
    ├── components/            # QuestionImage, option grids, UI
    ├── data/
    │   ├── questions.ts       # Structured question data
    │   └── question-images.json
    ├── public/images/questions/  # Extracted sign & scenario images
    └── scripts/
        ├── extract_images.py  # PDF → image mapping
        └── sync_has_image.py  # Sync hasImage flags with JSON map
```

## Getting started

**Requirements:** Node.js 20+, npm

```bash
git clone https://github.com/SethLoveByiringiro/tsindaprovisoire.git
cd tsindaprovisoire/quiz-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Image extraction

Road-sign and scenario images are extracted from `questions.pdf` using Python (PyMuPDF):

```bash
pip install pymupdf
cd quiz-app
npm run extract-images
npm run sync-has-image
```

This updates `public/images/questions/` and `data/question-images.json`.

## Deployment

The app is deployed on Vercel as **tsindaprovisoire**.

When connecting the GitHub repo in Vercel, set **Root Directory** to `quiz-app`.

```bash
cd quiz-app
npx vercel --prod
```

## Categories

| Icon | Kinyarwanda             | Topic                                         |
| ---- | ----------------------- | --------------------------------------------- |
| 🚗   | Ingingo z'Ibinyabiziga  | Vehicle rules — lights, brakes, weight limits |
| 🚦   | Amategeko y'Umuhanda    | Traffic laws — speed, parking, overtaking     |
| 🧠   | Ubumenyi bwo Gutwara    | Safe driving — weather, accidents, behaviour  |
| 🪧   | Ibimenyetso by'Umuhanda | Road signs — prohibitions, warnings, markings |

## License

Private project. Question content is based on the Rwanda driving-license exam material.
