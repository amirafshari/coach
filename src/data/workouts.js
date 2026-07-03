/* Workout day builders, split definitions, and their metadata.
   Each builder takes the user's params (`s`) and returns an exercise list,
   swapping in joint-friendly variants when shoulderSafe / backSafe are set. */

function pushDay(s) {
  return [
    s.shoulderSafe
      ? { name: "Incline Dumbbell Press", sets: "4", reps: "8–10", note: "45–60° incline. Shoulder-safe primary press." }
      : { name: "Overhead Barbell Press", sets: "4", reps: "8–10", note: "Standing or seated." },
    { name: "Cable Chest Fly (low-to-high)", sets: "3", reps: "12–15", note: "Constant tension." },
    { name: "Lateral Raise (cable or DB)", sets: "3", reps: "15–20", note: s.shoulderSafe ? "Slight forward lean, soft elbows." : "Standard form.", caution: s.shoulderSafe ? "Keep weight light. No swinging." : "" },
    { name: "Face Pull (cable rope)", sets: "3", reps: "15–20", note: "External rotation + rear delt health." },
    { name: "Tricep Pushdown", sets: "3", reps: "12–15" },
    { name: "Overhead Tricep Extension (cable)", sets: "2", reps: "12–15" },
  ];
}

function pullDay(s) {
  return [
    { name: "Lat Pulldown (wide grip)", sets: "4", reps: "8–10", note: "Drive elbows down to lats, not behind." },
    s.backSafe
      ? { name: "Seated Cable Row (neutral grip)", sets: "3", reps: "10–12", note: "Brace core, keep lumbar neutral.", caution: "Stop if lower back tightens." }
      : { name: "Barbell Bent-Over Row", sets: "3", reps: "8–10", note: "Standard bent-over row." },
    { name: "Single-Arm DB Row", sets: "3", reps: "10–12 per side", note: "Supported on bench." },
    { name: "Rear Delt Fly (cable or machine)", sets: "3", reps: "15–20" },
    { name: "Hammer Curl", sets: "3", reps: "10–12" },
    { name: "Incline Dumbbell Curl", sets: "2", reps: "12–15", note: "Full stretch at bottom." },
  ];
}

function legsDay(s) {
  return [
    { name: "Leg Press", sets: "4", reps: "10–12", note: "Foot placement shoulder-width, mid-height.", caution: "Do not lock knees at top." },
    s.backSafe
      ? { name: "Romanian Deadlift (RDL)", sets: "3", reps: "10–12", note: "Hip hinge, soft knees, bar close to legs.", caution: "Stop if lower back rounds." }
      : { name: "Conventional Deadlift", sets: "3", reps: "6–8", note: "Standard floor pull." },
    { name: "Bulgarian Split Squat", sets: "3", reps: "10–12 per leg", note: "Unilateral quad/glute builder." },
    { name: "Lying Leg Curl", sets: "3", reps: "12–15" },
    { name: "Calf Raise", sets: "3", reps: "15–20" },
    { name: "Dead Bug", sets: "3", reps: "8 per side", note: "Core stability without spinal loading." },
  ];
}

function upperA(s) { return [...pushDay(s).slice(0, 3), ...pullDay(s).slice(0, 3)]; }
function upperB(s) { return [...pushDay(s).slice(3), ...pullDay(s).slice(3)]; }
function lowerA(s) { return legsDay(s).slice(0, 4); }

function lowerB(s) {
  return [
    { name: "Front Foot Elevated Split Squat", sets: "3", reps: "10–12 per leg" },
    s.backSafe
      ? { name: "Trap-Bar Deadlift (light)", sets: "3", reps: "8–10", note: "More upright torso than barbell.", caution: "Moderate load only." }
      : { name: "Trap-Bar Deadlift", sets: "3", reps: "6–8" },
    { name: "Leg Extension", sets: "3", reps: "12–15" },
    { name: "Seated Calf Raise", sets: "3", reps: "15–20" },
    { name: "Pallof Press", sets: "3", reps: "10 per side", note: "Anti-rotation core work, spine-friendly." },
  ];
}

function fullA(s) {
  return [
    s.shoulderSafe ? { name: "Incline Dumbbell Press", sets: "3", reps: "8–10" } : { name: "Overhead Barbell Press", sets: "3", reps: "8–10" },
    { name: "Lat Pulldown", sets: "3", reps: "8–10" },
    { name: "Leg Press", sets: "3", reps: "10–12" },
    { name: "Lateral Raise", sets: "2", reps: "15–20" },
    { name: "Dead Bug", sets: "3", reps: "8 per side" },
  ];
}

function fullB(s) {
  return [
    { name: "Seated Cable Row", sets: "3", reps: "10–12" },
    s.backSafe ? { name: "Romanian Deadlift", sets: "3", reps: "10–12", caution: "Stop if lower back rounds." } : { name: "Conventional Deadlift", sets: "3", reps: "6–8" },
    { name: "Cable Chest Fly", sets: "3", reps: "12–15" },
    { name: "Bulgarian Split Squat", sets: "3", reps: "10–12 per leg" },
    { name: "Face Pull", sets: "3", reps: "15–20" },
  ];
}

export const DAY_BUILDERS = {
  push: { label: "Push", type: "Chest · Shoulders · Triceps", fn: pushDay },
  pull: { label: "Pull", type: "Back · Biceps · Rear Delts", fn: pullDay },
  legs: { label: "Legs", type: "Quads · Hamstrings · Glutes · Core", fn: legsDay },
  upperA: { label: "Upper A", type: "Chest · Back (part 1)", fn: upperA },
  upperB: { label: "Upper B", type: "Shoulders · Arms (part 2)", fn: upperB },
  lowerA: { label: "Lower A", type: "Quad-dominant", fn: lowerA },
  lowerB: { label: "Lower B", type: "Posterior chain", fn: lowerB },
  fullA: { label: "Full Body A", type: "Total body (part 1)", fn: fullA },
  fullB: { label: "Full Body B", type: "Total body (part 2)", fn: fullB },
};

export const SPLITS_BY_DAYS = {
  2: { name: "Full Body A/B", days: ["fullA", "fullB"] },
  3: { name: "Push / Pull / Legs", days: ["push", "pull", "legs"] },
  4: { name: "Upper / Lower", days: ["upperA", "lowerA", "upperB", "lowerB"] },
  5: { name: "PPL + Upper/Lower", days: ["push", "pull", "legs", "upperA", "lowerA"] },
  6: { name: "Push / Pull / Legs ×2", days: ["push", "pull", "legs", "push", "pull", "legs"] },
};
