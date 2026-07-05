import { Info } from "lucide-react";
import ThemeToggle from "../ThemeToggle.jsx";

/* Sticky page header. */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-700 px-6 py-8">
      <div className="max-w-3xl mx-auto relative">
        <ThemeToggle className="absolute top-0 right-0" />
        <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1">Personalized Training & Nutrition Plan</div>
        <h1 className="font-display text-3xl md:text-4xl leading-tight">Build muscle. <em className="text-emerald-700 dark:text-emerald-400 not-italic" style={{ fontStyle: "italic" }}>Train smart.</em></h1>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mt-3 mb-3" />
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 flex items-center gap-1.5">
          <Info size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
          New to a term? Hover any <span className="text-stone-700 dark:text-stone-200 underline decoration-dotted decoration-stone-400 dark:decoration-stone-500 underline-offset-2">underlined word</span> for a quick definition, or tap it for the full explanation.
        </p>
      </div>
    </header>
  );
}
