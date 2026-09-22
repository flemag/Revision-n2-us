import { Diagram } from "@/components/content";

export function AScanHero() {
  return (
    <svg viewBox="0 0 560 220" className="h-auto w-full" aria-hidden="true">
      <g stroke="var(--line)" strokeWidth="1">
        <line x1="0" y1="55" x2="560" y2="55" />
        <line x1="0" y1="110" x2="560" y2="110" />
        <line x1="0" y1="165" x2="560" y2="165" />
      </g>
      <line x1="20" y1="190" x2="540" y2="190" stroke="var(--line-strong)" strokeWidth="1.5" />
      <rect x="215" y="60" width="80" height="130" fill="var(--ot)" opacity=".08" />
      <line x1="215" y1="60" x2="215" y2="190" stroke="var(--ot)" strokeDasharray="3 3" strokeWidth="1.2" />
      <line x1="295" y1="60" x2="295" y2="190" stroke="var(--ot)" strokeDasharray="3 3" strokeWidth="1.2" />
      <text x="255" y="50" textAnchor="middle" fill="var(--ot)" fontSize="10" fontFamily="var(--font-mono)">
        PORTE
      </text>
      <path
        d="M20,190 L55,190 L62,25 L68,150 L74,60 L80,175 L86,190 L110,190"
        fill="none"
        stroke="var(--ink-muted)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x="72" y="16" textAnchor="middle" fill="var(--ink-muted)" fontSize="10" fontFamily="var(--font-mono)">
        IMPULSION
      </text>
      <path
        d="M110,190 L245,190 L253,95 L261,190 L300,190"
        fill="none"
        stroke="var(--crit)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <text x="253" y="85" textAnchor="middle" fill="var(--crit)" fontSize="10" fontFamily="var(--font-mono)">
        ÉCHO DÉFAUT
      </text>
      <path
        d="M300,190 L455,190 L465,45 L475,190 L540,190"
        fill="none"
        stroke="var(--ol)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <text x="465" y="35" textAnchor="middle" fill="var(--ol)" fontSize="10" fontFamily="var(--font-mono)">
        ÉCHO DE FOND
      </text>
    </svg>
  );
}

export function WaveTypes() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          title: "OL — compression",
          color: "var(--ol)",
          d: "M20,50 L140,50",
          particles: [
            [30, 50, 8, 0],
            [55, 50, 14, 0],
            [85, 50, 8, 0],
            [115, 50, 14, 0],
          ],
          caption: "Particules // à la propagation",
        },
        {
          title: "OT — cisaillement",
          color: "var(--ot)",
          d: "M20,50 L140,50",
          particles: [
            [40, 50, 0, -14],
            [70, 50, 0, 14],
            [100, 50, 0, -14],
            [130, 50, 0, 8],
          ],
          caption: "Particules ⊥ à la propagation",
        },
        {
          title: "Rayleigh — surface",
          color: "var(--marge)",
          d: "M20,70 Q50,40 80,70 T140,70",
          particles: [
            [40, 62, 6, -8],
            [80, 70, -8, 6],
            [120, 62, 6, -6],
          ],
          caption: "Mouvement elliptique, ~1 λ de profondeur",
        },
      ].map((w) => (
        <figure
          key={w.title}
          className="rounded-[var(--radius-md)] border border-line bg-paper-card p-3 text-center"
        >
          <svg viewBox="0 0 160 100" className="mx-auto h-auto w-full max-w-[220px]">
            <text x="80" y="16" textAnchor="middle" fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
              {w.title}
            </text>
            <path d={w.d} fill="none" stroke={w.color} strokeWidth="1.5" />
            {w.particles.map((p, i) => (
              <g key={i}>
                <circle cx={p[0]} cy={p[1]} r="3" fill={w.color} />
                <line
                  x1={p[0]}
                  y1={p[1]}
                  x2={p[0] + p[2]}
                  y2={p[1] + p[3]}
                  stroke={w.color}
                  strokeWidth="1.4"
                  markerEnd="url(#arr)"
                />
              </g>
            ))}
          </svg>
          <figcaption className="mt-1 font-mono text-[11px] text-ink-muted">{w.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function RefractionStatic() {
  return (
    <Diagram caption="L'angle réfracté de l'OL est toujours plus ouvert que celui de l'OT (V_OL plus grande que V_OT).">
      <svg viewBox="0 0 400 300" className="mx-auto h-auto w-full max-w-[520px]" role="img" aria-label="Réfraction OL et OT">
        <text x="30" y="42" fill="var(--ink-muted)" fontSize="12" fontFamily="var(--font-mono)">
          MILIEU 1
        </text>
        <text x="30" y="272" fill="var(--ink-muted)" fontSize="12" fontFamily="var(--font-mono)">
          MILIEU 2
        </text>
        <line x1="20" y1="140" x2="380" y2="140" stroke="var(--ink)" strokeWidth="1.5" />
        <line x1="200" y1="25" x2="200" y2="280" stroke="var(--line-strong)" strokeWidth="1.2" strokeDasharray="4 4" />
        <text x="204" y="292" fill="var(--ink-muted)" fontSize="11" fontFamily="var(--font-mono)">
          normale
        </text>
        <line x1="120" y1="40" x2="200" y2="140" stroke="var(--ink)" strokeWidth="2" />
        <text x="78" y="70" fill="var(--ink)" fontSize="12" fontFamily="var(--font-mono)">
          incidente
        </text>
        <line x1="200" y1="140" x2="120" y2="40" stroke="var(--ink-muted)" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.5" />
        <line x1="200" y1="140" x2="229" y2="250" stroke="var(--ot)" strokeWidth="2.6" />
        <text x="234" y="256" fill="var(--ot)" fontSize="12" fontWeight="600" fontFamily="var(--font-mono)">
          OT réfractée
        </text>
        <line x1="200" y1="140" x2="268" y2="240" stroke="var(--ol)" strokeWidth="2.6" />
        <text x="272" y="232" fill="var(--ol)" fontSize="12" fontWeight="600" fontFamily="var(--font-mono)">
          OL réfractée
        </text>
        <circle cx="200" cy="140" r="3" fill="var(--marge)" />
      </svg>
    </Diagram>
  );
}

export function ImpedanceCases() {
  const cases = [
    {
      t: "Z1 = Z2",
      d: "transmission totale, aucun écho d'interface.",
      extra: false,
    },
    {
      t: "Z1 > Z2",
      d: "écho partiel, pas d'inversion de phase (milieu plus « mou »).",
      extra: true,
      invert: false,
    },
    {
      t: "Z1 < Z2",
      d: "écho partiel, inversion de phase (milieu plus « dur »).",
      extra: true,
      invert: true,
    },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cases.map((c) => (
        <figure key={c.t} className="rounded-[var(--radius-md)] border border-line bg-paper-card p-3 text-center">
          <svg viewBox="0 0 140 150" className="mx-auto h-auto w-full">
            <text x="70" y="16" textAnchor="middle" fontSize="9.5" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
              MILIEU 1
            </text>
            <line x1="8" y1="72" x2="132" y2="72" stroke="var(--ink)" strokeWidth="1.5" />
            <text x="70" y="140" textAnchor="middle" fontSize="9.5" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
              MILIEU 2
            </text>
            <line x1="70" y1="24" x2="70" y2={c.extra ? 70 : 118} stroke="var(--ol)" strokeWidth={c.extra ? 2.2 : 3} />
            {!c.extra ? <polygon points="64,110 76,110 70,122" fill="var(--ol)" /> : (
              <>
                <line x1="70" y1="72" x2="70" y2="118" stroke="var(--ol)" strokeWidth="1.6" />
                <polygon points="64,110 76,110 70,122" fill="var(--ol)" />
                <line
                  x1="70"
                  y1="70"
                  x2="100"
                  y2="34"
                  stroke="var(--crit)"
                  strokeWidth="2"
                />
                {c.invert ? (
                  <text x="108" y="32" fontSize="9" fill="var(--crit)" fontFamily="var(--font-mono)">
                    φ+π
                  </text>
                ) : (
                  <text x="108" y="32" fontSize="9" fill="var(--crit)" fontFamily="var(--font-mono)">
                    φ
                  </text>
                )}
              </>
            )}
          </svg>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            <b className="font-sans text-ink-2">{c.t}</b>
            <br />
            {c.d}
          </p>
        </figure>
      ))}
    </div>
  );
}

export function BeamZones() {
  return (
    <Diagram caption="Le faisceau se resserre dans le champ proche, est le plus fin en zone focale, puis diverge (Fraunhofer).">
      <svg viewBox="0 0 320 420" className="mx-auto h-auto w-full max-w-[280px]" role="img" aria-label="Zones du faisceau">
        <rect x="120" y="14" width="80" height="16" rx="2" fill="var(--ol)" />
        <text x="160" y="10" textAnchor="middle" fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          TRADUCTEUR
        </text>
        <path d="M122,30 L156,196" stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
        <path d="M198,30 L184,196" stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
        <ellipse cx="170" cy="199" rx="18" ry="13" fill="var(--ot)" opacity=".3" stroke="var(--ot)" strokeWidth="1.5" />
        <path d="M156,209 L74,404" stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
        <path d="M184,209 L252,404" stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
        <text x="236" y="104" fontSize="12" fill="var(--ol)" fontFamily="var(--font-mono)">
          Fresnel
        </text>
        <text x="236" y="203" fontSize="12" fill="var(--ot)" fontFamily="var(--font-mono)">
          Focale
        </text>
        <text x="236" y="314" fontSize="12" fill="var(--crit)" fontFamily="var(--font-mono)">
          Fraunhofer
        </text>
        <line x1="188" y1="199" x2="200" y2="199" stroke="var(--line-strong)" />
        <text x="12" y="203" fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          N₀
        </text>
      </svg>
    </Diagram>
  );
}

export function SkipDiagram() {
  return (
    <Diagram caption="½ skip : le faisceau touche la face opposée. Skip complet : il revient à la face de sondage. Profondeur d = P · cos θ.">
      <svg viewBox="0 0 520 220" className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-label="Skip et demi-skip">
        <rect x="20" y="40" width="480" height="140" fill="var(--paper)" stroke="var(--ink-2)" strokeWidth="1.6" />
        <text x="30" y="32" fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          face de sondage
        </text>
        <text x="30" y="202" fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          face opposée · épaisseur t
        </text>
        <rect x="48" y="28" width="36" height="14" rx="2" fill="var(--ol)" />
        <path d="M70,42 L190,180 L310,42 L430,180" fill="none" stroke="var(--ot)" strokeWidth="2.2" />
        <circle cx="190" cy="180" r="4" fill="var(--crit)" />
        <circle cx="310" cy="42" r="4" fill="var(--ol)" />
        <text x="198" y="172" fontSize="11" fill="var(--crit)" fontFamily="var(--font-mono)">
          ½ skip
        </text>
        <text x="318" y="34" fontSize="11" fill="var(--ol)" fontFamily="var(--font-mono)">
          skip
        </text>
        <text x="100" y="120" fontSize="11" fill="var(--ot)" fontFamily="var(--font-mono)" transform="rotate(-40 100 120)">
          P
        </text>
      </svg>
    </Diagram>
  );
}

export function V1Block() {
  return (
    <Diagram caption="Bloc n° 1 (ISO 2400) — A : résolution palpeur droit · B : angle de réfraction · C : point d'émergence (rayon 100 mm).">
      <svg viewBox="0 0 500 220" className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-label="Cale V1">
        <path
          d="M100,40 A60,100 0 0,0 100,160 L460,160 A20,20 0 0,0 480,140 L480,60 A20,20 0 0,0 460,40 Z"
          fill="var(--paper)"
          stroke="var(--ink-2)"
          strokeWidth="2"
        />
        <rect x="132" y="150" width="14" height="10" fill="var(--marge)" />
        <text x="139" y="182" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--marge)" fontFamily="var(--font-mono)">
          C
        </text>
        <rect x="205" y="88" width="10" height="24" fill="var(--crit)" />
        <text x="210" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--crit)" fontFamily="var(--font-mono)">
          A
        </text>
        <circle cx="400" cy="100" r="17" fill="none" stroke="var(--ol)" strokeWidth="2.4" />
        <line x1="400" y1="80" x2="400" y2="70" stroke="var(--ol)" strokeWidth="2" />
        <line x1="400" y1="120" x2="400" y2="130" stroke="var(--ol)" strokeWidth="2" />
        <line x1="380" y1="100" x2="370" y2="100" stroke="var(--ol)" strokeWidth="2" />
        <line x1="420" y1="100" x2="430" y2="100" stroke="var(--ol)" strokeWidth="2" />
        <text x="400" y="150" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ol)" fontFamily="var(--font-mono)">
          B
        </text>
        <text x="248" y="32" fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          R = 100 mm
        </text>
      </svg>
    </Diagram>
  );
}

export function AvgSketch() {
  return (
    <Diagram caption="Lecture schématique (courbes non à l'échelle) : de D_EF sur ∞ on lit les dB, on ajoute le gain, on recoupe D_ED.">
      <svg viewBox="0 0 480 320" className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-label="Diagramme AVG">
        <line x1="60" y1="20" x2="60" y2="280" stroke="var(--ink-2)" strokeWidth="1.5" />
        <line x1="60" y1="280" x2="460" y2="280" stroke="var(--ink-2)" strokeWidth="1.5" />
        <text x="18" y="24" fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          dB
        </text>
        <text x="460" y="314" textAnchor="end" fontSize="10" fill="var(--ink-muted)" fontFamily="var(--font-mono)">
          D = PS / N →
        </text>
        <path d="M92,258 C135,145 195,64 255,61 C320,60 380,70 430,88" fill="none" stroke="var(--ol)" strokeWidth="2.4" />
        <text x="438" y="82" fontSize="11" fill="var(--ol)" fontFamily="var(--font-mono)">
          ∞
        </text>
        <path d="M95,272 C150,235 210,180 280,165 C340,155 390,158 430,168" fill="none" stroke="var(--line-strong)" strokeWidth="1.3" />
        <path d="M100,279 C160,258 220,215 290,205 C350,197 395,200 430,208" fill="none" stroke="var(--line-strong)" strokeWidth="1.3" />
        <line x1="255" y1="280" x2="255" y2="61" stroke="var(--crit)" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="255" y1="61" x2="60" y2="61" stroke="var(--crit)" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="60" y1="109" x2="202" y2="109" stroke="var(--ot)" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="202" y1="109" x2="202" y2="280" stroke="var(--ot)" strokeWidth="1.2" strokeDasharray="4 3" />
        <circle cx="202" cy="109" r="4.5" fill="none" stroke="var(--marge)" strokeWidth="2.2" />
        <text x="260" y="291" fontSize="9.5" fill="var(--crit)" fontFamily="var(--font-mono)">
          D_EF
        </text>
        <text x="206" y="291" fontSize="9.5" fill="var(--ot)" fontFamily="var(--font-mono)">
          D_ED
        </text>
      </svg>
    </Diagram>
  );
}
