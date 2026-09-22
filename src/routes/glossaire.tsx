import { createFileRoute } from "@tanstack/react-router";
import { ChapterHead } from "@/components/content";
import { findNav } from "@/lib/nav";

export const Route = createFileRoute("/glossaire")({ component: Glossaire });

const ENTRIES: { k: string; v: string }[] = [
  { k: "US", v: "Ultrasons." },
  { k: "OL", v: "Onde longitudinale — compression. Particules // à la propagation." },
  { k: "OT", v: "Onde transversale — cisaillement. Particules ⊥ à la propagation." },
  { k: "EF", v: "Écho de fond (face opposée)." },
  { k: "ED", v: "Écho de défaut." },
  { k: "HE", v: "Hauteur d'écran." },
  { k: "PE", v: "Point d'émergence — où le faisceau quitte réellement le sabot." },
  { k: "PS", v: "Parcours sonore." },
  { k: "E/R", v: "Palpeur émission/réception, mono-élément (pulse-echo)." },
  { k: "SE / TR", v: "Émetteur et récepteur séparés (dual crystal), réduit la zone morte." },
  { k: "CAD / DAC", v: "Courbe amplitude-distance / Distance Amplitude Correction." },
  {
    k: "AVG",
    v: "Abstand–Verstärkung–Größe (DGS) : distance, gain, taille équivalente. Chapitre 07.",
  },
  { k: "TCG", v: "Time Corrected Gain : le gain monte avec le temps pour aplatir la DAC." },
  { k: "TFP", v: "Trou à fond plat — réflecteur étalon." },
  { k: "S/B", v: "Rapport signal/bruit = G1 − G2." },
  { k: "dB", v: "Décibel. En amplitude : 20 log(A2/A1)." },
  { k: "N₀", v: "Longueur du champ proche (Fresnel)." },
  { k: "FIT", v: "Fiche d'instruction de travail. Chapitre 09." },
  {
    k: "SPE",
    v: "Spécification particulière (secteur pièces forgées / tronc commun).",
  },
  {
    k: "COFREND",
    v: "Confédération française pour les essais non destructifs. Certification NF EN ISO 9712, accréditée COFRAC 17024.",
  },
  {
    k: "CCPM-S",
    v: "Schéma sectoriel COFREND « produits métalliques » (aciers, tubes, fonderie…) cité dans la FIT.",
  },
  { k: "V1", v: "Bloc étalon n° 1, ISO 2400. Rayon 100 mm." },
  { k: "V2", v: "Bloc étalon n° 2, ISO 7963. Plus compact, chantier." },
];

function Glossaire() {
  const item = findNav("glossaire")!;
  return (
    <article>
      <ChapterHead item={item} />
      <dl className="m-0">
        {ENTRIES.map((e) => (
          <div
            key={e.k}
            className="grid gap-2 border-b border-line py-3 md:grid-cols-[120px_1fr]"
          >
            <dt className="font-mono font-semibold text-ol">{e.k}</dt>
            <dd className="m-0 text-ink-2">{e.v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
