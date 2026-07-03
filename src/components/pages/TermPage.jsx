import { GraduationCap } from "lucide-react";
import { useNav } from "../../context/NavContext.jsx";
import { GLOSSARY } from "../../data/glossary.js";
import DetailShell from "./DetailShell.jsx";
import SourceList from "../SourceList.jsx";
import Disclaimer from "../Disclaimer.jsx";

/* Full explanation page for a single glossary concept. */
export default function TermPage({ id }) {
  const nav = useNav();
  const g = GLOSSARY[id];
  if (!g) return <DetailShell kicker="Concept"><p>Term not found.</p></DetailShell>;
  const related = Object.entries(GLOSSARY).filter(([k]) => k !== id).slice(0, 5);
  return (
    <DetailShell kicker="Concept">
      <div className="font-mono2 text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
        <GraduationCap size={14} /> Concept
      </div>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">{g.term}</h1>
      <p className="text-lg text-stone-700 dark:text-stone-200 leading-relaxed mb-6 border-l-4 border-emerald-500 pl-4">{g.short}</p>
      {g.long.map((para, i) => (
        <p key={i} className="text-stone-700 dark:text-stone-200 leading-7 mb-4">{para}</p>
      ))}
      <SourceList sources={g.sources} />
      <div className="mt-8 border-t border-stone-200 dark:border-stone-700 pt-5">
        <div className="font-mono2 text-[0.62rem] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">Related concepts</div>
        <div className="flex flex-wrap gap-2">
          {related.map(([k, v]) => (
            <button key={k} onClick={() => nav.openTerm(k)}
              className="text-xs bg-stone-100 dark:bg-stone-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-stone-200 dark:border-stone-700 hover:border-emerald-300 dark:hover:border-emerald-700 text-stone-700 dark:text-stone-200 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-full px-3 py-1.5 transition-colors">
              {v.term}
            </button>
          ))}
        </div>
      </div>
      <Disclaimer />
    </DetailShell>
  );
}
