/* Shared input styling + a labelled form field wrapper. */

export const inputCls = "w-full px-2.5 py-2 border border-stone-300 dark:border-stone-700 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-shadow";

export default function Field({ label, hint, children }) {
  return (
    <div className="mb-3">
      <label className="block text-xs text-stone-500 dark:text-stone-400 mb-1">{label}</label>
      {children}
      {hint && <div className="text-[0.68rem] text-stone-400 dark:text-stone-500 mt-1">{hint}</div>}
    </div>
  );
}
