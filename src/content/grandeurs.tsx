import {
  Callout,
  DataLine,
  DataTable,
  Example,
  Formula,
  Frac,
  Grid2,
  H3,
  Result,
} from "@/components/content";
import { ImpedanceCases } from "@/components/diagrams";
import { Link } from "@tanstack/react-router";

export function GrandeursChapter() {
  return (
    <>
      <H3 id="lambda">Longueur d'onde</H3>
      <p>
        Distance minimale entre deux points vibrant en phase. C'est <em>la</em> grandeur qui
        commande la taille minimale décelable, le champ proche et la divergence.
      </p>
      <Formula
        title="Longueur d'onde"
        to="/atelier"
        legend={[
          { k: "λ", v: "longueur d'onde (m)" },
          { k: "C", v: "célérité dans le milieu (m/s)" },
          { k: "f", v: "fréquence (Hz)" },
        ]}
      >
        λ = <Frac num="C" den="f" />
      </Formula>
      <Example>
        <p className="mt-0">OL dans un milieu à 5930 m/s, f = 2 MHz :</p>
        <DataLine>
          λ = 5930 ÷ (2×10<sup>6</sup>) = 0,002965 m
        </DataLine>
        <Result>λ = 2,965 mm</Result>
      </Example>

      <H3 id="piezo">Épaisseur de l'élément piézo</H3>
      <p>
        Un cristal vibre en résonance fondamentale quand son épaisseur vaut un demi-longueur
        d'onde <em>dans le matériau du cristal</em>. D'où e = λ/2, ou f = C/(2e). La même
        formule décrit aussi la résonance d'épaisseur d'une tôle (mesure d'épaisseur).
      </p>
      <Formula title="Demi-onde" legend={[{ k: "e", v: "épaisseur du piézo (m)" }]}>
        e = <Frac num="λ" den="2" />
        &nbsp;&nbsp;⇔&nbsp;&nbsp; f = <Frac num="C" den="2 e" />
      </Formula>
      <Example>
        <p className="mt-0">Traducteur 1 MHz, célérité du cristal = 5720 m/s :</p>
        <DataLine>λ = 5720 ÷ 10⁶ = 5,72 mm → e = 5,72 / 2</DataLine>
        <Result>e = 2,86 mm</Result>
        <p className="mt-3 mb-0 text-sm text-ink-muted">
          Conséquence directe : plus f est élevée, plus le piézo est mince, plus on résout de
          petits défauts, plus l'atténuation grimpe.
        </p>
      </Example>

      <H3 id="z">Impédance acoustique — correction</H3>
      <Callout kind="important" title="Erreur fréquente, y compris dans des notes">
        <p>
          Z n'est <strong>pas</strong> « la perméabilité du milieu » : une grande impédance ne
          veut pas dire que « les ondes passent plus facilement ». Z = ρ × C caractérise la{" "}
          <em>résistance</em> du milieu au passage de l'onde. Ce qui commande la transmission,
          c'est le <strong>désaccord d'impédance</strong> |Z1 − Z2|, pas la valeur absolue de Z.
        </p>
      </Callout>
      <Formula
        title="Impédance acoustique"
        legend={[
          { k: "ρ", v: "masse volumique (kg/m³)" },
          { k: "C", v: "célérité (m/s)" },
          { k: "Z", v: "en kg·m⁻²·s⁻¹, ou MRayl (10⁶)" },
        ]}
      >
        Z = ρ × C
      </Formula>
      <ImpedanceCases />
      <Callout kind="savoir" title="Inversion de phase">
        <p className="mb-0">
          Pour le coefficient de réflexion en pression utilisé ci-dessous, r = (Z2 − Z1) / (Z2 + Z1).
          Il est <strong>positif</strong> sur un milieu plus impédant (Z2 {'>'} Z1) : pas d'inversion
          de phase. À l'inverse, sur un milieu moins impédant (Z2 {'<'} Z1), r est négatif : la
          pression réfléchie est inversée (déphasage de π). Ainsi, eau → acier n'inverse pas la
          phase, tandis que acier → air l'inverse.
        </p>
      </Callout>

      <H3 id="er-et">Réflexion et transmission — amplitude vs intensité</H3>
      <p>
        Les QCM mélangent souvent les deux. En incidence <strong>normale</strong> :
      </p>
      <Grid2>
        <Formula
          title="Intensité (énergie)"
          legend={[
            { k: "Er", v: "fraction d'intensité réfléchie" },
            { k: "Et", v: "fraction d'intensité transmise" },
          ]}
        >
          Er = <Frac num="(Z1 − Z2)²" den="(Z1 + Z2)²" />
          <div className="mt-2">
            Et = <Frac num="4 Z1 Z2" den="(Z1 + Z2)²" />
          </div>
        </Formula>
        <Formula title="Amplitude (pression)">
          r = <Frac num="Z2 − Z1" den="Z2 + Z1" />
          <div className="mt-2">
            t = <Frac num="2 Z2" den="Z1 + Z2" />
          </div>
        </Formula>
      </Grid2>
      <p className="text-sm text-ink-muted">
        Pour l'intensité : Er + Et = 1. Le r d'amplitude peut être négatif (inversion de phase).
        Ne pas additionner r² et t n'importe comment.
      </p>
      <Callout kind="savoir" title="Trois interfaces à connaître par cœur">
        <ul className="mb-0 pl-5">
          <li>
            <strong>Solide / air</strong> → réflexion totale (plus d'onde utile derrière un
            défaut débouchant, d'où l'EF qui chute).
          </li>
          <li>
            <strong>Même métal / même métal</strong> (Z identiques) → transmission 100 %, aucun
            écho d'interface.
          </li>
          <li>
            <strong>Eau → acier</strong> → réflexion partielle + transmission partielle, sans
            inversion de phase pour la pression réfléchie.
          </li>
        </ul>
      </Callout>

      <H3 id="db">Décibels — le langage du gain</H3>
      <p>
        L'écran US est linéaire en amplitude, le bouton de gain est logarithmique. La relation à
        coller :
      </p>
      <Formula
        title="Écart en dB (amplitude)"
        legend={[
          { k: "A", v: "amplitude (hauteur d'écran)" },
          { k: "Δ", v: "en dB. Attention : 20 log, pas 10 log (ce serait de la puissance)." },
        ]}
      >
        ΔdB = 20 log<sub>10</sub>
        <Frac num="A2" den="A1" />
      </Formula>
      <DataTable
        headers={["ΔdB", "Rapport d'amplitude A2/A1", "Lecture pratique"]}
        rows={[
          ["0", "1", "même hauteur"],
          ["+6", "2", "le double"],
          ["−6", "½", "méthode −6 dB"],
          ["−12", "¼", "encore une fois −6 dB"],
          ["−20", "1/10", "méthode −20 dB"],
          ["+20", "10", "×10 en amplitude"],
        ]}
        alignRight={[0, 1]}
      />
      <Callout kind="astuce">
        <p className="mb-0">
          « Baisser de 6 dB » = viser la moitié de la hauteur d'écran. C'est le geste de
          dimensionnement le plus demandé en pratique. Voir{" "}
          <Link to="/chapitre/$slug" params={{ slug: "avg" }}>
            AVG & dimensionnement
          </Link>
          .
        </p>
      </Callout>
    </>
  );
}
