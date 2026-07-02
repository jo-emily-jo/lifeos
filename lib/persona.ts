import type {
  Contradiction,
  ConstitutionArticle,
  DecisionRule,
  Driver,
  MirrorCard,
  MotivationEntry,
  OriginHypothesis,
  RepeatedPattern,
  ShadowEntry,
  StressEntry,
  TrajectoryHorizon,
} from "@/types";

/**
 * OPERATOR-04F — the worked demo subject (founder / ambitious operator).
 * Every value below is scripted "case-file" content. In production these
 * arrays are the shape an AI synthesis step would return per user.
 */

export const SUBJECT = {
  id: "OPERATOR-04F",
  confidence: 94,
  dominantCode: "ST · FR // PROVE-DRIVEN OPERATOR",
};

export const repeatedPatterns: RepeatedPattern[] = [
  { n: "01", title: "The Restart Reflex", recurrence: "3 instances", loop: "Builds → stability arrives → dismantles it. Calm reads to the nervous system as danger, so risk is re-introduced." },
  { n: "02", title: "Relationship as Collateral", recurrence: "3 of 3", loop: "Every serious relationship ends at a career inflection point. The timing is not coincidence — it is a trade made on repeat." },
  { n: "03", title: "Crisis as Fuel", recurrence: "peaks 2011 & 2020", loop: "Best work clusters around near-ruin. With no crisis present, one is manufactured through over-commitment." },
  { n: "04", title: "The Competence Ceiling", recurrence: "ongoing", loop: "Delegates last, controls most. The largest bottleneck to growth carries the subject's own name." },
];

export const decisionRules: DecisionRule[] = [
  { rule: "Exit any system the moment it stops accelerating you.", evidence: "Left university (2010), a senior role (2018), eyeing the exit (2025).", cost: "Never holds an asset long enough to mature.", assumption: "A plateau is the same as decline." },
  { rule: "When uncertain, raise commitment instead of waiting.", evidence: "Doubled down before the 2011 collapse; raised mid-crisis in 2020.", cost: "Recovery debt; the crash arrives uninvited.", assumption: "Motion is safer than stillness." },
  { rule: "Sacrifice the relationship before the goal.", evidence: "A five-year relationship ended at a career peak in 2016.", cost: "Relational debt money cannot repay.", assumption: "People will wait; opportunities will not." },
  { rule: "Control whatever you are afraid of losing.", evidence: "Delegates last, reviews everything.", cost: "Becomes the single bottleneck to growth.", assumption: "Trust is a risk; control is safety." },
];

export const drivers: Driver[] = [
  { key: "Status", stated: 30, revealed: 88 },
  { key: "Freedom", stated: 90, revealed: 55 },
  { key: "Mastery", stated: 60, revealed: 75 },
  { key: "Impact", stated: 65, revealed: 48 },
  { key: "Security", stated: 70, revealed: 25 },
];

export const motivationEntries: MotivationEntry[] = [
  { stated: "“I want freedom.”", observed: "Builds larger orgs, takes a board, hires forty people.", evidence: "2018 left for freedom · 2021 raised · 2025 forty reports", interpretation: "Achievement, not freedom, mobilizes action. Freedom is the story; status is the engine." },
  { stated: "“I just want enough.”", observed: "Redefines “enough” upward at every milestone.", evidence: "2015 promotion · 2021 Series A · 2025 a bigger exit", interpretation: "“Enough” functions as a moving horizon that licenses the next climb." },
  { stated: "“I do it for the team.”", observed: "Highest-stakes calls track personal status, not team stability.", evidence: "2016 & 2020 pivots", interpretation: "Mission language legitimizes a status drive that predates the team." },
];

export const stressEntries: StressEntry[] = [
  { trigger: "Calm or stability arrives", response: "Manufactures a new crisis or venture", hiddenFunction: "Restores the urgency the nervous system reads as safety", adaptiveBenefit: "Bursts of extraordinary output", longTermCost: "No state ever feels like arrival; rest stays unreachable" },
  { trigger: "Financial threat", response: "Performance spikes; works at the edge of ruin", hiddenFunction: "Converts fear into fuel", adaptiveBenefit: "Best work clusters near collapse", longTermCost: "Unconsciously steers toward the cliff to feel switched on" },
  { trigger: "Loss of control", response: "Centralizes decisions; stops delegating", hiddenFunction: "Reduces exposure", adaptiveBenefit: "Short-term stability", longTermCost: "Caps the system at the size of one person" },
  { trigger: "Emotional exposure", response: "Withdraws into the work", hiddenFunction: "Avoids what cannot be mastered", adaptiveBenefit: "Protects focus", longTermCost: "Relationships starve at predictable intervals" },
];

export const shadowEntries: ShadowEntry[] = [
  { strength: "Ambition", benefit: "Relentless growth; outbuilds everyone in the room.", cost: "Perpetual dissatisfaction; the summit dissolves on arrival." },
  { strength: "Independence", benefit: "Moves without permission or scaffolding.", cost: "Cannot receive support; isolation gets mistaken for strength." },
  { strength: "Persistence", benefit: "Finishes what everyone else abandons.", cost: "Cannot let go of what should be abandoned." },
  { strength: "Crisis composure", benefit: "Calm and lethal when it is nearly over.", cost: "Needs ruin nearby to feel switched on." },
];

export const originHypotheses: OriginHypothesis[] = [
  { hypothesis: "Recognition and worth became linked early — achievement as the price of being seen.", confidence: "Moderate", evidence: "Earliest memory is earning his own money at 14; first “real status” recalled as a turning point." },
  { hypothesis: "Security was never assumed, so self-reliance became identity rather than habit.", confidence: "Moderate", evidence: "Chooses paths with no institution to lean on; keeps personal runway thin by choice." },
  { hypothesis: "Calm was historically unproductive or unsafe, training a bias toward motion.", confidence: "Tentative", evidence: "Stability reliably triggers a new venture; rest taken only once, involuntarily." },
];

export const contradictions: Contradiction[] = [
  { statedIdentity: "“I want freedom.”", behavioralEvidence: "Built a 40-person company, a board, and investors to answer to.", says: 90, does: 34, interpretation: "Each bid for freedom added stakeholders. Freedom is claimed; captivity is built." },
  { statedIdentity: "“Relationships matter most.”", behavioralEvidence: "Three of three serious relationships ended at career peaks.", says: 86, does: 24, interpretation: "The subject may value being the kind of person who prioritizes relationships more than they actually do." },
  { statedIdentity: "“I just want to rest.”", behavioralEvidence: "Already sketching the next company in the notes app.", says: 80, does: 18, interpretation: "Rest is narrated as the goal while every off-ramp is quietly removed." },
];

export const trajectory: {
  drift: number[];
  chosen: number[];
  horizons: TrajectoryHorizon[];
} = {
  drift: [120, 138, 158, 184],
  chosen: [122, 156, 104, 52],
  horizons: [
    { span: "1 YR", tag: "if nothing changes", body: "Sells the company — not strategically, but out of boredom dressed as opportunity. Starts something new within six months." },
    { span: "3 YR", tag: "the drift path", body: "Two more builds. One genuine win, one more relationship ended on schedule. Net worth up; baseline contentment flat." },
    { span: "10 YR", tag: "the fork", body: "Either the loop compounds into a serial-founder legend who is privately alone — or it breaks once, and one thing is finally allowed to be finished." },
  ],
};

export const mirrorCards: MirrorCard[] = [
  { id: "m1", thinker: "Nietzsche", concept: "Eternal Recurrence", premise: "You chose growth over certainty again and again. The gains were real. So were the losses — a relationship in 2016, near-ruin in 2020.", question: "If this exact life repeated forever — every loop, every loss, identical — would you choose it again?", deepenFallback: "And if the answer is no: which single loop would you refuse to live a second time?" },
  { id: "m2", thinker: "Kierkegaard", concept: "The Unlived Possible", premise: "Your sharpest regrets aren't the startups that failed. They're the life that ran parallel to the work — the one you kept postponing.", question: "Which possibility you never lived still follows you?", deepenFallback: "What would it cost you, right now, to stop calling it 'too late'?" },
  { id: "m3", thinker: "Frankl", concept: "Meaning & Responsibility", premise: "You grew most while carrying something heavier than yourself. The weight, not the freedom, was where meaning lived.", question: "What responsibility are you currently avoiding because it would tie you down?", deepenFallback: "Who is waiting on the other side of the responsibility you keep declining?" },
  { id: "m4", thinker: "Camus", concept: "Commitment Before Meaning", premise: "You've waited to feel certain before committing. Yet almost every meaning in your life arrived after the commitment, never before it.", question: "What are you still waiting to feel certain about before you begin?", deepenFallback: "What if certainty was never going to arrive first — what do you do then?" },
];

export const constitutionArticles: ConstitutionArticle[] = [
  { key: "drivers", numeral: "I", title: "Core Drivers", subtitle: "What repeatedly moves this life.", items: ["Status — being seen as someone who matters.", "Momentum — motion feels like safety; stillness like decline.", "Mastery — proving I can build what others can't."] },
  { key: "nonneg", numeral: "II", title: "Non-Negotiables", subtitle: "Conditions required for sustained functioning.", items: ["A high-stakes problem worth my full intensity.", "Autonomy over how, and with whom, I work.", "Visible progress I can measure."] },
  { key: "failure", numeral: "III", title: "Failure Modes", subtitle: "The recurring traps and loops.", items: ["The Restart Reflex — dismantling stability the moment it arrives.", "Relational sacrifice — the relationship is cut at every career peak.", "Manufactured crisis — engineering urgency to feel alive."] },
  { key: "rules", numeral: "IV", title: "Decision Rules", subtitle: "The rules I actually run — not the aspirational ones.", items: ["If I'm choosing it mainly to be seen choosing it, pause.", "Finish before I start — completion is the discipline I lack.", "Treat calm as information, not as danger."] },
  { key: "relationships", numeral: "V", title: "Relationship Patterns", subtitle: "Recurring structures in romance, friendship, family, collaboration.", items: ["I commit in words, then let the work set the real priority.", "Closeness is rationed; control quietly substitutes for trust.", "I end things on schedule — and call it timing."] },
  { key: "growth", numeral: "VI", title: "Growth Edges", subtitle: "Capabilities still underdeveloped — the next layer.", items: ["Tolerating calm without manufacturing a threat.", "Receiving support without reading it as weakness.", "Letting one thing be finished — and choosing to stay."] },
  { key: "commitments", numeral: "VII", title: "Future Commitments", subtitle: "Experiments worth running. Not goals.", items: [], suggestions: ["Finish one thing fully before starting the next.", "Protect one relationship with the rigor I give the company.", "Take a real sabbatical within the next 12 months.", "Let one venture be 'enough' — and stay."] },
];
