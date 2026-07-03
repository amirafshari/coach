/* EXERCISE TEACHING — code-based demos + guides.
   Matched by name. Where possible the app renders a minimal, code-drawn SVG
   animation (see components/ExerciseAnimation.jsx). When an animation isn't
   available it falls back to a reliable YouTube demonstration link. */

export function ytSearch(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(name + " proper form technique tutorial")}`;
}

export const EXERCISE_GUIDE = [
  {
    match: /cat.?cow/i, animation: "catcow", muscles: "Spine mobility · core · postural muscles",
    cues: [
      "Start on all fours — hands under shoulders, knees under hips, back flat.",
      "Cow: inhale, let your belly drop, lift your chest and tailbone, gently look up.",
      "Cat: exhale, round your spine toward the ceiling, tuck your chin and tailbone.",
      "Move slowly with your breath. Keep the motion in your spine, not your arms.",
    ],
    sources: [
      { label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
      { label: "Cleveland Clinic — cat-cow / back mobility", url: "https://health.clevelandclinic.org/" },
    ],
  },
  {
    match: /bird.?dog/i, animation: "birddog", muscles: "Deep core · glutes · spinal erectors",
    cues: [
      "On all fours, brace your core so your back stays flat like a tabletop.",
      "Reach one arm straight forward and the opposite leg straight back.",
      "Keep hips level — don't let them rotate; imagine balancing a cup on your low back.",
      "Return with control, then switch sides. Slow beats fast here.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /dead.?bug/i, animation: "deadbug", muscles: "Deep core · anti-extension stability",
    cues: [
      "Lie on your back, arms pointing at the ceiling, knees bent 90° over your hips.",
      "Press your lower back gently into the floor and keep it there throughout.",
      "Slowly lower one arm overhead and the opposite leg toward the floor.",
      "Return and alternate. If your back arches off the floor, don't reach as far.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /(face pull|pull-?apart|pull apart|band pull|shoulder dislocate|rear delt fly)/i, animation: "pullapart",
    muscles: "Rear delts · rotator cuff · mid-back",
    cues: [
      "Hold a light band (or cable rope) at shoulder height, arms straight out in front.",
      "Pull apart by squeezing your shoulder blades together, not by yanking with the hands.",
      "Keep elbows soft and wrists neutral; finish with hands rotated outward (external rotation).",
      "Return slowly. For the shoulder dislocate, use a wider grip and pass the band overhead and behind.",
    ],
    sources: [{ label: "ACE — shoulder health exercises", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /balance/i, animation: "balance", muscles: "Ankle stabilisers · proprioception · balance",
    cues: [
      "Stand tall and shift your weight onto one foot.",
      "Lift the other knee to about hip height and hold steady.",
      "Fix your eyes on one point; let small ankle wobbles happen — that's the training.",
      "Progress by closing your eyes or standing on a softer surface.",
    ],
    sources: [{ label: "PubMed — balance & proprioceptive training", url: "https://pubmed.ncbi.nlm.nih.gov/?term=single+leg+balance+proprioception+training" }],
  },
  {
    match: /lateral raise/i, animation: "lateralraise", muscles: "Side (lateral) deltoids",
    cues: [
      "Stand with a slight forward lean, soft elbows, weights at your sides.",
      "Raise your arms out to the sides until roughly parallel to the floor.",
      "Lead with your elbows, not your hands — imagine pouring water from two jugs.",
      "Lower slowly under control. No swinging or heaving with momentum.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /(romanian|\brdl\b|deadlift)/i, muscles: "Hamstrings · glutes · spinal erectors",
    cues: [
      "Stand with the bar/weights over your mid-foot, feet hip-width.",
      "Push your hips back (a hip hinge) and let the weight slide down your thighs.",
      "Keep a soft knee and a flat, neutral spine — feel the stretch in your hamstrings, not your low back.",
      "Drive your hips forward to stand tall; don't lean back at the top.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /incline (dumbbell )?press/i, muscles: "Upper chest · front delts · triceps",
    cues: [
      "Set the bench to 30–45°. Plant your feet, keep a natural arch, shoulder blades pulled back and down.",
      "Lower the weights to upper-chest level with elbows about 45° from your body — not flared to 90°.",
      "Press up and slightly together; keep wrists stacked over elbows.",
      "Stop the descent before your shoulders roll forward to protect the joint.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /lat pulldown|pulldown/i, muscles: "Lats · mid-back · biceps",
    cues: [
      "Grip slightly wider than shoulders. Sit tall with a slight lean back.",
      "Pull the bar to your upper chest by driving your elbows down toward your ribs.",
      "Think about pulling with your back, not your arms — lead with the elbows.",
      "Control the bar back up to a full stretch without letting your shoulders shrug up.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /(seated cable row|bent-over row|single-arm db row|\brow\b)/i, muscles: "Mid-back · lats · rear delts · biceps",
    cues: [
      "Brace your core and keep a flat, neutral spine — don't round or heave with the lower back.",
      "Pull the handle to your torso by driving your elbows back and squeezing the shoulder blades.",
      "Keep the movement smooth; pause briefly at the contraction.",
      "Return to a full stretch under control without letting the weight yank you forward.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /leg press/i, muscles: "Quads · glutes · hamstrings",
    cues: [
      "Feet shoulder-width, mid-height on the platform. Back and hips flat against the pad.",
      "Lower until your knees reach about 90°, tracking in line with your toes.",
      "Press through your whole foot to extend — but do not lock the knees hard at the top.",
      "Keep your lower back glued to the seat; if it lifts, you've gone too deep.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
  {
    match: /(bulgarian|split squat)/i, muscles: "Quads · glutes · single-leg stability",
    cues: [
      "Place your rear foot on a bench behind you; front foot far enough forward to stay balanced.",
      "Lower straight down until your front thigh is about parallel, back knee heading toward the floor.",
      "Keep your torso tall (or a slight lean for more glute); drive up through the front heel.",
      "Finish all reps on one leg before switching.",
    ],
    sources: [{ label: "ACE — Exercise Library", url: "https://www.acefitness.org/resources/everyone/exercise-library/" }],
  },
];

export function resolveGuide(name) {
  for (const g of EXERCISE_GUIDE) {
    if (g.match.test(name)) return { ...g, name };
  }
  return { name, animation: null, cues: null, muscles: null, sources: null };
}
