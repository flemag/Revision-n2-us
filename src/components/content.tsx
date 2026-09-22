import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import type { NavItem } from "@/lib/nav";

export function ChapterHead({ item }: { item: NavItem }) {
  const reviewed = useAppStore((s) => !!s.reviewed[item.slug]);
  const toggle = useAppStore((s) => s.toggleReviewed);
  return (
    <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div className="max-w-2xl">
        <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.12em] text-ol">
          Chapitre {item.num}
        </span>
        <h1 className="font-sans text-3xl leading-tight tracking-tight md:text-4xl">
          {item.title}
        </h1>
        <p className="mt-2 text-[1.05rem] text-ink-muted">{item.dek}</p>
      </div>
      <button
        type="button"
        onClick={() => toggle(item.slug)}
        className={cn(
          "inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 font-mono text-xs",
          reviewed
            ? "border-good bg-good-soft text-good"
            : "border-line-strong bg-paper-card text-ink-muted",
        )}
      >
        <span
          className={cn(
            "inline-flex size-3.5 items-center justify-center rounded-[3px] border",
            reviewed ? "border-good bg-good text-paper" : "border-line-strong",
          )}
        >
          {reviewed ? <Check className="size-2.5" strokeWidth={3} /> : null}
        </span>
        {reviewed ? "Révisé" : "Marquer comme révisé"}
      </button>
    </div>
  );
}

export function H3({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-10 mb-3 scroll-mt-24 font-sans text-xl font-semibold tracking-tight"
    >
      {children}
    </h2>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-paper-card p-5 shadow-[var(--shadow-border)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Callout({
  kind = "savoir",
  title,
  children,
}: {
  kind?: "savoir" | "astuce" | "important";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    savoir: "border-ol bg-ol-soft",
    astuce: "border-ot bg-ot-soft",
    important: "border-crit bg-crit-soft",
  }[kind];
  const titleColor = {
    savoir: "text-ol",
    astuce: "text-ot",
    important: "text-crit",
  }[kind];
  const labels = { savoir: "À retenir", astuce: "Astuce d'examen", important: "Piège / correction" };
  return (
    <aside className={cn("my-5 rounded-r-[var(--radius-md)] border-l-[3px] px-5 py-4", styles)}>
      <div className={cn("mb-1.5 font-sans text-xs font-semibold uppercase tracking-wider", titleColor)}>
        {title ?? labels[kind]}
      </div>
      <div className="text-[0.95rem] leading-relaxed text-ink-2 [&_p:last-child]:mb-0">{children}</div>
    </aside>
  );
}

export function Formula({
  title,
  children,
  legend,
  to,
}: {
  title?: string;
  children: React.ReactNode;
  legend?: { k: string; v: string }[];
  to?: string;
}) {
  return (
    <div className="my-4 rounded-[var(--radius-md)] border border-line-strong border-l-4 border-l-ol bg-paper-card p-5">
      {title ? (
        <div className="mb-2 flex items-center justify-between gap-2 font-sans text-sm font-semibold">
          <span>{title}</span>
          {to ? (
            <Link
              to={to}
              className="rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10px] text-ink-muted no-underline hover:border-ol hover:text-ol"
            >
              atelier →
            </Link>
          ) : null}
        </div>
      ) : null}
      <div className="overflow-x-auto rounded-[var(--radius-sm)] border border-line bg-paper px-4 py-4 text-center font-mono text-lg">
        {children}
      </div>
      {legend ? (
        <ul className="mt-3 space-y-1 font-mono text-xs text-ink-muted">
          {legend.map((l) => (
            <li key={l.k} className="flex gap-3 border-t border-dotted border-line pt-1 first:border-0 first:pt-0">
              <b className="w-10 shrink-0 text-ink-2">{l.k}</b>
              <span>{l.v}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Frac({ num, den }: { num: React.ReactNode; den: React.ReactNode }) {
  return (
    <span className="formula-frac">
      <span className="num">{num}</span>
      <span className="den">{den}</span>
    </span>
  );
}

export function Example({
  tag = "Exemple",
  children,
}: {
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-[var(--radius-md)] border border-dashed border-line-strong bg-paper-card p-5">
      <span className="mb-3 inline-block rounded-full border border-crit px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-crit">
        {tag}
      </span>
      <div className="text-[0.95rem]">{children}</div>
    </div>
  );
}

export function Result({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 inline-block rounded-[var(--radius-sm)] bg-good-soft px-3 py-1 font-mono text-sm font-semibold text-good">
      {children}
    </div>
  );
}

export function DataLine({ children }: { children: React.ReactNode }) {
  return <div className="my-0.5 font-mono text-[0.9rem]">{children}</div>;
}

export function Tag({
  kind = "neutral",
  children,
}: {
  kind?: "ol" | "ot" | "neutral";
  children: React.ReactNode;
}) {
  const cls = {
    ol: "bg-ol-soft text-ol",
    ot: "bg-ot-soft text-ot",
    neutral: "bg-line text-ink-2",
  }[kind];
  return (
    <span className={cn("inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-semibold", cls)}>
      {children}
    </span>
  );
}

export function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-[var(--radius-md)] border border-line">
      {children}
    </div>
  );
}

export function DataTable({
  headers,
  rows,
  alignRight,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  alignRight?: number[];
}) {
  const right = new Set(alignRight ?? []);
  return (
    <TableWrap>
      <table className="w-full border-collapse bg-paper-card font-mono text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={cn(
                  "border-b border-line-strong bg-paper px-3.5 py-2.5 text-[11px] font-semibold tracking-wider text-ink-2 uppercase",
                  right.has(i) ? "text-right" : "text-left",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-ol-soft/50">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={cn(
                    "border-b border-line px-3.5 py-2.5 last:border-0",
                    right.has(j) ? "text-right tabular-nums" : "",
                  )}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
}

export function Steps({ children, ot }: { children: React.ReactNode; ot?: boolean }) {
  return <ol className={cn("steps-ol", ot && "ot")}>{children}</ol>;
}

export function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li>
      <h3 className="mt-0.5 mb-2 font-sans text-base font-semibold">{title}</h3>
      <div className="text-[0.95rem] text-ink-2">{children}</div>
    </li>
  );
}

export function Diagram({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-5 rounded-[var(--radius-md)] border border-line bg-paper-card p-5 text-center">
      {children}
      {caption ? (
        <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Grid2({ children }: { children: React.ReactNode }) {
  return <div className="my-4 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Grid3({ children }: { children: React.ReactNode }) {
  return <div className="my-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-b border-dashed border-line-strong px-0.5 text-ink-muted">{children}</span>
  );
}
