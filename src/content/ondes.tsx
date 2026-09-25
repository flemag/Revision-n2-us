import {
  Callout,
  Card,
  Grid2,
  H3,
  Tag,
} from "@/components/content";
import { RefractionStatic, WaveTypes } from "@/components/diagrams";

export function OndesChapter() {
  return (
    <>
      <Card className="mb-6 flex flex-wrap items-center justify-center gap-2 text-center font-mono text-xs">
        <Tag>Énergie électrique</Tag>
        <span className="text-ink-muted">→</span>
        <Tag>Appareil US</Tag>
        <span className="text-ink-muted">→</span>
        <Tag kind="ol">Élément piézo</Tag>
        <span className="text-ink-muted">→</span>
        <Tag kind="ol">Onde mécanique</Tag>
      </Card>

      <p>
        L'appareil envoie une impulsion électrique sur un cristal piézo-électrique. Le cristal
        vibre, convertit l'électricité en onde mécanique, et l'onde part dans la pièce via le
        couplant. Au retour, le même (ou un second) cristal fait l'opération inverse : l'écho
        redevient un pic sur l'A-scan.
      </p>

      <Grid2>
        <Card className="border-l-4 border-l-ol">
          <h3 className="mt-0 mb-2 flex items-center gap-2 font-sans text-lg">
            <Tag kind="ol">OL</Tag> Longitudinales
          </h3>
          <p className="mb-2 text-sm text-ink-muted">Aussi appelées ondes de compression.</p>
          <ul className="m-0 space-y-1.5 pl-5 text-[0.95rem]">
            <li>
              Le déplacement des particules est <strong>parallèle</strong> à la direction de
              propagation.
            </li>
            <li>Vitesse la plus élevée dans un solide donné (acier ≈ 5920 m/s).</li>
            <li>
              À fréquence égale, sa longueur d'onde est plus grande ; cela peut réduire certaines
              pertes par diffusion lorsque la microstructure est défavorable. La pénétration réelle
              dépend aussi du matériau, de la microstructure, de l'atténuation et de la géométrie.
            </li>
            <li>
              En réfraction, l'angle OL est <strong>toujours plus ouvert</strong> que l'angle OT
              — l'OL atteint 90° (1er angle critique) <em>avant</em> l'OT.
            </li>
          </ul>
        </Card>
        <Card className="border-l-4 border-l-ot">
          <h3 className="mt-0 mb-2 flex items-center gap-2 font-sans text-lg">
            <Tag kind="ot">OT</Tag> Transversales
          </h3>
          <p className="mb-2 text-sm text-ink-muted">Aussi appelées ondes de cisaillement.</p>
          <ul className="m-0 space-y-1.5 pl-5 text-[0.95rem]">
            <li>
              Le déplacement des particules est <strong>perpendiculaire</strong> à la direction
              de propagation — pas « perpendiculaire aux particules ».
            </li>
            <li>Plus lentes (acier ≈ 3230 m/s) donc λ plus courte à f égale.</li>
            <li>
              Meilleure sensibilité aux <strong>petites discontinuités</strong> (λ plus courte).
            </li>
            <li>
              Les ondes de cisaillement volumiques ne se propagent pas dans les liquides et les gaz
              au sens classique, car ces milieux ne supportent pas une contrainte de cisaillement.
            </li>
          </ul>
        </Card>
      </Grid2>

      <WaveTypes />

      <H3 id="surface">Ondes de surface</H3>
      <p>
        Parmi les modes classiques OL, OT et Rayleigh, les ondes de surface de Rayleigh ont la <strong>plus
        petite longueur d'onde</strong> à fréquence et matériau identiques, car leur célérité est
        inférieure à celle de l'OT. Pour les modes guidés de Lamb, la célérité et donc la longueur
        d'onde dépendent notamment du mode et du produit fréquence × épaisseur.
      </p>
      <Grid2>
        <Callout kind="savoir" title="Rayleigh">
          <p>
            Combinaison locale d'OL et d'OT : le mouvement des particules est{" "}
            <em>elliptique</em>. Elles collent à la surface (pénétration ≈ 1 λ) et{" "}
            <strong>suivent la géométrie</strong> de la pièce, y compris les congés.
          </p>
        </Callout>
        <Callout kind="astuce" title="Lamb">
          <p>
            Modes guidés dans les plaques ou parois relativement minces. Leur comportement
            dépend notamment du produit <strong>fréquence × épaisseur</strong> et du mode
            excité (par exemple A0 ou S0). En pratique, on ne fixe donc pas une épaisseur
            universelle comme « ≤ 3 mm ». Sans courbe de référence, l'angle donnant l'<strong>amplitude
            maximale</strong> peut être recherché selon la méthode utilisée.
          </p>
        </Callout>
      </Grid2>

      <H3 id="grains">Taille des grains</H3>
      <Callout kind="important">
        <ul className="mb-0 pl-5">
          <li>
            Grains grossiers → diffusion (scattering) → l'écho de fond (EF){" "}
            <strong>s'effondre</strong>, parfois sans aucune indication de défaut.
          </li>
          <li>
            À fréquence égale, les <Tag kind="ol">OL</Tag> ont une longueur d'onde plus grande ;
            cela peut réduire la diffusion, mais le choix réel du mode et de la fréquence dépend
            du matériau et de la procédure.
          </li>
          <li>
            Monter la fréquence aggrave le scattering : on baisse souvent f sur l'inox
            austénitique, la fonte, les soudures hétérogènes.
          </li>
        </ul>
      </Callout>

      <H3 id="conversion">Réflexion, réfraction, conversion de mode</H3>
      <p>
        À une interface, une onde incidente se partage : une partie se réfléchit dans le milieu
        1, une partie se réfracte dans le milieu 2. Dès que l'incidence n'est plus normale, une{" "}
        <strong>conversion de mode</strong> OL ↔ OT est possible. C'est exactement ce que calcule
        la <a href="/chapitre/snell">loi de Snell-Descartes</a>.
      </p>
      <p>
        Une divergence trop grande peut aussi convertir le mode sur une <em>paroi latérale</em> de
        la pièce : un écho « fantôme » apparaît alors, décalé en temps. À avoir en tête quand le
        palpeur est petit ou la fréquence basse.
      </p>
      <RefractionStatic />

      <H3 id="couplant">Couplant</H3>
      <p>
        Sans couplant, l'interface cristal / air réfléchit quasiment 100 % de l'énergie (Z_air ≈
        0). Gel, huile, eau ou pâte rétablissent le contact acoustique. Sur brut de forge :{" "}
        <strong>membrane souple + huile</strong>. En immersion, l'eau est à la fois couplant et
        ligne à retard.
      </p>
    </>
  );
}
