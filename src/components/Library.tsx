import { Floor } from './Floor';
import { posts, library } from '../content/posts';

// Spine [width, height] per book; the red one lifts on hover.
const shelves: { red: number; books: [number, number][] }[] = [
  { red: 2, books: [[16, 82], [22, 94], [18, 88], [14, 70], [20, 90]] },
  { red: 1, books: [[20, 90], [16, 84], [24, 96], [14, 74], [18, 86]] },
  { red: 3, books: [[14, 78], [20, 92], [16, 80], [22, 94], [16, 72]] },
];

export function Library() {
  return (
    <Floor num="02" title="Library" kicker="Writing">
      <p style={{ margin: '0 0 24px' }}>{library.line}</p>
      <div className="lib2">
        <div className="srows">
          {shelves.map((s, i) => {
            const p = posts[i];
            return (
              <a className="srow" key={i} href={p?.url ?? `#post-${i + 1}`}>
                <span className="spines" aria-hidden="true">
                  {s.books.map(([w, h], k) => <i key={k} className={k === s.red ? 'r' : undefined} style={{ width: w, height: h }} />)}
                </span>
                <span className="sinfo">
                  <span className="lbl">Post 0{i + 1} · {p?.date ?? library.placeholder.date}</span>
                  <span className="stitle">{p?.title ?? library.placeholder.title}</span>
                  <span className="mono mut">{p?.read ?? library.placeholder.read}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <p className="mono" style={{ margin: '18px 0 0' }}><a href="#f02">All posts →</a></p>
    </Floor>
  );
}
