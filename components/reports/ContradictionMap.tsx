import { ReportSection } from "./ReportSection";
import { SaysDoesBar } from "@/components/charts/SaysDoesBar";
import { contradictions } from "@/lib/persona";

export function ContradictionMap() {
  return (
    <ReportSection
      code="G"
      title="Contradiction Map"
      lead="Where stated identity and behaviour diverge. The wider the gap, the louder the story told to bridge it. Behaviour is trusted over words."
    >
      <div className="flex flex-col gap-3.5">
        {contradictions.map((c, i) => (
          <div
            key={i}
            className="rounded-sm border border-hair bg-ink-700 p-5 shadow-file md:p-6"
          >
            <div className="mb-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-serif text-[18px] text-dust">
                  {c.statedIdentity}
                </p>
              </div>
              <div>
                <p className="mb-2 text-[15px] text-text-muted">
                  {c.behavioralEvidence}
                </p>
              </div>
            </div>
            <SaysDoesBar says={c.says} does={c.does} />
            <p className="mt-4 border-l-2 border-oxblood/40 pl-4 text-[14px] leading-[1.55] text-[#C9C1AE]">
              {c.interpretation}
            </p>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
