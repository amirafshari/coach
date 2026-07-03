import Term from "../Term.jsx";
import MetricChip from "../MetricChip.jsx";

/* The verdict card: the chosen split plus the derived nutrition targets. */
export default function Recommendation({ params, split, nutrition }) {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 mb-12 shadow-lg">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">The Recommendation</div>
      <h2 className="font-display text-2xl mt-1 mb-3">{split.name} <em className="text-emerald-400" style={{ fontStyle: "italic" }}>— Modified</em></h2>
      <div className="text-sm leading-7 text-stone-300 space-y-3">
        <p>At {params.workoutDays}× lifting sessions/week, <strong className="text-stone-100">{split.name}</strong> gives you the best balance of recovery and volume for your joint profile.
          {params.shoulderSafe && <> Overhead pressing is replaced with incline pressing and lateral raises to keep shoulder volume without <Term id="impingement" dark>impingement</Term> risk.</>}
          {params.backSafe && <> Floor deadlifts are replaced with Romanian / trap-bar variants so the lumbar spine stays <Term id="neutral-spine" dark>neutral</Term> and is never ground down under a heavy pull.</>}</p>
        <p>Your running ({params.runDays}× {params.runDuration}min @ {params.runPace}/km ≈ {nutrition.runDistance}km/run, {nutrition.weeklyRunDistance}km/week) is folded in as <Term id="active-recovery" dark>active recovery</Term>, plus a daily <Term id="mobility" dark>mobility</Term> & balance session — all reflected in the numbers below.</p>
        <p>At {params.weight}kg targeting lean gain, expect roughly <strong className="text-stone-100">0.3–0.5 kg/week</strong> of scale movement if you hit these numbers consistently.</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        <MetricChip label="BMR" value={`${nutrition.bmr} kcal`} dark term="bmr" />
        <MetricChip label="TDEE" value={`${nutrition.tdee} kcal`} dark term="tdee" />
        <MetricChip label="Daily Target" value={`${nutrition.calorieTarget} kcal`} dark />
        <MetricChip label="Protein" value={`${nutrition.protein} g`} dark />
        <MetricChip label="Fat" value={`${nutrition.fat} g`} dark />
        <MetricChip label="Carbs" value={`${nutrition.carbs} g`} dark />
      </div>
    </div>
  );
}
