"use client";

import { cn } from "@/lib/utils";
import { NAV_GROUPS } from "@/lib/nav";
import { SUBJECT } from "@/lib/persona";
import type { SectionId } from "@/types";

/**
 * CaseFileNav — a table of contents, not a toolbar.
 * Active = 2% ivory wash + 2px umber left rule. Folio numbers in mono.
 */
export function CaseFileNav({
  active,
  onSelect,
  className,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "w-[280px] shrink-0 overflow-y-auto border-r border-hair bg-ink-900 p-4",
        className
      )}
    >
      {NAV_GROUPS.map((group, gi) => (
        <section key={group.label}>
          <p
            className={cn(
              "px-3 pb-2.5 font-mono text-[10px] uppercase tracking-meta text-text-faint",
              gi === 0 ? "mt-0" : "mt-5"
            )}
          >
            {group.label}
          </p>
          {group.items.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  "flex min-h-[44px] w-full items-center gap-3 px-3.5 py-2.5 text-left font-sans text-[14px] font-medium transition-colors duration-200",
                  "border-l-2",
                  isActive
                    ? "border-umber bg-[rgba(236,230,216,0.04)] text-text"
                    : "border-transparent text-text-muted hover:bg-[rgba(236,230,216,0.04)] hover:text-text"
                )}
              >
                <span
                  className={cn(
                    "w-5 font-mono text-[11px] tracking-[0.1em]",
                    isActive ? "text-umber-text" : "text-text-faint"
                  )}
                >
                  {item.code}
                </span>
                {item.label}
              </button>
            );
          })}
        </section>
      ))}

      <div className="mt-6 border-t border-hair px-3 pt-5">
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-meta text-text-faint">
          Dominant code
        </p>
        <p className="font-mono text-[13px] leading-snug text-umber-text">
          {SUBJECT.dominantCode}
        </p>
      </div>
    </nav>
  );
}
