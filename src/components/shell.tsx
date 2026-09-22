import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ALL_NAV, CHAPTERS, TOOLS } from "@/lib/nav";
import { reviewedCount, useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function useThemeHydrate() {
  const theme = useAppStore((s) => s.theme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  useThemeHydrate();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reviewed = useAppStore((s) => s.reviewed);
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  const progressIds = [...CHAPTERS, ...TOOLS].map((c) => c.slug);
  const done = reviewedCount(progressIds, reviewed);
  const pct = Math.round((done / progressIds.length) * 100);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-svh">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Aller au contenu
      </a>
      <header className="no-print sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-paper-card px-4 lg:hidden">
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-line-strong bg-paper"
          aria-label="Ouvrir le sommaire"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
        <span className="font-sans text-sm font-bold">Cahier US · Révisions</span>
      </header>
      {open ? (
        <button
          type="button"
          className="no-print fixed inset-0 z-30 bg-ink/40 lg:hidden"
          aria-label="Fermer le sommaire"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <aside
        className={cn(
          "no-print fixed top-0 left-0 z-40 flex h-svh w-[288px] flex-col border-r border-line bg-paper-card transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="border-b border-line px-5 py-5">
          <Link to="/" className="flex items-center gap-2 font-sans text-[1.05rem] font-bold text-ink no-underline">
            <span className="size-2.5 rounded-full bg-ol shadow-[0_0_0_3px_var(--ol-soft)]" />
            Cahier US
          </Link>
          <div className="mt-1 font-mono text-[11px] tracking-[0.08em] text-ink-muted uppercase">
            COFREND · Ultrasons · Niveau 2
          </div>
        </div>
        <SearchBox />
        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Sommaire">
          <NavGroup label="Cahier" items={CHAPTERS} pathname={pathname} reviewed={reviewed} />
          <div className="mx-2 my-3 h-px bg-line" />
          <NavGroup label="Outils" items={TOOLS} pathname={pathname} reviewed={reviewed} />
        </nav>
        <div className="border-t border-line px-5 py-4">
          <div className="mb-1.5 flex justify-between font-mono text-[11px] text-ink-muted">
            <span>Progression</span>
            <span className="tabular-nums">{pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full bg-ol transition-[width] duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="mt-4 flex h-10 w-full items-center justify-between rounded-[var(--radius-sm)] border border-line-strong bg-paper px-3 font-mono text-xs text-ink hover:border-ol"
          >
            <span>{theme === "dark" ? "Mode Oscillo" : "Mode Cahier"}</span>
            {theme === "dark" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
          </button>
        </div>
      </aside>
      <main id="main-content" className="lg:ml-[288px]">
        <div className="relative mx-auto max-w-[900px] px-4 py-10 md:px-8 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-8 hidden w-px bg-marge/60 md:block"
          />
          {children}
        </div>
      </main>
    </div>
  );
}

function NavGroup({
  label,
  items,
  pathname,
  reviewed,
}: {
  label: string;
  items: typeof CHAPTERS;
  pathname: string;
  reviewed: Record<string, boolean>;
}) {
  return (
    <div>
      <div className="px-3 pt-1 pb-1 font-mono text-[10px] tracking-widest text-ink-muted uppercase">{label}</div>
      <ul className="m-0 list-none p-0">
        {items.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <li key={item.slug}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-[var(--radius-sm)] border-l-2 px-3 py-2 font-mono text-[13px] no-underline",
                  active
                    ? "border-ol bg-ol-soft font-semibold text-ol"
                    : "border-transparent text-ink-2 hover:bg-ol-soft/70",
                )}
              >
                <span className="w-6 shrink-0 text-[11px] text-ink-muted">{item.num}</span>
                <span className="min-w-0 flex-1 truncate">{item.short}</span>
                {reviewed[item.slug] ? <span className="size-1.5 rounded-full bg-good" /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SearchBox() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const n = q
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    if (n.length < 2) return [];
    return ALL_NAV.filter((item) => {
      const blob = `${item.title} ${item.dek} ${item.keywords.join(" ")}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return blob.includes(n);
    }).slice(0, 6);
  }, [q]);

  return (
    <div className="border-b border-line px-4 py-3">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Formule, mot, sigle…"
        aria-label="Rechercher dans le cahier"
        className="h-10 w-full rounded-[var(--radius-sm)] border border-line-strong bg-paper px-3 font-mono text-sm text-ink placeholder:text-ink-muted"
      />
      {hits.length > 0 ? (
        <ul className="mt-2 m-0 list-none p-0">
          {hits.map((h) => (
            <li key={h.slug}>
              <Link
                to={h.href}
                className="block rounded-[var(--radius-sm)] px-2 py-1.5 font-mono text-xs text-ink-2 no-underline hover:bg-ol-soft"
                onClick={() => setQ("")}
              >
                <span className="text-ink-muted">{h.num}</span> {h.short}
              </Link>
            </li>
          ))}
        </ul>
      ) : q.trim().length >= 2 ? (
        <p className="mt-2 font-mono text-[11px] text-ink-muted">Aucun résultat</p>
      ) : (
        <p className="mt-1.5 font-mono text-[11px] text-ink-muted">Échap pour effacer</p>
      )}
    </div>
  );
}
