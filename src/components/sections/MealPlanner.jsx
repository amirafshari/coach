import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DAY_NAMES } from "../../data/defaults.js";
import { MEAL_ROTATION } from "../../data/meals.js";
import Term from "../Term.jsx";
import MetricChip from "../MetricChip.jsx";
import NoteCard from "../NoteCard.jsx";

const MEAL_SLOTS = ["breakfast", "lunch", "dinner", "snack"];

/* Weekly meal planner with a per-day calorie/protein breakdown and a scaling
   note that closes the gap between the baseline plan and the user's target. */
export default function MealPlanner({ params, nutrition }) {
  const [openMealDay, setOpenMealDay] = useState(0);

  const weeklyMealAvg = useMemo(() => {
    const totalKcal = MEAL_ROTATION.reduce((sum, m) => sum + m.breakfast.kcal + m.lunch.kcal + m.dinner.kcal + m.snack.kcal, 0);
    return Math.round(totalKcal / MEAL_ROTATION.length);
  }, []);
  const calorieGap = nutrition.calorieTarget - weeklyMealAvg;
  const riceGrams = Math.round(Math.abs(calorieGap) / 1.3);

  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Step 6 — Fuel it</div>
      <h2 className="font-display text-2xl mb-4">Weekly Meal Planner <span className="text-sm text-stone-500 dark:text-stone-400 font-sans">— Iran-available, fast to cook</span></h2>

      <div className="flex flex-wrap gap-2 mb-4">
        <MetricChip label="Daily Target" value={`${nutrition.calorieTarget} kcal`} />
        <MetricChip label="Protein Target" value={`${nutrition.protein} g`} />
        <MetricChip label="Fat Target" value={`${nutrition.fat} g`} />
        <MetricChip label="Carb Target" value={`${nutrition.carbs} g`} />
      </div>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded-lg px-4 py-3 text-sm mb-4">
        <span className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Scaling note — </span>
        This baseline plan averages ~{weeklyMealAvg} kcal/day. Your <Term id="tdee">target</Term> is {nutrition.calorieTarget} kcal, a gap of {Math.abs(calorieGap)} kcal.{" "}
        {Math.abs(calorieGap) > 50
          ? `${calorieGap > 0 ? "Add" : "Remove"} roughly ${riceGrams}g of cooked rice or bread (or a similar-sized carb portion) per day to close the gap.`
          : "That's close enough — no major adjustment needed."}
      </div>

      <div className="flex flex-col gap-3">
        {DAY_NAMES.map((day, i) => {
          const meals = MEAL_ROTATION[i % MEAL_ROTATION.length];
          const totalKcal = meals.breakfast.kcal + meals.lunch.kcal + meals.dinner.kcal + meals.snack.kcal;
          const totalProtein = meals.breakfast.protein + meals.lunch.protein + meals.dinner.protein + meals.snack.protein;
          const isOpen = openMealDay === i;
          return (
            <div key={i} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-stone-100 dark:bg-stone-800 cursor-pointer" onClick={() => setOpenMealDay(isOpen ? null : i)}>
                <span className="font-mono2 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 min-w-[2.5rem]">{day.slice(0, 3)}</span>
                <span className="text-sm font-medium flex-1">Day {i + 1}</span>
                <span className="font-mono2 text-xs text-stone-500 dark:text-stone-400">{totalKcal} kcal · {totalProtein}g protein</span>
                <ChevronDown size={16} className={`text-stone-500 dark:text-stone-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </div>
              {isOpen && (
                <div className="px-4 py-2">
                  {MEAL_SLOTS.map((slot) => (
                    <div key={slot} className="flex gap-4 py-3 border-b border-stone-100 dark:border-stone-800 last:border-0">
                      <div className="font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400 min-w-[4.5rem] pt-0.5">{slot}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{meals[slot].name}</div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{meals[slot].desc}</div>
                      </div>
                      <div className="font-mono2 text-xs text-stone-500 dark:text-stone-400 text-right min-w-[4.5rem]">
                        <strong className="text-stone-900 dark:text-stone-50">{meals[slot].kcal}</strong> kcal<br />{meals[slot].protein}g protein
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <NoteCard title="Protein Timing" color="amber">Aim for ~{Math.round(nutrition.protein / 4)}g of protein per meal, spread across 4 meals. <Term id="mps">Muscle protein synthesis</Term> responds better to regular doses than one large serving at dinner.</NoteCard>
        <NoteCard title="Iron + Vitamin C" color="amber">Pair iron-rich foods (red meat, lentils) with vitamin C (tomato, citrus, bell pepper) in the same meal — it roughly triples <Term id="non-heme-iron">non-heme iron</Term> absorption. Useful on running days when iron turnover is higher.</NoteCard>
        <NoteCard title="Dairy as a Base" color="amber">Mast and panir are cheap, widely available Iranian protein + calcium sources. Calcium and vitamin D support bone density, which matters given your combined lifting + running load.</NoteCard>
        <NoteCard title="Pre-Run Fuel" color="amber">Dates + walnuts give fast carbs plus healthy fats — a good 30–45 minute pre-run snack that won't sit heavy.</NoteCard>
        <NoteCard title="Hydration & Electrolytes" color="amber">Training {params.workoutDays + params.runDays} days/week between lifting and running increases fluid and sodium needs. A pinch of salt in water or a glass of doogh after a run helps replace what you sweat out.</NoteCard>
      </div>
    </section>
  );
}
