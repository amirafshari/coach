import Term from "./Term.jsx";

/* A labelled numeric readout; when `term` is set the label links to a glossary page. */
export default function MetricChip({ label, value, dark, term }) {
  return (
    <div className={`rounded-xl px-3 py-2 min-w-[6.5rem] transition-colors ${dark ? "bg-white/10 hover:bg-white/[0.14]" : "bg-stone-100 dark:bg-stone-800 hover:bg-stone-200/70 dark:hover:bg-stone-700/70"}`}>
      <div className={`text-[0.6rem] uppercase tracking-wider font-mono2 ${dark ? "text-stone-300" : "text-stone-500 dark:text-stone-400"}`}>
        {term ? <Term id={term} dark={dark}>{label}</Term> : label}
      </div>
      <div className={`text-base font-mono2 mt-0.5 ${dark ? "text-stone-50" : "text-stone-900 dark:text-stone-50"}`}>{value}</div>
    </div>
  );
}
