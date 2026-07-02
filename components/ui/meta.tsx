import * as React from "react";
import { cn } from "@/lib/utils";

/** A mono meta label — file numbers, classifications, field keys. */
export function MetaLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-meta text-text-faint",
        className
      )}
      {...props}
    />
  );
}

/** A neutral evidence chip: mono year + sans label. */
export function EvidenceChip({
  year,
  label,
}: {
  year: number | string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-hair bg-[rgba(236,230,216,0.04)] px-2 py-[3px]">
      <span className="font-mono text-[10px] font-semibold text-text-muted">
        {year}
      </span>
      <span className="font-sans text-[12px] text-text-muted">{label}</span>
    </span>
  );
}
