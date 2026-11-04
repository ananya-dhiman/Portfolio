# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ananya Dhiman's portfolio, "The Tower": one page drawn as a skyscraper cross-section at night, read top to bottom (floors R, 12 … 01, G, then street and footer). The design source of truth is `Tower-preview.html` (night) and `Tower-preview-day.html` (day). They are the same file except the default `time` prop, and they open directly in a browser, so screenshot them next to the React build to compare. `Rune & Wire — Portfolio.pdf` is an older set of screenshots of the same design. Refine rather than redesign.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: `tsc --noEmit` then `vite build` to `dist/`
- `npm run preview`: serve `dist/` (default port 4173)

There is no linter or test suite. Node 20.19 is installed: Vite 7 works, Astro 6 does not.

## Stack decision

Vite + React 19 + TypeScript, plain CSS custom properties. The original spec said Astro with no UI framework; the user chose React and explicitly dropped Astro. Consequences: the page is client-rendered (nothing renders without JS, only a `<noscript>` note), and the spec's "labs open when JS is off" fallback and "under 20 KB JS" target no longer apply (about 97 KB gzipped).

## Architecture

- `src/App.tsx` holds the header, the lift panel (`<nav class="lift">`) and the floors in order. Floor-tracking state lives here and feeds both the header pill and the lift's `aria-current`.
- `src/hooks.ts`:
  - `useCurrentFloor` runs two IntersectionObservers over every `[data-floor]` section. One uses `rootMargin: -45% 0px -50% 0px` to set the current floor. The other sets a `data-off` attribute that CSS uses to pause animations. It is an attribute, not a class, because React rewrites `className` on re-render and would wipe it.
  - `useTheme` toggles `data-time` on `<html>`. The inline script in `index.html` sets it before first paint from localStorage or `prefers-color-scheme`.
  - `vars()` types inline custom properties such as `--dl`.
- All copy lives in typed `src/content/*.ts`. Components are layout only. Unfilled values stay as visible bracketed placeholders (`[SNIX REPO URL]`, `[Song]`, `[LINKEDIN URL]`) until Ananya supplies them. The phone number must never appear.
- `src/content/icons.ts` reads `iconPaths.json` (24x24 SVG paths copied from the prototype, which includes AWS, LiteLLM, Chroma and SearxNG). Tools whose entry is null fall back to a letter tile.
- `src/content/scene.ts` holds the seeded build-time art (skyline windows, cube pixels, stars, REDDB cells, flap board). It uses the prototype's own LCG and its exact draw order, so the art matches the prototype. Do not reorder or add `rand()` calls without checking that.
- `src/styles/prototype.css` is the prototype stylesheet extracted verbatim (it is scoped under `.tw` with `data-time`). Put our own additions in `src/styles/extras.css` instead of editing it. `src/components/Diagrams.tsx`, the SVG parts of the floors and `sigils.ts` were converted from the prototype template by script.
- `Floor.tsx` wraps ordinary floors (`<section id=fNN data-floor data-label aria-labelledby>`). Labs and the rooftop render their own sections. Every floor needs `id=f<num>` and `data-floor`; the lift panel, observers and skip link key on them.
- `Labs.tsx` is the lift: one open lab (FLUX by default), car `top` = `offsetTop + offsetHeight − 16 − carHeight` with a 1s `cubic-bezier(.6,0,.2,1)` transition, re-measured on resize and a frame after render. The lab becomes `lit` (and the car doors open) 1.1s after arrival, or at once under reduced motion or on mobile, where the car is `display:none`. Lift-panel clicks reach it through a `window` `open-lab` CustomEvent. Diagram packets use `offset-path`, and `.lab:not(.lit)` pauses them.
- `Rooftop.tsx`: the searchlight is one damped spring (stiffness 6, damping ratio 0.85, new target every 5–10s within ±38°) run in rAF only while the roof is on screen. It sets the beam skew, the disc x and the disc stretch from that single angle. The beam and disc are drawn after the skyline but in the SVG under the HTML billboard.
- Theming: night/day tokens live in prototype.css under `.tw[data-time]`. `App.tsx` sets `data-time` on the `.tw` wrapper from `useTheme`; `index.html` sets it on `<html>` before first paint to avoid a flash. SVGs use the tokens through classes, never hard-coded colours.
- Mobile is the prototype's container query (`@container tw (max-width: 760px)`). Labs become cards with `.ldoors`, the rail is hidden, and `extras.css` turns the lift panel into a fixed bottom strip with 44px targets.

## Verifying visually

The Claude-in-Chrome extension was not connected in past sessions, so screenshots came from headless Chrome (use `--timeout=9000` rather than `--virtual-time-budget` for the React build; the dev server loads modules too slowly for virtual time, and screenshots still catch an early frame, so confirm lit/docked state with `--dump-dom`) (`chrome.exe --headless=new --screenshot`). Two gotchas:
- Headless Chrome enforces a minimum window width of about 500px, so a plain `--window-size=390,…` capture lies about mobile. Load `/` inside a 390px-wide `<iframe>` on a same-origin page instead.
- `#hash` scrolling is unreliable in headless screenshots. Take one tall full-page capture (for example 1440x7200) and crop it.
- CSS transitions don't finish under `--virtual-time-budget`, so a lit lab can look dimmed in a screenshot. Check state with `--dump-dom` instead.
- Day theme: pass `--blink-settings=preferredColorScheme=1`.

## Known gaps vs the spec

Not done yet: per-string damped guitar vibration (currently the whole string group shakes), the 2-stage flap with bounce, plane and train/car easing, `public/resume.pdf` and `og.png`, real Lighthouse and keyboard/320px audits, and the four requested skills (the `skills-lc-cli` install is interactive and has to be run by the user with `!`).
