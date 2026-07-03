import Term from "../Term.jsx";
import NoteCard from "../NoteCard.jsx";

/* The 12-week progressive-overload roadmap. */
export default function ProgressionModel() {
  return (
    <section className="mb-12">
      <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">Step 5 — Get stronger over time</div>
      <h2 className="font-display text-2xl mb-4"><Term id="progressive-overload">Progressive Overload</Term> Model</h2>
      <div className="flex flex-col gap-3">
        <NoteCard title="Weeks 1–4 · Foundation" color="emerald">Learn the movements. 3 sets × 10–12 reps. Leave 2–3 <Term id="rir">reps in reserve (RIR)</Term>. Focus on the <Term id="mind-muscle-connection">mind–muscle connection</Term>, not load.</NoteCard>
        <NoteCard title="Weeks 5–8 · Build" color="emerald">Add 2.5 kg to compound lifts when you hit the top of the rep range for 2 consecutive sessions. Introduce a 4th set on priority movements.</NoteCard>
        <NoteCard title="Weeks 9–12 · Push" color="emerald">Rep ranges drop to 6–8 on compounds (more intensity), 12–15 on isolation work (more volume). <Term id="deload">Deload</Term> in week 10 if joints feel worn.</NoteCard>
        <NoteCard title="Deload protocol" color="emerald">Every 8–10 weeks: cut volume by 40%, keep intensity. One week. It is not a rest week — it is a recovery week where the body <Term id="supercompensation">supercompensates</Term>.</NoteCard>
      </div>
    </section>
  );
}
