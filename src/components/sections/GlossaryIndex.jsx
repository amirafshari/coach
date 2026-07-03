import { GraduationCap } from "lucide-react";
import { useNav } from "../../context/NavContext.jsx";
import { GLOSSARY } from "../../data/glossary.js";

/* Index of every concept — each chip opens its full glossary page. */
export default function GlossaryIndex() {
  const nav = useNav();
  return (
    <section className="mb-4">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Reference — concepts & terms</div>
      <h2 className="font-display text-2xl mb-1 flex items-center gap-2"><GraduationCap size={20} className="text-emerald-600 dark:text-emerald-400" /> Glossary</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">Every concept used in this plan, explained in plain language with cited sources. Tap any term to open its page.</p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(GLOSSARY).map(([id, g]) => (
          <button key={id} onClick={() => nav.openTerm(id)}
            className="text-sm bg-white dark:bg-stone-900 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-stone-200 dark:border-stone-700 hover:border-emerald-300 dark:hover:border-emerald-700 text-stone-700 dark:text-stone-200 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-full px-3.5 py-1.5 transition-colors shadow-sm">
            {g.term}
          </button>
        ))}
      </div>
    </section>
  );
}
