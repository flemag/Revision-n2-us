import { Callout, DataTable, H3 } from "@/components/content";

export function ForgeChapter() {
  return (
    <>
      <Callout kind="savoir" title="La Grosse Forge n° 3-72">
        <p>Ne pas confondre les deux classifications :</p>
        <ul className="mb-0 pl-5">
          <li>
            <strong>4 types de pièces</strong> dans l'EN 10228-3, selon la forme et le mode de
            production (types 1 à 3 essentiellement simples, type 4 complexe) ;
          </li>
          <li>
            les <strong>classes de qualité / d'enregistrement</strong> et leurs critères sont
            définis séparément par la norme et le niveau de contrôle retenu.
          </li>
        </ul>
      </Callout>

      <Callout kind="important" title="Norme — correction">
        <p className="mb-0">
          Le contrôle US des pièces forgées ferritiques / martensitiques, c'est{" "}
          <strong>NF EN 10228-3</strong> (pas « NF EN ISO 10228-3 » : ce n'est pas une ISO).
          L'austénitique a sa propre partie : <strong>EN 10228-4</strong>. Hors champ : pièces
          estampées (matrice fermée), rotors de turbine et de générateur.
        </p>
      </Callout>

      <H3 id="produits">Les produits forgés</H3>
      <ul>
        <li>
          Défaut dans l'axe, côté tête de lingot → souvent un <strong>mauvais chutage</strong>{" "}
          (la retassure de tête n'a pas été éliminée).
        </li>
        <li>
          Les discontinuités s'orientent en général dans la <strong>direction du
          fibrage</strong> (direction de forgeage). Un palpeur droit « voit » mal un crique
          parallèle au faisceau : il faut penser l'incidence.
        </li>
        <li>
          Un état « <strong>brut de forge</strong> » peut dégrader le couplage et augmenter le
          bruit. La rugosité / préparation de surface doit respecter les exigences de la norme,
          du plan et de la procédure applicables ; aucune valeur unique ne doit être mémorisée
          comme limite universelle.
        </li>
      </ul>
      <Callout kind="important" title="Contrôle d'une pièce brut de forge">
        <p>
          Traducteur à <strong>membrane souple</strong>, couplant <strong>huile</strong>. Le
          contact suiveur rattrape la peau d'orange.
        </p>
        <p className="mb-0">
          Idéalement : contrôler après <strong>normalisation + usinage</strong> (grains
          recuits, surface propre, moins de scattering).
        </p>
      </Callout>

      <H3 id="defauts">Trois familles de défauts — tableau de révision</H3>
      <DataTable
        headers={["Retassures", "Tapures", "Flocons"]}
        rows={[
          [
            "Forte amplitude + chute nette de l'EF. Retassure ou décohésion de forgeage.",
            "En surface, zones de refroidissement rapide.",
            "Discontinuités internes liées notamment à l'hydrogène ; leur prévention repose sur la maîtrise de l'élaboration et des traitements.",
          ],
          [
            "Se recherchent sur les barres de tête (côté lingot).",
            "Aciers de construction.",
            "Apparaissent après plusieurs jours de refroidissement.",
          ],
          [
            "Retrait à la solidification du lingot.",
            "Souvent après traitement thermique ; fente de trempe.",
            "Décohésion par excès d'hydrogène dans le métal.",
          ],
        ]}
      />
      <Callout kind="astuce" title="Comment les distinguer à l'US">
        <ul className="mb-0 pl-5">
          <li>
            <strong>Retassure</strong> : gros réflecteur interne, souvent axial, EF qui s'écroule
            derrière (écran acoustique).
          </li>
          <li>
            <strong>Tapure</strong> : indication de surface — un palpeur droit depuis la face
            opposée la voit comme un EF « trop tôt » ; l'angle / la magnétoscopie confirment.
          </li>
          <li>
            <strong>Flocons</strong> : petits réflecteurs nombreux, diffus, dans la masse, après
            un délai ; l'hydrogène s'est recombine en garnissant des plans de décohésion.
          </li>
        </ul>
      </Callout>
      <H3 id="classes">EN 10228-3 — ce qu'il faut retenir</H3>
      <ul>
        <li>4 types de pièces selon la forme et le mode de production (1–3 simples, 4 complexes).</li>
        <li>Qualité / classes d'enregistrement et d'acceptation liées à l'usage.</li>
        <li>Finition de surface liée à la classe (la norme a un tableau dédié).</li>
        <li>
          Palpeurs droits en premier (balayage 100 % des sections accessibles), angles si
          l'orientation du fibrage ou la géométrie l'exigent.
        </li>
      </ul>
    </>
  );
}
