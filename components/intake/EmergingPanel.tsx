"use client";

import { useState } from "react";
import { useAnalyzer } from "@/lib/store";
import { EVENT_COLOR } from "@/lib/intake";
import { HypothesisCard } from "./HypothesisCard";

/** Right rail: toggle between Emerging Hypotheses and the Timeline of record. */
export function EmergingPanel() {
  const { state } = useAnalyzer();
  const [tab, setTab] = useState<"hyp" | "timeline">("hyp");
  const events = [...state.events].sort((a, b) => a.year - b.year);
  const owned = state.hypotheses.filter((h) => h.status === "agreed" || h.status === "refined").length;

  const tabCls = (on: boolean) =>
    `flex-1 rounded-sm px-2 py-2 text-[13px] font-medium transition-colors ${on ? "bg-[rgba(236,230,216,0.08)] text-paper-100" : "text-text-muted"}`;

  return (
    <aside className="flex w-full flex-col border-l border-hair bg-ink-800 lg:w-[420px]">
      <div className="flex-none p-4">
        <div className="mb-3.5 flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-umber" />
          <span className="font-mono text-[12px] tracking-meta text-text-muted">EMERGING INTERPRETATION</span>
        </div>
        <div className="flex gap-1 rounded-sm border border-hair bg-[rgba(236,230,216,0.04)] p-1">
          <button className={tabCls(tab === "hyp")} onClick={() => setTab("hyp")}>Hypotheses · {state.hypotheses.length}</button>
          <button className={tabCls(tab === "timeline")} onClick={() => setTab("timeline")}>Timeline · {events.length}</button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-8">
        {tab === "hyp" ? (
          state.hypotheses.length === 0 ? (
            <div className="mt-7 rounded-sm border border-dashed border-hair-strong p-5 text-center text-[14px] leading-[1.6] text-text-muted">
              As you answer, the system traces patterns across your timeline and shows its evidence here — <span className="text-[#C9C1AE]">evidence first, theory second.</span>
            </div>
          ) : (
            <>
              <p className="mb-3.5 text-[12px] text-text-faint">
                {state.hypotheses.length} readings proposed{owned > 0 ? ` · ${owned} you've made yours` : " · agree, refine, or push back"}
              </p>
              <div className="flex flex-col gap-3">
                {[...state.hypotheses].reverse().map((h) => <HypothesisCard key={h.id} h={h} />)}
              </div>
            </>
          )
        ) : events.length === 0 ? (
          <p className="mt-10 text-center text-[13px] leading-[1.6] text-text-faint">Events surface here as you answer.</p>
        ) : (
          <div className="mt-2">
            {events.map((e, i) => (
              <div key={i} className="relative border-l border-hair pb-5 pl-6">
                <span className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full" style={{ background: EVENT_COLOR[e.type] }} />
                <p className="mb-0.5 font-mono text-[12px] font-semibold" style={{ color: EVENT_COLOR[e.type] }}>{e.year}</p>
                <p className="mb-1.5 text-[14px] text-[#D4D8DF]">{e.label}</p>
                <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">{e.type.toUpperCase()} · {e.driver}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
