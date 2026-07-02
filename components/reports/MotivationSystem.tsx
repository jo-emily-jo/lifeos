import { ReportSection } from "./ReportSection";
import { RadarChart } from "@/components/charts/RadarChart";
import { drivers, motivationEntries } from "@/lib/persona";

export function MotivationSystem() {
  return (
    <ReportSection
      code="C"
      title="Motivation System"
      lead="What you say drives you, set against what your behaviour reveals. Where the two diverge is where the real engine is."
    >
      <div className="mb-10 flex flex-wrap items-center gap-8 rounded-sm border border-hair bg-ink-700 p-6 shadow-file">
        <RadarChart drivers={drivers} />
        <div className="min-w-[240px] flex-1">
          <p className="mb-4 font-mono text-[11px] tracking-meta text-text-muted">
            STATED VS. REVEALED
          </p>
          <div className="mb-4 flex gap-5 text-[13px] text-text-muted">
            <span className="flex items-center gap-2">
              <span className="inline-block h-[3px] w-3.5 bg-dust" /> What you say
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-[3px] w-3.5 bg-umber-text" /> What you do
            </span>
          </div>
          <p className="text-[15px] leading-[1.6] text-[#C9C1AE]">
            You rate <span className="text-dust">freedom</span> as your top driver.
            Behaviour rates <span className="text-umber-text">status</span> +58
            points higher than you claim, and{" "}
            <span className="text-umber-text">security</span> 45 points lower.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        {motivationEntries.map((m, i) => (
          <div key={i} className="rounded-sm border border-hair bg-ink-700 p-5 shadow-file md:p-6">
            <div className="grid gap-x-4 gap-y-2 text-[14px] leading-[1.5] sm:grid-cols-[120px_1fr]">
              <span className="pt-0.5 font-mono text-[10px] tracking-[0.1em] text-dust">STATED</span>
              <span className="font-serif text-[18px] text-text">{m.stated}</span>
              <span className="pt-0.5 font-mono text-[10px] tracking-[0.1em] text-umber-text">OBSERVED</span>
              <span className="text-text-muted">{m.observed}</span>
              <span className="pt-0.5 font-mono text-[10px] tracking-[0.1em] text-text-faint">EVIDENCE</span>
              <span className="font-mono text-[12px] text-text-faint">{m.evidence}</span>
              <span className="pt-0.5 font-mono text-[10px] tracking-[0.1em] text-text-faint">READING</span>
              <span className="text-[#C9C1AE]">{m.interpretation}</span>
            </div>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
