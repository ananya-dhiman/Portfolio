/** The site mark: a cut gem whose facets are separated by thin channels. */
const FACETS: [string, string][] = [
  ['m3', '2,16 12,4 15,16'],
  ['m2', '12,4 24,4 15,16'],
  ['m1', '24,4 33,16 15,16'],
  ['m2', '24,4 36,4 33,16'],
  ['m4', '36,4 46,16 33,16'],
  ['m2', '2,16 15,16 24,44'],
  ['m1', '15,16 33,16 24,44'],
  ['m3', '33,16 46,16 24,44'],
];

/** Bare facets, for placing inside another SVG. They occupy 48x48 units. */
export function MarkFacets() {
  return <>{FACETS.map(([tone, points]) => <polygon key={points} className={`mk ${tone}`} points={points} />)}</>;
}

export function Logo({ size = 24 }: { size?: number }) {
  return <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true"><MarkFacets /></svg>;
}
