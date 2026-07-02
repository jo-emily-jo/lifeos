import { ReportSection } from "./ReportSection";
import { stressEntries } from "@/lib/persona";

const ROWS = [
  ["RESPONSE", "response", "text-text-faint"],
  ["HIDDEN FUNCTION", "hiddenFunction", "text-text-faint"],
  ["ADAPTIVE BENEFIT", "adaptiveBenefit", "text-dust"],
  ["LONG-TERM COST", "longTermCost", "text-oxblood-text"],
] as const;

export function StressSystem() {
  return (
    <ReportSection
      code="D"
      title="Stress System"
      lead="What activates under pressure — and the hidden function it serves. Every response was adaptive once. Read the cost it now carries."
    >
      <div className="flex flex-col gap-3.5">
        {stressEntries.map((x, i) => (
          <div
            key={i}
            className="rounded-sm border border-hair bg-ink-700 p-5 shadow-file md:p-6"
          >
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-meta text-oxblood-text">
                TRIGGER
              </span>
              <span className="font-serif text-[21px] leading-[1.3] text-text">
                {x.trigger}
              </span>
            </div>
            <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-[14px] leading-[1.5]">
              {ROWS.map(([label, key, color]) => (
                <div key={key} className="contents">
                  <dt className={`pt-0.5 font-mono text-[10px] tracking-[0.1em] ${color}`}>
                    {label}
                  </dt>
                  <dd className="text-text-muted">{x[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
