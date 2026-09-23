import { Link } from "@tanstack/react-router";
import {
  Callout,
  DataLine,
  Example,
  Formula,
  Frac,
  Grid2,
  H3,
  Result,
} from "@/components/content";
import { AvgSketch } from "@/components/diagrams";

export function AvgChapter() {
  return (
    <>
      <p>
        AVG (allemand <em>Abstand–Verstärkung–Größe</em>) = DGS : Distance / Gain / Taille.
        On compare l'écho du défaut aux courbes du palpeur pour estimer un{" "}
        <strong>diamètre équivalent de TFP</strong> (trou à fond plat) — pas la vraie géométrie
        du défaut.
      </p>
      <Formula
        title="Distance réduite"
        legend={[
          { k: "PS", v: "parcours sonore (profondeur de l'écho)" },
          { k: "N", v: "champ proche du palpeur, dans le matériau" },
        ]}
      >
        D = <Frac num="PS" den="N" />
      </Formula>

      <H3 id="ex1">Exemple 1 — construction complète</H3>
      <Example>
        <p className="mt-0">
          <strong>Données :</strong> palpeur Ø 10 mm, 4 MHz. EF à 100 mm (tôle acier). ED à 59
          mm. On a monté +13 dB pour rendre l'écho lisible.
        </p>
        <p className="mb-1 font-sans font-semibold">1. Champ proche</p>
        <DataLine>N = D² f / (4 C) = 10² × 4 / (4 × 5920) = 0,0169 m</DataLine>
        <Result>N = 16,9 mm</Result>
        <p className="mt-4 mb-1 font-sans font-semibold">2. Distances réduites</p>
        <DataLine>D_EF = 100 / 16,9 ≈ 5,9 → on lit 6 sur le diagramme</DataLine>
        <DataLine>D_ED = 59 / 16,9 ≈ 3,5</DataLine>
        <p className="mt-4 mb-1 font-sans font-semibold">3. Lecture sur AVG</p>
        <p>
          Abscisse D_EF = 6, monter jusqu'à la courbe ∞, lire les dB (ici 11 dB). Ajouter le gain
          de lecture : 11 + 13 = <strong>24 dB</strong>. Depuis 24 dB, aller jusqu'à la verticale
          D_ED = 3,5 : on tombe entre les courbes 0,6 et 0,8 → G ≈ 0,7.
        </p>
        <p className="mb-1 font-sans font-semibold">4. Diamètre équivalent</p>
        <DataLine>Φ_éq = G × Φ_piézo = 0,7 × 10</DataLine>
        <Result>Φ_éq = 7 mm (TFP équivalent)</Result>
      </Example>
      <AvgSketch />
      <Callout kind="astuce">
        <p className="mb-0">
          Φ_éq n'est pas « le défaut fait 7 mm ». C'est la taille d'un réflecteur plan
          perpendiculaire au faisceau qui donnerait le même écho. Un crique débouchant, un
          manque de fusion orienté, un soufflure : même Φ_éq, physiques très différentes.
        </p>
      </Callout>

      <H3 id="ex2">Exemple 2 — lecture directe constructeur</H3>
      <Example tag="Plus simple">
        <p className="mt-0">
          Plaque 100 mm, 5900 m/s, 4 MHz Ø 10. Écho à 60 mm, −8 dB sous la référence. Les courbes
          du palpeur à 60 mm donnent −8 dB ↔ TFP 2 mm.
        </p>
        <Result>Défaut équivalent à un TFP de 2 mm</Result>
      </Example>

      <H3 id="dac-tcg">DAC, CAD, TCG — ne pas les confondre</H3>
      <Grid2>
        <Callout kind="savoir" title="DAC / CAD">
          <p>
            Distance-Amplitude Correction, ou Courbe Amplitude-Distance. On relève l'écho d'un
            même réflecteur (TFP, génératrice, entaille) à plusieurs profondeurs, on trace la
            courbe sur l'écran. Tout ce qui dépasse la courbe est au-dessus du seuil.
          </p>
        </Callout>
        <Callout kind="astuce" title="TCG">
          <p>
            <em>Time Corrected Gain</em> : l'appareil augmente le gain en fonction du temps
            de vol pour compenser la perte d'amplitude avec la distance. Les réflecteurs de
            référence apparaissent alors à une hauteur comparable ; la DAC correspondante devient
            visuellement une ligne horizontale. TCG et DAC poursuivent le même objectif, mais
            TCG est une correction électronique, pas simplement « la DAC faite par l'électronique ».
          </p>
        </Callout>
      </Grid2>
      <p>
        AVG se passe d'étalon spécifique (les courbes viennent du palpeur + un EF ou un TFP
        unique). DAC/TCG exigent une cale représentative du produit. Sur pièce réelle, on ajoute
        souvent une <strong>correction de transfert</strong>.
      </p>
      <Callout kind="savoir" title="Pour dimensionner un faisceau">
        <p className="mb-0">
          On utilise un réflecteur dont la surface est <strong>plus petite</strong> que la
          section du faisceau (sinon on ne mesure plus le faisceau, on mesure le réflecteur).
        </p>
      </Callout>

      <H3 id="sizing">Dimensionnement −6 dB et −20 dB</H3>
      <p>
        Quand le défaut est <em>plus grand</em> que le faisceau, on ne peut plus se fier à
        l'amplitude seule (l'écho sature le « plafond » du faisceau). On scanne et on note les
        positions où l'écho a chuté :
      </p>
      <ul>
        <li>
          <strong>−6 dB</strong> (demi-amplitude) : méthode courante pour la longueur apparente.
          Palpeur au max, on recule jusqu'à A/2, on marque, on fait l'autre côté.
        </li>
        <li>
          <strong>−20 dB</strong> (A/10) : plus large, parfois imposée par le code, utile si le
          faisceau est mal connu.
        </li>
        <li>
          <strong>Max écho</strong> : on se contente de l'amplitude (AVG/DAC) — adapté aux petits
          réflecteurs, pas à une grande délamination.
        </li>
      </ul>
      <Callout kind="important">
        <p className="mb-0">
          −6 dB sur un petit défaut (plus petit que le faisceau){" "}
          <strong>surestime</strong> la taille : on mesure surtout la largeur du faisceau. C'est
          pour ça qu'AVG et DAC existent.
        </p>
      </Callout>
      <p>
        Calculateur dB : <Link to="/atelier">atelier</Link>.
      </p>
    </>
  );
}
