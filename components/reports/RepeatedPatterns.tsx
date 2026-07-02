import { ReportSection } from "./ReportSection";
import { repeatedPatterns } from "@/lib/persona";

export function RepeatedPatterns() {
  return (
    <ReportSection
      code="A"
      title="Repeated Patterns"
      lead="Recurring behaviour across contexts. A single event is noise; repetition is signal. Read what repeats, and the loop that keeps it running."
    >
      <div className="flex flex-col gap-3.5">
        {repeatedPatterns.map((p) => (
          <div
            key={p.n}
            className="flex items-start gap-5 rounded-sm border border-hair bg-ink-700 p-5 shadow-file md:p-6"
          >
            <span className="pt-1 font-mono text-[13px] text-umber-text">{p.n}</span>
            <div>
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <span className="font-sans text-[18px] font-semibold text-text">
                  {p.title}
                </span>
                <span className="rounded-sm border border-hair px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-text-faint">
                  {p.recurrence}
                </span>
              </div>
              <p className="text-[15px] leading-[1.55] text-text-muted">{p.loop}</p>
            </div>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
