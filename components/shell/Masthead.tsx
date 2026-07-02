import { SUBJECT } from "@/lib/persona";
import { MetaLabel } from "@/components/ui/meta";

export function Masthead({ onReset }: { onReset?: () => void }) {
  return (
    <header className="flex h-14 flex-none items-center justify-between border-b border-hair px-5 md:h-16 md:px-6">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 border border-umber" />
        <span className="font-mono text-[12px] tracking-[0.18em] text-text">
          LIFE&nbsp;OS
        </span>
        <span className="hidden font-mono text-[11px] tracking-meta text-text-faint sm:inline">
          CASE&nbsp;FILE
        </span>
      </div>
      <div className="flex items-center gap-4 font-mono text-[11px] tracking-meta text-text-faint">
        <span className="hidden md:inline">SUBJECT · {SUBJECT.id}</span>
        <span className="text-umber-text">CONFIDENCE {SUBJECT.confidence}%</span>
        <span className="hidden text-umber-text sm:inline">CONFIDENTIAL</span>
        {onReset && (
          <button
            onClick={onReset}
            className="rounded-sm border border-hair-strong px-3 py-1.5 text-text-muted transition-colors hover:border-[rgba(236,230,216,0.3)] hover:text-text"
          >
            New session
          </button>
        )}
      </div>
    </header>
  );
}

export { MetaLabel };
