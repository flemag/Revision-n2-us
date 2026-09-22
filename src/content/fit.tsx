import {
  Callout,
  DataTable,
  H3,
  Placeholder,
  Step,
  Steps,
} from "@/components/content";

export function FitChapter() {
  return (
    <>
      <Callout kind="astuce">
        <p className="mb-0">
          Les <Placeholder>xxx</Placeholder> sont propres à chaque contrôle (référence pièce,
          cotes, n° d'appareil). C'est la <strong>structure</strong> qu'il faut connaître par
          cœur — c'est ce que le correcteur de FIT note.
        </p>
      </Callout>

      <div className="[counter-reset:step]">
        <Steps ot>
          <Step title="Objet">
            <p>
              Instruction de contrôle manuel à 100 % de la face supérieure de livraison.
              Examen ultrasons à 100 % d'une plaque acier, référence{" "}
              <Placeholder>xxx</Placeholder>, épaisseur <Placeholder>xxx</Placeholder>, largeur{" "}
              <Placeholder>xxx</Placeholder>, longueur <Placeholder>xxx</Placeholder>, selon la{" "}
              <strong>NF EN 10160</strong>.
            </p>
          </Step>
          <Step title="Références normatives">
            <DataTable
              headers={["Référence", "Rôle"]}
              rows={[
                ["NF EN ISO 9712", "Certification du personnel"],
                ["ISO 2400", "Bloc étalon n° 1 (V1)"],
                ["ISO 7963", "Bloc étalon n° 2 (V2)"],
                ["NF EN ISO 22232-1", "Caractérisation — appareils"],
                ["NF EN ISO 22232-2", "Caractérisation — traducteurs"],
                ["NF EN ISO 22232-3", "Caractérisation — équipement complet"],
                ["NF EN 10160", "US des plats acier, e ≥ 6 mm"],
                ["NF EN 10228-3", "US des pièces forgées ferritiques / martensitiques"],
              ]}
            />
          </Step>
          <Step title="Qualification">
            <ul className="mb-0">
              <li>
                Validation par un agent certifié <strong>COFREND CCPM-S niveau 2</strong>.
              </li>
              <li>
                L'opérateur est au minimum <strong>niveau 1</strong> selon NF EN ISO 9712.
              </li>
              <li>Acuité visuelle à jour (Jaeger, Ishihara… selon le centre).</li>
            </ul>
          </Step>
          <Step title="Hygiène et sécurité">
            <ul className="mb-0">
              <li>Port des EPI.</li>
              <li>Règles de l'entreprise et de la zone (pont, pièce sur chandelles, etc.).</li>
            </ul>
          </Step>
          <Step title="Matériels, produits, équipements">
            <ul className="mb-0">
              <li>
                Appareil US réf. <Placeholder>xxx</Placeholder>, marque{" "}
                <Placeholder>xxx</Placeholder>, vérifié le <Placeholder>xxx</Placeholder>.
              </li>
              <li>
                Traducteur type <Placeholder>xxx</Placeholder>, f ={" "}
                <Placeholder>xxx</Placeholder>, Ø <Placeholder>xxx</Placeholder>.
              </li>
              <li>
                Bloc V1 n° <Placeholder>xxx</Placeholder>, couplant{" "}
                <Placeholder>xxx</Placeholder>.
              </li>
              <li>Cale à gradins pour la CAD + plexi, réglet, craie, chiffon.</li>
            </ul>
          </Step>
          <Step title="Préparation avant contrôle">
            <ul className="mb-0">
              <li>Enlever poussière / calamine adhérente.</li>
              <li>Dégraisser, contrôle d'aspect.</li>
              <li>Vérifier les marquages (identité de la pièce).</li>
            </ul>
          </Step>
          <Step title="Calibration">
            <ul className="mb-0">
              <li>
                Cale AFNOR type 1 / V1 : distance (échelle 50 mm), linéarité verticale, durée
                d'impulsion, rapport S/B — ISO 22232-3.
              </li>
              <li>Cale à gradins : CAD, courbe infinie et courbe Ø5, sur 5 points.</li>
            </ul>
          </Step>
          <Step title="Mode opératoire">
            <ul className="mb-0">
              <li>Recontrôler marquage, aspect, propreté, validité du matériel.</li>
              <li>Étalonnage distance, échelle 50 mm.</li>
              <li>CAD 5 points, infinie + Ø5.</li>
              <li>
                Contrôle 100 %, recouvrement <strong>10 %</strong>, vitesse ≤{" "}
                <strong>150 mm/s</strong>.
              </li>
              <li>
                Indications ≥ Ø5 : délimiter en <strong>−6 dB</strong>. Indications {'<'} Ø5 :
                croix (ponctuel).
              </li>
              <li>Cartographie + tableau des indications.</li>
            </ul>
          </Step>
          <Step title="Seuil de notation">
            <p className="mb-0 text-ink-muted">→ voir le sujet (spécifique à chaque contrôle).</p>
          </Step>
          <Step title="Critères d'acceptation">
            <p className="mb-0 text-ink-muted">→ voir le sujet (spécifique à chaque contrôle).</p>
          </Step>
          <Step title="Consignation des résultats">
            <p>Cartographie + rapport contenant au minimum :</p>
            <ul className="mb-0">
              <li>
                N° de pièce, cotes, date, nom et niveau du contrôleur, type et n° appareil /
                palpeur.
              </li>
              <li>Norme → NF EN 10160 (dans cet exemple plaque).</li>
              <li>Critère d'acceptation → sujet.</li>
              <li>
                Sanction : <strong>accepté</strong> ou <strong>rebut</strong>.
              </li>
              <li>Repère d'axes et échelles sur la cartographie.</li>
            </ul>
          </Step>
          <Step title="Opérations après contrôle">
            <ul className="mb-0">
              <li>Indications vues par le niveau 2 pour décision.</li>
              <li>Triage bon / mauvais, nettoyage des pièces bonnes.</li>
            </ul>
          </Step>
        </Steps>
      </div>

      <H3 id="memo">Mémo de rédaction</H3>
      <Callout kind="savoir">
        <p className="mb-0">
          Un niveau 2 rédige l'instruction pour un niveau 1 : phrases impératives, valeurs
          chiffrées, pas de « éventuellement ». Tout ce que l'opérateur ne peut pas décider tout
          seul (seuil, sanction, zone) doit être écrit. Les xxx, tu les tires du sujet, pas de ta
          mémoire.
        </p>
      </Callout>
    </>
  );
}
