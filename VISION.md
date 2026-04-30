# Creative Minds — Williamsburg
## Vision & Design Plan (v1 — Landing Page)

---

## 1. The Story We're Telling

This is not a rug store. This is a **family archive that you can walk into, touch, and take a piece of home**. The site is built around one remarkable fact: Mahmoud Koseyaem's family has been weaving in Aleppo for **eight generations**. His father ran one of the largest stores in Aleppo's Citadel bazaar. At fourteen, Mahmoud sold his first rug — four days' work, bought by a persistent British man who told him *"whatever you ask for, you're gonna get it."*

Then: civil war. Chemical attack. Detention. Escape. Dubai. Turkey. Houston. Alyssa — an American weaver who impressed him with her loom knowledge. A daughter, Mila Rose. And now, the next chapter: **a studio in Williamsburg, Brooklyn.**

The landing page's job is to make a stranger feel, in the span of one scroll, that they've been let into something intimate and consequential — and then invite them to sit at the loom themselves.

---

## 2. Positioning

**Who:** An Aleppo-rooted, Brooklyn-based family workshop. Eight generations of hand-knotted rugs. A teaching studio.

**Who for:** 
- Brooklyn creatives, design professionals, and discerning home-buyers looking for authentic, handmade goods with a story
- People drawn to craft experiences (wheel-throwing, natural dyeing, breadmaking) who want to learn weaving
- Tourists and locals looking for an intimate cultural experience that isn't performative

**Competitive orientation:** We are *not* competing with ABC Carpet (too clinical) or with "authentic bazaar" tropes (too kitsch). The closest adjacent brands:
- **Heath Ceramics** — family craft, serious material respect
- **Blackcreek Mercantile** — working studio you can visit  
- **Textile Arts Center Brooklyn** — teaching model
- **Kinfolk, The Gentlewoman** — editorial sensibility
- **Aesop** — reverence for regional heritage

---

## 3. Aesthetic Direction — "Editorial Bazaar"

A deliberate collision: the hush of a literary longread + the warm, layered density of an Aleppo souk. Williamsburg is the perfect location for this because Williamsburg *respects* this collision — raw materials, handmade honesty, and editorial sophistication all live next to each other here.

### Tone
- **Literary, not promotional.** Long paragraphs. Generous silence between them. Pull quotes. Datelines. This reads like a New York Times long-read that happens to have a "Book a class" button at the end.
- **Tactile, not polished.** We emphasize *texture* over *perfection*. The site feels like paper and wool, not glass and chrome.
- **Warm, not earnest.** Mahmoud is funny (see: *"my dad took the money"*). The site should have dry warmth.
- **Specific, not generic.** Names, dates, knot counts, street food cravings. No stock phrases.

### Typography
- **Display serif: Fraunces** (variable, humanist, with SOFT opsz) — warmth, character, literary weight. Used at huge sizes for the hero.
- **Editorial italic: Instrument Serif** — for pull quotes and intermezzos, high-contrast drama.
- **UI sans: IBM Plex Sans** — clean workhorse, with **IBM Plex Mono** for datelines, metadata, and small labels (newspaper credibility cue).
- **Decorative accent: Amiri** — Arabic serif, used sparingly for atmosphere (the word "حلب" / Aleppo as a small motif).

### Color Palette
Dominant warm paper + deep family jewels. No purple gradients. No neons.

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#EFE7D4` | Dominant background — undyed wool / old paper |
| `--paper-deep` | `#E4D8BE` | Section alternation, cards |
| `--ink` | `#1A1511` | Near-black headlines, warm |
| `--ink-soft` | `#3D342B` | Body copy, dark brown |
| `--claret` | `#6B1F1F` | Deep maroon — Mahmoud's jacket, rug fields |
| `--saffron` | `#C87D2E` | Accent — burnt orange, pomegranate molasses |
| `--indigo` | `#0F1E33` | Deep midnight blue — Persian rug foundation |
| `--gold` | `#9F7A2A` | Muted gold, restrained ornament |

### The One Thing They'll Remember
A **single thread motif** — a hand-drawn SVG line that weaves its way down the page, connecting Aleppo to Dubai to Turkey to Houston to Brooklyn. It becomes the scroll indicator, the section divider, and the signature. Like a single warp running through the entire story.

### Motion
- Hero: staggered letter reveal on load, slow parallax on background image
- Section transitions: fade-up on scroll (IntersectionObserver), no parallax overkill
- Thread motif: draws itself on scroll (strokeDasharray animation)
- Hover on rug/class cards: subtle texture shift, warm shadow lift
- **No** auto-rotating carousels. **No** bouncy hover-scales. **No** glassmorphism.

---

## 4. Information Architecture — v1 Landing Page

```
1. NAV                                    [minimal, sticky, dateline "Est. Aleppo, 1800s · Now Williamsburg"]

2. HERO                                   [image 1, huge editorial type]
   "Hand-knotted in Aleppo.
    Re-rooted in Brooklyn."

3. DATELINE INTRO                         [short paragraph, meeting Mahmoud]

4. MAHMOUD'S STORY                        [image 4, 11 — intimate portraits]
   Pull quote: "You never know what's gonna happen to you in the market. 
                You just have to do it. Don't be afraid, don't be scared."

5. EIGHT GENERATIONS                      [big number treatment, bazaar origin]
   From Aleppo's Citadel bazaar to a studio on Metropolitan Ave.

6. THE JOURNEY                            [thread-line timeline: Aleppo → Dubai → Turkey → Houston → Brooklyn]

7. THE CRAFT                              [images 3, 5, 8 — textures, loom, patterns]
   Stats: 8 generations · 14-hour days · ~80,000 knots/sq.m

8. THE FAMILY                             [images 2, 15, 16 — Alyssa, Mila Rose]
   Meeting Alyssa in Dubai. Mila Rose. "Now we're a real Syrian family."

9. CLASSES                                [THE CTA — learn to weave, upcoming schedule]
   Intro to the Loom · Persian & Turkish Knots · Private lessons with Mahmoud

10. VISIT THE STUDIO                      [address, hours, image 12 — talking with customer]
    Williamsburg, Brooklyn

11. FOOTER                                [contact, Instagram, Etsy link, small pattern]
```

---

## 5. Out-of-Scope for v1 (but Foundational for v2+)

This landing page is the *front door*. The system around it is where this becomes a real product:

### v2 — Class Booking System
- Calendar view of upcoming classes
- Capacity management (4 looms in the studio → 4 seats per class)
- Payment (Stripe), waitlist, class-pack pricing
- Automated confirmation + reminder emails (day-before, morning-of)
- Private lesson request form

### v3 — Community Layer
- Student profile pages (show off finished work)
- A small gallery of student pieces
- "Open studio" drop-in hours calendar
- Email/SMS communication with current students
- Instagram auto-embed for the studio feed

### v4 — Commerce
- Rug catalog (the already-woven inventory from markets + Etsy)
- Custom commission flow ("request a rug" → specs → quote)
- Gift cards (for classes)

### v5 — Backend / Admin
- Mahmoud & Alyssa admin dashboard:
  - See upcoming class roster
  - Message students
  - Mark attendance, record class notes
  - Revenue view
- Content CMS for blog / "journal" (rug of the month, etc.)

---

## 6. Technical Plan — v1 Build

**Stack:**
- **Vite + React 18** — fast dev, easy to hand off
- **Tailwind CSS** with heavy custom theming (CSS variables override)
- **Framer Motion** (`motion` package) — for hero reveal, scroll animations
- **Google Fonts** — Fraunces, Instrument Serif, IBM Plex Sans/Mono, Amiri
- Single-page scroll with anchored sections
- Fully responsive, mobile-first

**File layout:**
```
creative-minds/
├── VISION.md                     ← this document
├── README.md                     ← setup instructions
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/images/                ← all 16 photos
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                 ← typography, CSS variables, base
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Dateline.jsx
        ├── Story.jsx
        ├── Generations.jsx
        ├── Journey.jsx
        ├── Craft.jsx
        ├── Family.jsx
        ├── Classes.jsx
        ├── Visit.jsx
        ├── Footer.jsx
        └── ThreadLine.jsx         ← signature SVG motif
```

---

## 7. Copy Voice Reference

Good:
> *"Eight generations. One family. A loom that crossed an ocean."*

> *"In Aleppo's Citadel bazaar, his father kept one of the largest stores. Mahmoud was fourteen when he made his first sale — four days of knotting, a persistent British man, and the sum of 800 Syrian pounds. His father took the money. Mahmoud laughs about it."*

> *"You'll sit at the loom. He'll tell you where to put your hands."*

Bad (avoid):
- "Discover the magic of handmade rugs."
- "Authentic. Exquisite. Timeless."
- "A cultural treasure you won't find anywhere else."
- Anything that starts with "Welcome to."

---

*Next: execute.*
