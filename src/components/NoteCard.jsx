/* Left-accented informational card used across the injury / progression / meal notes. */
export default function NoteCard({ title, color, children }) {
  const borderMap = {
    emerald: "border-emerald-600 dark:border-emerald-500",
    red: "border-red-600",
    amber: "border-amber-600",
  };
  const textMap = {
    emerald: "text-emerald-700 dark:text-emerald-400",
    red: "text-red-700 dark:text-red-400",
    amber: "text-amber-700 dark:text-amber-400",
  };
  return (
    <div className={`bg-white dark:bg-stone-900 border-l-4 ${borderMap[color]} rounded-r-xl px-4 py-3 text-sm leading-6 shadow-sm`}>
      <div className={`font-mono2 text-[0.65rem] uppercase tracking-wide mb-1 ${textMap[color]}`}>{title}</div>
      <div className="text-stone-700 dark:text-stone-200">{children}</div>
    </div>
  );
}
