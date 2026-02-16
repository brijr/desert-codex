# Desert Codex — Brand Guide

## Brand Essence

Desert Codex is the design engineering practice of Bridger Tower. It sits at the intersection of design, code, and intelligence — building products from concept through launch with no handoff friction.

The name draws from two ideas: the landscape and light of the desert Southwest, and the codex as a structured body of knowledge. Together they describe a practice rooted in clarity, craft, and systems thinking.

---

## Positioning

Desert Codex is a studio, not a service. It represents a point of view on how products should be built — where design and engineering aren't separate disciplines but one continuous act of making.

**We are:**

- A design engineering practice
- Builders who ship real products
- Opinionated about craft and process

**We are not:**

- An agency with a services menu
- A freelancer selling hours
- A dev shop executing specs

**One-liner:**
Design engineering & AI integration studio.

**Extended:**
I design and build for founders — new products and the features that move them forward. Brand, interface, code.

---

## Voice & Tone

### Principles

- **Direct** — Say it plainly. No jargon, no filler. If a sentence doesn't earn its place, cut it.
- **Confident, not loud** — The work speaks. We don't oversell or qualify everything with disclaimers.
- **Warm, not casual** — Approachable but considered. We sound like a thoughtful colleague, not a brand account.
- **Sparse** — Favor short paragraphs. Let whitespace do work. A single sentence can be its own paragraph.

### Writing patterns

Use em dashes — not parentheses — for asides.  
Fragments are fine when they land.  
Avoid exclamation marks.  
Lowercase where possible in UI and labels.  
Oxford comma always.

### Words we use

concept, craft, ship, build, systems, interface, practice, studio

### Words we avoid

leverage, solutions, synergy, utilize, deliverables, stakeholders, optimize, scalable

---

## Typography

### Philosophy

Typography should feel editorial and intentional — closer to a printed journal than a SaaS landing page. We mix serif and monospace to create contrast between warmth and precision.

### Type Scale

| Role             | Family                                                                     | Weight  | Usage                                            |
| ---------------- | -------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| Display / H1     | Serif (e.g. Playfair Display, EB Garamond, or similar high-contrast serif) | Regular | Page titles, hero text                           |
| Headings / H2–H3 | Sans-serif (e.g. Inter, Geist)                                             | Medium  | Section headers, labels                          |
| Body             | Sans-serif                                                                 | Regular | Paragraphs, descriptions                         |
| Mono / Accent    | Monospace (e.g. JetBrains Mono, Geist Mono)                                | Regular | Code references, metadata, dates, tags, captions |

### Guidance

- Display type should be large and given room to breathe. Don't crowd it.
- Body text at 16–18px for comfortable reading on screen.
- Monospace is used sparingly for texture — project numbers, dates, labels — not for body copy.
- Letter-spacing on uppercase labels: `0.05–0.1em`.
- Line height for body: `1.5–1.7`. For display: `1.1–1.2`.

---

## Color

### Philosophy

The palette is drawn from the desert landscape — sandstone, sunset, shadow. Colors should feel warm and grounded, never neon or purely digital. Think golden hour, not a UI kit.

### Core Palette

| Name     | Hex       | Usage                                        |
| -------- | --------- | -------------------------------------------- |
| Sand     | `#F5F0E8` | Primary background, light surfaces           |
| Stone    | `#E8E0D4` | Secondary background, card surfaces, borders |
| Ink      | `#1A1A1A` | Primary text, headings                       |
| Dust     | `#8C8278` | Secondary text, captions, muted content      |
| Rust     | `#C4572A` | Accent, links, active states, hover          |
| Charcoal | `#2C2C2C` | Dark mode background                         |
| Ash      | `#A09890` | Borders, dividers, subtle UI elements        |

### Dark Mode

| Name       | Hex       | Usage                             |
| ---------- | --------- | --------------------------------- |
| Background | `#1A1A18` | Primary dark surface              |
| Surface    | `#2C2A28` | Cards, elevated elements          |
| Text       | `#F0EBE3` | Primary text on dark              |
| Muted      | `#9A9088` | Secondary text on dark            |
| Accent     | `#D4683A` | Accent (slightly warmer for dark) |

### Usage Rules

- Background should always feel warm — never pure white (`#FFF`) or pure black (`#000`).
- Accent color is used with restraint. One or two elements per viewport, not more.
- Text-on-background must maintain at least 4.5:1 contrast ratio (WCAG AA).
- Grain or subtle texture on backgrounds is encouraged to avoid flat digital feel.

---

## Visual Language

### Photography

- Desert landscapes, red rock, open sky, golden hour light
- Textured and slightly desaturated — closer to film than digital
- Avoid stock photography. Use original or carefully selected editorial imagery.
- Grain is welcome. Oversharpened or HDR is not.

### Texture & Surface

- Subtle noise/grain overlays on backgrounds and images (2–5% opacity)
- Paper-like texture preferred over flat color fills
- Borders should be thin (1px) and use muted tones, not harsh lines

### Layout

- Generous whitespace. Content should breathe.
- Max content width: `720–800px` for text, `1200px` for full layouts.
- Grid: favor asymmetry and editorial composition over rigid 12-column grids.
- Images can break the content width for visual impact.

### Motion

- Minimal and purposeful. No bounce, no overshoot.
- Fade-in and subtle translate-y for scroll reveals.
- Transitions: `200–300ms ease` for interactive elements.
- Hover states should be quiet — opacity shifts, underline reveals, subtle color changes.

---

## Logo & Wordmark

### Wordmark

"DESERT CODEX" is set in the display serif, all caps, with standard tracking.

### Usage

- The wordmark is the primary brand identifier. No logomark is required.
- Minimum clear space: height of the "D" on all sides.
- On light backgrounds: Ink (`#1A1A1A`)
- On dark backgrounds: Sand (`#F5F0E8`)
- Never stretch, rotate, or apply effects to the wordmark.

---

## Component Patterns

### Cards

- Light border (`1px solid Stone`)
- No drop shadows — use border or subtle background shift for elevation
- Generous internal padding (`24–32px`)
- Content-first: no decorative icons unless they serve comprehension

### Buttons & Links

- Primary action: text link with arrow (`→`), underlined on hover
- No filled buttons on the marketing site — filled buttons are for product UI
- Link color: Rust accent
- Hover: underline reveal or slight opacity shift

### Section Headers

- Small uppercase label in monospace (e.g. "01", "Select work", "About")
- Followed by a serif or sans display heading
- Brief descriptor text beneath in muted color

---

## Implementation Notes

- Built with Next.js + Tailwind CSS
- Fonts loaded via `next/font` for performance
- Dark mode via `class` strategy in Tailwind (user toggle)
- Images optimized via `next/image`, served in WebP where supported
- Deploy target: Vercel

---

_Last updated: February 2026_
