/* GLOSSARY — explains every concept used in the plan.
   Each term carries a short definition (shown on hover) and a longer,
   plain-language explanation with cited, reputable sources (shown on its
   own page). All source links point at stable landing pages / literature. */

export const GLOSSARY = {
  "mind-muscle-connection": {
    term: "Mind–Muscle Connection",
    short: "Deliberately focusing your attention on the muscle you're training so it does more of the work.",
    long: [
      "The mind–muscle connection means consciously thinking about contracting the target muscle during a rep — for example, feeling your chest squeeze during a fly rather than just moving the weight from A to B. This is a form of 'internal attentional focus'.",
      "Research on attentional focus has found that this internal cue can measurably increase activation (measured by EMG) of the intended muscle during lighter, isolation-style exercises, which may help hypertrophy over time. For heavy compound lifts, an external focus (on moving the bar) often produces more force — so use the mind–muscle connection mainly on isolation work.",
    ],
    sources: [
      { label: "PubMed — attentional focus & muscle activation (Schoenfeld et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=attentional+focus+muscle+activation+resistance+training" },
      { label: "NASM — mind-muscle connection explained", url: "https://blog.nasm.org/" },
    ],
  },
  "progressive-overload": {
    term: "Progressive Overload",
    short: "Gradually asking your body to do slightly more over time — more weight, reps, or sets.",
    long: [
      "Progressive overload is the core principle of getting stronger or bigger: muscles adapt to a stimulus, so to keep improving you must gradually increase the demand. In practice that means adding a little weight, doing an extra rep or set, improving your form, or shortening rest — not staying at the exact same workout forever.",
      "The key word is gradual. Adding too much at once is how joints and tendons get injured. A common, safe rule is to add a small increment (e.g. 2.5 kg) to a lift only once you can complete the top of its target rep range with clean technique for two sessions in a row.",
    ],
    sources: [
      { label: "PubMed — resistance-training volume & progression", url: "https://pubmed.ncbi.nlm.nih.gov/?term=progressive+overload+resistance+training+hypertrophy" },
      { label: "NASM — principles of resistance training", url: "https://blog.nasm.org/" },
    ],
  },
  "hypertrophy": {
    term: "Hypertrophy",
    short: "The growth of muscle size in response to training.",
    long: [
      "Hypertrophy is the increase in the size of muscle fibres, and therefore the muscle, caused by resistance training combined with adequate protein and recovery. It's distinct from gaining strength — although the two usually go together, you can build strength (better neural coordination) with less visible size, and vice versa.",
      "The main drivers are mechanical tension (challenging loads through a full range of motion) and sufficient training volume — roughly 10 or more hard sets per muscle per week for most people. Sleep and protein intake determine whether that stimulus actually turns into new tissue.",
    ],
    sources: [
      { label: "PubMed — training volume and muscle hypertrophy", url: "https://pubmed.ncbi.nlm.nih.gov/?term=resistance+training+volume+muscle+hypertrophy+dose+response" },
      { label: "Examine.com — muscle growth research", url: "https://examine.com/" },
    ],
  },
  "tdee": {
    term: "TDEE",
    short: "Total Daily Energy Expenditure — all the calories you burn in a day.",
    long: [
      "TDEE (Total Daily Energy Expenditure) is the total number of calories your body uses in 24 hours. It's your resting metabolism (BMR) multiplied by an activity factor that accounts for exercise, daily movement, and the energy cost of digesting food.",
      "It's the anchor for nutrition planning: eat roughly at your TDEE to maintain weight, above it (a surplus) to gain muscle, or below it (a deficit) to lose fat. This app estimates it from the Mifflin–St Jeor equation and your weekly training load, then adds a small surplus for lean gain.",
    ],
    sources: [
      { label: "PubMed — Mifflin–St Jeor resting energy equation", url: "https://pubmed.ncbi.nlm.nih.gov/?term=mifflin+st+jeor+resting+energy+expenditure" },
      { label: "Mayo Clinic — metabolism & calorie needs", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/metabolism/art-20046508" },
    ],
  },
  "bmr": {
    term: "BMR",
    short: "Basal Metabolic Rate — calories your body burns at complete rest.",
    long: [
      "BMR (Basal Metabolic Rate) is the energy your body needs just to stay alive at rest: to breathe, circulate blood, regulate temperature, and keep organs running. For most people it's the largest single chunk of daily calorie use — typically 60–70%.",
      "This app estimates BMR with the Mifflin–St Jeor equation, which uses your weight, height, age, and sex. BMR is the starting number; multiplying it by an activity factor gives your TDEE.",
    ],
    sources: [
      { label: "PubMed — Mifflin–St Jeor equation validation", url: "https://pubmed.ncbi.nlm.nih.gov/?term=mifflin+st+jeor+basal+metabolic+rate" },
      { label: "Mayo Clinic — how metabolism works", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/metabolism/art-20046508" },
    ],
  },
  "rir": {
    term: "Reps in Reserve (RIR)",
    short: "How many more reps you could have done before failing — a way to gauge effort.",
    long: [
      "Reps in Reserve (RIR) is a simple intensity gauge: '2 RIR' means you stopped a set with about two good reps still left in the tank. It's a practical way to train hard enough to grow while leaving a safety margin, instead of grinding every set to total failure.",
      "For most muscle-building work, leaving 1–3 reps in reserve gives you most of the benefit with much less fatigue and joint stress — especially valuable when you're protecting sensitive shoulders or a lower back. As a set gets within a couple reps of failure, bar speed slows noticeably; that slowdown is your cue.",
    ],
    sources: [
      { label: "PubMed — reps in reserve / RPE in resistance training", url: "https://pubmed.ncbi.nlm.nih.gov/?term=repetitions+in+reserve+RPE+resistance+training" },
      { label: "NASM — training intensity & RIR", url: "https://blog.nasm.org/" },
    ],
  },
  "hip-hinge": {
    term: "Hip Hinge",
    short: "Bending mainly at the hips — pushing them back — while keeping your spine flat.",
    long: [
      "A hip hinge is the movement pattern behind deadlifts, Romanian deadlifts, and picking anything up off the floor safely. You push your hips backward and let your torso tip forward like a see-saw, keeping your spine in a flat, neutral position and only a soft bend in the knees. The stretch should be felt in the hamstrings, not the lower back.",
      "Learning to hinge from the hips — rather than rounding the lower back — is the single most protective skill for a sensitive lumbar spine, because it lets the big, strong glutes and hamstrings do the work instead of loading the vulnerable discs.",
    ],
    sources: [
      { label: "ACE — Exercise Library (hip-hinge patterns)", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
      { label: "PubMed — lumbar load & lifting mechanics", url: "https://pubmed.ncbi.nlm.nih.gov/?term=hip+hinge+lumbar+load+deadlift" },
    ],
  },
  "impingement": {
    term: "Shoulder Impingement",
    short: "Pinching of soft tissue in the shoulder, often felt with overhead movements.",
    long: [
      "Shoulder impingement happens when the tendons of the rotator cuff get compressed in the narrow space under the top of the shoulder blade, usually when the arm is raised overhead. It can cause pain, pinching, and — if repeatedly aggravated — tendon irritation.",
      "This is why the program swaps behind-the-neck and heavy overhead pressing for incline pressing and controlled lateral raises: you still build the shoulders, but keep the arm in ranges that don't jam that tissue. Warming up the rotator cuff first (band pull-aparts) further protects the joint.",
    ],
    sources: [
      { label: "OrthoInfo (AAOS) — shoulder impingement / rotator-cuff tendinitis", url: "https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-impingementrotator-cuff-tendinitis/" },
      { label: "Mayo Clinic — shoulder pain overview", url: "https://www.mayoclinic.org/symptoms/shoulder-pain/basics/definition/sym-20050696" },
    ],
  },
  "rotator-cuff": {
    term: "Rotator Cuff",
    short: "A group of four small muscles that stabilise and rotate the shoulder.",
    long: [
      "The rotator cuff is a set of four muscles and their tendons that wrap the shoulder joint, holding the ball of the upper arm centred in its socket and controlling rotation. They're small stabilisers, not big movers — but if they're weak or irritated, the whole shoulder becomes unstable and prone to impingement.",
      "Movements like band pull-aparts and face pulls (external rotation work) strengthen and 'wake up' these muscles, which is why they're used as a warm-up before any pressing.",
    ],
    sources: [
      { label: "OrthoInfo (AAOS) — rotator cuff anatomy & care", url: "https://orthoinfo.aaos.org/en/diseases--conditions/rotator-cuff-tears/" },
      { label: "ACE — shoulder health exercises", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
    ],
  },
  "active-recovery": {
    term: "Active Recovery",
    short: "Light, easy movement on off-days to aid recovery instead of total rest.",
    long: [
      "Active recovery is low-intensity activity — an easy jog, a walk, gentle mobility — performed on non-lifting days or between hard sessions. The idea is that gentle movement increases blood flow to muscles, which can help clear metabolic by-products and reduce stiffness, without adding meaningful training stress.",
      "In this plan your easy runs double as active recovery: they support cardiovascular health and circulation while staying well below an intensity that would interfere with lifting recovery.",
    ],
    sources: [
      { label: "PubMed — active vs. passive recovery", url: "https://pubmed.ncbi.nlm.nih.gov/?term=active+recovery+exercise+performance" },
      { label: "NASM — recovery strategies", url: "https://blog.nasm.org/" },
    ],
  },
  "mobility": {
    term: "Mobility",
    short: "The ability to move a joint actively through its full range of motion with control.",
    long: [
      "Mobility is how far you can move a joint under your own control — it combines flexibility (how far the tissue can stretch) with the strength and coordination to actually use that range. It's different from passive flexibility, where something else moves your limb for you.",
      "Good mobility in the hips, shoulders, and mid-back (thoracic spine) lets you lift with better positions and less compensation, which directly reduces strain on sensitive joints. That's why a short daily mobility routine is built into this plan.",
    ],
    sources: [
      { label: "NASM — mobility vs. flexibility", url: "https://blog.nasm.org/" },
      { label: "ACE — mobility & movement resources", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
    ],
  },
  "proprioception": {
    term: "Proprioception",
    short: "Your body's sense of where its parts are in space — the basis of balance.",
    long: [
      "Proprioception is your internal 'position sense': the constant stream of feedback from receptors in your muscles, tendons, and joints that tells your brain where your limbs are without looking. It's what lets you touch your nose with your eyes closed — and what keeps you upright.",
      "Balance drills like single-leg stands train proprioception at the ankle and hip. Better proprioception means faster, more accurate corrections, which protects joints during lifting and running and reduces the risk of rolls, tweaks, and falls.",
    ],
    sources: [
      { label: "PubMed — proprioception & balance training", url: "https://pubmed.ncbi.nlm.nih.gov/?term=proprioception+balance+training+injury+prevention" },
      { label: "NASM — balance training", url: "https://blog.nasm.org/" },
    ],
  },
  "mps": {
    term: "Muscle Protein Synthesis",
    short: "The process of building new muscle protein — stimulated by training and protein intake.",
    long: [
      "Muscle protein synthesis (MPS) is the biological process of repairing and building muscle tissue. Resistance training raises MPS for roughly a day afterward, and eating protein raises it further; muscle grows when synthesis outpaces breakdown over time.",
      "Research suggests MPS responds better to protein spread across several meals (a dose of roughly 0.3–0.4 g/kg per meal) than to one large serving. That's why this plan splits your protein target across four meals rather than loading it all at dinner.",
    ],
    sources: [
      { label: "PubMed — protein distribution & muscle protein synthesis", url: "https://pubmed.ncbi.nlm.nih.gov/?term=protein+distribution+muscle+protein+synthesis+per+meal" },
      { label: "Examine.com — protein intake research", url: "https://examine.com/" },
    ],
  },
  "non-heme-iron": {
    term: "Non-Heme Iron",
    short: "The form of iron found in plant foods; absorbed better alongside vitamin C.",
    long: [
      "Iron in food comes in two forms: heme iron (from meat and fish, absorbed easily) and non-heme iron (from plants like lentils, beans, and grains, absorbed less readily). Iron matters for endurance athletes because it carries oxygen in the blood; low iron saps running performance and recovery.",
      "Vitamin C markedly boosts absorption of non-heme iron when eaten in the same meal — which is why pairing lentils or beans with tomato, citrus, or bell pepper is worthwhile, especially on running days when iron turnover is higher.",
    ],
    sources: [
      { label: "NIH Office of Dietary Supplements — Iron fact sheet", url: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/" },
      { label: "PubMed — vitamin C & non-heme iron absorption", url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+C+non-heme+iron+absorption" },
    ],
  },
  "deload": {
    term: "Deload",
    short: "A planned lighter week that lets accumulated fatigue clear so you can rebound stronger.",
    long: [
      "A deload is a short, deliberate reduction in training — typically one week where you cut volume (sets) by around 40% while keeping the movements and roughly the intensity. It isn't laziness: it lets accumulated fatigue in muscles, joints, and the nervous system dissipate.",
      "Deloading every 8–10 weeks (or when joints feel worn and progress stalls) sets up supercompensation — the body rebounds above its previous level once the fatigue is gone. For sensitive joints, regular deloads are a key part of staying injury-free long-term.",
    ],
    sources: [
      { label: "PubMed — periodization & deload in resistance training", url: "https://pubmed.ncbi.nlm.nih.gov/?term=deload+periodization+resistance+training+recovery" },
      { label: "NASM — periodization & recovery", url: "https://blog.nasm.org/" },
    ],
  },
  "supercompensation": {
    term: "Supercompensation",
    short: "The rebound where, after training + recovery, your capacity rises above its old level.",
    long: [
      "Supercompensation describes the fitness cycle: training temporarily reduces your performance (fatigue), then during recovery your body doesn't just return to baseline — it overshoots, building slightly more capacity than before to be ready for the next bout.",
      "This is why recovery isn't optional: the actual adaptation happens while you rest and eat, not during the workout itself. Training again too soon, before supercompensation completes, is how people plateau or overreach.",
    ],
    sources: [
      { label: "PubMed — training adaptation & recovery models", url: "https://pubmed.ncbi.nlm.nih.gov/?term=supercompensation+training+adaptation+recovery" },
      { label: "NASM — the general adaptation syndrome", url: "https://blog.nasm.org/" },
    ],
  },
  "neutral-spine": {
    term: "Neutral Spine",
    short: "Keeping the natural, gentle curves of your back — neither rounded nor over-arched.",
    long: [
      "A neutral spine is the position where your back keeps its natural, gentle S-curve — not rounded forward (flexed) and not excessively arched back. Bracing your core to hold this position distributes load evenly across the vertebrae and discs.",
      "Under a heavy load, losing neutral — especially rounding the lower back during a pull — dramatically increases shear stress on the lumbar discs (the L4/L5 region). Maintaining neutral spine is the reason cues like 'flat back' and 'brace your core' appear throughout this program.",
    ],
    sources: [
      { label: "PubMed — spinal loading & neutral posture in lifting", url: "https://pubmed.ncbi.nlm.nih.gov/?term=neutral+spine+lumbar+load+lifting" },
      { label: "ACE — core & spine mechanics", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
    ],
  },
  "external-rotation": {
    term: "External Rotation",
    short: "Rotating the upper arm outward — the motion that keeps the shoulder healthy.",
    long: [
      "External rotation is the movement of turning your upper arm bone outward, away from the midline — like the end position of a face pull, where your hands finish rotated back and up. It's driven largely by the rotator cuff.",
      "Most people are dominant in the opposite (internal-rotation) muscles from pressing and daily posture, which pulls the shoulders forward. Training external rotation restores balance, improves posture, and reduces impingement risk — the reason face pulls and band pull-aparts feature heavily here.",
    ],
    sources: [
      { label: "ACE — external rotation & shoulder health", url: "https://www.acefitness.org/resources/everyone/exercise-library/" },
      { label: "OrthoInfo (AAOS) — rotator cuff & shoulder mechanics", url: "https://orthoinfo.aaos.org/en/diseases--conditions/rotator-cuff-tears/" },
    ],
  },
};
