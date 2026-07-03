/* Nutrition math — estimates energy needs and macro targets from the user's
   params using the Mifflin–St Jeor BMR equation and a training-load activity
   multiplier, then adds a small surplus for lean gain. */

export function computeNutrition(s) {
  const bmr = 10 * s.weight + 6.25 * s.height - 5 * s.age + 5;
  const totalSessions = s.workoutDays + s.runDays;
  const mult = totalSessions <= 2 ? 1.375 : totalSessions <= 4 ? 1.55 : totalSessions <= 6 ? 1.725 : 1.9;
  const tdee = bmr * mult;
  const calorieTarget = Math.round(tdee + 350);
  const protein = Math.round(s.weight * 2.0);
  const fat = Math.round(s.weight * 0.9);
  const carbs = Math.round((calorieTarget - protein * 4 - fat * 9) / 4);
  const runDistance = s.runDays > 0 ? +(s.runDuration / s.runPace).toFixed(2) : 0;
  const weeklyRunDistance = +(runDistance * s.runDays).toFixed(1);
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), calorieTarget, protein, fat, carbs, runDistance, weeklyRunDistance };
}
