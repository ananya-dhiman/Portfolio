import { Floor } from './Floor';
import { music } from '../content/music';
import { wallCuts, wallPieces } from '../content/wallpaper';

/** Full-room wallpaper: tone-on-tone shards with a few loud accents kept clear of the text. */
function Wall() {
  return (
    <svg className="wall" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {wallPieces.map((p, i) => <path key={i} className={`ws${p.t}`} d={p.d} />)}
      {wallCuts.map((d, i) => <path key={i} className="wcut" d={d} />)}
      <g className="wtag">
        <path d="M506 640L470 706L504 698L480 770L552 672L516 680L546 640Z" />
        <path d="M310 196L320 226H352L326 245L336 275L310 256L284 275L294 245L268 226H300Z" />
      </g>
      <g className="whatch">
        <path d="M430 96L454 40H470L446 96Z" /><path d="M462 96L486 40H502L478 96Z" /><path d="M494 96L518 40H534L510 96Z" />
      </g>
      <path className="wa" d="M770 -10H905L862 58L1006 18L934 112L1060 84L886 190L940 116L800 150L852 72L716 108Z" />
      <path className="wa" d="M1100 -10H1210V212L1160 96L1122 150Z" />
      <path className="wa" d="M26 216L92 190L58 302L104 286L12 492L36 346L-10 362Z" />
      <path className="wa" d="M-10 744L58 694L134 810H66L44 760L-10 790Z" />
      <path className="wa wlow" d="M566 810L622 712L704 772L672 810L630 772L612 810Z" />
      <path className="wc wlow" d="M846 810L912 716L990 768L1046 690L1210 730V754L1066 728L1004 810L926 762L894 810Z" />
    </svg>
  );
}

const SCALE = 430;
const fretY = (n: number) => SCALE * (1 - 2 ** (-n / 12));
const halfAt = (y: number) => 17 + (6 * y) / 326;
const frets = Array.from({ length: 24 }, (_, i) => fretY(i + 1));
const fretPath = frets.map((y) => { const h = halfAt(y); return `M${(-h).toFixed(1)} ${y.toFixed(1)}H${h.toFixed(1)}`; }).join('');
/** Sharktooth inlays between the frets. */
const teeth = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24].map((n) => {
  const top = fretY(n - 1), bot = fretY(n), h = halfAt(bot) * 0.72, a = top + (bot - top) * 0.2, b = bot - (bot - top) * 0.16;
  return `M${(-h).toFixed(1)} ${b.toFixed(1)}L${h.toFixed(1)} ${b.toFixed(1)}L${h.toFixed(1)} ${a.toFixed(1)}Z`;
}).join('');

const STRINGS = [0, 1, 2, 3, 4, 5];
const BODY = 'M-23 274Q-52 272-88 296Q-70 326-58 360Q-128 520-212 668Q-118 530-12 480Q46 488 104 546Q68 450 66 368Q112 276 170 190Q100 252 24 300Z';
const HEAD = 'M-18 2L-20 -12L-46 -36L8 -104L54 -144L40 -92L23 -44L18 2Z';
const NECK = 'M-17 0H17L23 326H-23Z';
/** Tuner posts run up the blade of the headstock, keys sticking out of its left edge. */
const post = (i: number): [number, number] => [-24 + i * 10.4, -38 - i * 14.2];
const keys = STRINGS.map((i) => { const [x, y] = post(i); return `M${x - 7} ${y - 5.3}L${x - 20} ${y - 15}`; }).join('');
const headStrings = STRINGS.map((i) => { const [x, y] = post(i); return `M${-12 + i * 4.8} 0L${x} ${y}`; }).join('');
const bodyStrings = STRINGS.map((i) => `M${-12 + i * 4.8} 0L${-15 + i * 6} 430`).join('');

function Humbucker({ y }: { y: number }) {
  return (
    <g>
      <rect className="gring" x="-35" y={y - 14} width="70" height="28" rx="2" />
      <rect className="gcoil" x="-29" y={y - 10} width="58" height="9" />
      <rect className="gcoil" x="-29" y={y + 1} width="58" height="9" />
      {STRINGS.map((i) => <circle key={i} className="gpole" cx={-15 + i * 6} cy={y - 5.5} r="1.5" />)}
      {STRINGS.map((i) => <circle key={i} className="gpole" cx={-15 + i * 6} cy={y + 5.5} r="1.5" />)}
    </g>
  );
}

/** Spiked V-body electric, drawn upright around the neck axis and tilted lower-left to upper-right. */
function Guitar() {
  const place = 'translate(522 112) rotate(30)';
  return (
    <svg className="ill mwall" viewBox="0 0 660 640" aria-hidden="true">
      <g className="gshadow" transform={`translate(16 15) ${place}`}><path d={BODY} /><path d={HEAD} /><path d={NECK} /></g>
      <g transform={place}>
        <path className="gkeys o" d={keys} />
        <path className="gkeys" d={keys} />
        <path className="gbody" d={HEAD} />
        <path className="gnecks" d={NECK} />
        <path className="gbody" d={BODY} />
        <path className="gfacet" d="M-212 668Q-118 530-12 480Q46 488 104 546Q40 472-14 464Q-110 494-212 668Z" />
        <path className="gfacet" d="M104 546Q68 450 66 368Q56 450 104 546Z" />
        <path className="gglint" d="M-82 426L-127 519L-166 595L-197 650L-160 596L-122 521Z" />
        <path className="gglint" d="M46 296L156 203L62 292Z" />
        <path className="gglint" d="M-80 300L-34 280L-62 300Z" />
        <path className="gglint" d="M-34 -30L8 -92L40 -126L14 -88Z" />
        <path className="gboard" d={NECK} />
        <path className="gfret" d={fretPath} />
        <path className="gtooth" d={teeth} />
        <path className="gbind" d="M-17 0L-23 326M17 0L23 326" />
        <path className="gnut" d="M-18 0H18" />
        <path className="gtruss" d="M-8 -5H8L4 -30H-4Z" />
        {STRINGS.map((i) => { const [x, y] = post(i); return <circle key={i} className="gpost" cx={x} cy={y} r="2.8" />; })}
        <Humbucker y={349} />
        <Humbucker y={402} />
        <rect className="gbridge" x="-29" y="426" width="58" height="11" rx="1.5" />
        {STRINGS.map((i) => <rect key={i} className="gsaddle" x={-17 + i * 6} y="424" width="4" height="7" />)}
        <path className="gtail" d="M-22 437H22L16 456H-16Z" />
        <path className="gbar" d="M-24 434L-66 500" />
        <circle className="gtoggle" cx="45" cy="326" r="3.4" />
        <circle className="gknob" cx="47" cy="398" r="7.5" /><circle className="gknob" cx="55" cy="431" r="7.5" /><circle className="gknob" cx="65" cy="465" r="7.5" />
        <path className="gtick" d="M47 391V397M55 424V430M65 458V464" />
        <g className="strings"><path className="gstr" d={headStrings + bodyStrings} /></g>
      </g>
    </svg>
  );
}

export function MusicRoom() {
  return (
    <Floor num="01" title="Music room" kicker="After hours" className="music">
      <Wall />
      <div className="mroom2">
        <Guitar />
        <div className="mside">
          <p className="mquote">{music.line}</p>
          <div className="lbl" style={{ margin: '28px 0 10px' }}>Currently playing</div>
          <ol className="tracks">
            {music.playing.map((t, i) => (
              <li key={i} className={i === 0 ? 'on' : undefined}>
                {i === 0
                  ? <span className="eq" aria-hidden="true"><i /><i /><i /></span>
                  : <span className="tno mono">0{i + 1}</span>}
                <span>{t.song}</span><span className="mut">{t.artist}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Floor>
  );
}
