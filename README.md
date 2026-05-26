![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

<h1>albarpambagio/cv-website — Data Analyst CV <a href="https://albar-cv.pages.dev"><img src="https://img.shields.io/badge/deploy-live-2563eb?style=flat-square" height="24" align="right" alt="Live site"></a></h1>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?logo=cloudflare-pages)](https://pages.cloudflare.com/)

Personal CV/resume website — fork of [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv). Renders a minimalist CV with print-friendly layout. Deployed on Cloudflare Pages via GitHub Actions.

## getting started

```bash
git clone https://github.com/albarpambagio/cv-website.git
cd cv-website
npm install
npm run dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

## scripts

```bash
npm run dev          # start development server
npm run build        # build for production (static export)
npm run start        # start production server
npm run check        # biome lint + format check
npm run check:fix    # biome lint + format with auto-fix
npm run generate:cv  # regenerate cv.yaml + public/cv.pdf via RenderCV
```

## deploy

```bash
npm run build
npx wrangler pages deploy out --branch main
```

Every push to `main` triggers automatic deployment via `.github/workflows/deploy.yml`.

## project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

all resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

styling uses tailwind css — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## PDF

Run `npm run generate:cv` to regenerate the PDF from resume data via RenderCV. Output at `public/cv.pdf`.

## license

MIT
