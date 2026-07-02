import type { HypothesisCategory, LifeEvent } from "@/types";

export interface IntakeQuestion {
  id: string;
  q: string;
  sub?: string;
  ai?: boolean;
  aiInstruction?: string;
  aiFallback?: string;
  chips: string[];
  events: LifeEvent[];
}

export interface SeedHypothesis {
  category: HypothesisCategory;
  confidence: number;
  evidence: { year: number; short: string }[];
  pattern: string;
  text: string;
}

export const QUESTIONS: IntakeQuestion[] = [
  {
    id: "origin",
    q: "Let's start at the origin. When did you first feel the pull to build something of your own — and what were you running from?",
    sub: "Don't polish it. The first instinct is the data.",
    chips: ["Reselling sneakers at 14 — I needed my own money", "Watched a parent stuck in a job they hated", "Always felt one step behind and wanted to get ahead"],
    events: [{ year: 2006, label: "First hustle — reselling sneakers", type: "origin", driver: "STATUS" }],
  },
  {
    id: "education",
    q: "Where did formal education fit — and where did it stop?",
    sub: "Including the parts you walked away from.",
    chips: ["Started a CS degree, left after two years", "Finished it, but learned more on the side", "Dropped out the moment I had real traction"],
    events: [{ year: 2010, label: "Left university after 2 years", type: "decision", driver: "FREEDOM" }],
  },
  {
    id: "firstbuild",
    q: "Tell me about the first thing you built that died. What actually killed it?",
    sub: "The real cause, not the pitch-deck version.",
    chips: ["Ran out of money — too early, too broke", "Built for 18 months, nobody wanted it", "My co-founder and I imploded"],
    events: [{ year: 2011, label: "First startup failed — ran out of runway", type: "failure", driver: "MASTERY" }],
  },
  {
    id: "career",
    q: "Then you went and worked for someone else. What did that period give you — and what did it cost?",
    chips: ["Joined a rocketship as employee #8", "Learned to operate but lost two years of agency", "Got promoted and finally felt like someone"],
    events: [
      { year: 2012, label: "Joined fast-growing startup as #8", type: "decision", driver: "MASTERY" },
      { year: 2015, label: "Promoted to lead — first real status", type: "success", driver: "STATUS" },
    ],
  },
  {
    id: "decision",
    q: "At some point you left stability to build again. Walk me through that decision.",
    sub: "What did you tell people — and what was the real reason?",
    chips: ["Left a senior role to start my own company", "Couldn't stand being a number anymore", "Had to prove the first failure was a fluke"],
    events: [{ year: 2018, label: "Left senior role to start current company", type: "decision", driver: "FREEDOM" }],
  },
  {
    id: "crisis",
    q: "What's the closest you came to losing it all — and what happened next?",
    chips: ["Two months from bankruptcy in 2020", "Almost shut it down, then raised a round", "I perform best when it's nearly over"],
    events: [
      { year: 2020, label: "Near-bankruptcy — almost shut down", type: "failure", driver: "SECURITY" },
      { year: 2021, label: "Raised Series A", type: "success", driver: "STATUS" },
    ],
  },
  {
    id: "relationship",
    ai: true,
    q: "Now the part founders skip. Tell me about a relationship that ended because of the work.",
    sub: "I'm going to reflect one thing back to you.",
    aiInstruction: "The user is a founder who sacrificed a serious relationship for their company. Reflect back, with warmth but unflinching honesty, the pattern of treating relationships as something to optimize 'later'.",
    aiFallback: "You didn't lose them to the work. You chose the work each time it actually counted — and called it timing.",
    chips: ["A 5-year relationship ended in 2016 — I chose the company", "Kept saying 'after this next milestone'", "They left; I told myself I'd fix it later"],
    events: [{ year: 2016, label: "Long relationship ended — chose the company", type: "relationship", driver: "STATUS" }],
  },
  {
    id: "goals",
    ai: true,
    q: "Last one. Five years out — what do you actually want? Not the LinkedIn answer.",
    aiInstruction: "The user is a founder who claims to want freedom or rest. Gently but directly expose that their behavior shows status and achievement seeking, not rest.",
    aiFallback: "You say freedom. But every freedom you've won, you've spent building a bigger cage. That's the thing worth sitting with.",
    chips: ["Freedom — sell this, never have a boss or a board again", "Rest. I want to stop running for a while", "Something that finally feels like enough"],
    events: [{ year: 2025, label: "Now — 40 people, restless, eyeing the exit", type: "present", driver: "FREEDOM" }],
  },
];

/** One or more hypotheses surface per answered question. */
export const HYPOTHESES_BY_Q: Record<string, SeedHypothesis[]> = {
  origin: [
    { category: "HIDDEN MOTIVATION", confidence: 60, evidence: [{ year: 2006, short: "reselling sneakers" }, { year: 2015, short: "“first real status”" }, { year: 2021, short: "raised Series A" }], pattern: "Money and milestones surface as a scoreboard, never as a safety net.", text: "Money entered your life as a tool for status and escape long before it was ever about security." },
    { category: "LIFE THEME", confidence: 52, evidence: [{ year: 2006, short: "first hustle" }, { year: 2010, short: "left university" }, { year: 2011, short: "a solo bet" }], pattern: "You keep choosing paths with no institution to lean on.", text: "Self-reliance reads as identity for you — needing no one is a value, not just a habit." },
  ],
  education: [{ category: "DECISION PATTERN", confidence: 58, evidence: [{ year: 2010, short: "left university" }, { year: 2018, short: "left senior role" }, { year: 2025, short: "eyeing the exit" }], pattern: "Three exits, each timed to the moment growth flattened.", text: "You exit structures the moment they stop accelerating you — credentials included." }],
  firstbuild: [{ category: "LIFE THEME", confidence: 54, evidence: [{ year: 2011, short: "ran out of runway" }, { year: 2020, short: "near-bankruptcy" }, { year: 2021, short: "raised after near-death" }], pattern: "Your story brightens around near-ruin, not around safety.", text: "Failure doesn't deter you; it seems to confirm you were playing a real game." }],
  career: [{ category: "HIDDEN MOTIVATION", confidence: 63, evidence: [{ year: 2015, short: "promoted to lead" }, { year: 2016, short: "chose company over partner" }, { year: 2021, short: "Series A" }], pattern: "Status markers sit at every turning point you recall most vividly.", text: "Being seen as 'someone' may matter more to you than the work that earned the title." }],
  decision: [{ category: "CONTRADICTION", confidence: 61, evidence: [{ year: 2018, short: "left “for freedom”" }, { year: 2018, short: "took on a board" }, { year: 2025, short: "40 people depend on you" }], pattern: "Every bid for freedom added stakeholders you must answer to.", text: "You called leaving 'freedom,' then immediately rebuilt a structure that owns your time." }],
  crisis: [{ category: "DECISION PATTERN", confidence: 66, evidence: [{ year: 2011, short: "ran out of runway" }, { year: 2020, short: "near-bankruptcy" }, { year: 2021, short: "raised months later" }], pattern: "Your biggest wins follow self-induced crises by only months.", text: "You perform best at the edge of ruin — and may unconsciously steer toward it." }],
  relationship: [{ category: "BLIND SPOT", confidence: 70, evidence: [{ year: 2016, short: "relationship ended" }, { year: 2018, short: "left for more work" }, { year: 2025, short: "restless again" }], pattern: "At every inflection, the relationship is the thing that gets cut.", text: "You frame lost relationships as bad timing, not as a choice you keep making." }],
  goals: [{ category: "CONTRADICTION", confidence: 73, evidence: [{ year: 2018, short: "rebuilt the structure" }, { year: 2021, short: "added investors" }, { year: 2025, short: "no off-ramp left" }], pattern: "You state a desire for rest while removing every exit from it.", text: "What you say you want — rest, freedom — is the opposite of what your time and money optimize for." }],
};

export const ANALYSIS_STAGES = [
  "Indexing 11 life events",
  "Detecting repeated behaviours",
  "Cross-referencing stated vs. revealed",
  "Isolating core drivers",
  "Compiling eight reports",
];

export const CATEGORY_COLOR: Record<HypothesisCategory, string> = {
  "DECISION PATTERN": "#8FA0B6",
  "HIDDEN MOTIVATION": "#BE8557",
  "LIFE THEME": "#9A8E78",
  CONTRADICTION: "#C06A5C",
  "BLIND SPOT": "#C06A5C",
};

export const EVENT_COLOR: Record<LifeEvent["type"], string> = {
  origin: "#9A8E78",
  decision: "#8FA0B6",
  failure: "#C06A5C",
  success: "#BE8557",
  relationship: "#9A8E78",
  present: "#BE8557",
};
