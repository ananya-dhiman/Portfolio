import paths from './iconPaths.json';

/** Tool name -> SVG path (24x24 viewBox). Tools with no icon (null) fall back to a letter tile. */
export const iconPath = (name: string): string | undefined =>
  (paths as Record<string, string | null>)[name] ?? undefined;
