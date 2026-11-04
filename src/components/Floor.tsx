import type { ReactNode } from 'react';
import { floors } from '../content/floors';

interface Props { num: string; title: string; kicker: string; className?: string; children: ReactNode }

/** A regular (non-lab) floor: shaft, room with title, outer window. */
export function Floor({ num, title, kicker, className = '', children }: Props) {
  const label = floors.find((f) => f.num === num)?.label;
  const hid = `h${num}`;
  return (
    <section id={`f${num}`} className={`floor ${className}`.trim()} data-floor={num} data-label={label} aria-labelledby={hid}>
      <div className="shaft" />
      <div className="room">
        <div className="fhead">
          <span className="fno">{num}</span>
          <div><h2 id={hid} className="fh">{title}</h2><div className="lbl" style={{ marginTop: 6 }}>{kicker}</div></div>
        </div>
        {children}
      </div>
      <div className="side"><span className="owin" /></div>
    </section>
  );
}
