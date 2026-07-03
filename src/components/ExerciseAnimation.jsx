import { Activity } from "lucide-react";

/* CODE-BASED EXERCISE ANIMATIONS
   Minimal SVG line figures animated with SMIL (<animate> / <animateTransform>).
   No videos, no images — everything is drawn and moved in code. */

const STROKE = "#57534e";
const JOINT = "#059669";
const EASE = "0.42 0 0.58 1";

export default function ExerciseAnimation({ kind }) {
  const S = { stroke: STROKE, strokeWidth: 3.5, strokeLinecap: "round", fill: "none" };

  const frame = (children, caption) => (
    <figure className="rounded-2xl bg-gradient-to-b from-white to-stone-100 dark:from-stone-800 dark:to-stone-900 border border-stone-200 dark:border-stone-700 p-5 shadow-sm">
      <svg viewBox="0 0 260 180" className="w-full max-w-xs mx-auto block" role="img" aria-label={caption}>
        <line x1="20" y1="158" x2="240" y2="158" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="3 7" />
        {children}
      </svg>
      <figcaption className="text-center font-mono2 text-[0.62rem] uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-3 flex items-center justify-center gap-1.5">
        <Activity size={12} /> {caption}
      </figcaption>
    </figure>
  );

  const anim = (attr, values, dur, extra = {}) => (
    <animate attributeName={attr} values={values} dur={dur} repeatCount="indefinite"
      calcMode="spline" keyTimes={extra.keyTimes || "0;0.5;1"}
      keySplines={extra.keySplines || `${EASE};${EASE}`} />
  );
  const rot = (values, cxcy, dur, keyTimes, keySplines) => (
    <animateTransform attributeName="transform" type="rotate" values={values} dur={dur}
      repeatCount="indefinite" calcMode="spline" keyTimes={keyTimes} keySplines={keySplines} />
  );

  switch (kind) {
    case "catcow":
      return frame(
        <>
          <line x1="85" y1="94" x2="85" y2="158" {...S} />
          <line x1="185" y1="94" x2="185" y2="158" {...S} />
          <path {...S} strokeWidth="4.5">
            {anim("d", "M85,94 Q135,126 185,94;M85,94 Q135,58 185,94;M85,94 Q135,126 185,94", "3.6s")}
          </path>
          <line x1="85" y1="94" {...S}>
            {anim("x2", "60;66;60", "3.6s")}
            {anim("y2", "72;120;72", "3.6s")}
          </line>
          <circle r="12" fill={STROKE}>
            {anim("cx", "60;66;60", "3.6s")}
            {anim("cy", "72;120;72", "3.6s")}
          </circle>
          <circle cx="85" cy="94" r="4.5" fill={JOINT} />
          <circle cx="185" cy="94" r="4.5" fill={JOINT} />
        </>,
        "Loop · Cow ↔ Cat"
      );

    case "birddog":
      return frame(
        <>
          <line x1="95" y1="90" x2="175" y2="90" {...S} strokeWidth="4.5" />
          <circle cx="80" cy="90" r="11" fill={STROKE} />
          <line x1="95" y1="90" x2="95" y2="158" {...S} />
          <line x1="175" y1="90" x2="175" y2="158" {...S} />
          <line x1="95" y1="90" x2="95" y2="150" {...S}>
            {rot("0 95 90;98 95 90;98 95 90;0 95 90", null, "3.4s", "0;0.35;0.65;1", `${EASE};0 0 1 1;${EASE}`)}
          </line>
          <line x1="175" y1="90" x2="175" y2="150" {...S}>
            {rot("0 175 90;-98 175 90;-98 175 90;0 175 90", null, "3.4s", "0;0.35;0.65;1", `${EASE};0 0 1 1;${EASE}`)}
          </line>
          <circle cx="95" cy="90" r="4.5" fill={JOINT} />
          <circle cx="175" cy="90" r="4.5" fill={JOINT} />
        </>,
        "Loop · opposite arm & leg reach"
      );

    case "deadbug":
      return frame(
        <>
          <line x1="92" y1="120" x2="168" y2="120" {...S} strokeWidth="4.5" />
          <circle cx="78" cy="120" r="10" fill={STROKE} />
          {/* stable up arm + up leg */}
          <line x1="92" y1="120" x2="92" y2="70" {...S} opacity="0.35" />
          <line x1="168" y1="120" x2="168" y2="70" {...S} opacity="0.35" />
          {/* moving arm (overhead) */}
          <line x1="92" y1="120" x2="92" y2="66" {...S}>
            {rot("0 92 120;-80 92 120;-80 92 120;0 92 120", null, "3.2s", "0;0.35;0.65;1", `${EASE};0 0 1 1;${EASE}`)}
          </line>
          {/* moving leg (extend) */}
          <line x1="168" y1="120" x2="168" y2="66" {...S}>
            {rot("0 168 120;82 168 120;82 168 120;0 168 120", null, "3.2s", "0;0.35;0.65;1", `${EASE};0 0 1 1;${EASE}`)}
          </line>
          <circle cx="92" cy="120" r="4.5" fill={JOINT} />
          <circle cx="168" cy="120" r="4.5" fill={JOINT} />
        </>,
        "Loop · lower opposite arm & leg"
      );

    case "pullapart":
      return frame(
        <>
          <circle cx="130" cy="52" r="12" fill={STROKE} />
          <line x1="130" y1="64" x2="130" y2="120" {...S} strokeWidth="4.5" />
          <line x1="130" y1="120" x2="112" y2="158" {...S} />
          <line x1="130" y1="120" x2="148" y2="158" {...S} />
          <line x1="110" y1="76" {...S}>{anim("x2", "120;58;120", "2.8s")}<animate attributeName="y2" values="76;76;76" dur="2.8s" repeatCount="indefinite" /></line>
          <line x1="150" y1="76" {...S}>{anim("x2", "140;202;140", "2.8s")}</line>
          <path {...S} strokeWidth="3" stroke="#059669">
            {anim("d", "M120,76 Q130,92 140,76;M58,76 Q130,76 202,76;M120,76 Q130,92 140,76", "2.8s")}
          </path>
          <circle r="6" fill={STROKE}>{anim("cx", "120;58;120", "2.8s")}<animate attributeName="cy" values="76" dur="2.8s" repeatCount="indefinite" /></circle>
          <circle r="6" fill={STROKE} cy="76">{anim("cx", "140;202;140", "2.8s")}</circle>
          <circle cx="110" cy="76" r="4.5" fill={JOINT} />
          <circle cx="150" cy="76" r="4.5" fill={JOINT} />
        </>,
        "Loop · squeeze shoulder blades"
      );

    case "balance":
      return frame(
        <>
          <g>
            {rot("-3 120 158;3 120 158;-3 120 158", null, "3.2s", "0;0.5;1", `${EASE};${EASE}`)}
            <circle cx="120" cy="50" r="12" fill={STROKE} />
            <line x1="120" y1="62" x2="120" y2="112" {...S} strokeWidth="4.5" />
            <line x1="120" y1="72" x2="96" y2="98" {...S} />
            <line x1="120" y1="72" x2="144" y2="98" {...S} />
            <line x1="120" y1="112" x2="120" y2="158" {...S} />
            <line x1="120" y1="112" x2="150" y2="118" {...S} />
            <line x1="150" y1="118" x2="146" y2="148" {...S} />
            <circle cx="120" cy="112" r="4.5" fill={JOINT} />
            <circle cx="150" cy="118" r="4.5" fill={JOINT} />
          </g>
        </>,
        "Loop · stand tall, gentle sway"
      );

    case "lateralraise":
      return frame(
        <>
          <circle cx="130" cy="48" r="12" fill={STROKE} />
          <line x1="130" y1="60" x2="130" y2="118" {...S} strokeWidth="4.5" />
          <line x1="130" y1="118" x2="114" y2="158" {...S} />
          <line x1="130" y1="118" x2="146" y2="158" {...S} />
          <g>
            {rot("0 112 70;90 112 70;0 112 70", null, "2.8s", "0;0.5;1", `${EASE};${EASE}`)}
            <line x1="112" y1="70" x2="112" y2="122" {...S} />
            <circle cx="112" cy="124" r="6" fill={STROKE} />
          </g>
          <g>
            {rot("0 148 70;-90 148 70;0 148 70", null, "2.8s", "0;0.5;1", `${EASE};${EASE}`)}
            <line x1="148" y1="70" x2="148" y2="122" {...S} />
            <circle cx="148" cy="124" r="6" fill={STROKE} />
          </g>
          <circle cx="112" cy="70" r="4.5" fill={JOINT} />
          <circle cx="148" cy="70" r="4.5" fill={JOINT} />
        </>,
        "Loop · raise to shoulder height"
      );

    default:
      return null;
  }
}
