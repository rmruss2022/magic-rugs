# Creative Minds — Williamsburg

A landing page for **Mahmoud & Alyssa Koseyaem's** Brooklyn weaving studio. Eight generations of hand-knotted rugs from Aleppo, re-rooted on Metropolitan Avenue.

See `VISION.md` for the full design rationale, positioning, IA, and roadmap.

---

## Quick start

```bash
npm install
npm run dev
```

Opens on `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

The build output lives in `dist/`.

---

## Stack

- **Vite + React 18** — dev speed, easy handoff
- **Tailwind CSS** — heavily themed with editorial tokens (see `tailwind.config.js`)
- **Framer Motion** — hero reveal, scroll reveals, thread-draw SVG on `Journey`
- **Google Fonts** — Fraunces (display, variable SOFT axis), Instrument Serif (italic), IBM Plex Sans/Mono (body + dateline), Amiri (Arabic)

---

## File map

```
src/
├── App.jsx                 ← composes sections
├── index.css               ← tokens, paper grain, drop-cap prose, kilim divider
├── main.jsx                ← entry
└── components/
    ├── Nav.jsx             ← sticky header, mobile menu, arabic accent
    ├── Hero.jsx            ← image 01, huge display type, staggered reveal
    ├── Dateline.jsx        ← newspaper-style intro
    ├── Story.jsx           ← long-form editorial with portrait (image 04)
    ├── Generations.jsx     ← the giant 8, indigo panel, stat strip
    ├── Journey.jsx         ← SVG thread motif (scroll-drawn) + 5 stops
    ├── Craft.jsx           ← texture band + 4-image grid
    ├── Family.jsx          ← Alyssa + Mila, pull quote, home photo
    ├── Classes.jsx         ← 3 class cards + group/gift CTAs
    ├── Visit.jsx           ← address, hours, newsletter
    └── Footer.jsx          ← closing quote + sitemap
```

Images live in `public/images/` with semantic filenames (`01-mahmoud-hero.jpg` … `16-dinner.jpg`).

---

## Design notes

- Accent color is **`--claret`** (`#6B1F1F`) — Mahmoud's jacket, rug fields.
- Warm paper tone is **`--paper`** (`#EFE7D4`) — undyed wool.
- **`§ 01`** through **`§ 07`** section marks keep the editorial feel.
- Drop-cap applied to first-of-type `<p>` inside `.prose-editorial`.
- Paper grain is a fixed SVG `::before` noise layer with `mix-blend-mode: multiply`.
- Respects `prefers-reduced-motion`.

## What's next

v2 is the real booking system: Stripe, capacity, waitlists, student accounts, an admin dashboard for Mahmoud and Alyssa. See `VISION.md § 5`.
