import { Dumbbell, Activity, PlayCircle, ExternalLink } from "lucide-react";
import { resolveGuide, ytSearch } from "../../data/exercises.js";
import DetailShell from "./DetailShell.jsx";
import ExerciseAnimation from "../ExerciseAnimation.jsx";
import SourceList from "../SourceList.jsx";
import Disclaimer from "../Disclaimer.jsx";

/* "How to do it" page: code-drawn animation (or video fallback) + step-by-step cues. */
export default function ExercisePage({ name }) {
  const g = resolveGuide(name);
  const youtube = g.youtube || ytSearch(name);
  return (
    <DetailShell kicker="Movement">
      <div className="font-mono2 text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
        <Dumbbell size={14} /> How to do it
      </div>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-3">{name}</h1>
      {g.muscles && (
        <div className="inline-flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full px-3 py-1 text-xs text-stone-600 dark:text-stone-300 mb-6">
          <Activity size={12} className="text-emerald-600 dark:text-emerald-400" /> {g.muscles}
        </div>
      )}

      {g.animation ? (
        <>
          <ExerciseAnimation kind={g.animation} />
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-2 mb-6">
            Simplified motion drawn in code to show the movement pattern — not a substitute for watching your own form.
          </p>
        </>
      ) : (
        <div className="rounded-2xl bg-gradient-to-b from-white to-stone-100 dark:from-stone-800 dark:to-stone-900 border border-stone-200 dark:border-stone-700 p-6 text-center mb-6 shadow-sm">
          <PlayCircle size={30} className="text-stone-300 mx-auto mb-2" />
          <p className="text-sm text-stone-600 dark:text-stone-300 mb-4">
            We don't have a code animation for this one — the clearest way to learn it is a short video demonstration.
          </p>
          <a href={youtube} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-full px-5 py-2.5 text-sm font-medium transition-colors">
            <PlayCircle size={16} /> Watch demonstrations on YouTube
          </a>
        </div>
      )}

      {g.cues && (
        <div className="mb-6">
          <div className="font-mono2 text-[0.62rem] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">Step by step</div>
          <ol className="space-y-3">
            {g.cues.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-mono2 text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="pt-0.5">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {g.animation && (
        <a href={youtube} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-2">
          <PlayCircle size={15} /> Prefer a full video? Watch demonstrations on YouTube
          <ExternalLink size={12} className="opacity-60" />
        </a>
      )}

      <SourceList sources={g.sources} />
      <Disclaimer />
    </DetailShell>
  );
}
