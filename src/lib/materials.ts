export type Material = {
  id: string;
  name: string;
  vL: number | null;
  vT: number | null;
  z: number | null;
  note?: string;
};

/** Vitesses de référence (m/s). Le jour de l'examen, toujours utiliser l'énoncé. */
export const MATERIALS: Material[] = [
  { id: "eau", name: "Eau", vL: 1483, vT: null, z: 1.48, note: "Pas d'OT (liquide)" },
  { id: "air", name: "Air", vL: 333, vT: null, z: 0.0004, note: "Pas d'OT (gaz)" },
  { id: "plexi", name: "Plexiglas", vL: 2680, vT: 1450, z: 3.2 },
  { id: "acier", name: "Acier", vL: 5920, vT: 3230, z: 45 },
  { id: "alu", name: "Aluminium", vL: 6320, vT: 3130, z: 17 },
  { id: "cuivre", name: "Cuivre", vL: 4700, vT: 2260, z: 42 },
  { id: "titane", name: "Titane", vL: 6100, vT: 3100, z: 27 },
  { id: "inox", name: "Inox austénitique", vL: 5740, vT: 3120, z: 45, note: "Gros grain, atténuation forte" },
];

export const STEEL_L = 5920;
export const STEEL_T = 3230;
export const WATER_L = 1480;
export const PLEXI_L = 2680;
