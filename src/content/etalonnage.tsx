import {
  Callout,
  DataLine,
  DataTable,
  Example,
  Formula,
  Frac,
  Grid3,
  H3,
  Result,
  Step,
  Steps,
} from "@/components/content";
import { V1Block } from "@/components/diagrams";

export function EtalonnageChapter() {
  return (
    <>
      <p>
        Cadre normatif : caractérisation de l'équipement complet selon{" "}
        <strong>NF EN ISO 22232-3:2020</strong> (qui a remplacé l'EN 12668-3). Le bloc étalon n° 1
        est spécifié par <strong>ISO 2400</strong> (édition actuellement publiée : 2025) ; le n° 2,
        plus petit, par <strong>ISO 7963:2022</strong>. Vérifie toujours l'édition exigée par le
        sujet, le client ou la procédure applicable.
      </p>

      <H3 id="v1">La cale V1 — bloc n° 1</H3>
      <p>
        Acier type S355, célérités contrôlées. Elle sert à régler la base de temps, le zéro, le
        point d'émergence, l'angle, la linéarité, la durée d'impulsion, le rapport signal/bruit.
      </p>
      <V1Block />
      <Grid3>
        <Callout kind="important" title="Point C — palpeur d'angle">
          <p className="mb-0">
            Quart de rond R = 100 mm. Maximise l'écho, lis le réglet au bord du palpeur :{" "}
            <strong>PE = 100 − L</strong>.
          </p>
        </Callout>
        <Callout kind="important" title="Point A — palpeur droit">
          <p className="mb-0">
            Encoche / plots de résolution : on capte 3 hauteurs différentes pour estimer le
            pouvoir de résolution.
          </p>
        </Callout>
        <Callout kind="savoir" title="Point B — angle">
          <p className="mb-0">
            Trou Ø 50 mm, 4 positions B1–B4 selon l'angle nominal. Permet de contrôler l'angle de
            réfraction.
          </p>
        </Callout>
      </Grid3>
      <Callout kind="astuce">
        <ul className="mb-0 pl-5">
          <li>
            Pour régler la base de temps d'un traducteur OT, le parcours dans le coin plexi se
            fait à la vitesse des <strong>OL dans le plexi</strong>.
          </li>
          <li>
            Une <strong>correction de transfert</strong> corrige le gain si le matériau contrôlé
            n'est pas de même nature (ou de même état de surface) que le bloc de référence.
          </li>
          <li>
            La cale V2 (ISO 7963) : R = 25 ou 50 mm, plus légère, suffisante en chantier pour PE
            et angle.
          </li>
        </ul>
      </Callout>

      <H3 id="droit">Procédure A — palpeur droit (E/R)</H3>
      <div className="[counter-reset:step]">
        <Steps>
          <Step title="Préparer l'appareil">
            <ul>
              <li>Célérité OL = 5930 m/s (ou la valeur de la cale)</li>
              <li>Échelle 100 mm en distance</li>
            </ul>
          </Step>
          <Step title="Réglage en distance">
            <p>
              V1 couchée, parcours 25 mm. On décale le zéro pour coller le 1er EF à 25 mm, puis on
              vérifie le 2e (50 mm) et le 3e (75 mm). Ça calibre à la fois le zéro et la base de
              temps.
            </p>
          </Step>
          <Step title="Linéarité verticale">
            <p>
              1er EF à 80 % HE, puis on joue le gain étalonné. Tolérances typiques (ISO 22232-3) :
            </p>
            <DataTable
              headers={["± gain", "Cible", "Limites"]}
              rows={[
                ["+2 dB", "100 % HE", "min. 95 % HE"],
                ["Réf.", "80 % HE", "Réf."],
                ["−6 dB", "40 % HE", "37 à 43 %"],
                ["−12 dB", "20 % HE", "17 à 23 %"],
                ["−18 dB", "10 % HE", "8 à 12 %"],
                ["−24 dB", "5 % HE", "inf. à 3 %"],
              ]}
              alignRight={[0, 1]}
            />
            <p className="text-sm text-ink-muted">
              On teste d'un coup la linéarité de l'ampli et l'exactitude du bouton de gain.
            </p>
          </Step>
          <Step title="Rapport signal / bruit">
            <p>
              Capter la génératrice (Ø 3 ou 1,5 mm), ED max à 20 % HE → noter G1. Palpeur dans le
              vide, monter le gain jusqu'à ce que l'« herbe » fasse 20 % HE en moyenne → G2.
            </p>
            <Formula title="Écart signal / bruit">ΔG = G1 − G2</Formula>
            <p className="text-sm">
              Exemple : G1 = 42 dB, G2 = 107 dB → ΔG = −65 dB, soit une <strong>marge de
              65 dB</strong> si la fiche technique exprime le S/B comme une marge positive.
              Conserve toujours la convention définie par la procédure ou la norme utilisée.
            </p>
          </Step>
          <Step title="Durée d'impulsion">
            <p>
              EF à 100 mm, échelle 150 mm, EF à 100 % HE. Porte à 10 % HE, resserrée sur les deux
              flancs : la largeur affichée est la durée d'impulsion.
            </p>
          </Step>
        </Steps>
      </div>
      <Callout kind="savoir">
        <p className="mb-0">
          Une fois le palpeur droit en place, distance + linéarité + durée d'impulsion peuvent
          s'enchaîner <strong>sans bouger</strong> ni le palpeur ni la cale.
        </p>
      </Callout>

      <H3 id="angle">Procédure B — palpeur d'angle 45°</H3>
      <div className="[counter-reset:step]">
        <Steps ot>
          <Step title="Préparer l'appareil">
            <ul>
              <li>Célérité OT = 3230 m/s</li>
              <li>Angle = 45°, zéro = 0, mono-scan (single)</li>
              <li>Échelle 200 mm en distance</li>
            </ul>
          </Step>
          <Step title="Réglage en distance">
            <p>
              V1 droite, palpeur vers l'arrondi R100, EF au maximum. Porte : on décale le zéro
              pour coller l'EF à 100 mm. On ne bouge plus le palpeur.
            </p>
          </Step>
          <Step title="Linéarité verticale">
            <p>Même tableau que la procédure A, EF amené à 80 % HE.</p>
          </Step>
          <Step title="Point d'émergence (PE)">
            <p>
              Le PE est l'endroit où le faisceau quitte réellement le sabot. Réglet du bord du
              palpeur jusqu'au bord du quart de rond :
            </p>
            <Formula title="Sur V1, R = 100 mm">PE = 100 − L</Formula>
            <Example>
              <p className="mt-0">Le réglet indique 84 mm :</p>
              <DataLine>100 − 84 = 16 mm</DataLine>
              <Result>PE = 16 mm</Result>
            </Example>
          </Step>
          <Step title="Durée d'impulsion">
            <p>Même geste que le palpeur droit : EF à 100 % HE, porte à 10 % HE dans l'écho.</p>
          </Step>
          <Step title="Correction d'angle">
            <p>
              Vérifie l'usure du sabot. Tolérance usuelle : <strong>± 2°</strong>. On retourne la
              V1, on vise le plexi / le trou, EF max, on mesure L du palpeur au bord de cale.
            </p>
            <Formula title="Forme utilisée en formation (cotes V1)">
              tan α = <Frac num="(L + PE) − 35" den="70" />
            </Formula>
            <p className="text-sm text-ink-muted">
              35 et 70 mm sont des cotes fixes du bloc (géométrie du Ø 50 mm). Ne pas les
              « réinventer » le jour J.
            </p>
            <Example>
              <p className="mt-0">L = 91 mm, PE = 16 mm :</p>
              <DataLine>tan α = (91 + 16 − 35) / 70 = 1,029</DataLine>
              <Result>α = arctan(1,029) ≈ 45,8° — dans ± 2°</Result>
            </Example>
          </Step>
        </Steps>
      </div>
    </>
  );
}
