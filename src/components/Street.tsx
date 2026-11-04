import { site } from '../content/site';

const href = (u: string) => (u.startsWith('[') ? '#' : u);

/** Top-down car drawn facing right, its back at x=0. `left` mirrors it for the other lane. */
function Car({ y, len, half, left, cls, style }: { y: number; len: number; half: number; left?: boolean; cls: string; style?: React.CSSProperties }) {
  const place = left ? `translate(${len} ${y}) scale(-1 1)` : `translate(0 ${y})`;
  const body = `M3 ${-half}Q0 ${-half} 0 ${3 - half}V${half - 3}Q0 ${half} 3 ${half}H${len - 12}Q${len - 2} ${half} ${len} ${half - 5}V${5 - half}Q${len - 2} ${-half} ${len - 12} ${-half}Z`;
  const glass = half - 3;
  const shield = `M${len * 0.56} ${-glass}L${len * 0.7} ${-glass + 2}V${glass - 2}L${len * 0.56} ${glass}Z`;
  const rear = `M${len * 0.2} ${-glass + 2}L${len * 0.12} ${-glass + 3}V${glass - 3}L${len * 0.2} ${glass - 2}Z`;
  return (
    <g className={cls} style={style}>
      <g transform={place}>
        <path className="cthrow" d={`M${len} -5L${len + 46} -13V13L${len} 5Z`} style={{ fill: 'url(#cGrad)' }} />
        <path className="fills" d={body} />
        <path className="cglass" d={shield + rear} />
        <path className="cseam" d={`M${len * 0.2} ${-half + 2}H${len * 0.56}M${len * 0.2} ${half - 2}H${len * 0.56}`} />
        <rect className="chead" x={len - 3} y={-half + 3} width="3" height="3.5" rx="1" />
        <rect className="chead" x={len - 3} y={half - 6.5} width="3" height="3.5" rx="1" />
        <rect className="accf" x="0" y={-half + 3} width="2" height="4" />
        <rect className="accf" x="0" y={half - 7} width="2" height="4" />
      </g>
    </g>
  );
}

const CAR = 194, GAP = 10;
const LEFT = [0, 1, 2].map((i) => i * (CAR + GAP));
const WINDOWS = [10, 28, 64, 82, 100, 118, 158, 176];
const DOORS = [46, 140];
const BOGIES = [28, 140];

/** Three-car train seen from the side, moving right, with a sloped nose on the last car. */
function Train() {
  const nose = LEFT[2];
  return (
    <g className="train">
      <rect className="fills" x={LEFT[0]} y="118" width={CAR} height="23" rx="2" />
      <rect className="fills" x={LEFT[1]} y="118" width={CAR} height="23" rx="2" />
      <path className="fills" d={`M${nose + 2} 118H${nose + CAR - 18}Q${nose + CAR - 6} 118 ${nose + CAR - 1} 131L${nose + CAR} 141H${nose}V120Q${nose} 118 ${nose + 2} 118Z`} />
      <path className="tcouple" d={`M${CAR} 136H${CAR + GAP}M${2 * CAR + GAP} 136H${2 * CAR + 2 * GAP}`} />
      {LEFT.map((x, c) => (
        <g key={x}>
          <rect className="accf" x={x + 1} y="135" width={c === 2 ? CAR - 8 : CAR - 2} height="1.4" />
          {WINDOWS.filter((w) => c < 2 || w < 170).map((w) => <rect key={w} x={x + w} y="123" width="14" height="8" rx="1" style={{ fill: 'var(--winOn)' }} />)}
          {DOORS.map((d) => <rect key={d} className="tdoor" x={x + d} y="121" width="13" height="20" />)}
          {BOGIES.map((b) => (
            <g key={b}>
              <circle className="twheel" cx={x + b} cy="143.4" r="2.3" />
              <circle className="twheel" cx={x + b + 16} cy="143.4" r="2.3" />
            </g>
          ))}
        </g>
      ))}
      <path className="cglass" d={`M${nose + CAR - 18} 122H${nose + CAR - 9}L${nose + CAR - 5} 131H${nose + CAR - 18}Z`} />
      <rect className="accf" x={LEFT[0]} y="125" width="2.5" height="5" />
      <rect className="chead" x={nose + CAR - 4} y="134" width="3.5" height="3" rx="1" />
    </g>
  );
}

export function Street() {
  return (
    <>
      <div className="street" aria-hidden="true">
        <svg viewBox="0 0 1280 150" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cGrad"><stop offset="0" style={{ stopColor: 'var(--line)', stopOpacity: 0.2 }} /><stop offset="1" style={{ stopColor: 'var(--line)', stopOpacity: 0 }} /></linearGradient>
          </defs>
          <path className="lnh" d="M0 20H1280M0 104H1280" />
          <path className="lnh" d="M0 62H1280" style={{ strokeDasharray: '18 14' }} />
          <Car cls="carA" y={40} len={64} half={10} left />
          <Car cls="carA" y={41} len={54} half={9} left style={{ animationDelay: '4.5s', animationDuration: '11s' }} />
          <Car cls="carB" y={82} len={64} half={10} />
          <Car cls="carB" y={83} len={50} half={9} style={{ animationDelay: '3s', animationDuration: '9.5s' }} />
          <path className="ln" d="M0 116H1280M0 146H1280" />
          <path className="lnh" d="M0 131H1280" style={{ strokeDasharray: '4 10' }} />
          <Train />
        </svg>
      </div>
      <footer className="found">
        <div className="fhatch" aria-hidden="true" />
        <div className="fbar">
          <span className="mono mut">{site.footer}</span>
          <span className="mono" style={{ display: 'flex', gap: 20 }}>
            <a href={href(site.source)}>Source →</a><a href="#fR">Back to the roof ↑</a>
          </span>
        </div>
      </footer>
    </>
  );
}
