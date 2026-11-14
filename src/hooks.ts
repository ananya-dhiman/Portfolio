import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import type { CSSProperties, RefObject } from 'react';

/** Typed helper for inline custom properties like `--dl`. */
export const vars = (o: Record<string, string | number>) => o as CSSProperties;

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * One IntersectionObserver band tracks the current floor; a second sets `data-off`
 * on floors outside the viewport so their animations pause.
 */
export function useCurrentFloor(): string {
  const [current, setCurrent] = useState('R');
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-floor]');
    const band = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent((e.target as HTMLElement).dataset.floor!)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    const vis = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.toggleAttribute('data-off', !e.isIntersecting)),
      { rootMargin: '100px 0px' },
    );
    sections.forEach((s) => { band.observe(s); vis.observe(s); });
    return () => { band.disconnect(); vis.disconnect(); };
  }, []);
  return current;
}

export type Theme = 'night' | 'day';

type StartViewTransition = (cb: () => void) => { ready: Promise<void> };

/**
 * Night/day toggle. Where the browser supports the View Transitions API (and motion is
 * allowed) the new palette washes in as a circle expanding from the point that was
 * clicked; everywhere else the theme switches instantly, as before. The circular reveal
 * itself is styled in extras.css (the default cross-fade is suppressed there).
 */
export function useTheme(): [Theme, (e?: { clientX: number; clientY: number }) => void] {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.time as Theme) || 'night');
  useEffect(() => { document.documentElement.dataset.time = theme; }, [theme]);

  const toggle = (e?: { clientX: number; clientY: number }) => {
    const next: Theme = theme === 'day' ? 'night' : 'day';
    try { localStorage.setItem('time', next); } catch { /* storage blocked */ }

    const start = (document as unknown as { startViewTransition?: StartViewTransition }).startViewTransition;
    if (!start || prefersReducedMotion()) { setTheme(next); return; }

    // Reveal origin: the toggle itself, or the screen centre if we have no coordinates.
    const x = e?.clientX ?? innerWidth / 2;
    const y = e?.clientY ?? innerHeight / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = start.call(document, () => flushSync(() => setTheme(next)));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 520, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
      );
    }).catch(() => { /* a superseded transition rejects; the theme is already set */ });
  };

  return [theme, toggle];
}

/** Live Asia/Kolkata time, ticking every second (information, so it also runs under reduced motion). */
export function useIST() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const ist = new Date(now + 330 * 60000);
  const h = ist.getUTCHours(), m = ist.getUTCMinutes(), s = ist.getUTCSeconds();
  const pad = (k: number) => (k < 10 ? '0' : '') + k;
  const rot = (a: number) => `rotate(${a.toFixed(1)} 260 44)`;
  return {
    hourRot: rot(((h % 12) + m / 60) * 30),
    minRot: rot((m + s / 60) * 6),
    secRot: rot(s * 6),
    istLabel: `${pad(h)}:${pad(m)}`,
  };
}

// Searchlight geometry in the 1280x760 roof viewBox: lamp, and the disc at rest.
const LAMP = { x: 1065, y: 684 };
const DISC = { x: 880, y: 150 };
const DIST = LAMP.y - DISC.y;
const MAX = 38;      // degrees either side
const STIFF = 6;
const DAMP = 0.85;   // damping ratio

/**
 * One damped spring angle drives the beam skew, the disc x and the disc stretch, so they never drift apart.
 * Every 5-10s a new goal within +-38deg is picked; a slow sway keeps it from ever looking parked.
 * Runs only while the roof is on screen; reduced motion shows a still frame at a slight angle.
 */
export function useSearchlight(roof: RefObject<HTMLElement | null>, beam: RefObject<SVGGElement | null>, disc: RefObject<SVGGElement | null>) {
  useEffect(() => {
    const render = (a: number) => {
      const x = -Math.tan((a * Math.PI) / 180) * DIST;
      // Squared rather than abs(), which would put a visible kink in the stretch each time the beam crosses centre.
      const k = (a / MAX) ** 2;
      if (beam.current) beam.current.style.transform = `skewX(${a.toFixed(3)}deg)`;
      if (disc.current) {
        disc.current.style.transform = `translateX(${x.toFixed(2)}px) scale(${(1 + k * 0.42).toFixed(4)}, 1)`;
        disc.current.style.opacity = (1 - k * 0.32).toFixed(3);
      }
    };
    if (prefersReducedMotion()) { render(12); return; }

    let angle = 0, vel = 0, goal = 0, target = 0, nextPick = 0, last = 0, raf = 0, running = false;
    const frame = (t: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
      last = t;
      if (t > nextPick) { goal = (Math.random() * 2 - 1) * MAX; nextPick = t + 5000 + Math.random() * 5000; }
      // The target glides to each new goal, so the spring eases into a move instead of being kicked by a step.
      target += (goal - target) * (1 - Math.exp(-dt * 0.9));
      vel += (-STIFF * (angle - target) - 2 * DAMP * Math.sqrt(STIFF) * vel) * dt;
      angle += vel * dt;
      render(angle + Math.sin(t / 2600) * 0.5);
      raf = requestAnimationFrame(frame);
    };
    render(0);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
      else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
    });
    if (roof.current) io.observe(roof.current);
    return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); };
  }, [roof, beam, disc]);
}
