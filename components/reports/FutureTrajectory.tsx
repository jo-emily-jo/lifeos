import { ReportSection } from "./ReportSection";
import { TrajectoryChart } from "@/components/charts/TrajectoryChart";
import { trajectory } from "@/lib/persona";

export function FutureTrajectory() {
  return (
    <ReportSection
      code="H"
      title="Future Trajectory"
      lead="Two extrapolations from the system — not a prediction of wealth or status, but of behavioural continuation. The vertical axis is internal alignment."
    >
      <div className="mb-9 rounded-sm border border-hair bg-ink-800 p-6 shadow-file md:p-7">
        <TrajectoryChart drift={trajectory.drift} chosen={trajectory.chosen} />
      </div>
      <div className="flex flex-col gap-4">
        {trajectory.horizons.map((h, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-sm border border-hair bg-ink-700 p-6 shadow-file sm:flex-row sm:gap-6"
          >
            <div className="sm:w-[96px] sm:flex-none">
              <p className="font-serif text-[24px] font-medium text-umber-text">
                {h.span}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.08em] text-text-faint">
                {h.tag}
              </p>
            </div>
            <p className="flex-1 text-[16px] leading-[1.6] text-[#C9C1AE]">
              {h.body}
            </p>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
