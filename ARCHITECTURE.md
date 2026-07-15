# Architecture

## Project structure

```
pratham-portfolio/
├── index.html              # HTML shell: meta tags, favicon, pre-paint theme script
├── package.json
├── vite.config.js          # Vite + React plugin + Tailwind v4 plugin
├── public/
│   └── resume.pdf          # Served verbatim at /resume.pdf (resume download)
└── src/
    ├── main.jsx            # Entry: fonts, global CSS, React root
    ├── App.jsx             # Page composition (section order lives here)
    ├── index.css           # Tailwind import, theme tokens, custom CSS (grid motif, reveal)
    ├── data/
    │   └── content.js      # ★ ALL portfolio content — the only file to edit day-to-day
    ├── hooks/
    │   └── useReveal.js    # IntersectionObserver scroll-reveal hook
    └── components/
        ├── Nav.jsx         # Fixed top bar: brand, theme toggle, resume download
        ├── Hero.jsx        # Headline, proof-point chips, contact links, grid motif
        ├── Section.jsx     # Shared section shell (overline label + title + reveal)
        ├── FeaturedWork.jsx# KAVACH project card + patent/research card
        ├── Experience.jsx  # Timeline + one-line education entry
        ├── Skills.jsx      # Grouped skill chips
        ├── Credentials.jsx # Certification chips + "View all credentials" Drive link
        ├── Footer.jsx      # Contact CTA, social links, copyright
        └── Icons.jsx       # Inline SVG stroke icons (no icon library dependency)
```

## Component architecture

`App.jsx` is a flat composition of section components — no routing, no state management
library. The only stateful component is `Nav` (theme toggle). Every section component imports
its content from `src/data/content.js` and its shell from `Section.jsx`, so all sections share
identical spacing, label styling, and reveal behaviour.

Data flows one way: `content.js` → section component → presentational markup. Components never
hard-code copy; if text appears on the site, it comes from the data file (the sole exceptions
are structural labels like section titles).

## Data / content organization

`src/data/content.js` exports one object or array per concern:

| Export        | Drives                                    |
| ------------- | ----------------------------------------- |
| `profile`     | Hero headline, nav, footer CTA, resume    |
| `links`       | Hero + footer social/contact links        |
| `proofPoints` | Hero badge chips                          |
| `projects`    | Featured project cards (KAVACH)           |
| `research`    | Patent card                               |
| `experience`  | Timeline entries                          |
| `education`   | One-line education entry                  |
| `skillGroups` | Skills section                            |
| `credentials` | Certification chips + Google Drive link   |

## Styling approach

- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin — no `tailwind.config.js`; theme
  extensions live in the `@theme` block in `src/index.css` (font stacks).
- **Design tokens:** zinc neutrals, one `sky` accent (cyan-blue → "cloud" without a
  cybersecurity theme), `emerald` reserved for the patent "Published" badge.
- **Typography:** Inter Variable for UI text, JetBrains Mono as seasoning only — overline
  labels, chips, dates, the nav brand. Both are self-hosted via `@fontsource` (no Google Fonts
  request, works offline, no layout shift from late font swaps).
- **Dark mode:** a `data-theme` attribute on `<html>`, mapped to Tailwind's `dark:` variant via
  `@custom-variant` in `index.css`. An inline script in `index.html` resolves
  `localStorage.theme` → `prefers-color-scheme` **before first paint**, so there is no theme
  flash. The toggle in `Nav.jsx` persists the choice.
- The hero's faint grid ("architecture diagram" motif) is pure CSS (`.hero-grid` in
  `index.css`) — two 1px linear-gradients with a radial mask, themed via the `--grid-line`
  custom property.

## Animation approach

Deliberately minimal, GPU-friendly, and accessible:

- **Scroll reveal:** `useReveal.js` attaches an IntersectionObserver that adds `.is-visible`
  once per element; CSS transitions opacity + `translateY(18px)`. The observer disconnects
  after firing (no ongoing work), and `prefers-reduced-motion: reduce` disables all of it.
- **Hover:** cards and link buttons lift with `transform` and tint their border with the
  accent color — transitions on `transform`/`color` only, never layout properties.
- No animation library; the total JS cost of animation is the ~40-line hook.

## How to add / edit content

- **Project:** append an object to `projects` in `content.js` (`name`, `tagline`, `badges`,
  `description`, `capabilities`, `stack`, `repo`). It renders automatically as a card in
  Featured Work. If you add a third card, revisit the `lg:col-span-*` classes in
  `FeaturedWork.jsx` (currently a 3/2 split across a 5-column grid).
- **Experience:** append to `experience` — `role`, `org`, `period`, `points[]`. Order in the
  array is display order (keep newest first).
- **Skills:** edit `skillGroups`; each `{ group, items[] }` renders as one chip card.
- **Credentials:** add strings to `credentials.items`; the Drive folder link is
  `credentials.driveUrl`.
- **Section order:** reorder the components in `App.jsx`.

## How the resume download works

`public/` is served at the site root, so `public/resume.pdf` is available at `/resume.pdf`.
The nav button is `<a href="/resume.pdf" download="Pratham_Lal_Resume.pdf">` — the `download`
attribute makes browsers save the file (with a clean filename) instead of navigating to it.
To update the resume, overwrite `public/resume.pdf`; nothing else changes.

## Design decisions worth knowing

1. **Software-engineer first, security second.** No terminal cosplay, matrix green, or padlock
   iconography. The security identity comes from the content and small touches: mono overlines,
   status-badge chips, the faint system-diagram grid.
2. **Honest claims only.** KAVACH capabilities mirror what exists in the repository (e.g.
   "heuristic zero-day risk estimation", not "ML zero-day prediction"); credibility is anchored
   to the hackathon result rather than GitHub stats. The patent is framed as research, distinct
   from project cards.
3. **One page, two flagship items.** The leave-management system lives as an experience bullet
   (not a project card) to avoid duplication; school-era achievements are omitted.
4. **No UI/state/icon libraries.** React + Tailwind only; icons are ~10 inline SVGs. Fewer
   dependencies → faster installs, smaller bundle, fewer supply-chain worries (fitting, for a
   security portfolio).
5. **Theme without flash.** Theme resolution happens in a blocking inline script before first
   paint — the one acceptable use of blocking JS.

## Future improvements & deployment

- **Deployment:** the site is fully static — `npm run build` then host `dist/` anywhere.
  Easiest paths: Vercel or Netlify (auto-detect Vite; zero config), GitHub Pages
  (`vite build` + the `base` option if served from a sub-path), or Cloudflare Pages. Add a
  custom domain and set the `og:url` meta tag in `index.html` once you have one.
- **KAVACH screenshot:** a dashboard screenshot (or short GIF) inside the KAVACH card would
  strengthen the featured section — add it to `src/assets/` and render it in
  `FeaturedWork.jsx`.
- **Patent link:** set `research.url` the moment the publication link is available.
- **Analytics:** a privacy-friendly option (Plausible/GoatCounter) if you want visit data.
- **SEO:** add a `sitemap.xml`/`robots.txt` and JSON-LD `Person` schema after deployment.
- **OG image:** a 1200×630 social-preview card (`og:image`) for link sharing.
