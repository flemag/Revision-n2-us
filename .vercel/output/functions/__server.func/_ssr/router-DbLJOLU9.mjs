import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Moon, n as TriangleAlert, r as Sun, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DbLJOLU9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var CHAPTERS = [
	{
		slug: "ondes",
		href: "/chapitre/ondes",
		num: "01",
		title: "Les ondes ultrasonores",
		short: "Ondes",
		dek: "OL, OT, Rayleigh, Lamb — comment le faisceau naît et se comporte dans la pièce.",
		keywords: [
			"longitudinale",
			"transversale",
			"cisaillement",
			"compression",
			"rayleigh",
			"lamb",
			"grains",
			"mode",
			"conversion",
			"piezo",
			"surface"
		]
	},
	{
		slug: "grandeurs",
		href: "/chapitre/grandeurs",
		num: "02",
		title: "Grandeurs & formules",
		short: "Grandeurs",
		dek: "Longueur d'onde, impédance, réflexion/transmission, décibels — les outils de calcul.",
		keywords: [
			"longueur d'onde",
			"lambda",
			"impedance",
			"reflexion",
			"transmission",
			"decibel",
			"db",
			"piezo",
			"epaisseur"
		]
	},
	{
		slug: "snell",
		href: "/chapitre/snell",
		num: "03",
		title: "Loi de Snell-Descartes",
		short: "Snell",
		dek: "Réfraction OL/OT, premier et second angles critiques, angle marqué du palpeur.",
		keywords: [
			"snell",
			"descartes",
			"refraction",
			"incidence",
			"critique",
			"sabot",
			"plexiglas",
			"eau"
		]
	},
	{
		slug: "champs",
		href: "/chapitre/champs",
		num: "04",
		title: "Champs acoustiques",
		short: "Champs",
		dek: "Fresnel, Fraunhofer, zone focale, divergence, zone morte — géométrie du faisceau.",
		keywords: [
			"fresnel",
			"fraunhofer",
			"champ proche",
			"n0",
			"divergence",
			"focale",
			"zone morte",
			"frequence"
		]
	},
	{
		slug: "geometrie",
		href: "/chapitre/geometrie",
		num: "05",
		title: "Géométrie du palpeur d'angle",
		short: "Géométrie",
		dek: "Parcours sonore, profondeur, distance projetée, ½ skip et skip complet.",
		keywords: [
			"skip",
			"parcours",
			"profondeur",
			"distance projetee",
			"demi-skip",
			"v-path",
			"pe"
		]
	},
	{
		slug: "etalonnage",
		href: "/chapitre/etalonnage",
		num: "06",
		title: "Étalonnage appareil US",
		short: "Étalonnage",
		dek: "Cales V1 et V2, linéarité, PE, correction d'angle, rapport S/B — ISO 22232-3.",
		keywords: [
			"v1",
			"v2",
			"cale",
			"linearite",
			"point emergence",
			"angle",
			"iso 22232",
			"iso 2400"
		]
	},
	{
		slug: "avg",
		href: "/chapitre/avg",
		num: "07",
		title: "AVG, DAC, TCG & dimensionnement",
		short: "AVG",
		dek: "Taille équivalente, courbes DAC, TCG, méthodes −6 dB et −20 dB.",
		keywords: [
			"avg",
			"dgs",
			"dac",
			"tcg",
			"cad",
			"moins 6 db",
			"dimensionnement",
			"tfp"
		]
	},
	{
		slug: "forge",
		href: "/chapitre/forge",
		num: "08",
		title: "Pièces forgées",
		short: "Forge",
		dek: "État de surface, retassures, tapures, flocons — NF EN 10228-3.",
		keywords: [
			"forge",
			"retassure",
			"tapure",
			"flocon",
			"hydrogene",
			"10228",
			"rugosite",
			"brut"
		]
	},
	{
		slug: "fit",
		href: "/chapitre/fit",
		num: "09",
		title: "Procédure FIT complète",
		short: "FIT",
		dek: "Structure d'une Fiche d'Instruction de Travail, du matériel à la sanction.",
		keywords: [
			"fit",
			"instruction",
			"norme",
			"10160",
			"qualification",
			"rapport",
			"cartographie"
		]
	}
];
var TOOLS = [
	{
		slug: "formulaire",
		href: "/formulaire",
		num: "Σ",
		title: "Formulaire récapitulatif",
		short: "Formulaire",
		dek: "Toutes les formules, vitesses et conversions dB en une page.",
		keywords: [
			"formule",
			"aide-memoire",
			"vitesses"
		]
	},
	{
		slug: "atelier",
		href: "/atelier",
		num: "ƒ",
		title: "Atelier de calcul",
		short: "Atelier",
		dek: "Calculateurs Snell, champ proche, skip, dB, impédance — avec schéma live.",
		keywords: [
			"calculatrice",
			"snell",
			"skip",
			"db",
			"champ proche"
		]
	},
	{
		slug: "quiz",
		href: "/quiz",
		num: "?",
		title: "QCM d'entraînement",
		short: "QCM",
		dek: "Questions type examen, avec correction commentée.",
		keywords: [
			"qcm",
			"examen",
			"piege",
			"entrainement"
		]
	},
	{
		slug: "glossaire",
		href: "/glossaire",
		num: "Aa",
		title: "Glossaire",
		short: "Glossaire",
		dek: "Tous les sigles du cahier, en un seul endroit.",
		keywords: [
			"sigle",
			"abrev",
			"definition"
		]
	}
];
var ALL_NAV = [...CHAPTERS, ...TOOLS];
function findNav(slug) {
	return ALL_NAV.find((n) => n.slug === slug);
}
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
}
var useAppStore = create()(persist((set, get) => ({
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
		set({ reviewed: {
			...get().reviewed,
			[id]: !get().reviewed[id]
		} });
	},
	setQuizScore: (score, total) => {
		const pct = total ? Math.round(score / total * 100) : 0;
		set({
			quizLast: pct,
			quizBest: Math.max(get().quizBest, pct)
		});
	}
}), {
	name: "cahier-us-v2",
	onRehydrateStorage: () => (state) => {
		if (state) applyTheme(state.theme);
	}
}));
function reviewedCount(ids, map) {
	return ids.filter((id) => map[id]).length;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatNum(n, digits = 2) {
	if (!Number.isFinite(n)) return "—";
	const abs = Math.abs(n);
	const d = abs >= 100 ? 1 : abs >= 10 ? 2 : digits;
	return n.toLocaleString("fr-FR", {
		maximumFractionDigits: d,
		minimumFractionDigits: 0
	});
}
function deg(rad) {
	return rad * 180 / Math.PI;
}
function rad(degVal) {
	return degVal * Math.PI / 180;
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function useThemeHydrate() {
	const theme = useAppStore((s) => s.theme);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
}
function AppShell({ children }) {
	useThemeHydrate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const reviewed = useAppStore((s) => s.reviewed);
	const theme = useAppStore((s) => s.theme);
	const toggleTheme = useAppStore((s) => s.toggleTheme);
	const progressIds = [...CHAPTERS, ...TOOLS].map((c) => c.slug);
	const done = reviewedCount(progressIds, reviewed);
	const pct = Math.round(done / progressIds.length * 100);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper",
				children: "Aller au contenu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-paper-card px-4 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-line-strong bg-paper",
					"aria-label": "Ouvrir le sommaire",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-sm font-bold",
					children: "Cahier US · Révisions"
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "no-print fixed inset-0 z-30 bg-ink/40 lg:hidden",
				"aria-label": "Fermer le sommaire",
				onClick: () => setOpen(false)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("no-print fixed top-0 left-0 z-40 flex h-svh w-[288px] flex-col border-r border-line bg-paper-card transition-transform duration-200", open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line px-5 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 font-sans text-[1.05rem] font-bold text-ink no-underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-ol shadow-[0_0_0_3px_var(--ol-soft)]" }), "Cahier US"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-mono text-[11px] tracking-[0.08em] text-ink-muted uppercase",
							children: "COFREND · Ultrasons · Niveau 2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex-1 overflow-y-auto px-3 py-3",
						"aria-label": "Sommaire",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
								label: "Cahier",
								items: CHAPTERS,
								pathname,
								reviewed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 my-3 h-px bg-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
								label: "Outils",
								items: TOOLS,
								pathname,
								reviewed
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1.5 flex justify-between font-mono text-[11px] text-ink-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progression" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [pct, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-ol transition-[width] duration-300",
									style: { width: `${pct}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: toggleTheme,
								className: "mt-4 flex h-10 w-full items-center justify-between rounded-[var(--radius-sm)] border border-line-strong bg-paper px-3 font-mono text-xs text-ink hover:border-ol",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: theme === "dark" ? "Mode Oscillo" : "Mode Cahier" }), theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-3.5" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				className: "lg:ml-[288px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[900px] px-4 py-10 md:px-8 md:py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute top-0 bottom-0 left-8 hidden w-px bg-marge/60 md:block"
					}), children]
				})
			})
		]
	});
}
function NavGroup({ label, items, pathname, reviewed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-3 pt-1 pb-1 font-mono text-[10px] tracking-widest text-ink-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "m-0 list-none p-0",
		children: items.map((item) => {
			const active = pathname === item.href || item.href !== "/" && pathname.startsWith(item.href);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.href,
				className: cn("flex items-center gap-2.5 rounded-[var(--radius-sm)] border-l-2 px-3 py-2 font-mono text-[13px] no-underline", active ? "border-ol bg-ol-soft font-semibold text-ol" : "border-transparent text-ink-2 hover:bg-ol-soft/70"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 shrink-0 text-[11px] text-ink-muted",
						children: item.num
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						children: item.short
					}),
					reviewed[item.slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-good" }) : null
				]
			}) }, item.slug);
		})
	})] });
}
function SearchBox() {
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => {
		const n = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
		if (n.length < 2) return [];
		return ALL_NAV.filter((item) => {
			return `${item.title} ${item.dek} ${item.keywords.join(" ")}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(n);
		}).slice(0, 6);
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-line px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "search",
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: "Formule, mot, sigle…",
			"aria-label": "Rechercher dans le cahier",
			className: "h-10 w-full rounded-[var(--radius-sm)] border border-line-strong bg-paper px-3 font-mono text-sm text-ink placeholder:text-ink-muted"
		}), hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 m-0 list-none p-0",
			children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: h.href,
				className: "block rounded-[var(--radius-sm)] px-2 py-1.5 font-mono text-xs text-ink-2 no-underline hover:bg-ol-soft",
				onClick: () => setQ(""),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink-muted",
						children: h.num
					}),
					" ",
					h.short
				]
			}) }, h.slug))
		}) : q.trim().length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-mono text-[11px] text-ink-muted",
			children: "Aucun résultat"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 font-mono text-[11px] text-ink-muted",
			children: "Échap pour effacer"
		})]
	});
}
var styles_default = "/assets/styles-Co6fgUue.css";
var APP_NAME = "Cahier US";
var THEME_BOOT = `(function(){try{var r=localStorage.getItem("cahier-us-v2");var t=r?JSON.parse(r).state.theme:null;if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Cahier de révision COFREND Ultrasons Niveau 2 — ondes, Snell-Descartes, champs, étalonnage, AVG, forge, FIT, calculateurs et QCM."
			},
			{
				name: "theme-color",
				content: "#0E7C74"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOT } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-D-4LSWJa.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./atelier-3yfR-ftO.mjs");
var Route$4 = createFileRoute("/atelier")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./formulaire-C1cYTH4z.mjs");
var Route$3 = createFileRoute("/formulaire")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./glossaire-D4BOVC7O.mjs");
var Route$2 = createFileRoute("/glossaire")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./quiz-Umeump3l.mjs");
var Route$1 = createFileRoute("/quiz")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./chapitre._slug-CGOwBWQW.mjs");
var Route = createFileRoute("/chapitre/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AtelierRoute: Route$4.update({
		id: "/atelier",
		path: "/atelier",
		getParentRoute: () => Route$6
	}),
	FormulaireRoute: Route$3.update({
		id: "/formulaire",
		path: "/formulaire",
		getParentRoute: () => Route$6
	}),
	GlossaireRoute: Route$2.update({
		id: "/glossaire",
		path: "/glossaire",
		getParentRoute: () => Route$6
	}),
	QuizRoute: Route$1.update({
		id: "/quiz",
		path: "/quiz",
		getParentRoute: () => Route$6
	}),
	ChapitreSlugRoute: Route.update({
		id: "/chapitre/$slug",
		path: "/chapitre/$slug",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { deg as a, useAppStore as c, findNav as d, cn as i, CHAPTERS as l, Route as n, formatNum as o, clamp as r, rad as s, router_exports as t, TOOLS as u };
