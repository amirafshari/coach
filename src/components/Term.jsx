import { Info } from "lucide-react";
import { useNav } from "../context/NavContext.jsx";
import { GLOSSARY } from "../data/glossary.js";

/* Inline term: dotted-underline, brief definition on hover, full page on click. */
export default function Term({ id, children, dark }) {
  const nav = useNav();
  const g = GLOSSARY[id];
  if (!g) return <>{children}</>;
  const underline = dark
    ? "decoration-stone-500 dark:decoration-stone-400 hover:decoration-emerald-300"
    : "decoration-stone-400 dark:decoration-stone-500 hover:decoration-emerald-500";
  return (
    <span className="relative group inline-block">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); nav.openTerm(id); }}
        aria-label={`${g.term} — ${g.short} Open full explanation.`}
        className={`inline-flex items-center gap-0.5 text-inherit font-medium underline decoration-dotted decoration-1 underline-offset-2 ${underline} focus:outline-none focus:ring-2 focus:ring-emerald-400/50 rounded-sm transition-colors`}
      >
        {children || g.term}
        <Info size={11} className="opacity-40 group-hover:opacity-90 shrink-0" />
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute z-40 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 max-w-[calc(100vw-2rem)] rounded-xl bg-stone-900 text-stone-100 text-xs font-normal normal-case tracking-normal leading-relaxed text-left px-3.5 py-2.5 shadow-xl ring-1 ring-black/5 opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        <span className="block font-semibold text-emerald-300 mb-0.5">{g.term}</span>
        <span className="text-stone-200">{g.short}</span>
        <span className="block mt-1.5 text-[0.65rem] text-stone-400 dark:text-stone-500">Click to read more →</span>
      </span>
    </span>
  );
}
