import { useMemo, useState } from "react";
import { Card, Formula, Frac, Result, Tag } from "@/components/content";
import { NumberField } from "@/components/ui/input";
import { MATERIALS, PLEXI_L, STEEL_L, STEEL_T, WATER_L } from "@/lib/materials";
import { clamp, deg, formatNum, rad } from "@/lib/utils";

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col gap-4">
      <h3 className="m-0 font-sans text-base font-semibold">{title}</h3>
      {children}
    </Card>
  );
}

export function SnellCalc() {
  const [v1, setV1] = useState(WATER_L);
  const [vOl, setVOl] = useState(STEEL_L);
  const [vOt, setVOt] = useState(STEEL_T);
  const [inc, setInc] = useState(7);

  const out = useMemo(() => {
    const s1 = Math.sin(rad(inc));
    const argOl = (s1 * vOl) / v1;
    const argOt = (s1 * vOt) / v1;
    const c1 = deg(Math.asin(clamp(v1 / vOl, 0, 1)));
    const c2 = deg(Math.asin(clamp(v1 / vOt, 0, 1)));
    return {
      ol: argOl >= 1 ? null : deg(Math.asin(argOl)),
      ot: argOt >= 1 ? null : deg(Math.asin(argOt)),
      c1,
      c2,
      past1: inc > c1 + 0.05,
      past2: inc > c2 + 0.05,
    };
  }, [v1, vOl, vOt, inc]);

  const x = (angle: number, len: number) => 200 + Math.sin(rad(angle)) * len;
  const yInc = 40 + Math.cos(rad(inc)) * 90;
  const xInc = 200 - Math.sin(rad(inc)) * 90;

  return (
    <Panel title="Snell-Descartes">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="V1 (milieu 1)" unit="m/s" value={v1} onChange={setV1} step={10} />
        <NumberField label="V OL milieu 2" unit="m/s" value={vOl} onChange={setVOl} step={10} />
        <NumberField label="V OT milieu 2" unit="m/s" value={vOt} onChange={setVOt} step={10} />
        <NumberField label="Incidence" unit="°" value={inc} onChange={setInc} min={0} max={85} step={0.5} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Preset onClick={() => { setV1(WATER_L); setVOl(STEEL_L); setVOt(STEEL_T); setInc(7); }}>
          Eau → acier, 7°
        </Preset>
        <Preset onClick={() => { setV1(PLEXI_L); setVOl(STEEL_L); setVOt(STEEL_T); setInc(36); }}>
          Plexi → acier, ~45° OT
        </Preset>
      </div>
      <svg viewBox="0 0 400 280" className="h-auto w-full rounded-[var(--radius-sm)] border border-line bg-paper">
        <line x1="20" y1="140" x2="380" y2="140" stroke="var(--ink)" strokeWidth="1.5" />
        <line x1="200" y1="20" x2="200" y2="260" stroke="var(--line-strong)" strokeDasharray="4 4" />
        <text x="28" y="36" fill="var(--ink-muted)" fontSize="11" fontFamily="var(--font-mono)">1</text>
        <text x="28" y="250" fill="var(--ink-muted)" fontSize="11" fontFamily="var(--font-mono)">2</text>
        <line x1={xInc} y1={140 - (140 - yInc)} x2="200" y2="140" stroke="var(--ink)" strokeWidth="2" />
        {out.ol != null ? (
          <line x1="200" y1="140" x2={x(out.ol, 110)} y2={140 + Math.cos(rad(out.ol)) * 110} stroke="var(--ol)" strokeWidth="2.4" />
        ) : (
          <line x1="200" y1="140" x2="320" y2="140" stroke="var(--ol)" strokeWidth="2" strokeDasharray="6 4" />
        )}
        {out.ot != null ? (
          <line x1="200" y1="140" x2={x(out.ot, 110)} y2={140 + Math.cos(rad(out.ot)) * 110} stroke="var(--ot)" strokeWidth="2.4" />
        ) : out.past2 ? (
          <line x1="200" y1="140" x2="340" y2="140" stroke="var(--ot)" strokeWidth="2" strokeDasharray="6 4" />
        ) : null}
        <circle cx="200" cy="140" r="3" fill="var(--marge)" />
      </svg>
      <div className="grid gap-2 font-mono text-sm sm:grid-cols-2">
        <div>
          OL réfractée :{" "}
          {out.ol == null ? <Tag kind="ol">évanescente (≥ θc1)</Tag> : <strong>{formatNum(out.ol, 1)}°</strong>}
        </div>
        <div>
          OT réfractée :{" "}
          {out.ot == null ? <Tag kind="ot">évanescente (≥ θc2)</Tag> : <strong>{formatNum(out.ot, 1)}°</strong>}
        </div>
        <div>1er critique : {formatNum(out.c1, 1)}°</div>
        <div>2e critique : {formatNum(out.c2, 1)}°</div>
      </div>
    </Panel>
  );
}

function Preset({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-ink-2 hover:border-ol hover:text-ol"
    >
      {children}
    </button>
  );
}

export function WaveCalc() {
  const [c, setC] = useState(STEEL_L);
  const [f, setF] = useState(2);
  const lambdaMm = (c / (f * 1e6)) * 1000;
  const eMm = lambdaMm / 2;
  return (
    <Panel title="Longueur d'onde & piézo">
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Célérité" unit="m/s" value={c} onChange={setC} step={10} />
        <NumberField label="Fréquence" unit="MHz" value={f} onChange={setF} step={0.1} min={0.1} />
      </div>
      <Result>λ = {formatNum(lambdaMm, 2)} mm · e = λ/2 = {formatNum(eMm, 2)} mm</Result>
    </Panel>
  );
}

export function NearFieldCalc() {
  const [d, setD] = useState(20);
  const [f, setF] = useState(2);
  const [c, setC] = useState(STEEL_L);
  const nMm = ((d * d * f) / (4 * c)) * 1000;
  const lambdaMm = (c / (f * 1e6)) * 1000;
  const sin6 = 0.51 * (lambdaMm / d);
  const th6 = deg(Math.asin(clamp(sin6, 0, 1)));
  return (
    <Panel title="Champ proche & divergence −6 dB">
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField label="Ø palpeur D" unit="mm" value={d} onChange={setD} step={0.5} />
        <NumberField label="Fréquence" unit="MHz" value={f} onChange={setF} step={0.1} />
        <NumberField label="Célérité" unit="m/s" value={c} onChange={setC} step={10} />
      </div>
      <p className="m-0 font-mono text-xs text-ink-muted">
        Formule avec D en mm, f en MHz, C en m/s → N en mètres, ici converti en mm.
      </p>
      <Result>
        N₀ = {formatNum(nMm, 1)} mm · Θ(−6 dB) ≈ {formatNum(th6, 1)}° · λ = {formatNum(lambdaMm, 2)} mm
      </Result>
    </Panel>
  );
}

export function SkipCalc() {
  const [t, setT] = useState(20);
  const [th, setTh] = useState(45);
  const [p, setP] = useState(28.3);
  const half = t * Math.tan(rad(th));
  const full = 2 * half;
  const pHalf = t / Math.cos(rad(th));
  const dRaw = p * Math.cos(rad(th));
  // After each reflection, the displayed surface position must also be
  // folded into the current V path; using the raw projection would keep
  // increasing past a skip and give a misleading surface location.
  const legs = Math.floor(dRaw / t);
  const remainder = dRaw % (2 * t);
  const d = remainder <= t ? remainder : 2 * t - remainder;
  const halfSkip = t * Math.tan(rad(th));
  const surfaceCycles = Math.floor(dRaw / t);
  const localDepth = dRaw % t;
  const s = surfaceCycles === 0
    ? sRaw
    : (surfaceCycles * halfSkip + (localDepth / Math.cos(rad(th))));

  const zone = legs === 0 ? "direct" : (remainder <= t ? "après rebond" : "après ½ skip (remontée)");
  return (
    <Panel title="Skip, profondeur, distance projetée">
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField label="Épaisseur t" unit="mm" value={t} onChange={setT} step={0.5} />
        <NumberField label="Angle θ" unit="°" value={th} onChange={setTh} min={1} max={80} step={1} />
        <NumberField label="Parcours P" unit="mm" value={p} onChange={setP} step={0.5} />
      </div>
      <div className="font-mono text-sm leading-relaxed">
        <div>½ skip = {formatNum(half, 1)} mm · skip = {formatNum(full, 1)} mm</div>
        <div>P_½ = {formatNum(pHalf, 1)} mm</div>
        <div>
          Pour P = {formatNum(p, 1)} mm → projection cumulée = {formatNum(s, 1)} mm, d ≈ {formatNum(d, 1)} mm{" "}
          <span className="text-ink-muted">({zone})</span>
        </div>
      </div>
    </Panel>
  );
}

export function DbCalc() {
  const [a1, setA1] = useState(80);
  const [a2, setA2] = useState(40);
  const db = 20 * Math.log10(a2 / a1);
  return (
    <Panel title="Conversion dB">
      <Formula>
        ΔdB = 20 log<sub>10</sub>
        <Frac num="A2" den="A1" />
      </Formula>
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Amplitude A1" unit="% HE" value={a1} onChange={setA1} min={0.1} />
        <NumberField label="Amplitude A2" unit="% HE" value={a2} onChange={setA2} min={0.1} />
      </div>
      <Result>
        {formatNum(db, 1)} dB
        {Math.abs(db - -6) < 0.15 ? " · c'est pile −6 dB" : ""}
      </Result>
    </Panel>
  );
}

export function ImpedanceCalc() {
  const [z1, setZ1] = useState(1.48);
  const [z2, setZ2] = useState(45);
  const er = ((z1 - z2) * (z1 - z2)) / ((z1 + z2) * (z1 + z2));
  const et = (4 * z1 * z2) / ((z1 + z2) * (z1 + z2));
  const r = (z2 - z1) / (z2 + z1);
  return (
    <Panel title="Réflexion / transmission (incidence normale)">
      <div className="flex flex-wrap gap-2">
        {MATERIALS.filter((m) => m.z).map((m) => (
          <Preset key={m.id} onClick={() => setZ2(m.z as number)}>
            Z2 = {m.name}
          </Preset>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Z1" unit="MRayl" value={z1} onChange={setZ1} step={0.1} />
        <NumberField label="Z2" unit="MRayl" value={z2} onChange={setZ2} step={0.1} />
      </div>
      <div className="font-mono text-sm">
        <div>Er (intensité) = {formatNum(er * 100, 1)} %</div>
        <div>Et (intensité) = {formatNum(et * 100, 1)} %</div>
        <div>
          r (amplitude) = {formatNum(r, 3)}
          {r < 0 ? " · inversion de phase" : ""}
        </div>
      </div>
    </Panel>
  );
}

export function PeCalc() {
  const [L, setL] = useState(84);
  const [r, setR] = useState(100);
  return (
    <Panel title="Point d'émergence">
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Lecture réglet L" unit="mm" value={L} onChange={setL} />
        <NumberField label="Rayon R (V1=100)" unit="mm" value={r} onChange={setR} />
      </div>
      <Result>PE = {formatNum(r - L, 1)} mm</Result>
    </Panel>
  );
}

export function AngleCorrCalc() {
  const [L, setL] = useState(91);
  const [pe, setPe] = useState(16);
  const tan = (L + pe - 35) / 70;
  const a = deg(Math.atan(tan));
  const ok = Math.abs(a - 45) <= 2;
  return (
    <Panel title="Correction d'angle (cotes V1)">
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="L mesuré" unit="mm" value={L} onChange={setL} />
        <NumberField label="PE" unit="mm" value={pe} onChange={setPe} />
      </div>
      <Result>
        α = {formatNum(a, 2)}° {ok ? "· dans ± 2° (45°)" : "· hors ± 2°"}
      </Result>
    </Panel>
  );
}

export function AllCalculators() {
  return (
    <div className="grid gap-5">
      <SnellCalc />
      <div className="grid gap-5 lg:grid-cols-2">
        <WaveCalc />
        <NearFieldCalc />
        <SkipCalc />
        <DbCalc />
        <ImpedanceCalc />
        <div className="grid gap-5">
          <PeCalc />
          <AngleCorrCalc />
        </div>
      </div>
    </div>
  );
}
