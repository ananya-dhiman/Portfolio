import type { ReactNode } from 'react';
import { useTheme } from '../hooks';
import type { Block, PostDoc } from '../content/post-emty';
import { site } from '../content/site';
import { labs } from '../content/labs';

/** Bracketed values are unfilled placeholders, same convention as the rest of content/. */
const ph = (s: string) => s.trim().startsWith('[');

// Minimal inline markup so body copy stays plain strings: **bold**, _italic_, `code`, [text](url).
const INLINE = /\*\*([^*]+)\*\*|_([^_]+)_|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

function Inline({ x }: { x: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(x)) !== null) {
    if (m.index > last) out.push(x.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={k++}>{m[1]}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k++}>{m[2]}</em>);
    else if (m[3] !== undefined) out.push(<code key={k++}>{m[3]}</code>);
    else out.push(<a key={k++} href={m[5]} target="_blank" rel="noopener">{m[4]}</a>);
    last = m.index + m[0].length;
  }
  if (last < x.length) out.push(x.slice(last));
  return <>{out}</>;
}

function Blocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((b, i) => {
        switch (b.t) {
          case 'h':
            return <h2 key={i}><Inline x={b.x} /></h2>;
          case 'quote':
            return <blockquote key={i}><Inline x={b.x} /></blockquote>;
          case 'ul':
            return <ul key={i}>{b.items.map((x, k) => <li key={k}><Inline x={x} /></li>)}</ul>;
          case 'ol':
            return <ol key={i}>{b.items.map((x, k) => <li key={k}><Inline x={x} /></li>)}</ol>;
          case 'code':
            return <pre key={i} className="pcode"><code>{b.x}</code></pre>;
          case 'img':
            return (
              <figure key={i}>
                <img src={b.src} alt={b.alt} loading="lazy" />
                {b.cap && <figcaption className="mono mut">{b.cap}</figcaption>}
              </figure>
            );
          default:
            return <p key={i}><Inline x={b.x} /></p>;
        }
      })}
    </>
  );
}

export function Post({ doc }: { doc: PostDoc }) {
  const [time, toggleTime] = useTheme();
  const lab = labs.find((l) => l.name === doc.lab.name);

  return (
    <div className="tw post" data-time={time}>
      <a className="skip" href="#article">Skip to the article</a>

      <header className="hdr">
        <div className="hdr-in">
          <a className="mono" href="/" style={{ textDecoration: 'none' }}>← {site.name} · The Tower</a>
          <button className="tbtn" onClick={toggleTime} aria-pressed={time === 'day'}>
            {time === 'day' ? 'night' : 'day'}
          </button>
        </div>
      </header>

      <main className="pwrap">
        <article className="prose" id="article">
          <p className="lbl pkick">
            Floor 02 · Library{!ph(doc.date) && <> · {doc.date}</>}{!ph(doc.read) && <> · {doc.read}</>}
          </p>
          <h1>{doc.title}</h1>
          {!ph(doc.dek) && <p className="pdek"><Inline x={doc.dek} /></p>}
          <hr />
          <Blocks body={doc.body} />
        </article>

        <aside className="pside panel">
          <p className="lbl">The lab this is about</p>
          <p className="pside-name">{doc.lab.name}</p>
          {lab && <p className="mut" style={{ margin: '0 0 14px' }}>{lab.kind} · {lab.stat}</p>}
          {lab && !ph(lab.code) && (
            <p className="mono" style={{ margin: '0 0 18px' }}>
              <a href={lab.code} target="_blank" rel="noopener">Code ↗</a>
            </p>
          )}
          <p className="lbl">Also published on</p>
          <p className="mono" style={{ margin: '0 0 18px' }}>
            <a href={doc.medium} target="_blank" rel="noopener">Medium ↗</a>
          </p>
          <p className="mono"><a href={`/#f${doc.lab.floor}`}>Visit floor {doc.lab.floor} →</a></p>
        </aside>
      </main>

      <footer className="pfoot">
        <p className="mono"><a href="/#f02">← Back to the Library</a></p>
        <p className="mut mono">{site.footer}</p>
      </footer>
    </div>
  );
}
