# CV Website — Agent Context

**Project:** Personal CV/resume website — fork of [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv).
**Owner:** Albar Pambagio Arioseto — data analyst portfolio.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** shadcn/ui (Radix + Tailwind CSS)
- **Language:** TypeScript
- **Icons:** Custom SVG components + Lucide React (Globe, Mail, Phone)
- **Linting:** Biome
- **Deployment:** Cloudflare Pages (active — albar-cv.pages.dev)
- **Styling:** Tailwind CSS v3 + CSS variables in `globals.css`

---

## File Map

| Path | Purpose | Edit? |
|---|---|---|
| `src/data/resume-data.ts` | All CV content — single source of truth | ✅ Yes — primary file |
| `src/app/globals.css` | Theme variables (accent, fonts) | ✅ For color/font tweaks |
| `src/app/layout.tsx` | Page title, meta tags, root layout | ✅ Update metadata only |
| `src/app/page.tsx` | Section ordering and layout structure | ⚠️ Only if reordering sections |
| `src/app/components/header.tsx` | Header + social icon mapping | ⚠️ If adding new icon types |
| `src/components/` | UI components (Card, Badge, Section) | ❌ Never edit |
| `src/app/components/projects.tsx` | Project cards — date display, PDF spacing | ⚠️ If adding new project display features |
| `src/app/components/skills.tsx` | Skill groups rendering | ⚠️ If changing skill layout |
| `src/components/icons/` | SVG icon components | ⚠️ Add new icons only |
| `src/lib/types.ts` | TypeScript types (`IconType`, `ResumeData`) | ⚠️ Only if data shape changes |
| `package.json` | Dependencies | ❌ Never edit |

---

## Commands

```bash
npm run dev                 # Start dev server (localhost:3000)
npm run build               # Production build
npm run check               # Biome check
npm run check:fix           # Biome auto-fix
npm run generate:cv         # Regenerate cv.yaml + PDF via RenderCV (requires Python)
npx wrangler pages deploy out --branch main   # Manual deploy to Cloudflare Pages
```

### PDF Generation

- **Source:** `scripts/generate-cv.py` — generates `cv.yaml` for RenderCV (`engineeringresumes` theme)
- **Output:** `public/cv.pdf` — accessible at `/cv.pdf`
- **Requires:** Python + `pip install "rendercv[full]"`
- Run `npm run generate:cv` after updating `resume-data.ts` to keep PDF in sync

---

## Data Shape (`src/data/resume-data.ts`)

All content is the `RESUME_DATA` export:

```ts
export const RESUME_DATA: ResumeData = {
  name: string,
  initials: string,
  location: string,
  locationLink: string,
  about: string,
  summary: string,
  avatarUrl: string,
  personalWebsiteUrl: string,
  contact: {
    email: string,
    tel: string,
    social: Array<{ name, url, icon: IconType }>
  },
  education: Array<{ school, degree, start, end }>,
  work: Array<{ company, link, badges, title, start, end: string|null, description, highlights? }>,
  skills: Array<{ label: string, items: string[] }>,
  projects: Array<{ title, techStack, description, start?, end?, link: { label, href }, links? }>
}
```

### Icon Types

Icons are string-based (`IconType`), mapped in `header.tsx`:
- `"github"`, `"linkedin"`, `"x"`, `"medium"`, `"globe"`, `"mail"`, `"phone"`
- To add a new type: add to `IconType` in `types.ts`, create SVG component in `src/components/icons/`, add to `ICON_MAP` in `header.tsx`

---

## Conventions

- No comments in code unless asked
- No emoji in code or commit messages
- Keep existing import patterns
- Projects section is the highest priority for recruiter signal
- Use `"In Progress"` badge in `techStack` for unfinished projects
- Open project descriptions with the business problem, not the method
- Use `@page { margin: 0 }` in `globals.css` to suppress browser print headers
- Wrap bare text nodes in `<span>` inside flex containers for PDF compat

### What NOT to do
- Never modify UI component files under `src/components/` (except `icons/`)
- Never add new npm dependencies
- Never change the data shape of `RESUME_DATA`
- Never modify `package.json`
