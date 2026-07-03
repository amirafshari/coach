import { useMemo } from "react";
import { ChevronDown, Dumbbell, Footprints, Moon, RotateCcw, PlayCircle } from "lucide-react";
import { DAY_NAMES } from "../../data/defaults.js";
import Term from "../Term.jsx";
import ExerciseLink from "../ExerciseLink.jsx";
import StatusPill from "../StatusPill.jsx";
import ProgressBar from "../ProgressBar.jsx";

const DAY_ICONS = { lift: Dumbbell, run: Footprints, rest: Moon };

/* The weekly schedule and habit tracker. Session / mobility completion stats
   are derived here from the schedule + activity log. */
export default function TrainingWeek({ params, nutrition, schedule, activityLog, toggleActivity, resetWeek, openDay, setOpenDay }) {
  const mainStats = useMemo(() => {
    const total = schedule.filter((d) => d.kind !== "rest").length;
    let done = 0, skipped = 0;
    schedule.forEach((d, i) => {
      if (d.kind === "rest") return;
      const st = activityLog[i]?.main;
      if (st === "done") done++;
      if (st === "skipped") skipped++;
    });
    return { total, done, skipped, pending: total - done - skipped };
  }, [schedule, activityLog]);

  const mobilityStats = useMemo(() => {
    let done = 0, skipped = 0;
    for (let i = 0; i < 7; i++) {
      const st = activityLog[i]?.mobility;
      if (st === "done") done++;
      if (st === "skipped") skipped++;
    }
    return { total: 7, done, skipped, pending: 7 - done - skipped };
  }, [activityLog]);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div>
          <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1">Step 2 — Your weekly schedule</div>
          <h2 className="font-display text-2xl">Training Week</h2>
        </div>
        <button onClick={resetWeek} className="font-mono2 text-xs uppercase tracking-wide flex items-center gap-1.5 text-stone-500 dark:text-stone-400 border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-1.5 hover:bg-stone-100 dark:hover:bg-stone-800 active:scale-95 transition-all">
          <RotateCcw size={13} /> Reset week
        </button>
      </div>

      {/* Tracker summary */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl p-4 mb-4 shadow-sm">
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[12rem]">
            <div className="font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400">Training sessions</div>
            <div className="text-sm mt-1">
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">{mainStats.done} done</span>
              {mainStats.skipped > 0 && <span className="text-red-700 dark:text-red-400 font-medium"> · {mainStats.skipped} skipped</span>}
              <span className="text-stone-500 dark:text-stone-400"> · {mainStats.pending} pending</span>
              <span className="text-stone-400 dark:text-stone-500"> (of {mainStats.total})</span>
            </div>
            <ProgressBar done={mainStats.done} skipped={mainStats.skipped} total={mainStats.total} />
          </div>
          <div className="flex-1 min-w-[12rem]">
            <div className="font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400">Mobility & balance</div>
            <div className="text-sm mt-1">
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">{mobilityStats.done} done</span>
              {mobilityStats.skipped > 0 && <span className="text-red-700 dark:text-red-400 font-medium"> · {mobilityStats.skipped} skipped</span>}
              <span className="text-stone-500 dark:text-stone-400"> · {mobilityStats.pending} pending</span>
              <span className="text-stone-400 dark:text-stone-500"> (of 7)</span>
            </div>
            <ProgressBar done={mobilityStats.done} skipped={mobilityStats.skipped} total={mobilityStats.total} />
          </div>
        </div>
        {(mainStats.skipped > 0 || mobilityStats.skipped > 0) && (
          <div className="text-sm text-red-700 dark:text-red-400 mt-3">Some sessions were skipped this week — check the days below.</div>
        )}
        {mainStats.skipped === 0 && mobilityStats.skipped === 0 && (mainStats.done + mobilityStats.done > 0) && mainStats.pending === 0 && mobilityStats.pending === 0 && (
          <div className="text-sm text-emerald-700 dark:text-emerald-400 mt-3">Everything logged this week is on track. Nice work.</div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {schedule.map((day, i) => {
          const isOpen = openDay === i;
          const mainStatus = activityLog[i]?.main;
          const mobStatus = activityLog[i]?.mobility;
          const Icon = DAY_ICONS[day.kind];
          return (
            <div key={i} className={`bg-white dark:bg-stone-900 border rounded-xl overflow-hidden shadow-sm ${day.kind === "run" ? "border-amber-300 dark:border-amber-800" : "border-stone-200 dark:border-stone-700"} ${day.kind === "rest" ? "opacity-80" : ""}`}>
              <div className={`flex items-center gap-3 px-4 py-3 ${day.kind === "run" ? "bg-amber-50 dark:bg-amber-950" : "bg-stone-100 dark:bg-stone-800"} ${day.kind !== "rest" ? "cursor-pointer" : ""}`}
                onClick={() => day.kind !== "rest" && setOpenDay(isOpen ? null : i)}>
                <span className="font-mono2 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 min-w-[2.5rem]">{DAY_NAMES[i].slice(0, 3)}</span>
                <Icon size={16} className="text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="text-sm font-medium flex-1">{day.label}</span>
                <span className="text-sm text-stone-500 dark:text-stone-400 hidden sm:inline">{day.type}</span>
                {day.kind !== "rest" && <ChevronDown size={16} className={`text-stone-500 dark:text-stone-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2 border-b border-stone-100 dark:border-stone-800">
                {day.kind !== "rest" && (
                  <StatusPill label={day.kind === "lift" ? day.label : "Run"} status={mainStatus} onClick={(e) => { e.stopPropagation(); toggleActivity(i, "main"); }} />
                )}
                <StatusPill label="Mobility (9 min)" status={mobStatus} onClick={(e) => { e.stopPropagation(); toggleActivity(i, "mobility"); }} />
              </div>
              {isOpen && day.kind === "lift" && (
                <div className="px-4 py-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-stone-200 dark:border-stone-700">
                        <th className="text-left font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400 pb-2">Exercise</th>
                        <th className="text-left font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400 pb-2">Sets</th>
                        <th className="text-left font-mono2 text-[0.62rem] uppercase tracking-wider text-stone-500 dark:text-stone-400 pb-2">Reps</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((ex, k) => (
                        <tr key={k} className="border-b border-stone-100 dark:border-stone-800 last:border-0">
                          <td className="py-2 pr-2">
                            <ExerciseLink name={ex.name} />
                            {ex.note && <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{ex.note}</div>}
                            {ex.caution && <div className="text-xs text-red-700 dark:text-red-400 mt-0.5">⚠ {ex.caution}</div>}
                          </td>
                          <td className="py-2 pr-2">{ex.sets}</td>
                          <td className="py-2">{ex.reps}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-3 flex items-center gap-1.5">
                    <PlayCircle size={12} /> Tap any exercise name to see how it's done.
                  </p>
                </div>
              )}
              {isOpen && day.kind === "run" && (
                <div className="px-4 py-4 text-sm">
                  Easy-paced run to support recovery and cardiovascular health without adding joint load — think of it as <Term id="active-recovery" />.
                  <div className="flex flex-wrap gap-6 mt-3">
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Duration</div>{params.runDuration} min</div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Pace</div>{params.runPace} min/km</div>
                    <div><div className="font-mono2 text-[0.62rem] uppercase text-stone-500 dark:text-stone-400">Distance</div>~{nutrition.runDistance} km</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
