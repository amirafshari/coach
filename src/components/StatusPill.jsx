import { Check, X } from "lucide-react";

/* Tri-state activity toggle: pending → done → skipped → pending. */
export default function StatusPill({ label, status, onClick }) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border transition-all active:scale-95";
  const style =
    status === "done" ? "bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400" :
    status === "skipped" ? "bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800 text-red-700 dark:text-red-400" :
    "bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-600";
  return (
    <button type="button" onClick={onClick} className={`${base} ${style}`}>
      {status === "done" && <Check size={13} />}
      {status === "skipped" && <X size={13} />}
      <span>{label}{status === "done" ? " · done" : status === "skipped" ? " · skipped" : " · pending"}</span>
    </button>
  );
}
