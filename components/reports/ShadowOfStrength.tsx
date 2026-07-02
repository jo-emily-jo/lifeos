import { ReportSection } from "./ReportSection";
import { shadowEntries } from "@/lib/persona";

export function ShadowOfStrength() {
  return (
    <ReportSection
      code="E"
      title="Shadow of Strength"
      lead="Every strength carries its cost folded inside it. These are not flaws to fix — they are the tradeoffs you are already paying to keep the strength."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {shadowEntries.map((s, i) => (
          <div
            key={i}
            className="rounded-sm border border-hair bg-ink-700 p-6 shadow-file"
          >
            <p className="font-serif text-[22px] text-text">{s.strength}</p>
            <div className="mt-4 space-y-3 text-[14px] leading-[1.55]">
              <p>
                <span className="font-mono text-[10px] tracking-[0.1em] text-dust">
                  BENEFIT&nbsp;&nbsp;
                </span>
                <span className="text-text-muted">{s.benefit}</span>
              </p>
              <p>
                <span className="font-mono text-[10px] tracking-[0.1em] text-oxblood-text">
                  COST&nbsp;&nbsp;
                </span>
                <span className="text-[#C9C1AE]">{s.cost}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
