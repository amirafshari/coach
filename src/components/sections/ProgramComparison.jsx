import { PROGRAM_LIBRARY } from "../../data/programs.js";
import Term from "../Term.jsx";

/* Expandable, selectable cards comparing each split. Selecting a program sets
   the user's workout days, which drives the schedule shown in Training Week. */
export default function ProgramComparison({ workoutDays, openProgram, setOpenProgram, updateParam }) {
  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Step 1 — Choose your split</div>
      <h2 className="font-display text-2xl mb-1">Split Options</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">Tap a card to expand it, then select a plan — your Training Week below updates to match.</p>
      <div className="flex flex-col gap-3">
        {PROGRAM_LIBRARY.map((p, idx) => {
          const isSelected = p.days === workoutDays && !p.neverRecommend;
          const isOpen = openProgram === idx;
          return (
            <div key={idx} onClick={() => setOpenProgram(isOpen ? null : idx)}
              className={`bg-white dark:bg-stone-900 border rounded-xl px-5 py-4 cursor-pointer transition-all hover:shadow-md ${isSelected ? "border-emerald-400 dark:border-emerald-600" : "border-stone-200 dark:border-stone-700"} ${isOpen ? (isSelected ? "ring-2 ring-emerald-200 dark:ring-emerald-800" : "ring-2 ring-stone-200 dark:ring-stone-700") : ""}`}>
              <div className="flex justify-between items-start gap-3">
                <div className="font-display text-lg">{p.name}</div>
                <div className="flex flex-wrap gap-1 shrink-0">
                  {isSelected && <span className="font-mono2 text-[0.6rem] uppercase tracking-wide bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded px-2 py-0.5">★ Selected</span>}
                  {p.neverRecommend && <span className="font-mono2 text-[0.6rem] uppercase tracking-wide bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 rounded px-2 py-0.5">Not Suited</span>}
                  {!isSelected && !p.neverRecommend && <span className="font-mono2 text-[0.6rem] uppercase tracking-wide bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 rounded px-2 py-0.5">{p.freq}</span>}
                </div>
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">{p.summary}</div>
              {isOpen && (
                <div className="mt-4 border-t border-stone-200 dark:border-stone-700 pt-4">
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Frequency</div>{p.freq}</div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Split</div>{p.splitType}</div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Recovery</div>{p.recovery}</div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Complexity</div>{p.complexity}</div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded-lg px-3 py-2 text-sm mb-3">
                    <span className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Injury Note — </span>{p.injuryNote}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400 mb-1">Pros</div>
                      <ul className="text-sm space-y-1">{p.pros.map((x, i) => <li key={i} className="flex gap-2"><span className="text-emerald-700 dark:text-emerald-400 font-semibold">+</span>{x}</li>)}</ul></div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400 mb-1">Cons</div>
                      <ul className="text-sm space-y-1">{p.cons.map((x, i) => <li key={i} className="flex gap-2"><span className="text-red-700 dark:text-red-400 font-semibold">−</span>{x}</li>)}</ul></div>
                  </div>
                  {p.neverRecommend ? (
                    <p className="text-xs text-stone-400 dark:text-stone-500">Not selectable given your joint profile.</p>
                  ) : (
                    <button
                      disabled={isSelected}
                      onClick={(e) => { e.stopPropagation(); updateParam("workoutDays", p.days); }}
                      className={`font-mono2 text-xs uppercase tracking-wide rounded-lg px-3 py-1.5 transition-all ${isSelected ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 cursor-default" : "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:opacity-90 active:scale-95"}`}>
                      {isSelected ? "Currently selected" : "Select this plan"}
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-xs text-stone-400 dark:text-stone-500 mt-3">
        Suboptimal once-a-week frequency limits <Term id="hypertrophy" /> — higher-frequency splits generally build more muscle for most people.
      </p>
    </section>
  );
}
