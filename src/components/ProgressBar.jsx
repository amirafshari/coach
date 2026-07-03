/* Two-segment progress bar: green for done, red for skipped. */
export default function ProgressBar({ done, skipped, total }) {
  const donePct = total ? (done / total) * 100 : 0;
  const skipPct = total ? (skipped / total) * 100 : 0;
  return (
    <div className="h-1.5 w-full rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden flex mt-2">
      <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${donePct}%` }} />
      <div className="h-full bg-red-400 transition-all duration-500" style={{ width: `${skipPct}%` }} />
    </div>
  );
}
