import { labs } from './labs';

export interface FloorMeta { num: string; label: string }

/** Top to bottom; drives the lift panel and header indicator. */
export const floors: FloorMeta[] = [
  { num: 'R', label: 'Rooftop' },
  { num: '13', label: 'Office' },
  { num: '12', label: 'Server room' },
  ...labs.map((l) => ({ num: l.floor, label: `Lab · ${l.name}` })),
  { num: '03', label: 'Dispatch' },
  { num: '02', label: 'Library' },
  { num: '01', label: 'Music room' },
  { num: 'G', label: 'Lobby' },
];
