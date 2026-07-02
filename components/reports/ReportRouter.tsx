"use client";

import {
  RepeatedPatterns,
  DecisionArchitecture,
  MotivationSystem,
  StressSystem,
  ShadowOfStrength,
  EnvironmentalOrigins,
  ContradictionMap,
  FutureTrajectory,
} from "@/components/reports";
import { PhilosophicalMirror } from "@/components/reflection/PhilosophicalMirror";
import { LifeConstitution } from "@/components/constitution/LifeConstitution";
import type { SectionId } from "@/types";

const MAP: Record<SectionId, React.ComponentType> = {
  patterns: RepeatedPatterns,
  decision: DecisionArchitecture,
  motivation: MotivationSystem,
  stress: StressSystem,
  shadow: ShadowOfStrength,
  origins: EnvironmentalOrigins,
  contradiction: ContradictionMap,
  trajectory: FutureTrajectory,
  mirror: PhilosophicalMirror,
  constitution: LifeConstitution,
};

export function ReportRouter({ section }: { section: SectionId }) {
  const Active = MAP[section];
  return <Active key={section} />;
}
