import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as findNav } from "./router-DbLJOLU9.mjs";
import { a as DataTable, l as Frac, r as ChapterHead } from "./content-CLft2yf5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/formulaire-C1cYTH4z.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		name: "Snell-Descartes",
		href: "/chapitre/snell",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
				num: "sin θ₁",
				den: "V₁"
			}),
			" = ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
				num: "sin θ₂",
				den: "V₂"
			})
		] })
	},
	{
		name: "Longueur d'onde",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["λ = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "C",
			den: "f"
		})] })
	},
	{
		name: "Épaisseur piézo",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["e = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "λ",
			den: "2"
		})] })
	},
	{
		name: "Impédance",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Z = ρ × C" })
	},
	{
		name: "Réflexion (intensité)",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Er = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "(Z1−Z2)²",
			den: "(Z1+Z2)²"
		})] })
	},
	{
		name: "Transmission (intensité)",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Et = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "4 Z1 Z2",
			den: "(Z1+Z2)²"
		})] })
	},
	{
		name: "Décibels",
		href: "/chapitre/grandeurs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ΔdB = 20 log ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "A2",
			den: "A1"
		})] })
	},
	{
		name: "Champ proche",
		href: "/chapitre/champs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["N₀ = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "D² f",
			den: "4 C"
		})] })
	},
	{
		name: "Divergence",
		href: "/chapitre/champs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["sin Θ = K ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "λ",
			den: "D"
		})] })
	},
	{
		name: "Zone focale (longueur)",
		href: "/chapitre/champs",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "4",
			den: "3"
		}), " N₀"] })
	},
	{
		name: "Profondeur (angle)",
		href: "/chapitre/geometrie",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "d = P · cos θ" })
	},
	{
		name: "Distance projetée",
		href: "/chapitre/geometrie",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "s = P · sin θ" })
	},
	{
		name: "½ skip",
		href: "/chapitre/geometrie",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "t · tan θ" })
	},
	{
		name: "Point d'émergence (V1)",
		href: "/chapitre/etalonnage",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "PE = 100 − L" })
	},
	{
		name: "Correction d'angle (V1)",
		href: "/chapitre/etalonnage",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["tan α = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "(L+PE)−35",
			den: "70"
		})] })
	},
	{
		name: "Rapport S/B",
		href: "/chapitre/etalonnage",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "G1 − G2" })
	},
	{
		name: "AVG — D réduite",
		href: "/chapitre/avg",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["D = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
			num: "PS",
			den: "N"
		})] })
	},
	{
		name: "AVG — Ø équivalent",
		href: "/chapitre/avg",
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Φéq = G × Φpiézo" })
	}
];
function Formulaire() {
	const item = findNav("formulaire");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, { item }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-ink-2",
			children: "Les 18 relations du cahier, pour une relecture express. Chaque carte renvoie au chapitre."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: ITEMS.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-md)] border border-line bg-paper-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-sm font-semibold",
						children: it.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: it.href,
						className: "rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10px] text-ink-muted no-underline hover:border-ol hover:text-ol",
						children: "voir"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-3 text-center font-mono",
					children: it.node
				})]
			}, it.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 mb-3 font-sans text-xl",
			children: "Vitesses de référence (m/s)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			headers: [
				"Matériau",
				"OL",
				"OT"
			],
			rows: [
				[
					"Eau",
					"1483",
					"—"
				],
				[
					"Air",
					"333",
					"—"
				],
				[
					"Plexiglas",
					"2680",
					"1450"
				],
				[
					"Acier",
					"5920",
					"3230"
				],
				[
					"Aluminium",
					"6320",
					"3130"
				]
			],
			alignRight: [1, 2]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 mb-3 font-sans text-xl",
			children: "K de divergence"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			headers: ["K", "Seuil"],
			rows: [
				["1,22", "1er zéro"],
				["0,51", "−6 dB"],
				["0,87", "−20 dB"]
			],
			alignRight: [0]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 mb-3 font-sans text-xl",
			children: "Décibels utiles"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			headers: ["ΔdB", "A2 / A1"],
			rows: [
				["+6", "× 2"],
				["−6", "× ½"],
				["−12", "× ¼"],
				["−20", "× 1/10"]
			],
			alignRight: [0, 1]
		})
	] });
}
//#endregion
export { Formulaire as component };
