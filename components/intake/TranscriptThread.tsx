"use client";

import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useAnalyzer } from "@/lib/store";
import { QUESTIONS } from "@/lib/intake";

/** Left column: the interlocutor transcript + input dock. */
export function TranscriptThread() {
  const { state, submit, synthesize } = useAnalyzer();
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const q = state.finished ? null : QUESTIONS[state.step];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [state.transcript]);

  const send = (text: string) => {
    submit(text);
    setDraft("");
  };

  return (
    <div className="flex min-w-0 flex-1 flex-col border-r border-hair">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[660px] flex-col gap-5">
          <div className="flex items-center gap-3 pb-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-hair-strong bg-ink-700 font-mono text-[13px] font-semibold text-umber-text">
              S
            </div>
            <div>
              <p className="font-sans text-[14px] font-semibold text-text">The Interlocutor</p>
              <p className="font-mono text-[11px] text-text-faint">behavioural analyst · session live</p>
            </div>
          </div>

          {state.transcript.map((m, i) => {
            if (m.role === "q")
              return (
                <div key={i} className="max-w-[90%] animate-file-in self-start rounded-sm border border-hair bg-ink-700 p-4">
                  <p className="font-serif text-[18px] leading-[1.5] text-text">{m.text}</p>
                  {m.sub && <p className="mt-2 text-[13px] italic text-text-faint">{m.sub}</p>}
                </div>
              );
            if (m.role === "a")
              return (
                <div key={i} className="max-w-[82%] animate-file-in self-end rounded-sm border border-umber/30 bg-umber/10 px-4 py-3 text-[15px] leading-[1.5] text-text">
                  {m.text}
                </div>
              );
            return (
              <div key={i} className="max-w-[88%] animate-file-in self-start">
                <p className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-meta text-dust">
                  <span className="h-1.5 w-1.5 rounded-full bg-dust" /> LIVE READ
                </p>
                {m.text ? (
                  <p className="border-l-2 border-dust pl-4 font-serif text-[18px] leading-[1.45] text-[#eef3ef]">{m.text}</p>
                ) : (
                  <span className="flex gap-1.5">
                    {[0, 0.2, 0.4].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-dot rounded-full bg-dust" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-none border-t border-hair bg-ink-900 px-5 py-4 md:px-10">
        <div className="mx-auto max-w-[660px]">
          {!state.finished ? (
            <>
              {q && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {q.chips.map((c) => (
                    <button
                      key={c}
                      onClick={() => send(c)}
                      className="rounded-sm border border-hair-strong bg-[rgba(236,230,216,0.04)] px-3 py-2 text-left text-[13px] text-text-muted transition-colors hover:border-umber/40 hover:text-text"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-end gap-2.5 rounded-sm border border-hair-strong bg-recess py-2 pl-4 pr-2">
                <Textarea
                  rows={1}
                  value={draft}
                  placeholder="Type your answer, or pick one above…"
                  className="max-h-[120px] border-0 bg-transparent px-0 py-1.5 focus:border-0"
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(draft);
                    }
                  }}
                />
                <button
                  onClick={() => send(draft)}
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-sm bg-umber-text text-ink-900 transition-opacity hover:opacity-85"
                  aria-label="Send"
                >
                  ↑
                </button>
              </div>
            </>
          ) : (
            <div className="flex animate-file-in items-center justify-between gap-4">
              <p className="text-[14px] text-text-muted">
                <span className="text-umber-text">{state.events.length} events · {state.hypotheses.length} interpretations shaped together.</span> Ready to synthesize.
              </p>
              <button
                onClick={synthesize}
                className="flex-none rounded-sm bg-paper-100 px-6 py-3 font-sans text-[15px] font-semibold text-ink-900 transition-colors hover:bg-white"
              >
                Synthesize Life OS →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
