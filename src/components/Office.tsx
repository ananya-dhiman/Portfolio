import { Fragment } from 'react';
import { Floor } from './Floor';
import { experience } from '../content/experience';
import { useIST, vars } from '../hooks';

export function Office() {
  const { hourRot, minRot, secRot, istLabel } = useIST();
  return (
    <Floor num="12" title="Office" kicker="Experience" className="litf">
      <div className="ofc5">
        <svg className="ill ofc5-ill" viewBox="0 0 520 540" aria-hidden="true"><defs><clipPath id="twWin"><rect x="31" y="91" width="458" height="308" /></clipPath><clipPath id="twScr"><rect x="196" y="346" width="128" height="64" /></clipPath></defs><circle className="fillr" cx="260" cy="44" r="26" /><path className="lnh" d="M260 20V25M260 63V68M236 44H241M279 44H284" /><line className="ln" x1="260" y1="44" x2="260" y2="30" style={{ strokeWidth: "2.2" }} transform={hourRot} /><line className="ln" x1="260" y1="44" x2="260" y2="24" transform={minRot} /><line className="accs" x1="260" y1="47" x2="260" y2="21" style={{ strokeWidth: "1" }} transform={secRot} /><text className="t9" x="296" y="48">IST {istLabel}</text><rect className="fills" x="30" y="90" width="460" height="310" /><g clipPath="url(#twWin)"><path className="lnh" d="M38 400V250H80V400M88 400V196H134V400M144 400V268H176V400M190 400V164H244V400M254 400V232H290V400M300 400V180H344V400M354 400V250H388V400M398 400V150H446V400M456 400V214H490" /><rect className="nw" x="104" y="220" width="5" height="8" style={vars({ "--d": "11s", "--dl": "1s" })} /><rect className="nw r" x="208" y="190" width="5" height="8" style={vars({ "--d": "13s", "--dl": "0s" })} /><rect className="nw" x="268" y="256" width="5" height="8" style={vars({ "--d": "9s", "--dl": "4s" })} /><rect className="nw" x="316" y="204" width="5" height="8" style={vars({ "--d": "7s", "--dl": "2s" })} /><rect className="nw" x="414" y="176" width="5" height="8" style={vars({ "--d": "12s", "--dl": "5s" })} /><rect className="nw r" x="420" y="268" width="5" height="8" style={vars({ "--d": "10s", "--dl": "3s" })} /><g className="trainW2"><rect className="fills" x="0" y="374" width="190" height="16" /><path className="lnh" d="M10 379H180" /><rect className="accf" x="12" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="38" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="64" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="90" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="116" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="142" y="378" width="12" height="6" /><rect style={{ fill: "var(--winOn)" }} x="168" y="378" width="12" height="6" /></g></g><path className="ln" d="M183 90V400M337 90V400M30 245H490" /><rect className="fills" x="190" y="340" width="140" height="76" rx="3" /><g clipPath="url(#twScr)"><g className="logs"><text className="t9b" x="202" y="362">$ flux bench</text><text className="t9" x="202" y="374">93,104 msg/s</text><text className="t9" x="202" y="386">p99 67µs</text><text className="t9b" x="202" y="398">$ go test -race</text><text className="t9" x="202" y="410">ok reddb 1.2s</text><text className="t9b" x="202" y="422">$ snix routes</text><text className="t9" x="202" y="434">/api → b2</text><text className="t9b" x="202" y="446">$ flux bench</text><text className="t9" x="202" y="458">93,104 msg/s</text><text className="t9" x="202" y="470">p99 67µs</text><text className="t9b" x="202" y="482">$ go test -race</text><text className="t9" x="202" y="494">ok reddb 1.2s</text></g><rect className="cur accf" x="202" y="400" width="5" height="8" /></g><path className="ln" d="M254 416V428M240 428H280" /><path className="fillr" d="M216 430H304L308 436H212Z" /><path className="ln" d="M348 414H366L364 436H350Z" /><path className="steam" d="M353 406C349 398 357 394 353 386" /><path className="steam" d="M360 406C356 398 364 394 360 386" style={{ animationDelay: "1.2s" }} /><path className="ln" d="M132 436H156M144 436L136 400L156 384M152 378L170 390L160 396Z" /><rect style={{ fill: "var(--line7)" }} x="90" y="436" width="340" height="8" /><path className="ln" d="M108 444V536M412 444V536" /></svg>
        <div className="xp5">
          {experience.map((x) => (
            <article className="xbox" key={x.org}>
              <div className="xp-meta mono"><span>{x.when}</span><span>{x.where}</span></div>
              <h3 className="xb-co">{x.org}</h3>
              <div className="xb-role">{x.role}</div>
              <p className="xb-d">{x.line}</p>
            </article>
          ))}
        </div>
      </div>
    </Floor>
  );
}
