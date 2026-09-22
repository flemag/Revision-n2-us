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
import { SkipDiagram } from "@/components/diagrams";

export function GeometrieChapter() {
  return (
    <>
      <p>
        Chapitre ajouté : c'est le quotidien du palpeur d'angle, et une source inépuisable
        d'erreurs d'examen. Toutes les formules sont dans le plan de la pièce, OT, incidence
        oblique.
      </p>
      <SkipDiagram />

      <H3 id="trig">Les trois grandeurs liées</H3>
      <p>
        Un écho arrive au temps t. L'appareil, réglé sur la célérité OT, affiche un{" "}
        <strong>parcours sonore</strong> P (aller, ou aller-retour selon le mode — en
        pulse-echo d'angle, P est le trajet palpeur → réflecteur).
      </p>
      <Grid2>
        <Formula
          title="Profondeur"
          legend={[
            { k: "d", v: "profondeur sous la face de sondage" },
            { k: "θ", v: "angle de réfraction dans l'acier (angle marqué)" },
          ]}
        >
          d = P · cos θ
        </Formula>
        <Formula title="Distance projetée (surface)">
          s = P · sin θ
        </Formula>
      </Grid2>
      <Callout kind="astuce" title="Où est le défaut par rapport au palpeur ?">
        <p className="mb-0">
          Le point d'entrée réel, c'est le <strong>point d'émergence</strong> (PE), pas le bord
          avant du sabot. Distance le long de la surface, du PE jusqu'au vertical du défaut : s.
          Pour reporter au réglet : mesurer depuis le PE, pas depuis le talon.
        </p>
      </Callout>

      <H3 id="skip">½ skip et skip</H3>
      <p>
        Sur une tôle d'épaisseur t, le faisceau d'angle rebondit en V. On nomme les distances{" "}
        <em>le long de la surface</em> :
      </p>
      <Formula
        title="Distances de skip"
        legend={[
          { k: "t", v: "épaisseur" },
          { k: "½ skip", v: "distance surface pour toucher la face opposée" },
          { k: "skip", v: "retour sur la face de sondage (un V complet)" },
        ]}
      >
        ½ skip = t · tan θ
        <div className="mt-2">skip = 2 t · tan θ</div>
      </Formula>
      <Formula title="Parcours sonore correspondant">
        P<sub>½</sub> = <Frac num="t" den="cos θ" />
        &nbsp;&nbsp;&nbsp; P<sub>skip</sub> = <Frac num="2 t" den="cos θ" />
      </Formula>
      <Example tag="Plaque 20 mm, palpeur 45°">
        <DataLine>tan 45° = 1 → ½ skip = 20 mm, skip = 40 mm</DataLine>
        <DataLine>P_½ = 20 / 0,707 = 28,3 mm</DataLine>
        <Result>Un défaut débouchant en face opposée est vu à P = 28,3 mm, s = 20 mm</Result>
      </Example>
      <Example tag="Même plaque, palpeur 70°">
        <DataLine>tan 70° = 2,747 → ½ skip = 54,9 mm, skip = 109,9 mm</DataLine>
        <DataLine>P_½ = 20 / 0,342 = 58,5 mm</DataLine>
        <p className="mt-2 mb-0 text-sm text-ink-muted">
          Plus l'angle est ouvert, plus il faut de place devant le cordon (et plus le parcours
          est long → plus d'atténuation).
        </p>
      </Example>

      <H3 id="rebond">Après le ½ skip : profondeur « repliée »</H3>
      <p>
        Si P dépasse P_½, le faisceau a rebondi. La profondeur sous la face de sondage n'est plus
        P cos θ :
      </p>
      <ul>
        <li>
          Entre ½ skip et skip : d = 2t − P cos θ (on remonte vers la face de sondage).
        </li>
        <li>Un défaut débouchant en face de sondage se voit au skip (ou 2 skip, etc.).</li>
      </ul>
      <Callout kind="important">
        <p className="mb-0">
          Un écho « profond » sur l'A-scan n'est pas forcément un défaut profond : ce peut être
          un rebond. Toujours convertir P → (s, d) avec l'épaisseur, et croiser avec un second
          angle ou l'autre face si elle est accessible.
        </p>
      </Callout>
      <p>
        Calculateur skip / profondeur : <Link to="/atelier">atelier</Link>.
      </p>
    </>
  );
}
