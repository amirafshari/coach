import Term from "../Term.jsx";
import NoteCard from "../NoteCard.jsx";

/* Joint-protection protocol — shoulder / back notes shown per the user's flags. */
export default function InjuryNotes({ params }) {
  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Step 4 — Protect your joints</div>
      <h2 className="font-display text-2xl mb-4">Shoulder & Back Protocol</h2>
      <div className="flex flex-col gap-3">
        {params.shoulderSafe && (
          <>
            <NoteCard title="Shoulder — what to avoid" color="emerald">Skip behind-the-neck presses, upright rows, and any overhead movement that causes pinching. Keep the elbow angle below ear level on pressing movements. Warm up the <Term id="rotator-cuff" /> with band pull-aparts before every push-focused day.</NoteCard>
            <NoteCard title="Shoulder — what works" color="emerald">Incline dumbbell press (45–60°), cable chest flyes, lateral raises with a slight forward lean and soft elbows, face pulls. These build shoulders without <Term id="impingement" />.</NoteCard>
          </>
        )}
        {params.backSafe && (
          <>
            <NoteCard title="Lower Back — what to avoid" color="red">Full barbell deadlifts from the floor with heavy loads, good mornings, and Jefferson curls put extreme shear on L4/L5. Avoid until you've built a solid 8-week foundation of core stability and a reliable <Term id="neutral-spine" />.</NoteCard>
            <NoteCard title="Lower Back — what works" color="emerald">Romanian deadlifts (a <Term id="hip-hinge" /> from the hip, soft knee), trap-bar deadlifts (more upright torso), leg press for quad overload. Core work: dead bugs, Pallof press, and bird dogs — not crunches or sit-ups.</NoteCard>
          </>
        )}
        <NoteCard title="Running & Joint Load" color="emerald">
          Running {params.runDays}×/week adds repetitive impact through the hips and lower back. Keep pace easy on running days ({params.runPace} min/km is a sustainable aerobic effort) and avoid scheduling a run the day directly before a Legs-heavy session if you can help it.
        </NoteCard>
        <NoteCard title="General Rule" color="emerald"><strong>Pain ≠ gain.</strong> A dull muscular burn is normal. A sharp or joint-localized pain is a stop signal. Log any pain episode so you can identify patterns early.</NoteCard>
      </div>
    </section>
  );
}
