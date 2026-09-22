import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChapterHead, Result, Tag } from "@/components/content";
import { Button } from "@/components/ui/button";
import { findNav } from "@/lib/nav";
import { QUESTIONS } from "@/lib/quiz-data";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({ component: QuizPage });

function QuizPage() {
  const item = findNav("quiz")!;
  const setScore = useAppStore((s) => s.setQuizScore);
  const best = useAppStore((s) => s.quizBest);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setLocal] = useState(0);
  const [done, setDone] = useState(false);
  const order = useMemo(() => QUESTIONS.map((_, idx) => idx), []);
  const q = QUESTIONS[order[i]];
  const total = QUESTIONS.length;

  function choose(n: number) {
    if (picked != null) return;
    setPicked(n);
    if (n === q.answer) setLocal((s) => s + 1);
  }

  function next() {
    const add = picked === q.answer ? 1 : 0;
    const newScore = score; // already updated if correct
    void add;
    if (i + 1 >= total) {
      const finalScore = picked === q.answer ? score : score;
      setScore(finalScore, total);
      setDone(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
  }

  function finishEarly() {
    setScore(score, total);
    setDone(true);
  }

  function reset() {
    setI(0);
    setPicked(null);
    setLocal(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <article>
        <ChapterHead item={item} />
        <div className="rounded-[var(--radius-lg)] bg-paper-card p-8 text-center shadow-[var(--shadow-border)]">
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">Score</p>
          <p className="my-2 font-sans text-5xl font-semibold tabular-nums text-ol">{pct} %</p>
          <p className="text-ink-2">
            {score} / {total} · meilleur sur cet appareil : {Math.max(best, pct)} %
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            {pct >= 80
              ? "Solide. Relis les chapitres encore rouges, puis refais le QCM à froid."
              : pct >= 50
                ? "Les bases y sont. Concentre-toi sur les fiches « piège » (champ proche, dB, normes)."
                : "Reprends les chapitres 01 à 04 avant de recoller les procédures."}
          </p>
          <Button className="mt-6" onClick={reset}>
            Recommencer
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article>
      <ChapterHead item={item} />
      <div className="mb-4 flex items-center justify-between font-mono text-xs text-ink-muted">
        <span>
          Question {i + 1} / {total}
        </span>
        <span className="tabular-nums">
          Score {score} · record {best} %
        </span>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full bg-ol" style={{ width: `${((i + (picked != null ? 1 : 0)) / total) * 100}%` }} />
      </div>
      <div className="rounded-[var(--radius-lg)] bg-paper-card p-5 shadow-[var(--shadow-border)] md:p-7">
        <Tag>{q.chapter}</Tag>
        <h2 className="mt-3 mb-5 font-sans text-xl leading-snug">{q.q}</h2>
        <div className="grid gap-2">
          {q.choices.map((c, n) => {
            const show = picked != null;
            const good = n === q.answer;
            const bad = show && n === picked && !good;
            return (
              <button
                key={c}
                type="button"
                onClick={() => choose(n)}
                className={cn(
                  "rounded-[var(--radius-md)] border px-4 py-3 text-left font-serif text-[0.95rem]",
                  !show && "border-line-strong hover:border-ol",
                  show && good && "border-good bg-good-soft text-good",
                  bad && "border-crit bg-crit-soft text-crit",
                  show && !good && !bad && "border-line text-ink-muted",
                )}
              >
                <span className="mr-2 font-mono text-xs">{String.fromCharCode(65 + n)}.</span>
                {c}
              </button>
            );
          })}
        </div>
        {picked != null ? (
          <div className="mt-5 rounded-[var(--radius-md)] border-l-[3px] border-ol bg-ol-soft px-4 py-3 text-sm text-ink-2">
            {picked === q.answer ? <Result>Correct</Result> : <span className="font-sans font-semibold text-crit">Incorrect. </span>}
            <p className="mt-2 mb-0">{q.why}</p>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={next} disabled={picked == null}>
            {i + 1 >= total ? "Voir le score" : "Question suivante"}
          </Button>
          <Button variant="ghost" onClick={finishEarly}>
            Terminer
          </Button>
        </div>
      </div>
    </article>
  );
}
