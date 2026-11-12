// One glyph per lab floor, keyed by floor number. If a lab is renumbered, move its glyph with it.
// 11 SNIX · 10 FLUX · 09 REDDB · 08 EMTY · 07 Aegis Audit · 06 Ghostproof · 05 VibeScape · 04 Fasal Forecast
export const sigils: Record<string, string> = {
  "11": "M12 0V40M12 20L21 5M12 20L21 35M3 15H12",
  "10": "M12 0V40M3 5L12 20L3 35",
  "09": "M12 0V40M6 10H18M6 30H18M12 20L18 30",
  "08": "M12 0V40M21 5L12 20L21 35M12 20L3 35",
  "07": "M12 0V40M3 5L12 20L21 5M6 30H18",
  "06": "M12 0V40M4 10H20M4 10V22L12 31L20 22V10",
  "05": "M12 0V40M12 5L21 20L12 35M3 20H12",
  "04": "M12 0V40M12 20L3 10M12 20L21 10M12 30L5 24M12 30L19 24"
};
