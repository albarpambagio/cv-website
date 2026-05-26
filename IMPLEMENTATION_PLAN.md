# Implementation Plan — CV Website

**Albar Pambagio** — fork of [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)

## Project Meta

| Attribute | Value |
|---|---|
| **Source Repo** | [github.com/BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) |
| **Fork** | [github.com/albarpambagio/cv](https://github.com/albarpambagio/cv) |
| **Stack** | Next.js 16 + shadcn/ui + TypeScript + Cloudflare Pages |
| **Target URL** | `https://albar-cv.pages.dev` |

---

## Status

| Phase | Status |
|-------|--------|
| Phase 0 — Prerequisites | ✅ Done |
| Phase 1 — Fork & Local Setup | ✅ Done |
| Phase 2 — Fill Content | ✅ Done |
| Phase 3 — Customization | ✅ Done |
| Phase 4 — Deploy to Cloudflare Pages | ✅ Done |
| Phase 5 — Post-Launch Checklist | ⬜ Pending |

---

## Phase 3 — Customization

### 3.1 Accent Color
- [x] Changed `--accent` to dark slate
- [x] **Verify:** accent color renders on live site

### 3.2 Medium Icon
- [x] Created `MediumIcon` SVG component
- [x] Added `"medium"` to `IconType`
- [x] Added to `ICON_MAP` in `header.tsx`
- [x] **Verify:** Medium icon renders in contact bar

### 3.3 Page Title & Meta
- [x] Updated `layout.tsx` metadata
- [x] **Verify:** title shows "Albar Pambagio — Data Analyst"

### 3.4 Profile Photo (optional)
- [ ] Host square headshot on CDN
- [ ] Paste URL into `avatarUrl`

### 3.5 Validation
- [x] `npm run build` succeeds
- [x] All customizations render at localhost

---

## Phase 4 — Deploy to Cloudflare Pages

### 4.1 Configure Static Export
- [x] Add `output: "export"` to `next.config.js`
- [x] **Verify:** `npm run build` produces `out/` directory

### 4.2 Create `wrangler.toml`
- [x] Create `wrangler.toml` at project root

### 4.3 One-Time wrangler Setup
- [x] `npx wrangler login`
- [x] `npx wrangler whoami`
- [x] `npx wrangler pages project create albar-cv --production-branch main`

### 4.4 First Manual Deploy
- [x] `npm run build`
- [x] `npx wrangler pages deploy out --branch main`
- [x] **Verify:** site loads at `albar-cv.pages.dev`

### 4.5 CI/CD via GitHub Actions
- [x] Create `.github/workflows/deploy.yml`
- [x] Generate Cloudflare API token
- [x] Find Account ID
- [x] Add `CLOUDFLARE_API_TOKEN` repo secret
- [x] Add `CLOUDFLARE_ACCOUNT_ID` repo secret
- [x] Commit and push
- [x] **Verify:** GitHub Action runs successfully
- [x] **Verify:** auto-deploy to `albar-cv.pages.dev`

---

## Phase 5 — Post-Launch Checklist

- [ ] Add `https://albar-cv.pages.dev` to LinkedIn Featured
- [ ] Add URL to LinkedIn Contact info
- [ ] Update LinkedIn summary
- [ ] Link 3 project repos in LinkedIn Featured
- [ ] Pin all 3 project repos on GitHub profile
- [ ] Add URL to GitHub bio
- [ ] Test PDF export (print button)
- [ ] Test mobile load speed

---

## Future Enhancements

- [ ] Add project screenshots
- [ ] Add Cloudflare Web Analytics
- [ ] Medium blog feed integration
- [ ] Update project descriptions with precise metrics
