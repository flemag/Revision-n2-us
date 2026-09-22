import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as useAppStore, i as cn, l as CHAPTERS, u as TOOLS } from "./router-DbLJOLU9.mjs";
import { _ as Tag, n as Card } from "./content-CLft2yf5.mjs";
import { t as AScanHero } from "./diagrams-ZCiO065K.mjs";
import { n as buttonVariants } from "./button-CqxfcxPw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-4LSWJa.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const reviewed = useAppStore((s) => s.reviewed);
	const quizBest = useAppStore((s) => s.quizBest);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-ol uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-ol shadow-[0_0_0_4px_var(--ol-soft)]" }), "Fiches de révision UT2"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-sans text-4xl leading-[1.1] tracking-tight md:text-5xl",
					children: [
						"Ton cahier d'ultrasons,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-ol",
							children: "relu, corrigé, calculable."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[46ch] text-lg text-ink-2",
					children: "Mise au propre des notes COFREND Ultrasons Niveau 2 : théorie, pièges d'examen, schémas, exemples chiffrés, atelier de calcul et QCM commenté."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/chapitre/ondes",
						className: cn(buttonVariants({ size: "lg" }), "no-underline"),
						children: ["Commencer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/atelier",
						className: cn(buttonVariants({
							variant: "ghost",
							size: "lg"
						}), "no-underline"),
						children: "Atelier de calcul"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-ink-muted uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A-scan — vue écran" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-1.5 rounded-full bg-line-strong" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-1.5 rounded-full bg-line-strong" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-1.5 rounded-full bg-line-strong" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AScanHero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-3 font-mono text-[11px] text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-sm bg-ink-muted" }), " Impulsion"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-sm bg-crit" }), " Écho défaut"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2.5 rounded-sm bg-ol" }), " Écho de fond"]
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-0 mb-4 font-sans text-base",
				children: "Comment réviser ici"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-sans text-sm font-semibold",
						children: "Neuf chapitres + outils"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 mb-0 text-sm text-ink-muted",
						children: "Géométrie du palpeur d'angle, 1er et 2e critiques, dB, DAC/TCG — en plus du cahier d'origine."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-sans text-sm font-semibold",
						children: "Corrections visibles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 mb-0 text-sm text-ink-muted",
						children: "Impédance, norme EN 10228-3, zone focale, inversion de phase : les erreurs de notes sont signalées en rouge."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-sans text-sm font-semibold",
						children: "Atelier & QCM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 mb-0 text-sm text-ink-muted",
						children: [
							"Snell live, skip, champ proche, dB. ",
							QUESTIONS_N,
							" questions type examen, avec explication à chaque faute.",
							quizBest ? ` Meilleur score : ${quizBest} %.` : ""
						]
					})] })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 font-sans text-xl",
			children: "Sommaire"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: c.href,
				className: "rounded-[var(--radius-md)] bg-paper-card p-4 no-underline shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-ol",
							children: ["Ch. ", c.num]
						}), reviewed[c.slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							kind: "ol",
							children: "révisé"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-sans text-base font-semibold text-ink",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 mb-0 text-sm text-ink-muted",
						children: c.dek
					})
				]
			}, c.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 mb-4 font-sans text-xl",
			children: "Outils"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: TOOLS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: c.href,
				className: "rounded-[var(--radius-md)] bg-paper-card p-4 no-underline shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-ot",
						children: c.num
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-sans text-base font-semibold text-ink",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 mb-0 text-sm text-ink-muted",
						children: c.dek
					})
				]
			}, c.slug))
		})
	] });
}
var QUESTIONS_N = 28;
//#endregion
export { Home as component };
