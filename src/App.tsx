import { useEffect, useRef } from 'react';
import { prefersReducedMotion, useCurrentFloor, useTheme } from './hooks';
import { Logo } from './components/Mark';
import { floors } from './content/floors';
import { labs } from './content/labs';
import { site } from './content/site';
import { Rooftop } from './components/Rooftop';
import { Office } from './components/Office';
import { ServerRoom } from './components/ServerRoom';
import { Labs } from './components/Labs';
import { Dispatch } from './components/Dispatch';
import { Library } from './components/Library';
import { MusicRoom } from './components/MusicRoom';
import { Lobby } from './components/Lobby';
import { Street } from './components/Street';

const isLab = (num: string) => labs.some((l) => l.floor === num);

export function App() {
  const current = useCurrentFloor();
  const [theme, toggleTheme] = useTheme();
  const here = floors.find((f) => f.num === current) ?? floors[0];
  const panel = useRef<HTMLElement>(null);

  // On phones the lift panel is a scrolling strip, so keep the current floor's button in view.
  useEffect(() => {
    const p = panel.current, on = p?.querySelector('.lb.on');
    if (!p || !on || p.scrollWidth <= p.clientWidth) return;
    const box = on.getBoundingClientRect();
    const left = p.scrollLeft + box.left - p.getBoundingClientRect().left - (p.clientWidth - box.width) / 2;
    p.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, [current]);

  return (
    <div className="tw" data-time={theme}>
      <a className="skip" href="#f10">Skip to labs</a>
      <header className="hdr">
        <div className="hdr-in">
          <a href="#fR" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--line)' }}>
            <Logo />
            <span className="mono" style={{ fontWeight: 700 }}>{site.name.toUpperCase()}</span>
            <span className="lbl">/ The Tower</span>
          </a>
          <span className="lbl">{site.role} · {site.city}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="ind" aria-live="polite"><span aria-hidden="true">▼</span><b>{here.num}</b><span className="mut">{here.label}</span></div>
            <button className="tbtn" type="button" aria-pressed={theme === 'day'} aria-label="Toggle night and day theme" onClick={(e) => toggleTheme({ clientX: e.clientX, clientY: e.clientY })}>◐</button>
          </div>
        </div>
      </header>

      <div className="wrap">
        <main className="bld">
          <Rooftop />
          <Office />
          <ServerRoom />
          <Labs />
          <Dispatch />
          <Library />
          <MusicRoom />
          <Lobby />
          <Street />
        </main>
        <aside className="rail">
          <nav ref={panel} className="lift-panel" aria-label="Floors">
            {floors.map((f) => (
              <a
                key={f.num} className={f.num === current ? 'lb on' : 'lb'} href={`#f${f.num}`}
                aria-label={`Floor ${f.num}, ${f.label}`} aria-current={f.num === current ? 'location' : undefined}
                onClick={() => isLab(f.num) && window.dispatchEvent(new CustomEvent('open-lab', { detail: f.num }))}
              >
                {f.num === 'R' || f.num === 'G' ? f.num : String(Number(f.num))}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
