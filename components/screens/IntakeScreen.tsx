"use client";

import { useAnalyzer } from "@/lib/store";
import { TranscriptThread } from "@/components/intake/TranscriptThread";
import { EmergingPanel } from "@/components/intake/EmergingPanel";

export function IntakeScreen() {
  const { state } = useAnalyzer();
  const total = 8;
  const pct = (Math.min(state.step, total) / total) * 100;

  return (
    <div className="flex h-screen flex-col bg-ink-900">
      <div className="flex flex-none items-center justify-between border-b border-hair px-5 py-4 md:px-7">
        <div className="flex items-center gap-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-umber" />
          <span className="font-mono text-[12px] tracking-meta text-text-muted">
            PHASE 01 &nbsp;//&nbsp; CO-INTERPRETATION
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[12px] text-text-faint">
            {Math.min(state.step, total)} / {total}
          </span>
          <div className="h-1 w-40 overflow-hidden rounded-sm bg-[rgba(236,230,216,0.08)]">
            <div className="h-full bg-umber transition-[width] duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <TranscriptThread />
        <EmergingPanel />
      </div>
    </div>
  );
}
