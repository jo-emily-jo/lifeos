"use client";

import { AppShell } from "@/components/shell/AppShell";
import { ReportRouter } from "@/components/reports/ReportRouter";
import { useAnalyzer } from "@/lib/store";

export function ReportScreen() {
  const { state, select, reset } = useAnalyzer();
  return (
    <AppShell active={state.section} onSelect={select} onReset={reset}>
      <ReportRouter section={state.section} />
    </AppShell>
  );
}
