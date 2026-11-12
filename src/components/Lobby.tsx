import { Floor } from './Floor';
import { site } from '../content/site';

const href = (u: string) => (u.startsWith('[') ? '#' : u);

export function Lobby() {
  return (
    <Floor num="G" title="Lobby" kicker="Contact" className="litf">
      <div className="g2 lobby" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 0.6fr)', gap: 48, alignItems: 'end' }}>
        <div>
          <p style={{ margin: 0, fontFamily: "'Instrument Serif', serif", fontSize: 40, lineHeight: 1.12 }}>{site.contactLine}</p>
          <div className="clinks mono">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={href(site.github)} target="_blank" rel="noopener">GitHub ↗</a>
            <a href={href(site.linkedin)} target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href={href(site.x)} target="_blank" rel="noopener">X ↗</a>
            <a href={site.resume} target="_blank" rel="noopener">Résumé ↗</a>
          </div>
        </div>
        <div className="doorwrap">
          <div className="exitwrap">
            <span className="rods" aria-hidden="true" />
            <a className="exit" href={site.resume} target="_blank" rel="noopener" aria-label="Exit: open résumé"><span className="flick">EXIT</span></a>
          </div>
          <svg className="ill" viewBox="0 0 300 300" aria-hidden="true"><rect className="fills" x="20" y="20" width="260" height="280" /><rect className="fillr" x="32" y="32" width="114" height="268" style={{ fill: "var(--winOff)" }} /><rect className="fillr" x="154" y="32" width="114" height="268" style={{ fill: "var(--winOff)" }} /><path className="lnh" d="M48 70L100 122M54 100L120 166M170 70L222 122M176 100L242 166" /><path className="ln" d="M134 150V200M166 150V200" style={{ strokeWidth: "3" }} /></svg>
        </div>
      </div>
    </Floor>
  );
}
