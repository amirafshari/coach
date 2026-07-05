# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

There is no test suite, lint config, or type checker in this project.

## Architecture

Coach is a single-page React app (Vite + Tailwind) that recomputes a training
and nutrition plan live from user-entered params. No backend — state persists
to `localStorage` only.

- **`src/data/`** — static content as plain data (exercises, splits, meals,
  glossary, mobility routine). Edit these to change content without touching
  UI code.
- **`src/lib/`** — pure, framework-free logic, unit-testable in isolation:
  - `nutrition.js` — BMR/TDEE/macro math from `params`
  - `schedule.js` — turns day counts into a 7-day week and maps lift days
    onto the chosen split (`buildWeekSchedule`, `cycleStatus`)
  - `storage.js` — localStorage load/save helpers
- **`src/App.jsx`** — the sole owner of app state: `params` (training/body
  inputs), `activityLog` (per-day/type completion status), and `route`
  (home/term/exercise). Derives `nutrition` and `schedule` via `useMemo` from
  `params` on every change, and persists `{ params, activityLog }` on every
  update via `saveState`. Sections are rendered in a fixed order and receive
  only the props they need.
- **`src/context/NavContext.jsx`** — in-app navigation (`openTerm`,
  `openExercise`, `goHome`) between the home view and full-screen detail
  pages. Provided once by `App`; components that link to a term/exercise
  page consume it directly via `useNav()` instead of receiving nav callbacks
  as props.
- **`src/components/sections/`** — the home-page sections, composed in
  `App.jsx` in top-to-bottom order (Header → ParametersSection →
  ProgramComparison → Recommendation → TrainingWeek → MobilitySection →
  InjuryNotes → ProgressionModel → MealPlanner → GlossaryIndex).
- **`src/components/pages/`** — full-screen detail views (`TermPage`,
  `ExercisePage`) rendered instead of the home view based on `route`.
- **Joint-aware logic**: params flagging sensitive shoulders/lower back
  propagate through `schedule.js` and `data/workouts.js` to swap risky lifts
  for safer variants — check both when changing exercise selection logic.
- **Exercise demos** (`ExerciseAnimation.jsx`) are drawn and animated purely
  in code via SVG + SMIL — no image or video assets.
