# Comprehensive Prompt Specification: Atelier Unit Cinematic Hero

Use this complete specification to prompt any AI agent, design engineer, or developer to build the exact, production-ready replica of the **Atelier Unit Hero experience** using **Next.js (App Router), TypeScript, and Tailwind CSS**.

---

```markdown
# Prompt: Atelier Unit Hero (Production-Grade Cinematic Replica)

Build a single full-viewport **cinematic hero experience for Atelier Unit** using **Next.js, TypeScript, and Tailwind CSS**.

Use this specification as the exact visual, mathematical, structural, and behavioral source of truth.
Do not change the composition, proportions, numerical values, typography, responsive behavior, animation timings, video asset, visual hierarchy, or interaction logic.
Do not reinterpret the design into a different layout.
Do not add additional sections or footer.
The page is strictly one full-viewport hero.

---

## Architecture & File Structure

Translate the implementation cleanly into the Next.js App Router:

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
└── atelier-unit/
    ├── AtelierUnitHero.tsx
    ├── AtelierUnitLogo.tsx
    ├── AtelierUnitVideo.tsx
    ├── AtelierUnitGrid.tsx
    ├── AtelierUnitServices.tsx
    ├── AtelierUnitGrain.tsx
    ├── AtelierUnitParallax.tsx
    └── AtelierUnitEntrance.tsx
```

---

## Document Foundation & Metadata

1. **Root HTML Document (`app/layout.tsx`)**:
   - `lang="en"`
   - `charSet="utf-8"`
   - Viewport: `width=device-width, initial-scale=1, viewport-fit=cover`
   - Theme color: `#0d0905`
   - Title: `Atelier Unit — Craftwork, Technology, Design`
   - Description: `Craftwork and brand systems. Shaped by culture. Built with detail and technology.`

2. **Body Foundation**:
   - `margin: 0; padding: 0; height: 100%; background: #130e09; color: #ffffff;`
   - Font family: `"AU Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;`
   - `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: geometricPrecision; font-kerning: normal;`
   - Global box-sizing: `*, *::before, *::after { box-sizing: border-box; }`

3. **Typography**:
   Declare `@font-face` for `AU Grotesk` (Regular weight 400 and Bold weight 700 with `font-display: block`) pointing to `/assets/au-grotesk-regular.woff2` and `/assets/au-grotesk-bold.woff2`, falling back gracefully to `"Helvetica Neue", Helvetica, Arial, sans-serif`.

---

## Scale System & CSS Custom Properties

Define the exact mathematical scale system in `:root`:

```css
:root {
  --vh: 1vh;
  --ink: #ffffff;
  --base-bot: #130e09;
  --rule: rgba(255, 255, 255, 0.115);
  --grid: rgba(255, 255, 255, 0.0265);
  --small-min: 10px;

  /* Universal scale unit: 1280x800 design canvas */
  --u: min(100vw / 1280, var(--vh) * 100 / 800);
  --small: max(var(--small-min), 12.6 * var(--u));

  /* Video plate dimensions */
  --pw: max(min(100vw, 1536 * var(--u)), var(--vh) * 160);
  --fade: clamp(0px, 100vw - var(--pw), var(--pw) * 0.08);

  /* Animation easings */
  --e-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --e-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --e-sweep: cubic-bezier(0.76, 0, 0.24, 1);

  /* Entrance animation control */
  --au-state: paused;
}

@supports (height: 1dvh) {
  :root {
    --vh: 1dvh;
  }
}

@media (min-height: 480px) {
  :root {
    --small-min: 11.28px;
  }
}
```

---

## Hero Stage

```css
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: 320px;
  background: linear-gradient(
    180deg,
    #0d0905 0%,
    #0f0a05 15%,
    #0d0a05 30%,
    #0d0905 45%,
    #0e0a06 60%,
    #0f0c07 75%,
    #130e08 90%,
    #130e09 100%
  );
}
```

---

## Background Video (`AtelierUnitVideo.tsx`)

- **Video URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261005_143740_52dbf3ef-ea20-4594-a1ad-91d6c2970159.mp4`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `role="presentation"`.
- Container `.video-wrap`:
  - `position: absolute; z-index: -3; top: var(--photo-top, 0px); width: var(--pw); aspect-ratio: 16 / 10; pointer-events: none;`
  - Horizontal lock at 52.93%: `left: calc((100vw - var(--pw)) * 0.5293);`
  - Soft horizontal fade mask:
    ```css
    mask-image: linear-gradient(
      to right,
      transparent 0px,
      #000 var(--fade),
      #000 calc(100% - var(--fade)),
      transparent 100%
    );
    ```
- Video element: `display: block; width: 100%; height: 100%; object-fit: cover; object-position: center center;`

---

## 48-Column Hairline Grid (`AtelierUnitGrid.tsx`)

- 48 empty column items `<i>` spanning full viewport:
  - `position: absolute; inset: 0; z-index: -1; pointer-events: none; display: flex; width: 100%; height: 100%;`
- Each column `.grid-col`:
  - `flex: 1 1 0%; height: 100%; position: relative;`
  - 2px hairline:
    ```css
    .grid-col::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(75% - 0.5px);
      width: 2px;
      background-color: var(--grid);
    }
    ```
- Grid depth mask (recedes behind subject and headline):
  ```css
  mask-image: radial-gradient(
    ellipse 62% 95% at 50% 62%,
    rgba(0, 0, 0, 0.83) 0%,
    #000 100%
  );
  ```

---

## Atelier Unit Logo (`AtelierUnitLogo.tsx`)

- Container `<a href="#" className="logo" aria-label="Atelier Unit — home">`:
  - Position: `left: calc(20.65 * var(--u)); top: calc(12.8 * var(--u)); width: max(142.6 * var(--u), 96px);`
- SVG: `viewBox="0 0 142.60 30.00" shapeRendering="geometricPrecision" fill="var(--logo-ink, #ffffff)"`
- Seven squares, each `8.2 x 8.2`, with exact coordinates and entrance delays:
  1. `x: 0.00, y: 0.00` — delay: `0.700s`
  2. `x: 19.20, y: 0.00` — delay: `0.735s`
  3. `x: 76.80, y: 0.00` — delay: `0.840s`
  4. `x: 115.20, y: 0.00` — delay: `0.910s`
  5. `x: 57.60, y: 10.90` — delay: `0.805s`
  6. `x: 134.40, y: 10.90` — delay: `0.945s`
  7. `x: 0.00, y: 21.80` — delay: `0.700s`

---

## Services (`AtelierUnitServices.tsx`)

- Element: `<ul className="services-list" aria-label="Services">`
- Position: `position: absolute; width: 100%; top: calc(211.75 * var(--u)); list-style: none; margin: 0; padding: 0;`
- Font size: `font-size: max(var(--small-min) * 1.06, 13.3 * var(--u)); line-height: 1;`
- Items:
  - **Service 1:** `Brand Direction` — `left: calc(20 * var(--u)); letter-spacing: -0.047em;` (entrance delay: `0.56s`)
  - **Service 2:** `Digital Products` — `left: 50%; transform: translateX(-50%); letter-spacing: -0.0485em;` (entrance delay: `0.62s`)
  - **Service 3:** `Advanced Tech` — `right: calc(33.25 * var(--u)); letter-spacing: -0.064em;` (entrance delay: `0.68s`)
- Micro-interaction: Hovering over any service illuminates that item (`text-shadow: 0 0 12px rgba(255,255,255,0.35)`) and softly dims sibling services to `opacity: 0.38` via `cubic-bezier(0.16, 1, 0.3, 1)`.

---

## Architectural Rule

- Decorative `<div className="rule" aria-hidden="true" />`
- Position: `width: 100%; top: calc(239 * var(--u)); height: 1px; background: var(--rule); z-index: -1; transform-origin: 0 50%;`
- Shadows:
  ```css
  box-shadow:
    0 -1px 0 rgba(255, 255, 255, 0.038),
    0 1px 0 rgba(255, 255, 255, 0.014);
  ```

---

## Headline Typography & Per-Letter Geometry

- Element: `<h1 className="hl" aria-label="Craftwork, technology, design">`
- Position: `position: absolute; left: 50%; bottom: 0.49140em; margin: 0; width: 0; height: 0;`
- Font: `font-size: calc(170.94 * var(--u)); font-weight: 700; line-height: 1; letter-spacing: 0; white-space: nowrap;`
- Structure:
  ```text
  h1.hl
  ├── span.hl__line (with style --b, --dy, --sy)
  │   └── span.hl__clip (clip-path: inset(-0.8em -3.6em -0.05em -3.6em))
  │       └── span.hl__track (with entrance delay)
  │           └── span.hl__letter (per letter with --x, --sx, --k)
  ```
- Exact Letter Placement CSS Transform:
  ```css
  transform:
    translateY(calc(0.909em + var(--dy, 0em)))
    scale(var(--sx), var(--sy))
    translateY(-0.909em)
    translateY(0.5445em)
    scaleY(var(--k, 1))
    translateY(-0.5445em);
  ```

### Line 1: CRAFTWORK
- Parameters: `--b: 1.56780em; --dy: -0.00275em; --sy: 1.0063; delay: 0.10s;`
- Letters:
  - `C`: `x: -3.04844em, sx: 1.0769, k: 1.0055`
  - `R`: `x: -2.35055em, sx: 1.0093`
  - `A`: `x: -1.68881em, sx: 1.0542`
  - `F`: `x: -1.00202em, sx: 0.9712`
  - `T`: `x: -0.41697em, sx: 0.9516`
  - `W`: `x: 0.15715em, sx: 0.9612`
  - `O`: `x: 1.01367em, sx: 0.9833, k: 1.0055`
  - `R`: `x: 1.69181em, sx: 1.0093`
  - `K`: `x: 2.33501em, sx: 0.9371`

### Line 2: TECHNOLOGY
- Parameters: `--b: 0.78390em; --dy: 0.00059em; --sy: 0.9950; delay: 0.18s;`
- Letters:
  - `T`: `x: -3.16648em, sx: 0.9516`
  - `E`: `x: -2.64032em, sx: 0.9875`
  - `C`: `x: -2.06523em, sx: 1.0678, k: 1.0055`
  - `H`: `x: -1.36691em, sx: 1.0031`
  - `N`: `x: -0.71845em, sx: 1.0161`
  - `O`: `x: -0.05103em, sx: 0.9833, k: 1.0055`
  - `L`: `x: 0.62228em, sx: 0.9965`
  - `O`: `x: 1.14822em, sx: 0.9833, k: 1.0055`
  - `G`: `x: 1.85243em, sx: 1.0231, k: 1.0055`
  - `Y`: `x: 2.50618em, sx: 0.9953`

### Line 3: DESIGN
- Parameters: `--b: 0.00000em; --dy: -0.00281em; --sy: 0.9918; delay: 0.26s;`
- Letters:
  - `D`: `x: -1.77928em, sx: 1.0751`
  - `E`: `x: -1.09091em, sx: 0.9983`
  - `S`: `x: -0.48284em, sx: 1.0123`
  - `I`: `x: 0.11501em, sx: 1.0530`
  - `G`: `x: 0.32558em, sx: 1.0231, k: 1.0055`
  - `N`: `x: 1.03138em, sx: 1.0062`

---

## Sensory Atmosphere (Parallax & Grain)

1. **Lightweight Physics Camera (`AtelierUnitParallax.tsx`)**:
   - Native client hook on desktop fine pointers: calculates pointer offset from center normalized `-1` to `1`.
   - Smooth `lerp` damping (`ease = 0.06`) running on `requestAnimationFrame` that sleeps when resting.
   - Pushes `--parallax-x` and `--parallax-y` to `:root`.
   - Video plate subtly shifts: `translate3d(calc(var(--parallax-x) * 8px), calc(var(--parallax-y) * 6px), 0)`.
   - Grid counter-shifts: `translate3d(calc(var(--parallax-x) * -4px), calc(var(--parallax-y) * -3px), 0)`.

2. **Analog Film Grain Overlay (`AtelierUnitGrain.tsx`)**:
   - Procedural SVG fractal noise (`baseFrequency="0.75"`, `opacity: 0.042`, `mixBlendMode: "screen"`).
   - Eliminates digital gradient banding and gives a cinema-stock finish.

---

## Entrance Choreography (`AtelierUnitEntrance.tsx`)

- On mount, if motion is allowed, `html.is-entering` is applied (all animations start with `--au-state: paused`).
- When `document.fonts.ready` completes (or after a 1200ms fallback), `is-playing` is added on the next animation frame to run animations.
- Animation keyframes:
  - `au-draw` (Rule draws from left, `0.85s`, delay `0.24s`, easing `--e-sweep`).
  - `au-rise` (Headline tracks rise `1em`, `1.05s`, easing `--e-expo`, delays `0.10s`, `0.18s`, `0.26s`).
  - `au-rise` (Services rise `calc(100% + 0.6em)`, `0.8s`, easing `--e-quint`, delays `0.56s`, `0.62s`, `0.68s`).
  - `au-on` (Logo squares fade in `0.14s`, exact individual delays).
- A 2200ms animation fallback and a 4500ms safety failsafe cleanly remove the animation classes so zero timers or listeners persist.
- Full respect for `prefers-reduced-motion: reduce`: animation sequence is bypassed and video autoplay is disabled.

---

## Responsive Composition Rules

1. **Portrait-Leaning (`max-aspect-ratio: 114/100`)**:
   - `--small-min: 12px; --m: clamp(16px, 3.2vw, 32px); --bar-top: calc(var(--m) * 0.64);`
   - Logo uses `--bar-top` and `--m`.
   - Video plate switches: `width: calc(var(--vh) * 138.6); top: calc(var(--vh) * 15);` with top vertical fade mask.
   - Services: `top: calc(var(--vh) * 44);` with labels anchored at `--m`, `50%`, and `right: var(--m)`.
   - Rule: `top: calc(var(--vh) * 44 + 2.1em);`
   - Headline size: `calc((100vw - 2 * var(--m)) / 6.3063); bottom: max(0.49140em, calc(18px + env(safe-area-inset-bottom)));`

2. **Narrow Portrait (`<= 679px`)**:
   - `--small-min: 11.5px; --bar-top: calc(var(--m) * 0.64 + env(safe-area-inset-top));`
   - Logo width: `104px`.

3. **Extremely Narrow Portrait (`<= 309px`)**:
   - `--F: calc((100vw - 2 * var(--m)) / 6.3063);`
   - Photo top `--ptop: max(calc(15 * var(--vh)), min(calc(150px + env(safe-area-inset-top)), calc(71 * var(--vh) - max(0.4914em, calc(18px + env(safe-area-inset-bottom))) - 2.3em * var(--F) - 56px)));`
   - Services top: `calc(var(--ptop) + 29 * var(--vh));`
   - Rule top: `calc(var(--ptop) + 29 * var(--vh) + 3.1em);`

4. **Landscape Mobile (`max-height: 479px` and `min-aspect-ratio: 1141/1000`)**:
   - Preserves desktop composition with safe-area margins `--mL` and `--mR`.
   - Headline bottom: `max(0.49140em, calc(8px + env(safe-area-inset-bottom)));`

---

## Build & Reliability Requirement
The application must compile cleanly on Next.js 16+ using the Webpack builder (`next build --webpack`) with strict TypeScript validation and static page prerendering (`○ /` static route).
```
