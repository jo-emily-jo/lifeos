import { ReportSection } from "./ReportSection";
import { originHypotheses } from "@/lib/persona";

export function EnvironmentalOrigins() {
  return (
    <ReportSection
      code="F"
      title="Environmental Origins"
      lead="Where the system may have been built. These are hypotheses, never facts — held only as firmly as the evidence allows."
    >
      <div className="flex flex-col gap-3.5">
        {originHypotheses.map((o, i) => (
          <div
            key={i}
            className="rounded-sm border border-hair border-l-2 border-l-dust bg-ink-700 p-5 shadow-file md:p-6"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] tracking-meta text-dust">
                HYPOTHESIS
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-text-faint">
                CONFIDENCE · {o.confidence}
              </span>
            </div>
            <p className="mb-4 font-serif text-[21px] leading-[1.4] text-text">
              {o.hypothesis}
            </p>
            <div className="mb-3 h-px bg-[rgba(236,230,216,0.08)]" />
            <p className="font-mono text-[11px] leading-[1.55] text-text-faint">
              EVIDENCE · {o.evidence}
            </p>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
