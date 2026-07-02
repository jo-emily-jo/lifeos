"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Masthead } from "./Masthead";
import { CaseFileNav } from "./CaseFileNav";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

/**
 * AppShell — the desk the file sits on. Warm-ink canvas, hairline-divided
 * regions, one scroll region. Sidebar collapses to a drawer under lg.
 */
export function AppShell({
  active,
  onSelect,
  onReset,
  children,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
  onReset?: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const select = (id: SectionId) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <Masthead onReset={onReset} />

      <div className="flex min-h-0 flex-1">
        {/* Desktop rail */}
        <CaseFileNav active={active} onSelect={select} className="hidden lg:block" />

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-sm border border-hair-strong bg-ink-800 px-3 py-2 font-mono text-[11px] tracking-meta text-text-muted lg:hidden"
        >
          <Menu className="h-4 w-4" /> FILE INDEX
        </button>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-[82%] max-w-[320px] bg-ink-900">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 text-text-faint hover:text-text"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <CaseFileNav active={active} onSelect={select} />
            </div>
          </div>
        )}

        <main className={cn("min-w-0 flex-1 overflow-y-auto")}>
          <div className="mx-auto max-w-masthead px-5 py-10 md:px-8 lg:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
