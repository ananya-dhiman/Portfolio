import { Floor } from './Floor';
import { posts, library } from '../content/posts';

// Spine [width, height] per shelf row; the red one lifts on hover. Rows are reused in order
// as posts are added, so the art stays stable and no empty row is ever drawn.
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
          {posts.map((p, i) => {
            const s = shelves[i % shelves.length];
            return (
              <a className="srow" key={p.url} href={p.url}>
                <span className="spines" aria-hidden="true">
                  {s.books.map(([w, h], k) => <i key={k} className={k === s.red ? 'r' : undefined} style={{ width: w, height: h }} />)}
                </span>
                <span className="sinfo">
                  <span className="lbl">Post 0{i + 1} · {p.date}</span>
                  <span className="stitle">{p.title}</span>
                  <span className="mono mut">{p.read}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Floor>
  );
}
