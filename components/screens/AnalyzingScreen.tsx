"use client";

import { useAnalyzer } from "@/lib/store";
import { ANALYSIS_STAGES } from "@/lib/intake";

export function AnalyzingScreen() {
  const { state } = useAnalyzer();
  const owned = state.hypotheses.filter((h) => h.status === "agreed" || h.status === "refined").length;

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-900 px-6">
      <div className="w-full max-w-[520px] animate-file-in">
        <div className="mb-10 text-center">
          <p className="mb-3.5 font-mono text-[12px] tracking-meta text-umber-text">
            SYNTHESIZING BEHAVIOURAL MODEL
          </p>
          <h2 className="font-serif text-[28px] font-normal tracking-[-0.01em] text-paper-100 md:text-[32px]">
            Reading between your decisions
          </h2>
        </div>
        <div className="flex flex-col gap-1 rounded-sm border border-hair bg-ink-800 p-3">
          {ANALYSIS_STAGES.map((label, i) => {
            const done = i < state.analyzeStep;
            const active = i === state.analyzeStep;
            return (
              <div
                key={label}
                className="flex items-center gap-3.5 rounded-sm px-3.5 py-3"
                style={{ background: active ? "rgba(190,133,87,0.08)" : "transparent" }}
              >
                <span
                  className="h-[18px] w-[18px] flex-none rounded-full"
                  style={{
                    background: done ? "#BE8557" : "transparent",
                    border: done ? "none" : active ? "2px solid #BE8557" : "1.5px solid rgba(236,230,216,0.14)",
                  }}
                />
                <span className="flex-1 text-[15px]" style={{ color: done ? "#ADA593" : active ? "#F4F1E8" : "#756B59" }}>
                  {label}
                </span>
                {done && <span className="font-mono text-[11px] text-umber-text">DONE</span>}
              </div>
            );
          })}
        </div>
        <div className="mt-5 h-[3px] overflow-hidden rounded-sm bg-[rgba(236,230,216,0.07)]">
          <div className="h-full bg-umber transition-[width] duration-500" style={{ width: `${(state.analyzeStep / 5) * 100}%` }} />
        </div>
        <p className="mt-4 text-center font-mono text-[12px] tracking-[0.06em] text-text-faint">
          {owned > 0 ? `Integrating ${owned} interpretations you co-authored` : "Weighing every reading we surfaced"}
        </p>
      </div>
    </div>
  );
}
