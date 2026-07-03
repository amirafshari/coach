/* The library of training splits shown in the comparison section.
   `neverRecommend: true` marks a split as unsuitable for the user's profile. */

export const PROGRAM_LIBRARY = [
  { days: 2, name: "Full Body", summary: "Every session hits all major muscle groups.", freq: "2–3×/week", splitType: "A/B alternating", recovery: "48h between sessions", complexity: "Low",
    pros: ["High per-session frequency", "Flexible scheduling", "Great for limited days"], cons: ["Sessions get long as strength grows", "Harder to add volume per muscle"],
    injuryNote: "Lower risk with careful exercise selection." },
  { days: 4, name: "Upper / Lower", summary: "Alternates upper-body and lower-body days.", freq: "4×/week", splitType: "Upper / Lower / Upper / Lower", recovery: "48–72h", complexity: "Medium",
    pros: ["Strong frequency-to-volume balance", "Easy to isolate risky movements to one day"], cons: ["Needs 4 free days", "Upper days can overload shoulders if not managed"],
    injuryNote: "Manageable with exercise swaps; good middle-ground option." },
  { days: 3, name: "Push / Pull / Legs", summary: "Push, Pull, Legs — clean muscle-group separation.", freq: "3×/week", splitType: "Push → Pull → Legs", recovery: "48–72h", complexity: "Medium",
    pros: ["Dedicated focus per muscle group", "Full week recovery between repeats", "Easy to swap risky exercises"], cons: ["Each muscle trained once/week at 3×", "Needs good substitution knowledge"],
    injuryNote: "Best default for your joint profile — overhead pressing and floor deadlifts are fully removable." },
  { days: 5, name: "PPL + Upper/Lower", summary: "Push, Pull, Legs, then an extra Upper and Lower day.", freq: "5×/week", splitType: "Push / Pull / Legs / Upper / Lower", recovery: "~48h", complexity: "Medium-High",
    pros: ["Each muscle group trained ~1.5×/week", "More total volume"], cons: ["Needs 5 free days", "More cumulative joint stress"],
    injuryNote: "Fine once shoulders/back respond well to the 3-day version first." },
  { days: 6, name: "Push / Pull / Legs ×2", summary: "Two full PPL cycles per week — high frequency, high volume.", freq: "6×/week", splitType: "PPL / PPL", recovery: "~24–48h per muscle", complexity: "High",
    pros: ["Each muscle trained 2×/week", "Advanced, well-studied structure"], cons: ["Only 1 rest day — high cumulative fatigue", "Risky for sensitive joints"],
    injuryNote: "Only advisable once lower-frequency training has gone well for months." },
  { days: 0, name: "Classic Bro Split", summary: "One muscle group per day — needs 5–6 days.", freq: "5–6×/week", splitType: "Chest / Back / Shoulders / Arms / Legs", recovery: "7 days per muscle", complexity: "Low",
    pros: ["High per-session volume", "Very intuitive"], cons: ["Once-a-week frequency is suboptimal for hypertrophy", "Dedicated shoulder day is risky"],
    injuryNote: "Not recommended given shoulder sensitivity.", neverRecommend: true },
  { days: 0, name: "Conjugate / Westside", summary: "Powerlifting system alternating max-effort and dynamic-effort days.", freq: "4×/week min", splitType: "ME/DE Upper & Lower", recovery: "72h per pattern", complexity: "High",
    pros: ["Excellent for raw strength", "Varied stimulus"], cons: ["Built around heavy overhead press & floor deadlift", "Highly technical"],
    injuryNote: "High risk for your profile.", neverRecommend: true },
];
