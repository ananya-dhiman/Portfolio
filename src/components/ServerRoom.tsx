import { Fragment } from 'react';
import { Floor } from './Floor';
import { racks as rackData } from '../content/stack';
import { iconPath } from '../content/icons';

const racks = rackData.map((r) => ({
  no: r.id,
  title: r.title,
  units: r.items.map((n) => {
    const icon = iconPath(n);
    return { n, icon: icon ?? '', has: !!icon, no: !icon, l: n.charAt(0) };
  }),
}));

export function ServerRoom() {
  return (
    <Floor num="12" title="Server room" kicker="Stack">
      <div className="sroom">
        <div className="racks">
          {racks.map((rk, _i1) => (<Fragment key={_i1}><section className="rack" aria-label={rk.title}><header className="rk-top"><span className="mono mut">{rk.no}</span><span className="rk-name">{rk.title}</span></header><ul className="units">{rk.units.map((u, _i2) => (<Fragment key={_i2}><li className="unit">{u.has && (<><svg className="uico" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d={u.icon} /></svg></>)}{u.no && (<><span className="uico ulet" aria-hidden="true">{u.l}</span></>)}<span className="uname">{u.n}</span></li></Fragment>))}</ul><footer className="rk-feet" aria-hidden="true"><i /><i /></footer></section></Fragment>))}
        </div>
        <div className="rfloor" aria-hidden="true" />
      </div>
    </Floor>
  );
}
