import { Sparkles, PlayCircle } from "lucide-react";
import { MOBILITY_ROUTINE } from "../../data/mobility.js";
import Term from "../Term.jsx";
import ExerciseLink from "../ExerciseLink.jsx";

/* The ~9-minute daily mobility & balance routine. */
export default function MobilitySection() {
  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Step 3 — A short daily habit</div>
      <h2 className="font-display text-2xl mb-1 flex items-center gap-2"><Sparkles size={20} className="text-amber-600 dark:text-amber-400" /> Mobility & Balance (~9 min)</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">Do this every day — lifting, running, or resting. It directly supports your sensitive shoulders and lower back, and the balance work builds the <Term id="proprioception" /> that heavy joints rely on. Track it daily in the schedule above.</p>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl divide-y divide-stone-100 dark:divide-stone-800 shadow-sm overflow-hidden">
        {MOBILITY_ROUTINE.map((m, i) => (
          <div key={i} className="flex gap-4 px-5 py-3 hover:bg-stone-50 dark:hover:bg-stone-950 transition-colors">
            <div className="font-mono2 text-xs text-stone-400 dark:text-stone-500 w-6 pt-0.5">{i + 1}</div>
            <div className="flex-1">
              <div className="text-sm font-medium"><ExerciseLink name={m.name} /></div>
              <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{m.note}</div>
            </div>
            <div className="font-mono2 text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap pt-0.5">{m.duration}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-400 dark:text-stone-500 mt-3 flex items-center gap-1.5">
        <PlayCircle size={12} /> Not sure how one goes? Tap its name for a step-by-step and a code-drawn demo.
      </p>
    </section>
  );
}
