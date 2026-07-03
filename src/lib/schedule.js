/* Weekly schedule generation — distributes lift / run / rest days as evenly as
   possible across the seven-day week, then maps each lift day onto the chosen
   split's rotation of workout builders. */

import { DAY_BUILDERS, SPLITS_BY_DAYS } from "../data/workouts.js";

export function distributeWeek(liftCount, runCount) {
  const total = 7;
  let restCount = total - liftCount - runCount;
  let overloaded = false;
  if (restCount < 0) { overloaded = true; restCount = 0; }
  let remaining = { lift: liftCount, run: runCount, rest: restCount };
  if (overloaded) {
    let excess = -(total - liftCount - runCount);
    remaining.run = Math.max(0, remaining.run - excess);
    excess -= (runCount - remaining.run);
    if (excess > 0) remaining.lift = Math.max(0, remaining.lift - excess);
  }
  let slotsLeft = remaining.lift + remaining.run + remaining.rest;
  const result = [];
  for (let i = 0; i < total; i++) {
    let bestType = null, bestScore = -1;
    for (const type in remaining) {
      if (remaining[type] <= 0) continue;
      const score = remaining[type] / slotsLeft;
      if (score > bestScore) { bestScore = score; bestType = type; }
    }
    if (!bestType) bestType = "rest";
    result.push(bestType);
    if (remaining[bestType] !== undefined) remaining[bestType]--;
    slotsLeft--;
  }
  return { pattern: result, overloaded };
}

export function buildWeekSchedule(params) {
  const split = SPLITS_BY_DAYS[params.workoutDays];
  const { pattern, overloaded } = distributeWeek(params.workoutDays, params.runDays);
  let liftIdx = 0;
  const days = pattern.map((token) => {
    if (token === "lift") {
      const key = split.days[liftIdx % split.days.length];
      liftIdx++;
      const builder = DAY_BUILDERS[key];
      return { kind: "lift", label: builder.label, type: builder.type, exercises: builder.fn(params) };
    }
    if (token === "run") return { kind: "run", label: "Run", type: "Cardio · Active Recovery" };
    return { kind: "rest", label: "Rest", type: "Full recovery — light mobility optional" };
  });
  return { split, days, overloaded };
}

export function cycleStatus(current) {
  if (current === "done") return "skipped";
  if (current === "skipped") return null;
  return "done";
}
