import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as deg, d as findNav, i as cn, o as formatNum, r as clamp, s as rad } from "./router-DbLJOLU9.mjs";
import { _ as Tag, c as Formula, l as Frac, m as Result, n as Card, r as ChapterHead } from "./content-CLft2yf5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-3yfR-ftO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-10 w-full rounded-[var(--radius-sm)] border border-line-strong bg-paper px-3 font-mono text-sm text-ink placeholder:text-ink-muted", className),
		...props
	});
}
function NumberField({ label, unit, value, onChange, min, max, step = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-[11px] uppercase tracking-wider text-ink-muted",
			children: [label, unit ? ` · ${unit}` : ""]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			value: Number.isFinite(value) ? value : "",
			min,
			max,
			step,
			onChange: (e) => onChange(parseFloat(e.target.value))
		})]
	});
}
/** Vitesses de référence (m/s). Le jour de l'examen, toujours utiliser l'énoncé. */
var MATERIALS = [
	{
		id: "eau",
		name: "Eau",
		vL: 1483,
		vT: null,
		z: 1.48,
		note: "Pas d'OT (liquide)"
	},
	{
		id: "air",
		name: "Air",
		vL: 333,
		vT: null,
		z: 4e-4,
		note: "Pas d'OT (gaz)"
	},
	{
		id: "plexi",
		name: "Plexiglas",
		vL: 2680,
		vT: 1450,
		z: 3.2
	},
	{
		id: "acier",
		name: "Acier",
		vL: 5920,
		vT: 3230,
		z: 45
	},
	{
		id: "alu",
		name: "Aluminium",
		vL: 6320,
		vT: 3130,
		z: 17
	},
	{
		id: "cuivre",
		name: "Cuivre",
		vL: 4700,
		vT: 2260,
		z: 42
	},
	{
		id: "titane",
		name: "Titane",
		vL: 6100,
		vT: 3100,
		z: 27
	},
	{
		id: "inox",
		name: "Inox austénitique",
		vL: 5740,
		vT: 3120,
		z: 45,
		note: "Gros grain, atténuation forte"
	}
];
var STEEL_L = 5920;
var STEEL_T = 3230;
var WATER_L = 1480;
var PLEXI_L = 2680;
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "m-0 font-sans text-base font-semibold",
			children: title
		}), children]
	});
}
function SnellCalc() {
	const [v1, setV1] = (0, import_react.useState)(WATER_L);
	const [vOl, setVOl] = (0, import_react.useState)(STEEL_L);
	const [vOt, setVOt] = (0, import_react.useState)(STEEL_T);
	const [inc, setInc] = (0, import_react.useState)(7);
	const out = (0, import_react.useMemo)(() => {
		const s1 = Math.sin(rad(inc));
		const argOl = s1 * vOl / v1;
		const argOt = s1 * vOt / v1;
		const c1 = deg(Math.asin(clamp(v1 / vOl, 0, 1)));
		const c2 = deg(Math.asin(clamp(v1 / vOt, 0, 1)));
		return {
			ol: argOl >= 1 ? null : deg(Math.asin(argOl)),
			ot: argOt >= 1 ? null : deg(Math.asin(argOt)),
			c1,
			c2,
			past1: inc > c1 + .05,
			past2: inc > c2 + .05
		};
	}, [
		v1,
		vOl,
		vOt,
		inc
	]);
	const x = (angle, len) => 200 + Math.sin(rad(angle)) * len;
	const yInc = 40 + Math.cos(rad(inc)) * 90;
	const xInc = 200 - Math.sin(rad(inc)) * 90;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Snell-Descartes",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "V1 (milieu 1)",
						unit: "m/s",
						value: v1,
						onChange: setV1,
						step: 10
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "V OL milieu 2",
						unit: "m/s",
						value: vOl,
						onChange: setVOl,
						step: 10
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "V OT milieu 2",
						unit: "m/s",
						value: vOt,
						onChange: setVOt,
						step: 10
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Incidence",
						unit: "°",
						value: inc,
						onChange: setInc,
						min: 0,
						max: 85,
						step: .5
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preset, {
					onClick: () => {
						setV1(WATER_L);
						setVOl(STEEL_L);
						setVOt(STEEL_T);
						setInc(7);
					},
					children: "Eau → acier, 7°"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preset, {
					onClick: () => {
						setV1(PLEXI_L);
						setVOl(STEEL_L);
						setVOt(STEEL_T);
						setInc(36);
					},
					children: "Plexi → acier, ~45° OT"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 400 280",
				className: "h-auto w-full rounded-[var(--radius-sm)] border border-line bg-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "20",
						y1: "140",
						x2: "380",
						y2: "140",
						stroke: "var(--ink)",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "20",
						x2: "200",
						y2: "260",
						stroke: "var(--line-strong)",
						strokeDasharray: "4 4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "28",
						y: "36",
						fill: "var(--ink-muted)",
						fontSize: "11",
						fontFamily: "var(--font-mono)",
						children: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "28",
						y: "250",
						fill: "var(--ink-muted)",
						fontSize: "11",
						fontFamily: "var(--font-mono)",
						children: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: xInc,
						y1: 140 - (140 - yInc),
						x2: "200",
						y2: "140",
						stroke: "var(--ink)",
						strokeWidth: "2"
					}),
					out.ol != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "140",
						x2: x(out.ol, 110),
						y2: 140 + Math.cos(rad(out.ol)) * 110,
						stroke: "var(--ol)",
						strokeWidth: "2.4"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "140",
						x2: "320",
						y2: "140",
						stroke: "var(--ol)",
						strokeWidth: "2",
						strokeDasharray: "6 4"
					}),
					out.ot != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "140",
						x2: x(out.ot, 110),
						y2: 140 + Math.cos(rad(out.ot)) * 110,
						stroke: "var(--ot)",
						strokeWidth: "2.4"
					}) : out.past2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "140",
						x2: "340",
						y2: "140",
						stroke: "var(--ot)",
						strokeWidth: "2",
						strokeDasharray: "6 4"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "200",
						cy: "140",
						r: "3",
						fill: "var(--marge)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 font-mono text-sm sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"OL réfractée :",
						" ",
						out.ol == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							kind: "ol",
							children: "évanescente (≥ θc1)"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [formatNum(out.ol, 1), "°"] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"OT réfractée :",
						" ",
						out.ot == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							kind: "ot",
							children: "évanescente (≥ θc2)"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [formatNum(out.ot, 1), "°"] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"1er critique : ",
						formatNum(out.c1, 1),
						"°"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"2e critique : ",
						formatNum(out.c2, 1),
						"°"
					] })
				]
			})
		]
	});
}
function Preset({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-ink-2 hover:border-ol hover:text-ol",
		children
	});
}
function WaveCalc() {
	const [c, setC] = (0, import_react.useState)(STEEL_L);
	const [f, setF] = (0, import_react.useState)(2);
	const lambdaMm = c / (f * 1e6) * 1e3;
	const eMm = lambdaMm / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Longueur d'onde & piézo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "Célérité",
				unit: "m/s",
				value: c,
				onChange: setC,
				step: 10
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "Fréquence",
				unit: "MHz",
				value: f,
				onChange: setF,
				step: .1,
				min: .1
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, { children: [
			"λ = ",
			formatNum(lambdaMm, 2),
			" mm · e = λ/2 = ",
			formatNum(eMm, 2),
			" mm"
		] })]
	});
}
function NearFieldCalc() {
	const [d, setD] = (0, import_react.useState)(20);
	const [f, setF] = (0, import_react.useState)(2);
	const [c, setC] = (0, import_react.useState)(STEEL_L);
	const nMm = d * d * f / (4 * c) * 1e3;
	const lambdaMm = c / (f * 1e6) * 1e3;
	const sin6 = .51 * (lambdaMm / d);
	const th6 = deg(Math.asin(clamp(sin6, 0, 1)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Champ proche & divergence −6 dB",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Ø palpeur D",
						unit: "mm",
						value: d,
						onChange: setD,
						step: .5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Fréquence",
						unit: "MHz",
						value: f,
						onChange: setF,
						step: .1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						label: "Célérité",
						unit: "m/s",
						value: c,
						onChange: setC,
						step: 10
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 font-mono text-xs text-ink-muted",
				children: "Formule avec D en mm, f en MHz, C en m/s → N en mètres, ici converti en mm."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, { children: [
				"N₀ = ",
				formatNum(nMm, 1),
				" mm · Θ(−6 dB) ≈ ",
				formatNum(th6, 1),
				"° · λ = ",
				formatNum(lambdaMm, 2),
				" mm"
			] })
		]
	});
}
function SkipCalc() {
	const [t, setT] = (0, import_react.useState)(20);
	const [th, setTh] = (0, import_react.useState)(45);
	const [p, setP] = (0, import_react.useState)(28.3);
	const half = t * Math.tan(rad(th));
	const full = 2 * half;
	const pHalf = t / Math.cos(rad(th));
	const dRaw = p * Math.cos(rad(th));
	const s = p * Math.sin(rad(th));
	let d = dRaw;
	let zone = "direct";
	if (dRaw > t) {
		const folded = dRaw % (2 * t);
		if (folded > t) {
			d = 2 * t - folded;
			zone = "après ½ skip (remontée)";
		} else {
			d = folded;
			zone = "rebond pair";
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Skip, profondeur, distance projetée",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Épaisseur t",
					unit: "mm",
					value: t,
					onChange: setT,
					step: .5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Angle θ",
					unit: "°",
					value: th,
					onChange: setTh,
					min: 1,
					max: 80,
					step: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Parcours P",
					unit: "mm",
					value: p,
					onChange: setP,
					step: .5
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-mono text-sm leading-relaxed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"½ skip = ",
					formatNum(half, 1),
					" mm · skip = ",
					formatNum(full, 1),
					" mm"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"P_½ = ",
					formatNum(pHalf, 1),
					" mm"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"Pour P = ",
					formatNum(p, 1),
					" mm → s = ",
					formatNum(s, 1),
					" mm, d ≈ ",
					formatNum(d, 1),
					" mm",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-ink-muted",
						children: [
							"(",
							zone,
							")"
						]
					})
				] })
			]
		})]
	});
}
function DbCalc() {
	const [a1, setA1] = (0, import_react.useState)(80);
	const [a2, setA2] = (0, import_react.useState)(40);
	const db = 20 * Math.log10(a2 / a1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Conversion dB",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
				"ΔdB = 20 log",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frac, {
					num: "A2",
					den: "A1"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Amplitude A1",
					unit: "% HE",
					value: a1,
					onChange: setA1,
					min: .1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Amplitude A2",
					unit: "% HE",
					value: a2,
					onChange: setA2,
					min: .1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, { children: [
				formatNum(db, 1),
				" dB",
				Math.abs(db - -6) < .15 ? " · c'est pile −6 dB" : ""
			] })
		]
	});
}
function ImpedanceCalc() {
	const [z1, setZ1] = (0, import_react.useState)(1.48);
	const [z2, setZ2] = (0, import_react.useState)(45);
	const er = (z1 - z2) * (z1 - z2) / ((z1 + z2) * (z1 + z2));
	const et = 4 * z1 * z2 / ((z1 + z2) * (z1 + z2));
	const r = (z2 - z1) / (z2 + z1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Réflexion / transmission (incidence normale)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: MATERIALS.filter((m) => m.z).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preset, {
					onClick: () => setZ2(m.z),
					children: ["Z2 = ", m.name]
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Z1",
					unit: "MRayl",
					value: z1,
					onChange: setZ1,
					step: .1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "Z2",
					unit: "MRayl",
					value: z2,
					onChange: setZ2,
					step: .1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"Er (intensité) = ",
						formatNum(er * 100, 1),
						" %"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"Et (intensité) = ",
						formatNum(et * 100, 1),
						" %"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"r (amplitude) = ",
						formatNum(r, 3),
						r < 0 ? " · inversion de phase" : ""
					] })
				]
			})
		]
	});
}
function PeCalc() {
	const [L, setL] = (0, import_react.useState)(84);
	const [r, setR] = (0, import_react.useState)(100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Point d'émergence",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "Lecture réglet L",
				unit: "mm",
				value: L,
				onChange: setL
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "Rayon R (V1=100)",
				unit: "mm",
				value: r,
				onChange: setR
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, { children: [
			"PE = ",
			formatNum(r - L, 1),
			" mm"
		] })]
	});
}
function AngleCorrCalc() {
	const [L, setL] = (0, import_react.useState)(91);
	const [pe, setPe] = (0, import_react.useState)(16);
	const tan = (L + pe - 35) / 70;
	const a = deg(Math.atan(tan));
	const ok = Math.abs(a - 45) <= 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Correction d'angle (cotes V1)",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "L mesuré",
				unit: "mm",
				value: L,
				onChange: setL
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "PE",
				unit: "mm",
				value: pe,
				onChange: setPe
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, { children: [
			"α = ",
			formatNum(a, 2),
			"° ",
			ok ? "· dans ± 2° (45°)" : "· hors ± 2°"
		] })]
	});
}
function AllCalculators() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnellCalc, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveCalc, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NearFieldCalc, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipCalc, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbCalc, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpedanceCalc, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeCalc, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleCorrCalc, {})]
				})
			]
		})]
	});
}
function Atelier() {
	const item = findNav("atelier");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHead, { item }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-ink-2",
			children: "Toutes les formules du cahier, en version interactive. Les schémas suivent tes valeurs. Les arrondis d'examen restent ceux de l'énoncé : ici on calcule « pour de vrai »."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllCalculators, {})
	] });
}
//#endregion
export { Atelier as component };
