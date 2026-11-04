import { Fragment } from 'react';
import { Floor } from './Floor';
import { dispatch } from '../content/openSource';
import { flapRows as buildRows } from '../content/scene';

const flapRows = buildRows([
  ['REPO', 'CONTRIBUTION', 'STATUS', 'h'],
  ...dispatch.prs.map((p): [string, string, string, string] => [p.board[0], p.board[1], p.status.toUpperCase(), '']),
]);

const merged = `${dispatch.prs.length} merged PRs`;

export function Dispatch() {
  return (
    <Floor num="03" title="Dispatch" kicker="Open source">
      <div className="board" role="img" aria-label="Departures board of merged pull requests">
        <div className="lbl" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ color: 'var(--acc)' }}>{dispatch.title}</span><span>{merged} · {dispatch.program}</span>
        </div>
        {flapRows.map((row, _i1) => (<Fragment key={_i1}><div className="brow">{row.chars.map((c, _i2) => (<Fragment key={_i2}><span className={c.cls} style={{ animationDelay: `${c.d}s` }}>{c.c}</span></Fragment>))}</div></Fragment>))}
      </div>
      {/* The wrapper does the hiding: a table ignores width:1px, and a wide one makes the whole page scroll sideways. */}
      <div className="sr">
        <table>
          <caption>{dispatch.title}</caption>
          <thead><tr><th>Repo</th><th>Contribution</th><th>Status</th></tr></thead>
          <tbody>{dispatch.prs.map((p, i) => <tr key={i}><td><a href={p.url}>{p.repo}</a></td><td>{p.what}</td><td>{p.status}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="mlist">
        <div className="lbl mcount">{merged}</div>
        {dispatch.prs.map((p, i) => (
          <div className="mrow" key={i}><a className="mono" href={p.url} target="_blank" rel="noopener">{p.repo}</a><span>{p.what}</span><span className="lbl" style={{ color: 'var(--acc)' }}>{p.status}</span></div>
        ))}
      </div>
      <div className="honours">
        {dispatch.honours.map((h) => <div key={h.l}><div className="lbl">{h.l}</div><strong>{h.n}</strong></div>)}
      </div>
      <div className="sline">
        {dispatch.stats.map((s) => <span key={s.l}><b>{s.n}</b>{s.l}</span>)}
        <span className="mono mut">{dispatch.note}</span>
      </div>
    </Floor>
  );
}
