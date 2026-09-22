import type { ComponentType } from "react";
import { OndesChapter } from "./ondes";
import { GrandeursChapter } from "./grandeurs";
import { SnellChapter } from "./snell";
import { ChampsChapter } from "./champs";
import { GeometrieChapter } from "./geometrie";
import { EtalonnageChapter } from "./etalonnage";
import { AvgChapter } from "./avg";
import { ForgeChapter } from "./forge";
import { FitChapter } from "./fit";

export const CHAPTER_CONTENT: Record<string, ComponentType> = {
  ondes: OndesChapter,
  grandeurs: GrandeursChapter,
  snell: SnellChapter,
  champs: ChampsChapter,
  geometrie: GeometrieChapter,
  etalonnage: EtalonnageChapter,
  avg: AvgChapter,
  forge: ForgeChapter,
  fit: FitChapter,
};
