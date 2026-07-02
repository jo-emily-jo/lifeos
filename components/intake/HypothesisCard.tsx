"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CATEGORY_COLOR } from "@/lib/intake";
import { useAnalyzer } from "@/lib/store";
import type { Hypothesis } from "@/types";

/** A hypothesis as a research artifact: evidence → pattern → interpretation → confidence → rebuttal. */
export function HypothesisCard({ h }: { h: Hypothesis }) {
  const { respond } = useAnalyzer();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(h.text);
  const accent = CATEGORY_COLOR[h.category];
  const dim = h.status === "disagreed";

  return (
    <div
      className="animate-file-in rounded-sm border border-hair bg-ink-700 p-4"
      style={{ borderLeft: `3px solid ${accent}`, opacity: dim ? 0.5 : 1 }}
    >
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span
          className="rounded-sm px-2 py-0.5 font-mono text-[10px] tracking-[0.1em]"
          style={{ background: `${accent}1a`, color: accent }}
        >
          {h.category}
        </span>
        {!dim && (
          <span className="font-mono text-[10px] text-text-faint">{h.confidence}% conf</span>
        )}
      </div>

      {editing ? (
        <div>
          <Textarea rows={3} autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} />
          <div className="mt-2.5 flex gap-2">
            <Button size="sm" onClick={() => { respond(h.id, "refined", draft.trim() || h.text); setEditing(false); }}>
              Save my version
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <>
          <p className="mb-2 font-mono text-[9px] tracking-meta text-text-faint">EVIDENCE FROM YOUR TIMELINE</p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {h.evidence.map((e, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 rounded-sm border border-hair bg-[rgba(236,230,216,0.04)] px-2 py-[3px]">
                <span className="font-mono text-[10px] font-semibold text-text-muted">{e.year}</span>
                <span className="text-[12px] text-text-muted">{e.short}</span>
              </span>
            ))}
          </div>
          <p className="mb-1.5 font-mono text-[9px] tracking-meta text-text-faint">PATTERN ACROSS {h.evidence.length} EVENTS</p>
          <p className="mb-4 text-[13.5px] leading-[1.5] text-[#C9C1AE]">{h.pattern}</p>
          <div className="mb-3 h-px bg-[rgba(236,230,216,0.07)]" />
          <p className="mb-1.5 font-mono text-[9px] tracking-meta" style={{ color: accent }}>PROPOSED INTERPRETATION</p>
          <p className="text-[15px] leading-[1.5]" style={{ color: dim ? "#756B59" : "#E1E4EA", textDecoration: dim ? "line-through" : "none" }}>
            {h.text}
          </p>

          {h.status === "open" && (
            <div className="mt-3.5 flex gap-1.5">
              <Button size="sm" className="flex-1 border border-umber/30 bg-umber/10 text-umber-text hover:bg-umber/20" variant="secondary" onClick={() => respond(h.id, "agreed")}>Resonates</Button>
              <Button size="sm" variant="secondary" className="flex-1" onClick={() => { setDraft(h.text); setEditing(true); }}>Refine</Button>
              <Button size="sm" variant="ghost" className="flex-1 no-underline hover:text-oxblood-text" onClick={() => respond(h.id, "disagreed")}>Not me</Button>
            </div>
          )}
          {h.status === "agreed" && <StatusRow color="#BE8557" label="You agreed — shaping the model" onUndo={() => respond(h.id, "open")} />}
          {h.status === "refined" && <StatusRow color="#8FA0B6" label="In your words" actionLabel="edit" onUndo={() => { setDraft(h.text); setEditing(true); }} />}
          {dim && <StatusRow color="#756B59" label="Dismissed — not weighted" onUndo={() => respond(h.id, "open")} />}
        </>
      )}
    </div>
  );
}

function StatusRow({ color, label, onUndo, actionLabel = "undo" }: { color: string; label: string; onUndo: () => void; actionLabel?: string }) {
  return (
    <div className="mt-3 flex items-center justify-between">
      <span className="flex items-center gap-2 text-[12px]" style={{ color }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
        {label}
      </span>
      <button onClick={onUndo} className="text-[12px] text-text-faint underline">{actionLabel}</button>
    </div>
  );
}
