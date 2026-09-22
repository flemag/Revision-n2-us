import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Check } from "../_libs/lucide-react.mjs";
import { c as useAppStore, i as cn } from "./router-DbLJOLU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CLft2yf5.js
var import_jsx_runtime = require_jsx_runtime();
function ChapterHead({ item }) {
	const reviewed = useAppStore((s) => !!s.reviewed[item.slug]);
	const toggle = useAppStore((s) => s.toggleReviewed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-wrap items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-1.5 block font-mono text-xs uppercase tracking-[0.12em] text-ol",
					children: ["Chapitre ", item.num]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-sans text-3xl leading-tight tracking-tight md:text-4xl",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[1.05rem] text-ink-muted",
					children: item.dek
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => toggle(item.slug),
			className: cn("inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 font-mono text-xs", reviewed ? "border-good bg-good-soft text-good" : "border-line-strong bg-paper-card text-ink-muted"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("inline-flex size-3.5 items-center justify-center rounded-[3px] border", reviewed ? "border-good bg-good text-paper" : "border-line-strong"),
				children: reviewed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-2.5",
					strokeWidth: 3
				}) : null
			}), reviewed ? "Révisé" : "Marquer comme révisé"]
		})]
	});
}
function H3({ children, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		id,
		className: "mt-10 mb-3 scroll-mt-24 font-sans text-xl font-semibold tracking-tight",
		children
	});
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-[var(--radius-lg)] bg-paper-card p-5 shadow-[var(--shadow-border)]", className),
		children
	});
}
function Callout({ kind = "savoir", title, children }) {
	const styles = {
		savoir: "border-ol bg-ol-soft",
		astuce: "border-ot bg-ot-soft",
		important: "border-crit bg-crit-soft"
	}[kind];
	const titleColor = {
		savoir: "text-ol",
		astuce: "text-ot",
		important: "text-crit"
	}[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("my-5 rounded-r-[var(--radius-md)] border-l-[3px] px-5 py-4", styles),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mb-1.5 font-sans text-xs font-semibold uppercase tracking-wider", titleColor),
			children: title ?? {
				savoir: "À retenir",
				astuce: "Astuce d'examen",
				important: "Piège / correction"
			}[kind]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[0.95rem] leading-relaxed text-ink-2 [&_p:last-child]:mb-0",
			children
		})]
	});
}
function Formula({ title, children, legend, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-4 rounded-[var(--radius-md)] border border-line-strong border-l-4 border-l-ol bg-paper-card p-5",
		children: [
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between gap-2 font-sans text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }), to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					className: "rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10px] text-ink-muted no-underline hover:border-ol hover:text-ol",
					children: "atelier →"
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-[var(--radius-sm)] border border-line bg-paper px-4 py-4 text-center font-mono text-lg",
				children
			}),
			legend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1 font-mono text-xs text-ink-muted",
				children: legend.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 border-t border-dotted border-line pt-1 first:border-0 first:pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "w-10 shrink-0 text-ink-2",
						children: l.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.v })]
				}, l.k))
			}) : null
		]
	});
}
function Frac({ num, den }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "formula-frac",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "num",
			children: num
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "den",
			children: den
		})]
	});
}
function Example({ tag = "Exemple", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-5 rounded-[var(--radius-md)] border border-dashed border-line-strong bg-paper-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-3 inline-block rounded-full border border-crit px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-crit",
			children: tag
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[0.95rem]",
			children
		})]
	});
}
function Result({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 inline-block rounded-[var(--radius-sm)] bg-good-soft px-3 py-1 font-mono text-sm font-semibold text-good",
		children
	});
}
function DataLine({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-0.5 font-mono text-[0.9rem]",
		children
	});
}
function Tag({ kind = "neutral", children }) {
	const cls = {
		ol: "bg-ol-soft text-ol",
		ot: "bg-ot-soft text-ot",
		neutral: "bg-line text-ink-2"
	}[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-semibold", cls),
		children
	});
}
function TableWrap({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-4 overflow-x-auto rounded-[var(--radius-md)] border border-line",
		children
	});
}
function DataTable({ headers, rows, alignRight }) {
	const right = new Set(alignRight ?? []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full border-collapse bg-paper-card font-mono text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headers.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
			className: cn("border-b border-line-strong bg-paper px-3.5 py-2.5 text-[11px] font-semibold tracking-wider text-ink-2 uppercase", right.has(i) ? "text-right" : "text-left"),
			children: h
		}, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
			className: "hover:bg-ol-soft/50",
			children: r.map((c, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: cn("border-b border-line px-3.5 py-2.5 last:border-0", right.has(j) ? "text-right tabular-nums" : ""),
				children: c
			}, j))
		}, i)) })]
	}) });
}
function Steps({ children, ot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("steps-ol", ot && "ot"),
		children
	});
}
function Step({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mt-0.5 mb-2 font-sans text-base font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[0.95rem] text-ink-2",
		children
	})] });
}
function Diagram({ caption, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-5 rounded-[var(--radius-md)] border border-line bg-paper-card p-5 text-center",
		children: [children, caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 font-mono text-[11px] leading-relaxed text-ink-muted",
			children: caption
		}) : null]
	});
}
function Grid2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-4 grid gap-4 md:grid-cols-2",
		children
	});
}
function Grid3({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children
	});
}
function Placeholder({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "border-b border-dashed border-line-strong px-0.5 text-ink-muted",
		children
	});
}
//#endregion
export { Tag as _, DataTable as a, Formula as c, Grid3 as d, H3 as f, Steps as g, Step as h, DataLine as i, Frac as l, Result as m, Card as n, Diagram as o, Placeholder as p, ChapterHead as r, Example as s, Callout as t, Grid2 as u };
