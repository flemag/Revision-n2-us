import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Card, Tag } from "@/components/content";
import { AScanHero } from "@/components/diagrams";
import { buttonVariants } from "@/components/ui/button";
import { CHAPTERS, TOOLS } from "@/lib/nav";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const reviewed = useAppStore((s) => s.reviewed);
  const quizBest = useAppStore((s) => s.quizBest);

  return (
    <div>
      <section className="mb-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-ol uppercase">
            <span className="size-2 rounded-full bg-ol shadow-[0_0_0_4px_var(--ol-soft)]" />
            Fiches de révision UT2
          </span>
          <h1 className="font-sans text-4xl leading-[1.1] tracking-tight md:text-5xl">
            Ton cahier d'ultrasons,
            <br />
            <em className="not-italic text-ol">relu, corrigé, calculable.</em>
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg text-ink-2">
            Mise au propre des notes COFREND Ultrasons Niveau 2 : théorie, pièges d'examen,
            schémas, exemples chiffrés, atelier de calcul et QCM commenté.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/chapitre/$slug"
              params={{ slug: "ondes" }}
              className={cn(buttonVariants({ size: "lg" }), "no-underline")}
            >
              Commencer
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/atelier"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "no-underline")}
            >
              Atelier de calcul
            </Link>
          </div>
        </div>
        <Card className="p-4">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-ink-muted uppercase">
            <span>A-scan — vue écran</span>
            <span className="flex gap-1">
              <i className="size-1.5 rounded-full bg-line-strong" />
              <i className="size-1.5 rounded-full bg-line-strong" />
              <i className="size-1.5 rounded-full bg-line-strong" />
            </span>
          </div>
          <AScanHero />
          <div className="mt-2 flex flex-wrap gap-3 font-mono text-[11px] text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <i className="size-2.5 rounded-sm bg-ink-muted" /> Impulsion
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="size-2.5 rounded-sm bg-crit" /> Écho défaut
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="size-2.5 rounded-sm bg-ol" /> Écho de fond
            </span>
          </div>
        </Card>
      </section>

      <Card className="mb-10">
        <h2 className="mt-0 mb-4 font-sans text-base">Comment réviser ici</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="font-sans text-sm font-semibold">Neuf chapitres + outils</div>
            <p className="mt-1 mb-0 text-sm text-ink-muted">
              Géométrie du palpeur d'angle, 1er et 2e critiques, dB, DAC/TCG — en plus du cahier
              d'origine.
            </p>
          </div>
          <div>
            <div className="font-sans text-sm font-semibold">Corrections visibles</div>
            <p className="mt-1 mb-0 text-sm text-ink-muted">
              Impédance, norme EN 10228-3, zone focale, inversion de phase : les erreurs de notes
              sont signalées en rouge.
            </p>
          </div>
          <div>
            <div className="font-sans text-sm font-semibold">Atelier & QCM</div>
            <p className="mt-1 mb-0 text-sm text-ink-muted">
              Snell live, skip, champ proche, dB. {QUESTIONS_N} questions type examen, avec
              explication à chaque faute.
              {quizBest ? ` Meilleur score : ${quizBest} %.` : ""}
            </p>
          </div>
        </div>
      </Card>

      <h2 className="mb-4 font-sans text-xl">Sommaire</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {CHAPTERS.map((c) => (
          <Link
            key={c.slug}
            to={c.href}
            className="rounded-[var(--radius-md)] bg-paper-card p-4 no-underline shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-ol">Ch. {c.num}</span>
              {reviewed[c.slug] ? <Tag kind="ol">révisé</Tag> : null}
            </div>
            <div className="mt-1 font-sans text-base font-semibold text-ink">{c.title}</div>
            <p className="mt-1 mb-0 text-sm text-ink-muted">{c.dek}</p>
          </Link>
        ))}
      </div>
      <h2 className="mt-10 mb-4 font-sans text-xl">Outils</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {TOOLS.map((c) => (
          <Link
            key={c.slug}
            to={c.href}
            className="rounded-[var(--radius-md)] bg-paper-card p-4 no-underline shadow-[var(--shadow-border)]"
          >
            <span className="font-mono text-xs text-ot">{c.num}</span>
            <div className="mt-1 font-sans text-base font-semibold text-ink">{c.title}</div>
            <p className="mt-1 mb-0 text-sm text-ink-muted">{c.dek}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const QUESTIONS_N = 28;
