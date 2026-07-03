# Coach — Training & Nutrition Plan

A personalized, interactive strength-training and nutrition planner. Enter your
body stats and training preferences and everything downstream — the recommended
split, the weekly schedule, calorie/macro targets, and the meal plan —
recalculates live. It's joint-aware: flagging sensitive shoulders or a lower
back swaps risky lifts for safer variants throughout the plan.

Built with **React + Vite + Tailwind CSS**, with [lucide-react](https://lucide.dev)
for icons. Exercise demos are drawn and animated entirely in code (SVG + SMIL) —
no images or video. Every fitness concept is explained in an in-app glossary with
cited sources.

## Getting started

Requires [Node.js](https://nodejs.org) 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

Your parameters and weekly progress are saved to the browser's `localStorage`,
so they persist across reloads on the same machine.

## Project structure

```
coach/
├── index.html              # Vite entry — mounts the app at #root
├── vite.config.js          # Vite + React plugin config
├── tailwind.config.js      # Tailwind content paths
├── postcss.config.js       # Tailwind + autoprefixer
└── src/
    ├── main.jsx            # React entry point
    ├── index.css          # Tailwind directives, fonts, animations
    ├── App.jsx            # State + routing orchestrator
    ├── data/              # Static content (no logic)
    │   ├── defaults.js    #   default params, day names, storage key
    │   ├── workouts.js    #   exercise builders, splits by day count
    │   ├── programs.js    #   the split-comparison library
    │   ├── mobility.js    #   daily mobility routine
    │   ├── meals.js       #   rotating meal plan
    │   ├── glossary.js    #   concept definitions + sources
    │   └── exercises.js   #   exercise teaching guides + matchers
    ├── lib/               # Pure logic (framework-free, unit-testable)
    │   ├── nutrition.js   #   BMR / TDEE / macro math
    │   ├── schedule.js    #   week distribution + schedule building
    │   └── storage.js     #   localStorage load/save helpers
    ├── context/
    │   └── NavContext.jsx #   in-app navigation (home ↔ detail pages)
    └── components/
        ├── Term.jsx, ExerciseLink.jsx, SourceList.jsx, Disclaimer.jsx
        ├── ExerciseAnimation.jsx        # code-drawn SVG exercise demos
        ├── StatusPill.jsx, MetricChip.jsx, ProgressBar.jsx, Field.jsx, NoteCard.jsx
        ├── pages/                        # full-screen detail views
        │   ├── DetailShell.jsx
        │   ├── TermPage.jsx
        │   └── ExercisePage.jsx
        └── sections/                     # the home-page sections, top to bottom
            ├── Header.jsx
            ├── ParametersSection.jsx
            ├── ProgramComparison.jsx
            ├── Recommendation.jsx
            ├── TrainingWeek.jsx
            ├── MobilitySection.jsx
            ├── InjuryNotes.jsx
            ├── ProgressionModel.jsx
            ├── MealPlanner.jsx
            └── GlossaryIndex.jsx
```

### How it fits together

- **`data/`** holds all static content as plain data — edit these files to change
  exercises, meals, splits, or glossary entries without touching any UI code.
- **`lib/`** holds pure functions (no React). `nutrition.js` estimates energy and
  macro needs; `schedule.js` turns your day counts into a balanced 7-day week and
  maps lift days onto the chosen split; `storage.js` persists state.
- **`App.jsx`** owns the app state (params, activity log, current route), wires up
  persistence, and renders the sections in order. Sections receive only what they
  need via props; components that navigate read `NavContext` directly.
- **`components/`** are reusable UI pieces. `sections/` are the page-level blocks
  that compose the home view. `pages/` are the term and exercise detail screens.

## Notes

- **Not medical advice.** This is an educational planning tool. Consult a
  qualified professional before starting a new training or nutrition program.
- Google Fonts and source links load from the network at runtime; everything else
  is bundled locally.
