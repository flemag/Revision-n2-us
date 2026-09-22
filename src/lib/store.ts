import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";

type AppState = {
  theme: Theme;
  reviewed: Record<string, boolean>;
  quizBest: number;
  quizLast: number | null;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  toggleReviewed: (id: string) => void;
  setQuizScore: (score: number, total: number) => void;
};

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: "light",
      reviewed: {},
      quizBest: 0,
      quizLast: null,
      setTheme: (t) => {
        applyTheme(t);
        set({ theme: t });
      },
      toggleTheme: () => {
        const next = get().theme === "dark" ? "light" : "dark";
        applyTheme(next);
        set({ theme: next });
      },
      toggleReviewed: (id) => {
        const reviewed = { ...get().reviewed, [id]: !get().reviewed[id] };
        set({ reviewed });
      },
      setQuizScore: (score, total) => {
        const pct = total ? Math.round((score / total) * 100) : 0;
        set({ quizLast: pct, quizBest: Math.max(get().quizBest, pct) });
      },
    }),
    {
      name: "cahier-us-v2",
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      },
    },
  ),
);

export function reviewedCount(ids: string[], map: Record<string, boolean>) {
  return ids.filter((id) => map[id]).length;
}
