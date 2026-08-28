# Pratham Lal — Portfolio

A one-page portfolio built with **React 19 + Vite + Tailwind CSS v4**. Modern software-engineer
aesthetic with a cloud/security identity: light & dark themes, subtle scroll-reveal animations,
and all content driven from a single data file.

## Run locally

Requires **Node.js 20.19+ (or 22+)**.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default: http://localhost:5173).

## Other scripts

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Editing content

**All portfolio content lives in [`src/data/content.js`](src/data/content.js)** — profile,
links, featured projects, additional projects, research, experience, skills, and credentials.
Components only render what's in that file, so day-to-day edits never require touching JSX.

Additional projects carry a `status` of `'completed'` or `'in-development'`, which renders as a
"Shipped" or "In development" pill on the card.

## Updating the resume

Replace `public/resume.pdf` with the new file (keep the same name). The site serves it at
`/resume.pdf` and the Resume button downloads it as `Pratham_Lal_Resume.pdf`.

See [ARCHITECTURE.md](ARCHITECTURE.md) for project structure, design decisions, and how to
extend the site.
