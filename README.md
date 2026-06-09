# Tsindaprovisoire

Kinyarwanda driving-license quiz app built from `questions.pdf`.

**Live:** [https://tsindaprovisoire.vercel.app](https://tsindaprovisoire.vercel.app)

## Project structure

- `quiz-app/` — Next.js quiz application (quiz, blitz, and study modes)
- `questions.pdf` — Source question bank (431 questions)

## Getting started

```bash
cd quiz-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Image extraction

Road-sign and scenario images are extracted from the PDF:

```bash
cd quiz-app
npm run extract-images
npm run sync-has-image
```
