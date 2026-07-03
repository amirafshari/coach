import Field, { inputCls } from "../Field.jsx";

/* Editable user parameters — every downstream section reacts to these. */
export default function ParametersSection({ params, updateParam, overloaded }) {
  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Your Numbers — edit anything, everything below updates</div>
      <h2 className="font-display text-2xl mb-4">Parameters</h2>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl p-5 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="font-mono2 text-[0.65rem] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 border-b border-stone-200 dark:border-stone-700 pb-2 mb-3">Body</div>
            <Field label="Age (years)"><input type="number" value={params.age} min={14} max={90} onChange={(e) => updateParam("age", parseInt(e.target.value) || 0)} className={inputCls} /></Field>
            <Field label="Height (cm)"><input type="number" value={params.height} min={120} max={230} onChange={(e) => updateParam("height", parseInt(e.target.value) || 0)} className={inputCls} /></Field>
            <Field label="Weight (kg)"><input type="number" value={params.weight} min={35} max={180} onChange={(e) => updateParam("weight", parseInt(e.target.value) || 0)} className={inputCls} /></Field>
          </div>
          <div>
            <div className="font-mono2 text-[0.65rem] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 border-b border-stone-200 dark:border-stone-700 pb-2 mb-3">Lifting</div>
            <Field label="Workout sessions / week" hint="Split auto-adjusts to this number.">
              <input type="number" value={params.workoutDays} min={2} max={6} onChange={(e) => updateParam("workoutDays", Math.min(6, Math.max(2, parseInt(e.target.value) || 2)))} className={inputCls} />
            </Field>
            <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
              <input type="checkbox" checked={params.shoulderSafe} onChange={(e) => updateParam("shoulderSafe", e.target.checked)} className="w-4 h-4 accent-emerald-700" />
              Sensitive shoulders
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={params.backSafe} onChange={(e) => updateParam("backSafe", e.target.checked)} className="w-4 h-4 accent-emerald-700" />
              Sensitive lower back
            </label>
          </div>
          <div>
            <div className="font-mono2 text-[0.65rem] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 border-b border-stone-200 dark:border-stone-700 pb-2 mb-3">Running</div>
            <Field label="Running sessions / week"><input type="number" value={params.runDays} min={0} max={5} onChange={(e) => updateParam("runDays", parseInt(e.target.value) || 0)} className={inputCls} /></Field>
            <Field label="Duration per run (min)"><input type="number" value={params.runDuration} min={5} max={120} onChange={(e) => updateParam("runDuration", parseInt(e.target.value) || 0)} className={inputCls} /></Field>
            <Field label="Pace (min per km)"><input type="number" step="0.1" value={params.runPace} min={3} max={15} onChange={(e) => updateParam("runPace", parseFloat(e.target.value) || 0)} className={inputCls} /></Field>
          </div>
        </div>
        {overloaded && (
          <div className="mt-4 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 rounded-lg px-3 py-2 text-sm">
            That's more training days than there are days in the week. Reduce workout or running sessions — zero rest days isn't ideal for joint recovery.
          </div>
        )}
      </div>
    </section>
  );
}
