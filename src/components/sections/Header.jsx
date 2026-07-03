import { Info } from "lucide-react";
import ThemeToggle from "../ThemeToggle.jsx";

/* Sticky page header with the user's headline stats. */
export default function Header({ params }) {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-700 px-6 py-8">
      <div className="max-w-3xl mx-auto relative">
        <ThemeToggle className="absolute top-0 right-0" />
        <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1">Personalized Training & Nutrition Plan</div>
        <h1 className="font-display text-3xl md:text-4xl leading-tight">Build muscle. <em className="text-emerald-700 dark:text-emerald-400 not-italic" style={{ fontStyle: "italic" }}>Train smart.</em></h1>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mt-3 mb-3" />
        <div className="flex flex-wrap gap-2">
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Age <strong className="text-stone-900 dark:text-stone-50 font-medium">{params.age}</strong></span>
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Height <strong className="text-stone-900 dark:text-stone-50 font-medium">{(params.height / 100).toFixed(2)} m</strong></span>
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Weight <strong className="text-stone-900 dark:text-stone-50 font-medium">{params.weight} kg</strong></span>
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Lifting <strong className="text-stone-900 dark:text-stone-50 font-medium">{params.workoutDays}×/week</strong></span>
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Running <strong className="text-stone-900 dark:text-stone-50 font-medium">{params.runDays}×/week, {params.runDuration}min @ {params.runPace}/km</strong></span>
          <span className="font-mono2 text-xs bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-md px-2 py-1">Sensitive <strong className="text-stone-900 dark:text-stone-50 font-medium">{[params.shoulderSafe && "Shoulders", params.backSafe && "Lower Back"].filter(Boolean).join(" · ") || "None flagged"}</strong></span>
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 flex items-center gap-1.5">
          <Info size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          New to a term? Hover any <span className="text-stone-700 dark:text-stone-200 underline decoration-dotted decoration-stone-400 dark:decoration-stone-500 underline-offset-2">underlined word</span> for a quick definition, or tap it for the full explanation.
        </p>
      </div>
    </header>
  );
}
