---
name: frontend-design
description: Art-direction and layout guidance for the Creative Minds landing page. Use when designing or rebuilding any visual section (hero, classes, store, photo grids), choosing imagery, picking typography pairings, or making layout decisions. Encodes the Brooklyn warehouse / Persian-Syrian creative-hub language the store is meant to feel like.
---

# Creative Minds — Frontend Design Skill

The site is the front door of a physical store at 247 Metropolitan Ave, Williamsburg. Whatever ships on the page must feel like *walking into the shop*, not reading a magazine profile of the owner.

## Voice of the look

Two worlds, one room:

1. **Brooklyn warehouse / creative-hub.** Industrial concrete, exposed bulbs, hand-painted signage, fly-posters layered on brick, taped-up flyers, graffiti-edge typography, rolled rugs stacked to the ceiling.
2. **Aleppo / Persian / Syrian souk.** Hand-knotted pattern, brass and copper, saffron and claret, Amiri Arabic running alongside the Latin, the rhythm of a bazaar.

The collision of those two worlds is the brand. Neither side wins — they share the same wall.

The owner Mahmoud is one of the best living weavers in the city. That fact is a *line*, not the *centerpiece*. The store, the classes, and the rugs are the centerpiece.

## What to lead with

- **The space.** Stacks of rugs, kilims hung as walls, brass vessels, hand-lettered class schedule, the loom in the back.
- **The classes.** "Come hold a thread" — beginner-welcome, hands-on, weekly.
- **The work.** Pattern detail, fringe, the texture wall.
- **The lineage** — last, as a quiet endorsement. "Eight generations. He's right here. Come learn from him." Not a hero portrait of him holding a small rug.

## What to retire

- The cropped portrait of Mahmoud holding the small kilim above his head as the hero. It's a beautiful photo but it positions the site as a profile of a person rather than the front door of a shop.
- "Aleppo to Brooklyn" as the dominant headline framing. Keep the lineage, but the headline should be about the *room you can walk into*.

## Color

Use the existing tailwind tokens. Their roles in this redesign:

| token | role |
|---|---|
| `paper` (#EFE7D4) | warm off-white — primary surface in light sections |
| `paper-deep` / `paper-darker` | aged-paper layered tones, for taped-flyer / pasted-poster effects |
| `ink` (#1A1511) | near-black; warehouse shadow, body text on light |
| `claret` (#6B1F1F) | Aleppo red — accents, Arabic, key callouts |
| `saffron` (#C87D2E) | the one warm pop — used sparingly, like a stencil |
| `indigo-deep` (#08111F) | night/warehouse void — full-bleed background sections |
| `gold` (#9F7A2A) | brass / metal — fine rules and small marks only |

**Rule:** any one section uses at most three of these plus paper/ink. No rainbow.

## Type

- `font-display` Fraunces — the editorial voice (variable: SOFT, opsz, wght). Use for headlines.
- `font-editorial` Instrument Serif — italic foil to Fraunces. Use for the "in Brooklyn" / "in Aleppo" cadences and pull-quotes.
- `font-arabic` Amiri — Arabic always paired with the Latin, never decorative-only. If you write `حلب` you mean Aleppo.
- `font-mono` IBM Plex Mono — datelines, captions, taped-flyer numerals, class-schedule rows.
- `font-sans` IBM Plex Sans — body and UI only.

**Type collisions to use:** stencil-flat sans-caps numerals + ornate Fraunces italic on the same line; Amiri running underneath a chunky display headline; mono ALL-CAPS micro-labels next to a flowing serif sentence. The point is the seam between worlds.

## Texture and surface

The page should feel printed/posted, not generated:

- Subtle paper grain (existing `animate-grain` keyframe is a good base).
- Hairline rules and torn-edge dividers between sections, not big white gutters.
- 1–2 px borders in `ink/15` or `claret/30`, never default Tailwind shadows.
- Mixed-blend overlays on photography (multiply + warm wash) so photos sit on the paper instead of floating.
- Allow type to overlap photos at the edges — overlap is the language.
- For the warehouse / graffiti note: stenciled tracking-wide caps (`tracking-tracked-wide`), occasional rotated tape labels, hand-numbered "01 / 16" markers, dateline strip across the top.

## Imagery hierarchy (current photos in `/public/images/`)

Use these by *role*, not by file order:

- **Hero / store-feel candidates:** `12-customer.jpg` (Mahmoud talking to a customer in the booth — kilims as walls, this is the closest thing to "the shop"), `09-antiques.jpg` (warehouse, brass vessel, stacks), `05-textures.jpg` (the fringe wall — pure texture).
- **Pattern / craft:** `08-rug-detail.jpg`, `02-family-loom.jpg`.
- **Don't lead with:** `01-mahmoud-hero.jpg`, `04-mahmoud-couch.jpg`, `11-portrait.jpg`, `14-late-night.jpg` — these are profile photos; they belong in the lineage section, not the front door.

When new store-interior photography arrives, it replaces these in the hero immediately.

## Layout principles

- **Asymmetric grid.** 12-col, but copy and image rarely take equal halves — favor 7/5 or 8/4 splits. Souk shelves aren't symmetric.
- **Bleed.** Hero imagery bleeds to the edge on at least one side; type overlaps the image.
- **Stack of stacks.** Sections feel layered like rolled rugs — short, dense, then a tall section, then short again. Avoid uniform vertical rhythm.
- **Class schedule treats type as object.** Each row is a torn ticket, not a table row.

## Hero brief (initial landing view)

The hero must answer, in order, within the first viewport:

1. *What is this place?* — A weaving studio + shop in Williamsburg.
2. *What can I do here?* — Take a class. Buy a rug. Watch a loom run.
3. *Why here?* — Because one of the best living weavers from Aleppo is teaching upstairs.

Composition target:

- Background: store-interior feel (use `12-customer.jpg` cropped tight on the kilim wall, or `09-antiques.jpg` for warehouse depth, or build a 2-up split).
- Foreground type: a confident, slightly graffiti-stenciled wordmark moment — "**CREATIVE MINDS**" set in display caps with tracking, with `حلب → BK` as the underline mark.
- A single sentence below: "A weaving studio in Williamsburg. Hand-knotted rugs, weekly classes, eight generations of weavers in the back room."
- Two actions: **Book a class →** (primary, saffron) and **Visit the shop** (ghost). "Read the story" demoted to a small link in the corner.
- Top-left dateline strip: "247 METROPOLITAN AVE · WILLIAMSBURG · حلب → BK · EST. 1800s / 2024".

## Decision rule when in doubt

Ask: *would this make sense painted on the wall of the shop?* If yes, keep it. If it only makes sense on a person's About page, cut it.
