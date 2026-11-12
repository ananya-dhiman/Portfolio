import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { labs } from '../content/labs';
import { sigils } from '../content/sigils';
import { Diagram } from './Diagrams';
import { prefersReducedMotion } from '../hooks';

const DOCK_DELAY = 1100;
const href = (u: string) => (u.startsWith('[') ? '#' : u);
const labIds = labs.map((l) => l.floor);

/**
 * Accordion with exactly one open lab (FLUX first). The lift car rides to the open lab, docks 1.1s after
 * arriving, and only then does the lab light up and its diagram animate.
 */
export function Labs() {
  const [open, setOpen] = useState(labs.find((l) => l.defaultOpen)?.floor ?? labs[0].floor);
  const [docked, setDocked] = useState(false);
  const [carTop, setCarTop] = useState(0);
  const [labsH, setLabsH] = useState(1200);
  const wrap = useRef<HTMLDivElement>(null);
  const car = useRef<HTMLDivElement>(null);
  const timer = useRef<number>(undefined);

  const dockSoon = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDocked(true), prefersReducedMotion() ? 0 : DOCK_DELAY);
  }, []);

  const openLab = useCallback((id: string) => {
    if (id === open) return;
    setOpen(id);
    setDocked(false);
    dockSoon();
  }, [open, dockSoon]);

  // Measure the open lab after every render (it grows when its body mounts) and on resize.
  const measure = useCallback(() => {
    const el = document.getElementById(`f${open}`), w = wrap.current;
    if (!el || !w) return;
    const top = el.offsetTop + el.offsetHeight - 16 - (car.current?.offsetHeight ?? 100);
    setCarTop((t) => (t === top ? t : top));
    setLabsH((h) => (h === w.offsetHeight ? h : w.offsetHeight));
  }, [open]);
  useLayoutEffect(measure);
  useEffect(() => {
    addEventListener('resize', measure);
    return () => removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => { dockSoon(); return () => clearTimeout(timer.current); }, [dockSoon]);

  // Lift-panel links and deep links open the matching lab.
  useEffect(() => {
    const onOpen = (e: Event) => { const id = (e as CustomEvent<string>).detail; if (labIds.includes(id)) openLab(id); };
    window.addEventListener('open-lab', onOpen);
    return () => window.removeEventListener('open-lab', onOpen);
  }, [openLab]);

  const cwTop = Math.max(0, labsH - carTop - 160);

  return (
    <div className="labs" ref={wrap}>
      <div className="cable" style={{ height: carTop }} />
      <div className="cwc" style={{ height: cwTop }} />
      <div className="cw" style={{ top: cwTop }} />
      <div ref={car} className={docked ? 'car open' : 'car'} style={{ top: carTop }} aria-hidden="true">
        <div className="ctop">{(docked ? '● ' : '▼ ') + open}</div>
        <svg viewBox="0 0 72 186" width="56" height="74">
          <circle cx="36" cy="60" r="11" className="ln" style={{ strokeWidth: 3 }} />
          <path className="ln" d="M36 71V124M36 84L20 106M36 84L52 106M36 124L24 164M36 124L48 164" style={{ strokeWidth: 3 }} />
        </svg>
        <span className="cd l" /><span className="cd r" />
      </div>

      {labs.map((l) => {
        const isOpen = open === l.floor;
        return (
          <section
            key={l.floor} id={`f${l.floor}`} data-floor={l.floor} data-label={`Lab · ${l.name}`} aria-labelledby={`h${l.floor}`}
            className={`floor lab${isOpen ? ' open' : ''}${isOpen && docked ? ' lit' : ''}`}
          >
            <div className="shaft"><div className="dind">{l.floor}</div><div className="door" /></div>
            <div className="room lroom">
              <h2 className="lh" id={`h${l.floor}`}>
                <button className="lhead" type="button" aria-expanded={isOpen} aria-controls={`p${l.floor}`} onClick={() => openLab(l.floor)}>
                  <span className="fno sm">{l.floor}</span>
                  <svg viewBox="-2 -2 28 44" width="14" height="23" aria-hidden="true">
                    <path d={sigils[l.floor]} style={{ fill: 'none', stroke: 'var(--muted)', strokeWidth: 2.6, strokeLinecap: 'square' }} />
                  </svg>
                  <span className="lname">{l.name}</span>
                  <span className="lsub">{l.kind}</span>
                  <span className="lstat">{l.stat}</span>
                  <span className="lcta">{isOpen ? 'Open' : 'Visit ↓'}</span>
                </button>
              </h2>
              {isOpen && (
                <div className="lbody" id={`p${l.floor}`}>
                  <div className="ldoors" aria-hidden="true"><span /><span /></div>
                  <div>
                    <div className="lbl">Lab · layer: {l.layer}</div>
                    <p style={{ margin: '10px 0 0' }}>{l.text}</p>
                    <p className="mono" style={{ margin: '14px 0 0' }}>{l.stack}</p>
                    <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
                      <a href={href(l.code)} target="_blank" rel="noopener">Code ↗</a>
                      {l.writeup && <a href={l.writeup}>Write-up →</a>}
                    </div>
                  </div>
                  <div className="panel dg" role="img" aria-label={l.caption}>
                    <Diagram name={l.diagram} />
                  </div>
                </div>
              )}
            </div>
            <div className="side"><span className="led" /><span className="owin" /></div>
          </section>
        );
      })}
    </div>
  );
}
