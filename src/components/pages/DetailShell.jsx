import { ArrowLeft } from "lucide-react";
import { useNav } from "../../context/NavContext.jsx";
import ThemeToggle from "../ThemeToggle.jsx";

/* Shared chrome for detail pages: sticky header + "back to plan" link. */
export default function DetailShell({ kicker, children }) {
  const nav = useNav();
  return (
    <div className="page-enter">
      <div className="sticky top-0 z-20 bg-stone-50/85 dark:bg-stone-950/85 backdrop-blur border-b border-stone-200 dark:border-stone-700">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={nav.goHome} className="font-display text-lg leading-none hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Coach<span className="text-emerald-600 dark:text-emerald-400">.</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="font-mono2 text-[0.6rem] uppercase tracking-widest text-stone-400 dark:text-stone-500">{kicker}</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <button onClick={nav.goHome}
          className="inline-flex items-center gap-1.5 font-mono2 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 mb-7 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> Back to plan
        </button>
        {children}
      </div>
    </div>
  );
}
