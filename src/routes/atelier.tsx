import { createFileRoute } from "@tanstack/react-router";
import { AllCalculators } from "@/components/calculators";
import { ChapterHead } from "@/components/content";
import { findNav } from "@/lib/nav";

export const Route = createFileRoute("/atelier")({ component: Atelier });

function Atelier() {
  const item = findNav("atelier")!;
  return (
    <article>
      <ChapterHead item={item} />
      <p className="mb-6 text-ink-2">
        Toutes les formules du cahier, en version interactive. Les schémas suivent tes valeurs.
        Les arrondis d'examen restent ceux de l'énoncé : ici on calcule « pour de vrai ».
      </p>
      <AllCalculators />
    </article>
  );
}
