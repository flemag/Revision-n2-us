import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterHead, DataTable, Formula, Frac } from "@/components/content";
import { findNav } from "@/lib/nav";

export const Route = createFileRoute("/formulaire")({ component: Formulaire });

const ITEMS: { name: string; href: string; node: React.ReactNode }[] = [
  {
    name: "Snell-Descartes",
    href: "/chapitre/snell",
    node: (
      <>
        <Frac num="sin θ₁" den="V₁" /> = <Frac num="sin θ₂" den="V₂" />
      </>
    ),
  },
  {
    name: "Longueur d'onde",
    href: "/chapitre/grandeurs",
    node: (
      <>
        λ = <Frac num="C" den="f" />
      </>
    ),
  },
  {
    name: "Épaisseur piézo",
    href: "/chapitre/grandeurs",
    node: (
      <>
        e = <Frac num="λ" den="2" />
      </>
    ),
  },
  {
    name: "Impédance",
    href: "/chapitre/grandeurs",
    node: <>Z = ρ × C</>,
  },
  {
    name: "Réflexion (intensité)",
    href: "/chapitre/grandeurs",
    node: (
      <>
        Er = <Frac num="(Z1−Z2)²" den="(Z1+Z2)²" />
      </>
    ),
  },
  {
    name: "Transmission (intensité)",
    href: "/chapitre/grandeurs",
    node: (
      <>
        Et = <Frac num="4 Z1 Z2" den="(Z1+Z2)²" />
      </>
    ),
  },
  {
    name: "Décibels",
    href: "/chapitre/grandeurs",
    node: (
      <>
        ΔdB = 20 log <Frac num="A2" den="A1" />
      </>
    ),
  },
  {
    name: "Champ proche",
    href: "/chapitre/champs",
    node: (
      <>
        N₀ = <Frac num="D² f" den="4 C" />
      </>
    ),
  },
  {
    name: "Divergence",
    href: "/chapitre/champs",
    node: (
      <>
        sin Θ = K <Frac num="λ" den="D" />
      </>
    ),
  },
  {
    name: "Zone focale (longueur)",
    href: "/chapitre/champs",
    node: (
      <>
        <Frac num="4" den="3" /> N₀
      </>
    ),
  },
  {
    name: "Profondeur (angle)",
    href: "/chapitre/geometrie",
    node: <>d = P · cos θ</>,
  },
  {
    name: "Distance projetée",
    href: "/chapitre/geometrie",
    node: <>s = P · sin θ</>,
  },
  {
    name: "½ skip",
    href: "/chapitre/geometrie",
    node: <>t · tan θ</>,
  },
  {
    name: "Point d'émergence (V1)",
    href: "/chapitre/etalonnage",
    node: <>PE = 100 − L</>,
  },
  {
    name: "Correction d'angle (V1)",
    href: "/chapitre/etalonnage",
    node: (
      <>
        tan α = <Frac num="(L+PE)−35" den="70" />
      </>
    ),
  },
  {
    name: "Rapport S/B",
    href: "/chapitre/etalonnage",
    node: <>G1 − G2</>,
  },
  {
    name: "AVG — D réduite",
    href: "/chapitre/avg",
    node: (
      <>
        D = <Frac num="PS" den="N" />
      </>
    ),
  },
  {
    name: "AVG — Ø équivalent",
    href: "/chapitre/avg",
    node: <>Φéq = G × Φpiézo</>,
  },
];

function Formulaire() {
  const item = findNav("formulaire")!;
  return (
    <article>
      <ChapterHead item={item} />
      <p className="mb-6 text-ink-2">
        Les 18 relations du cahier, pour une relecture express. Chaque carte renvoie au chapitre.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {ITEMS.map((it) => (
          <div key={it.name} className="rounded-[var(--radius-md)] border border-line bg-paper-card p-4">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="font-sans text-sm font-semibold">{it.name}</span>
              <Link
                to={it.href}
                className="rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10px] text-ink-muted no-underline hover:border-ol hover:text-ol"
              >
                voir
              </Link>
            </div>
            <div className="overflow-x-auto rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-3 text-center font-mono">
              {it.node}
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 mb-3 font-sans text-xl">Vitesses de référence (m/s)</h2>
      <DataTable
        headers={["Matériau", "OL", "OT"]}
        rows={[
          ["Eau", "1483", "—"],
          ["Air", "333", "—"],
          ["Plexiglas", "2680", "1450"],
          ["Acier", "5920", "3230"],
          ["Aluminium", "6320", "3130"],
        ]}
        alignRight={[1, 2]}
      />
      <h2 className="mt-8 mb-3 font-sans text-xl">K de divergence</h2>
      <DataTable
        headers={["K", "Seuil"]}
        rows={[
          ["1,22", "1er zéro"],
          ["0,51", "−6 dB"],
          ["0,87", "−20 dB"],
        ]}
        alignRight={[0]}
      />
      <h2 className="mt-8 mb-3 font-sans text-xl">Décibels utiles</h2>
      <DataTable
        headers={["ΔdB", "A2 / A1"]}
        rows={[
          ["+6", "× 2"],
          ["−6", "× ½"],
          ["−12", "× ¼"],
          ["−20", "× 1/10"],
        ]}
        alignRight={[0, 1]}
      />
    </article>
  );
}
