"use client";

import { useAnalyzer } from "@/lib/store";

export function IntroScreen() {
  const { begin } = useAnalyzer();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-900 px-6">
      <div className="w-full max-w-[760px] animate-file-in text-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-sm border border-hair-strong px-3.5 py-2 font-mono text-[11px] tracking-meta text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-umber" />
          LIFE&nbsp;OS&nbsp;&nbsp;//&nbsp;&nbsp;BEHAVIOURAL INTELLIGENCE ENGINE
        </div>
        <h1 className="mb-6 font-serif text-[44px] font-normal leading-[1.05] tracking-[-0.015em] text-paper-100 md:text-[60px]">
          See the operating system
          <br />
          you've never read.
        </h1>
        <p className="mx-auto mb-10 max-w-[560px] text-[17px] leading-[1.6] text-text-muted md:text-[18px]">
          Not a personality test. A forensic read of how you actually decide, what
          actually drives you, and the story you tell to avoid seeing both —
          interpreted with you, one hypothesis at a time.
        </p>
        <button
          onClick={begin}
          className="inline-flex items-center gap-3 rounded-sm bg-paper-100 px-7 py-4 font-sans text-[16px] font-semibold text-ink-900 transition-colors hover:bg-white"
        >
          Begin analysis <span>→</span>
        </button>
        <p className="mt-7 font-mono text-[12px] tracking-[0.06em] text-text-faint">
          8 questions&nbsp;&nbsp;·&nbsp;&nbsp;~4 minutes&nbsp;&nbsp;·&nbsp;&nbsp;nothing leaves this screen
        </p>
      </div>
    </div>
  );
}
