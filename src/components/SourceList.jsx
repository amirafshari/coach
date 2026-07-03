import { BookOpen, ExternalLink } from "lucide-react";

/* Cited sources / further-reading list shown at the bottom of detail pages. */
export default function SourceList({ sources }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-8 border-t border-stone-200 dark:border-stone-700 pt-5">
      <div className="font-mono2 text-[0.62rem] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-1.5">
        <BookOpen size={13} /> Sources & further reading
      </div>
      <ul className="space-y-2.5">
        {sources.map((s, i) => (
          <li key={i}>
            <a href={s.url} target="_blank" rel="noreferrer"
              className="text-sm text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 inline-flex items-start gap-1.5 group">
              <ExternalLink size={13} className="mt-0.5 shrink-0 opacity-60 group-hover:opacity-100" />
              <span className="underline decoration-stone-300 underline-offset-2 group-hover:decoration-emerald-500">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
