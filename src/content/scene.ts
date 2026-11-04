/**
 * Build-time scene data for the rooftop, cube, street and flip board.
 * One seeded generator feeds everything in a fixed order, so the art is identical on every load.
 */
let seed = 11;
const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

const towerSpec: [number, number, number, string][] = [
  [210, 110, 330, 'spire'], [470, 90, 280, 'step'], [600, 110, 360, 'tank'],
  [930, 120, 300, 'none'], [1060, 80, 470, 'tank'], [1150, 130, 380, 'step'],
];
export const towers = towerSpec.map(([x, w, y]) => ({ x, w, y, h: 744 - y }));
export const farTowers = ([[160, 60, 400], [360, 70, 440], [540, 60, 330], [770, 70, 390], [880, 60, 450], [1210, 70, 430]] as const)
  .map(([x, w, y]) => ({ x, w, y, h: 744 - y }));

export const crowns = towerSpec.reduce((d, [x, w, y, kind]) => {
  if (kind === 'spire') d += `M${x + w / 2} ${y}V${y - 46}M${x + w / 2 - 8} ${y - 14}H${x + w / 2 + 8}`;
  if (kind === 'step') d += `M${x + w * 0.2} ${y}V${y - 22}H${x + w * 0.8}V${y}M${x + w * 0.35} ${y - 22}V${y - 36}H${x + w * 0.65}V${y - 22}`;
  if (kind === 'tank') d += `M${x + 14} ${y}V${y - 10}M${x + 40} ${y}V${y - 10}M${x + 8} ${y - 10}H${x + 46}V${y - 30}H${x + 8}Z`;
  return d;
}, '');

export const wins: { x: number; y: number; cls: string; d: string; dl: string }[] = [];
for (const [x0, w, y0] of towerSpec) {
  for (let y = y0 + 16; y < 730; y += 22) {
    for (let x = x0 + 8; x < x0 + w - 10; x += 14) {
      if (rand() < 0.3) wins.push({ x, y, cls: rand() < 0.06 ? 'nw r' : 'nw', d: (8 + rand() * 16).toFixed(1), dl: (-rand() * 20).toFixed(1) });
    }
  }
}

// The prototype drew two values per rack unit here; keep the draws so later art stays identical.
for (let i = 0; i < 27; i++) { rand(); rand(); }

export const faces = Array.from({ length: 6 }, (_, f) => {
  const px: { x: number; y: number; c: string }[] = [];
  for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) {
    const r = rand();
    const edge = x === 0 || y === 0 || x === 11 || y === 11;
    if (edge ? r < 0.12 : r < 0.42) px.push({ x, y, c: r < 0.03 ? 'pxr' : 'pxw' });
  }
  return { cls: `face f${f}`, px };
});

export const stars = Array.from({ length: 14 }, () => ({ x: Math.round(rand() * 1280), y: Math.round(20 + rand() * 220) }));

/** REDDB keyspace grid: 3 rows x 6 cells with random TTL timings. */
export const cells: { x: number; y: number; ix: number; iy: number; on: boolean; delay: string; dur: string }[] = [];
for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
  const x = c * 44, y = 120 + r * 36;
  cells.push({ x, y, ix: x + 4, iy: y + 4, on: rand() < 0.7 && !(c === 2 && r === 1), delay: (rand() * 4).toFixed(2) + 's', dur: (3 + rand() * 4).toFixed(2) + 's' });
}

export const rail = (() => {
  let d = 'M122 726H1280';
  for (let x = 128; x <= 1280; x += 32) d += `M${x} 726V744`;
  return d;
})();

/** Split-flap board rows: fixed 12 + 18 + 6 character columns. */
const padTo = (t: string, w: number) => (t + ' '.repeat(w)).slice(0, w);
export const flapRows = (rows: [string, string, string, string][]) =>
  rows.map((r, ri) => ({
    chars: (padTo(r[0], 16) + ' ' + padTo(r[1], 16) + ' ' + padTo(r[2], 6)).split('').map((c, ci) => ({
      c,
      cls: 'fl' + (r[3] === 'h' ? ' h' : ci >= 34 ? ' a' : ''),
      d: (ri * 0.45 + ci * 0.03).toFixed(2),
    })),
  }));
