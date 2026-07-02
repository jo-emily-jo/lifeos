// ── Section routing ───────────────────────────────────────────────
export type SectionId =
  | "patterns" // A
  | "decision" // B
  | "motivation" // C
  | "stress" // D
  | "shadow" // E
  | "origins" // F
  | "contradiction" // G
  | "trajectory" // H
  | "mirror" // I
  | "constitution"; // §

export interface NavItem {
  id: SectionId;
  code: string; // folio: A–H, I, §
  label: string;
}
export interface NavGroup {
  label: string;
  items: NavItem[];
}

// ── Life data ─────────────────────────────────────────────────────
export type EventType =
  | "origin"
  | "decision"
  | "failure"
  | "success"
  | "relationship"
  | "present";

export interface LifeEvent {
  year: number;
  label: string;
  type: EventType;
  driver: string;
}

// ── Co-interpretation ─────────────────────────────────────────────
export type HypothesisCategory =
  | "DECISION PATTERN"
  | "HIDDEN MOTIVATION"
  | "LIFE THEME"
  | "CONTRADICTION"
  | "BLIND SPOT";

export type HypothesisStatus = "open" | "agreed" | "refined" | "disagreed";

export interface Hypothesis {
  id: string;
  category: HypothesisCategory;
  confidence: number;
  evidence: { year: number; short: string }[];
  pattern: string;
  text: string;
  status: HypothesisStatus;
}

// ── Reports (A–H) ─────────────────────────────────────────────────
export interface RepeatedPattern {
  n: string;
  title: string;
  recurrence: string;
  loop: string;
}
export interface DecisionRule {
  rule: string;
  evidence: string;
  cost: string;
  assumption: string;
}
export interface MotivationEntry {
  stated: string;
  observed: string;
  evidence: string;
  interpretation: string;
}
export interface StressEntry {
  trigger: string;
  response: string;
  hiddenFunction: string;
  adaptiveBenefit: string;
  longTermCost: string;
}
export interface ShadowEntry {
  strength: string;
  benefit: string;
  cost: string;
}
export interface OriginHypothesis {
  hypothesis: string;
  confidence: "Tentative" | "Moderate" | "Strong";
  evidence: string;
}
export interface Contradiction {
  statedIdentity: string;
  behavioralEvidence: string;
  says: number;
  does: number;
  interpretation: string;
}
export interface TrajectoryHorizon {
  span: string;
  tag: string;
  body: string;
}

// ── Reflection + Constitution ─────────────────────────────────────
export interface MirrorCard {
  id: string;
  thinker: string;
  concept: string;
  premise: string;
  question: string;
  deepenFallback: string;
}
export interface ConstitutionArticle {
  key: string;
  numeral: string;
  title: string;
  subtitle: string;
  items: string[];
  suggestions?: string[];
}

// ── Driver radar ──────────────────────────────────────────────────
export interface Driver {
  key: string;
  stated: number;
  revealed: number;
}
