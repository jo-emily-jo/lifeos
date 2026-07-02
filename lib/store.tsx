"use client";

import { createContext, useContext, useReducer, useCallback } from "react";
import type { Hypothesis, HypothesisStatus, LifeEvent, SectionId } from "@/types";
import {
  QUESTIONS,
  HYPOTHESES_BY_Q,
  type SeedHypothesis,
} from "@/lib/intake";
import { complete } from "@/lib/claude";

export type Screen = "intro" | "intake" | "analyzing" | "report";

interface TranscriptEntry {
  role: "q" | "a" | "reflect";
  text: string;
  sub?: string;
  key?: string;
}

interface State {
  screen: Screen;
  section: SectionId;
  step: number;
  finished: boolean;
  transcript: TranscriptEntry[];
  events: LifeEvent[];
  hypotheses: Hypothesis[];
  analyzeStep: number;
}

type Action =
  | { type: "screen"; screen: Screen }
  | { type: "section"; section: SectionId }
  | { type: "answer"; text: string }
  | { type: "reflect"; key: string; text: string }
  | { type: "advance"; entries: TranscriptEntry[]; events: LifeEvent[]; step: number; finished: boolean }
  | { type: "addHypotheses"; items: Hypothesis[] }
  | { type: "hypStatus"; id: string; status: HypothesisStatus; text?: string }
  | { type: "analyzeStep"; step: number }
  | { type: "reset" };

let hid = 0;
const toHyp = (s: SeedHypothesis): Hypothesis => ({
  id: `h${hid++}`,
  category: s.category,
  confidence: s.confidence,
  evidence: s.evidence,
  pattern: s.pattern,
  text: s.text,
  status: "open",
});

const initial: State = {
  screen: "intro",
  section: "patterns",
  step: 0,
  finished: false,
  transcript: [{ role: "q", text: QUESTIONS[0].q, sub: QUESTIONS[0].sub }],
  events: [],
  hypotheses: [],
  analyzeStep: 0,
};

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "screen":
      return { ...s, screen: a.screen };
    case "section":
      return { ...s, section: a.section };
    case "answer":
      return { ...s, transcript: [...s.transcript, { role: "a", text: a.text }] };
    case "reflect":
      return {
        ...s,
        transcript: s.transcript.map((t) =>
          t.role === "reflect" && t.key === a.key && !t.text ? { ...t, text: a.text } : t
        ),
      };
    case "advance":
      return { ...s, transcript: a.entries, events: a.events, step: a.step, finished: a.finished };
    case "addHypotheses":
      return { ...s, hypotheses: [...s.hypotheses, ...a.items] };
    case "hypStatus":
      return {
        ...s,
        hypotheses: s.hypotheses.map((h) =>
          h.id === a.id
            ? {
                ...h,
                status: a.status,
                text: a.text ?? h.text,
                confidence:
                  a.status === "agreed"
                    ? Math.min(96, h.confidence + 18)
                    : a.status === "refined"
                    ? Math.min(96, h.confidence + 10)
                    : h.confidence,
              }
            : h
        ),
      };
    case "analyzeStep":
      return { ...s, analyzeStep: a.step };
    case "reset":
      return { ...initial, transcript: [{ role: "q", text: QUESTIONS[0].q, sub: QUESTIONS[0].sub }] };
    default:
      return s;
  }
}

function useAnalyzerState() {
  const [state, dispatch] = useReducer(reducer, initial);

  const begin = useCallback(() => dispatch({ type: "screen", screen: "intake" }), []);
  const select = useCallback((section: SectionId) => dispatch({ type: "section", section }), []);
  const reset = useCallback(() => dispatch({ type: "reset" }), []);

  const addHyps = useCallback((qid: string) => {
    const seeds = HYPOTHESES_BY_Q[qid] || [];
    seeds.forEach((seed, k) => {
      window.setTimeout(() => dispatch({ type: "addHypotheses", items: [toHyp(seed)] }), 650 + k * 1100);
    });
  }, []);

  const submit = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || state.finished) return;
      const idx = state.step;
      const q = QUESTIONS[idx];
      const events = [...state.events, ...q.events];
      addHyps(q.id);
      const base: TranscriptEntry[] = [...state.transcript, { role: "a", text }];

      const advance = (entries: TranscriptEntry[]) => {
        const next = idx + 1;
        if (next < QUESTIONS.length) {
          const nq = QUESTIONS[next];
          dispatch({ type: "advance", entries: [...entries, { role: "q", text: nq.q, sub: nq.sub }], events, step: next, finished: false });
        } else {
          dispatch({ type: "advance", entries, events, step: next, finished: true });
        }
      };

      if (q.ai) {
        const withReflect = [...base, { role: "reflect" as const, key: q.id, text: "" }];
        dispatch({ type: "advance", entries: withReflect, events, step: idx, finished: false });
        const reflection = await complete(
          `You are an elite behavioural strategist. ${q.aiInstruction} Reply with ONE sharp, warm-but-direct sentence, max 30 words. No preamble or quotes. The user said: "${text}"`,
          q.aiFallback || ""
        );
        dispatch({ type: "reflect", key: q.id, text: reflection });
        // advance after the reflection lands
        window.setTimeout(() => {
          const entries = [...withReflect.map((t) => (t.role === "reflect" && t.key === q.id ? { ...t, text: reflection } : t))];
          const next = idx + 1;
          if (next < QUESTIONS.length) {
            const nq = QUESTIONS[next];
            dispatch({ type: "advance", entries: [...entries, { role: "q", text: nq.q, sub: nq.sub }], events, step: next, finished: false });
          } else {
            dispatch({ type: "advance", entries, events, step: next, finished: true });
          }
        }, 700);
      } else {
        advance(base);
      }
    },
    [state, addHyps]
  );

  const respond = useCallback(
    (id: string, status: HypothesisStatus, text?: string) => dispatch({ type: "hypStatus", id, status, text }),
    []
  );

  const synthesize = useCallback(() => {
    dispatch({ type: "screen", screen: "analyzing" });
    const tick = (n: number) => {
      dispatch({ type: "analyzeStep", step: n });
      if (n < 5) window.setTimeout(() => tick(n + 1), 820);
      else window.setTimeout(() => dispatch({ type: "screen", screen: "report" }), 700);
    };
    tick(0);
  }, []);

  return { state, begin, select, reset, submit, respond, synthesize };
}

const Ctx = createContext<ReturnType<typeof useAnalyzerState> | null>(null);

export function AnalyzerProvider({ children }: { children: React.ReactNode }) {
  return <Ctx.Provider value={useAnalyzerState()}>{children}</Ctx.Provider>;
}

export function useAnalyzer() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAnalyzer must be used within AnalyzerProvider");
  return c;
}
