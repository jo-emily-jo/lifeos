import { ReportSection } from "./ReportSection";
import { decisionRules } from "@/lib/persona";

const ROW = [
  ["EVIDENCE", "evidence", "text-text-faint"],
  ["COST", "cost", "text-oxblood-text"],
  ["HIDDEN ASSUMPTION", "assumption", "text-umber-text"],
] as const;

export function DecisionArchitecture() {
  return (
    <ReportSection
      code="B"
      title="Decision Architecture"
      lead="How decisions actually get made here — the operating rules, not the aspirational ones. Each rule earned its place; each carries a cost and a hidden assumption."
    >
      <div className="flex flex-col gap-3.5">
        {decisionRules.map((d, i) => (
          <div
            key={i}
            className="rounded-sm border border-hair bg-ink-700 p-5 shadow-file md:p-6"
          >
            <div className="mb-4 flex items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-meta text-umber-text">
                RULE {String.fromCharCode(65 + i)}
              </span>
              <span className="font-serif text-[20px] leading-[1.3] text-text">
                {d.rule}
              </span>
            </div>
            <dl className="grid grid-cols-[132px_1fr] gap-x-4 gap-y-2 text-[14px] leading-[1.5]">
              {ROW.map(([label, key, color]) => (
                <div key={key} className="contents">
                  <dt className={`pt-0.5 font-mono text-[10px] tracking-[0.1em] ${color}`}>
                    {label}
                  </dt>
                  <dd className="text-text-muted">{d[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
