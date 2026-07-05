import { useState, useEffect, useMemo, useCallback } from "react";
import { NavContext } from "./context/NavContext.jsx";
import { DEFAULT_PARAMS } from "./data/defaults.js";
import { computeNutrition } from "./lib/nutrition.js";
import { buildWeekSchedule, cycleStatus } from "./lib/schedule.js";
import { loadState, saveState } from "./lib/storage.js";

import TermPage from "./components/pages/TermPage.jsx";
import ExercisePage from "./components/pages/ExercisePage.jsx";
import Header from "./components/sections/Header.jsx";
import ProgramComparison from "./components/sections/ProgramComparison.jsx";
import TrainingWeek from "./components/sections/TrainingWeek.jsx";
import MobilitySection from "./components/sections/MobilitySection.jsx";
import InjuryNotes from "./components/sections/InjuryNotes.jsx";
import ProgressionModel from "./components/sections/ProgressionModel.jsx";
import MealPlanner from "./components/sections/MealPlanner.jsx";

export default function App() {
  // Hydrate persisted state once, before the first paint.
  const initial = useMemo(() => loadState(), []);
  const [params, setParams] = useState(() =>
    initial?.params ? { ...DEFAULT_PARAMS, ...initial.params } : DEFAULT_PARAMS
  );
  const [activityLog, setActivityLog] = useState(() => initial?.activityLog || {});

  const [openProgram, setOpenProgram] = useState(null);
  const [openDay, setOpenDay] = useState(0);
  const [route, setRoute] = useState({ view: "home", id: null }); // 'home' | 'term' | 'exercise'

  // Persist on any change.
  useEffect(() => {
    saveState({ params, activityLog });
  }, [params, activityLog]);

  const nav = useMemo(() => {
    const scrollTop = () => { try { window.scrollTo({ top: 0, behavior: "auto" }); } catch { /* noop */ } };
    return {
      openTerm: (id) => { setRoute({ view: "term", id }); scrollTop(); },
      openExercise: (id) => { setRoute({ view: "exercise", id }); scrollTop(); },
      goHome: () => { setRoute({ view: "home", id: null }); scrollTop(); },
    };
  }, []);

  const updateParam = useCallback((key, value) => {
    setParams((p) => ({ ...p, [key]: value }));
  }, []);

  const toggleActivity = useCallback((dayIdx, type) => {
    setActivityLog((log) => {
      const day = log[dayIdx] || {};
      const next = cycleStatus(day[type]);
      return { ...log, [dayIdx]: { ...day, [type]: next } };
    });
  }, []);

  const resetWeek = useCallback(() => setActivityLog({}), []);

  const nutrition = useMemo(() => computeNutrition(params), [params]);
  const { days: schedule } = useMemo(() => buildWeekSchedule(params), [params]);

  return (
    <NavContext.Provider value={nav}>
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
        {route.view === "term" && <TermPage id={route.id} />}
        {route.view === "exercise" && <ExercisePage name={route.id} />}

        {route.view === "home" && (
          <>
            <Header />
            <main className="max-w-3xl mx-auto px-6 py-8 pb-16">
              <ProgramComparison workoutDays={params.workoutDays} openProgram={openProgram} setOpenProgram={setOpenProgram} updateParam={updateParam} />
              <TrainingWeek
                params={params}
                nutrition={nutrition}
                schedule={schedule}
                activityLog={activityLog}
                toggleActivity={toggleActivity}
                resetWeek={resetWeek}
                openDay={openDay}
                setOpenDay={setOpenDay}
              />
              <MobilitySection />
              <InjuryNotes params={params} />
              <ProgressionModel />
              <MealPlanner params={params} nutrition={nutrition} />
            </main>
          </>
        )}
      </div>
    </NavContext.Provider>
  );
}
