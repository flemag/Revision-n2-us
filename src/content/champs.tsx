import { Link } from "@tanstack/react-router";
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
import { BeamZones } from "@/components/diagrams";

export function ChampsChapter() {
  return (
    <>
      <Callout kind="important" title="Effet d'une fréquence plus élevée">
        <ul className="mb-0 pl-5">
          <li>Atténuation plus forte (surtout scattering).</li>
          <li>Plus petits défauts décelables (λ plus courte).</li>
          <li>Meilleur pouvoir de résolution (échos plus étroits).</li>
          <li>Piézo plus mince (e = λ/2).</li>
          <li>Champ proche plus long, divergence plus faible.</li>
        </ul>
      </Callout>

      <H3 id="n0">Champ proche — zone de Fresnel</H3>
      <p>
        Dans le champ proche, les ondelettes issues de la face du palpeur interfèrent : la
        pression sur l'axe <strong>oscille</strong>, elle ne décroît pas « tranquillement ». Le
        dernier maximum est à N₀. Ensuite seulement, le champ lointain se comporte proprement.
      </p>
      <Formula
        title="Longueur du champ proche"
        to="/atelier"
        legend={[
          { k: "N₀", v: "longueur du champ proche" },
          { k: "D", v: "diamètre de l'élément actif" },
          { k: "λ", v: "longueur d'onde dans le milieu" },
        ]}
      >
        N₀ = <Frac num="D²" den="4 λ" /> = <Frac num="D² f" den="4 C" />
      </Formula>
      <Callout kind="astuce" title="Piège d'unités — les deux erreurs s'annulent">
        <p>
          Si tu mets D en <strong>mm</strong> et f en <strong>MHz</strong> (C en m/s), le résultat
          de D²f/(4C) s'exprime en <strong>mètres</strong>. Exemple : palpeur 10 mm, 4 MHz, acier
          5920 m/s :
        </p>
        <DataLine>N = 10² × 4 / (4 × 5920) = 400 / 23 680 = 0,0169 m = 16,9 mm</DataLine>
        <p className="mb-0">
          La formule exacte est N = (D² − λ²)/(4λ). L'approximation D²/4λ est largement suffisante
          dès que D ≫ λ (cas usuel).
        </p>
      </Callout>
      <Example>
        <p className="mt-0">Palpeur Ø 20 mm, 2 MHz, plaque acier (5920 m/s) :</p>
        <DataLine>λ = 5920 / 2×10⁶ = 2,96 mm</DataLine>
        <DataLine>N₀ = 20² / (4 × 2,96) = 400 / 11,84</DataLine>
        <Result>N₀ = 33,8 mm</Result>
      </Example>
      <Callout kind="important" title="QCM classique">
        <p className="mb-0">
          Le champ proche <strong>n'est pas</strong> « la zone où la pression décroît de façon
          monotone ». C'est même le contraire : la pression y fluctue fortement. La décroissance
          monotone, c'est le champ lointain.
        </p>
      </Callout>
      <p className="text-sm text-ink-muted">
        En immersion, un traducteur focalisé permet de sortir du champ proche (la focale
        acoustique remplace N₀).
      </p>
      <BeamZones />

      <H3 id="focale">Zone focale</H3>
      <p>
        Pour un palpeur droit non focalisé, le maximum d'intensité est vers N₀. La zone où la
        pression reste au-dessus de −6 dB du max — la plus sensible à la détection — s'étend
        approximativement de <strong>(2/3) N₀ à 2 N₀</strong>. Sa longueur vaut donc :
      </p>
      <Formula
        title="Longueur de zone focale"
        legend={[{ k: "N", v: "champ proche N₀" }]}
      >
        L_focale = 2N − <Frac num="2" den="3" /> N = <Frac num="4" den="3" /> N
      </Formula>
      <p className="text-sm text-ink-muted">
        Ne pas lire « 2N − 2/3 N » comme une position : c'est une <em>longueur</em>. Le diamètre
        de la tache (à −6 dB) est de l'ordre du quart du diamètre de l'élément actif.
      </p>

      <H3 id="loin">Champ lointain — zone de Fraunhofer</H3>
      <p>
        Le faisceau diverge. La pression sur l'axe diminue à peu près en 1/r. L'angle de
        divergence dépend de λ/D : petit palpeur ou basse fréquence → faisceau large.
      </p>
      <Grid2>
        <Formula title="Demi-angle de divergence">
          sin Θ = K × <Frac num="λ" den="D" /> = K × <Frac num="C" den="D f" />
        </Formula>
        <DataTable
          headers={["K", "Seuil"]}
          rows={[
            ["1,22", "1er zéro (divergence totale)"],
            ["0,51", "−6 dB"],
            ["0,87", "−20 dB"],
          ]}
          alignRight={[0]}
        />
      </Grid2>
      <Callout kind="savoir">
        <ul className="mb-0 pl-5">
          <li>
            Θ <strong>augmente</strong> si f ou D <strong>diminue</strong>.
          </li>
          <li>
            Une grosse divergence peut déclencher une conversion de mode sur une face latérale.
          </li>
        </ul>
      </Callout>

      <H3 id="morte">Zone morte</H3>
      <p>
        Juste après l'impulsion d'émission, l'amplificateur est saturé : on ne peut pas lire
        d'écho. Cette zone morte masque les défauts sous-jacents (face de sondage). On la réduit
        avec :
      </p>
      <ul>
        <li>
          un palpeur <strong>SE / TR</strong> (émetteur et récepteur séparés, chaussure à delay) ;
        </li>
        <li>une ligne à retard (plexiglas) ou un contrôle en immersion ;</li>
        <li>une impulsion plus courte (fréquence plus haute, amortissement fort).</li>
      </ul>
      <p>
        Pour le calculateur N₀ / Θ : <Link to="/atelier">atelier</Link>.
      </p>
    </>
  );
}
