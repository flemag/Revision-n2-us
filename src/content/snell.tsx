import { Link } from "@tanstack/react-router";
import {
  Callout,
  DataLine,
  DataTable,
  Example,
  Formula,
  Frac,
  H3,
  Result,
} from "@/components/content";
import { RefractionStatic } from "@/components/diagrams";

export function SnellChapter() {
  return (
    <>
      <p>
        La loi relie l'angle (par rapport à la <em>normale</em>) et la célérité dans chaque
        milieu. Elle s'applique indépendamment à l'OL et à l'OT — d'où deux angles réfractés
        distincts pour une même incidence.
      </p>
      <Formula title="Snell-Descartes" to="/atelier">
        <Frac num="sin θ₁" den="V₁" /> = <Frac num="sin θ₂" den="V₂" />
      </Formula>
      <p className="text-sm text-ink-muted">
        Donc θ₂ = arcsin( sin θ₁ × V₂ / V₁ ). Si le terme entre parenthèses dépasse 1, l'onde
        correspondante ne se réfracte plus : elle rase (angle critique).
      </p>

      <H3 id="vitesses">Vitesses à connaître (m/s)</H3>
      <DataTable
        headers={["Matériau", "OL", "OT"]}
        rows={[
          ["Eau", "1483", "n'existe pas"],
          ["Air", "333", "n'existe pas"],
          ["Plexiglas", "2680", "1450"],
          ["Acier", "5920", "3230"],
          ["Aluminium", "6320", "3130"],
        ]}
        alignRight={[1, 2]}
      />
      <Callout kind="astuce" title="Les valeurs de l'énoncé priment">
        <p className="mb-0">
          Les constructeurs de cales arrondissent (eau 1480, acier OL 5900 ou 5950, OT 3200 ou
          3250). Les exemples ci-dessous utilisent 1480 / 5950 / 3200 — c'est volontaire. Le
          jour de l'examen, tu prends <em>uniquement</em> les chiffres du sujet.
        </p>
      </Callout>

      <H3 id="exemples">Exemples chiffrés — eau → acier, i = 7°</H3>
      <Example tag="Exemple 1 · OL">
        <p className="mt-0">Angle réfracté de l'OL ?</p>
        <DataLine>sin 7° / 1480 = sin θ_OL / 5950</DataLine>
        <DataLine>θ_OL = arcsin(0,1219 × 5950 / 1480) = arcsin(0,490)</DataLine>
        <Result>θ_OL ≈ 29,3°</Result>
      </Example>
      <Example tag="Exemple 2 · OT">
        <p className="mt-0">Même incidence, OT :</p>
        <DataLine>θ_OT = arcsin(0,1219 × 3200 / 1480) = arcsin(0,263)</DataLine>
        <Result>θ_OT ≈ 15,3°</Result>
        <p className="mt-3 mb-0 text-sm text-ink-muted">
          L'OL (29°) réfracte toujours plus que l'OT (15°) — cohérent avec le chapitre 01.
        </p>
      </Example>
      <RefractionStatic />

      <H3 id="critiques">Les deux angles critiques</H3>
      <p>
        Un angle critique, c'est l'incidence pour laquelle l'onde réfractée part à 90° (elle rase
        l'interface). Comme V_OL {'>'} V_OT, l'OL rase <em>en premier</em>.
      </p>
      <Formula title="Angles critiques (milieu 1 → 2)">
        θ<sub>c1</sub> = arcsin
        <Frac num="V₁" den="V_OL,₂" />
        &nbsp;&nbsp;&nbsp; θ<sub>c2</sub> = arcsin
        <Frac num="V₁" den="V_OT,₂" />
      </Formula>
      <Example tag="1er angle critique · OL à 90°">
        <p className="mt-0">Eau → acier :</p>
        <DataLine>θ_eau = arcsin(1480 / 5950) = arcsin(0,249)</DataLine>
        <Result>θ_c1 ≈ 14,4°</Result>
        <p className="mt-3 mb-0 text-sm text-ink-muted">
          Au-delà, plus d'OL dans l'acier : il ne reste que l'OT. C'est le principe du sabot
          d'angle « tout OT ».
        </p>
      </Example>
      <Example tag="2e angle critique · OT à 90°">
        <p className="mt-0">Eau → acier :</p>
        <DataLine>θ_c2 = arcsin(1480 / 3200) = arcsin(0,463)</DataLine>
        <Result>θ_c2 ≈ 27,5°</Result>
        <p className="mt-3 mb-0 text-sm text-ink-muted">
          Au-delà du 2e critique, l'OT volumique ne se réfracte plus. Des ondes de surface et d'autres
          composantes peuvent toutefois être générées selon l'interface et la configuration ;
          « uniquement Rayleigh » serait trop catégorique.
        </p>
      </Example>
      <DataTable
        headers={["Interface", "1er critique (OL=90°)", "2e critique (OT=90°)"]}
        rows={[
          ["Eau → acier", "≈ 14,5°", "≈ 27,3°"],
          ["Plexi → acier", "≈ 27,0°", "≈ 56,0°"],
        ]}
      />

      <H3 id="sabot">Angle marqué du palpeur ≠ angle du sabot</H3>
      <Callout kind="important">
        <p>
          Un palpeur « 45° » signifie : <strong>l'OT se réfracte à 45° dans l'acier</strong>, pas
          que le plexi est taillé à 45°. L'angle du coin (incidence dans le sabot) se calcule à
          l'envers :
        </p>
        <DataLine>θ_plexi = arcsin( sin 45° × 2680 / 3230 ) ≈ 36°</DataLine>
        <p className="mb-0 mt-2">
          C'est pour ça que les sabots 45°, 60°, 70° existent : ils sont tous au-delà du 1er
          critique plexi→acier, donc <em>sans OL</em> dans la pièce.
        </p>
      </Callout>
      <p>
        Pour jouer avec les milieux et voir le schéma se mettre à jour :{" "}
        <Link to="/atelier">ouvrir l'atelier de calcul</Link>.
      </p>
    </>
  );
}
