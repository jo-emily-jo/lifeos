"use client";

import { AnalyzerProvider, useAnalyzer } from "@/lib/store";
import { IntroScreen } from "@/components/screens/IntroScreen";
import { IntakeScreen } from "@/components/screens/IntakeScreen";
import { AnalyzingScreen } from "@/components/screens/AnalyzingScreen";
import { ReportScreen } from "@/components/screens/ReportScreen";

function Stage() {
  const { state } = useAnalyzer();
  switch (state.screen) {
    case "intro":
      return <IntroScreen />;
    case "intake":
      return <IntakeScreen />;
    case "analyzing":
      return <AnalyzingScreen />;
    case "report":
      return <ReportScreen />;
  }
}

export default function Home() {
  return (
    <AnalyzerProvider>
      <Stage />
    </AnalyzerProvider>
  );
}
