import { PlayCircle } from "lucide-react";
import { useNav } from "../context/NavContext.jsx";

/* Inline exercise reference: opens a page with a demo animation / video + cues. */
export default function ExerciseLink({ name, children, className = "" }) {
  const nav = useNav();
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); nav.openExercise(name); }}
      className={`group inline-flex items-center gap-1 text-left hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors ${className}`}
      aria-label={`How to do ${name}`}
    >
      <span className="underline decoration-dotted decoration-1 decoration-stone-300 underline-offset-2 group-hover:decoration-emerald-500">{children || name}</span>
      <PlayCircle size={12} className="text-stone-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0" />
    </button>
  );
}
