/* Standard "not medical advice" note shown on detail pages. */
export default function Disclaimer() {
  return (
    <p className="mt-6 text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
      Educational summary for general fitness understanding — not medical advice. If you have pain,
      an injury, or a medical condition, consult a qualified professional before training.
    </p>
  );
}
