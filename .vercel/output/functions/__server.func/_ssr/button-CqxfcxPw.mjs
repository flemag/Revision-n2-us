import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./router-DbLJOLU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CqxfcxPw.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-semibold transition-opacity duration-150 disabled:opacity-40 disabled:pointer-events-none select-none", {
	variants: {
		variant: {
			primary: "bg-ink text-paper hover:opacity-90 dark:bg-ol dark:text-[#04211e]",
			ghost: "bg-transparent border border-line-strong text-ink hover:border-ol hover:text-ol",
			outline: "bg-paper-card border border-line-strong text-ink hover:border-ol",
			good: "bg-good-soft text-good border border-good/30"
		},
		size: {
			sm: "h-9 px-3 text-xs rounded-full",
			md: "h-10 px-4 text-sm rounded-full",
			lg: "h-11 px-5 text-sm rounded-full",
			icon: "size-10 rounded-[var(--radius-sm)]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { buttonVariants as n, Button as t };
