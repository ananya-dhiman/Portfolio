import { Fragment, useRef } from 'react';
import { site } from '../content/site';
import { stars, farTowers, towers, crowns, wins, rail, faces } from '../content/scene';
import { useSearchlight, vars } from '../hooks';
import { MarkFacets } from './Mark';

export function Rooftop() {
  const roof = useRef<HTMLElement>(null);
  const beam = useRef<SVGGElement>(null);
  const disc = useRef<SVGGElement>(null);
  useSearchlight(roof, beam, disc);

  return (
    <section ref={roof} id="fR" className="roof" data-floor="R" data-label="Rooftop" aria-labelledby="hero-h">
      <svg viewBox="0 0 1280 760" preserveAspectRatio="xMidYMax slice" aria-hidden="true">{stars.map((s, _i1) => (<Fragment key={_i1}><circle className="star" cx={s.x} cy={s.y} r="1" style={{ fill: "var(--hair2)" }} /></Fragment>))}<path className="ln moon" d="M1160 84A30 30 0 1 0 1194 126A24 24 0 1 1 1160 84Z" /><g className="plane"><path className="pbody" d="M0 108H42L50 112L42 116H0L-6 106H2ZM18 112L30 124H36L30 112M18 108L28 98H33L29 108" /><circle className="bl accf" cx="-4" cy="106" r="3" /><circle className="strobe" cx="31" cy="122" r="2.4" /></g>{farTowers.map((t, _i2) => (<Fragment key={_i2}><rect x={t.x} y={t.y} width={t.w} height={t.h} style={{ fill: "var(--bldgFar)", stroke: "var(--hair)", strokeWidth: "1" }} /></Fragment>))}<path className="lnh" d="M-60 692H330M52 744L70 466L88 744M60 600H80M62 540H78" /><path d="M70 476L-40 692M70 484L-6 692M70 492L28 692M70 476L180 692M70 484L146 692M70 492L112 692" style={{ fill: "none", stroke: "var(--hair)", strokeWidth: "1" }} />{towers.map((t, _i3) => (<Fragment key={_i3}><rect className="lnh" x={t.x} y={t.y} width={t.w} height={t.h} style={{ fill: "var(--bldg)" }} /></Fragment>))}<path className="lnh" d={crowns} />{wins.map((w, _i4) => (<Fragment key={_i4}><rect className={w.cls} x={w.x} y={w.y} width="6" height="9" style={vars({ "--d": `${w.d}s`, "--dl": `${w.dl}s` })} /></Fragment>))}<line className="lnh" x1="990" y1="300" x2="990" y2="270" /><circle className="beacon halo" cx="990" cy="267" r="9" /><circle className="beacon" cx="990" cy="267" r="3.5" /><defs><linearGradient id="bGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style={{ stopColor: 'var(--acc)', stopOpacity: 0.26 }} /><stop offset="0.7" style={{ stopColor: 'var(--acc)', stopOpacity: 0.09 }} /><stop offset="1" style={{ stopColor: 'var(--acc)', stopOpacity: 0 }} /></linearGradient><radialGradient id="dGrad"><stop offset="0" style={{ stopColor: 'var(--acc)', stopOpacity: 0.3 }} /><stop offset="0.72" style={{ stopColor: 'var(--acc)', stopOpacity: 0.16 }} /><stop offset="1" style={{ stopColor: 'var(--acc)', stopOpacity: 0 }} /></radialGradient></defs><g className="beam" ref={beam}><polygon className="bpoly" points="1058,686 1072,682 930,150 830,150" style={{ fill: 'url(#bGrad)' }} /></g><g className="disc" ref={disc}><circle cx="880" cy="150" r="62" style={{ fill: 'url(#dGrad)' }} /><circle className="dring" cx="880" cy="150" r="47" /><g transform="translate(850 120) scale(1.25)"><MarkFacets /></g><path className="mglint" d="M911 121L913 127L919 129L913 131L911 137L909 131L903 129L909 127Z" /></g><g className="bb"><path className="lnh" d="M200 652V726M780 652V726M200 668L780 716M780 668L200 716" /><path className="ln" d="M70 652H910" /><path className="lnh" d="M70 640H910M70 640V652M210 640V652M350 640V652M490 640V652M630 640V652M770 640V652M910 640V652" /><rect className="fills" x="80" y="200" width="820" height="440" /><rect className="lnh" x="90" y="210" width="800" height="420" /><path className="ln" d="M200 200V184M200 184L216 176M490 200V184M490 184L506 176M780 200V184M780 184L796 176" /></g><path className="lnh" d={rail} /><rect className="fillr" x="1040" y="712" width="50" height="32" /><path className="ln" d="M1046 712L1056 692M1084 712L1074 692" /><g transform="rotate(-70 1065 684)"><rect className="fillr" x="1043" y="670" width="44" height="28" rx="3" /><path className="ln" d="M1087 672V696" /><path className="lnh" d="M1050 676H1080M1050 684H1080M1050 692H1080" /></g><line className="ln" x1="0" y1="744" x2="1280" y2="744" /></svg>
      <div className="cube-stage" aria-hidden="true">
        <div className="cube">
          {faces.map((f, i) => (
            <div key={i} className={f.cls}>
              <svg viewBox="0 0 12 12" width="100%" height="100%" shapeRendering="crispEdges">
                {f.px.map((p, k) => <rect key={k} className={p.c} x={p.x} y={p.y} width="1" height="1" />)}
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="sign">
        <div className="lbl">{site.name} · {site.role} · {site.city}</div>
        <h1 id="hero-h">
          <span className="tube" style={{ animationDelay: '.1s' }}>Building</span>{' '}
          <em className="tube" style={{ animationDelay: '.3s' }}><span className="stut" style={{ display: 'inline-block' }}>(</span>and breaking)</em>{' '}
          <span className="tube" style={{ animationDelay: '.5s' }}>stuff</span>
        </h1>
        <p className="mut" style={{ margin: '14px 0 0', fontSize: 16 }}>{site.sub}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <a className="btn solid" href="#f09">Downstairs ↓</a>
          <a className="btn" href={site.resume} target="_blank" rel="noopener">Résumé ↗</a>
        </div>
      </div>
    </section>
  );
}
