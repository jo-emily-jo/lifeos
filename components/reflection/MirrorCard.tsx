"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { complete } from "@/lib/claude";
import type { MirrorCard as MirrorCardType } from "@/types";

/**
 * A single philosophical reflection. The system answers a written
 * reflection only with one further question — never advice.
 */
export function MirrorCard({ card }: { card: MirrorCardType }) {
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState<string | null>(null);
  const [writing, setWriting] = useState(false);
  const [deepening, setDeepening] = useState(false);
  const [deeper, setDeeper] = useState<string | null>(null);

  async function save() {
    const text = reflection.trim();
    if (!text) return setWriting(false);
    setSaved(text);
    setWriting(false);
    setDeepening(true);
    const q = await complete(
      `You are a philosophical interlocutor in the tradition of ${card.thinker} — not a coach. The person was asked: "${card.question}" They answered: "${text}". Respond with ONE further question that goes deeper. Never give advice, comfort, or a conclusion. Only a question. Max 26 words.`,
      card.deepenFallback
    );
    setDeeper(q);
    setDeepening(false);
  }

  return (
    <div className="rounded-md border border-hair bg-[#0c0d11] p-7 md:p-8">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-serif text-[18px] italic text-dust">{card.thinker}</span>
        <span className="font-mono text-[10px] tracking-[0.12em] text-text-faint">
          {card.concept}
        </span>
      </div>
      <p className="mb-5 font-serif text-[17px] leading-[1.7] text-[#9aa0aa]">
        {card.premise}
      </p>
      <p className="font-serif text-[24px] leading-[1.4] text-paper-100 md:text-[27px]">
        {card.question}
      </p>

      {!writing && saved === null && (
        <Button
          variant="secondary"
          className="mt-6 border-dust/30 text-[#c9b8ff]"
          onClick={() => setWriting(true)}
        >
          Sit with it — write a reflection
        </Button>
      )}

      {writing && (
        <div className="mt-5">
          <Textarea
            rows={3}
            autoFocus
            value={reflection}
            placeholder="Answer only for yourself…"
            className="font-serif text-[17px]"
            onChange={(e) => setReflection(e.target.value)}
          />
          <div className="mt-3 flex gap-2.5">
            <Button onClick={save}>Hold this</Button>
            <Button variant="secondary" onClick={() => setWriting(false)}>
              Not yet
            </Button>
          </div>
        </div>
      )}

      {saved !== null && !writing && (
        <div className="mt-6">
          <div className="rounded-r-sm border-l-2 border-dust bg-[rgba(236,230,216,0.03)] p-4">
            <p className="mb-2 font-mono text-[9px] tracking-meta text-text-faint">
              YOUR REFLECTION
            </p>
            <p className="font-serif text-[17px] leading-[1.6] text-text">{saved}</p>
          </div>
          {deepening && (
            <div className="mt-4 flex gap-1.5">
              {[0, 0.2, 0.4].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-dust animate-dot"
                  style={{ animationDelay: `${d}s` }}
                />
              ))}
            </div>
          )}
          {deeper && (
            <div className="mt-4">
              <p className="mb-2 font-mono text-[9px] tracking-meta text-dust">— AND THEN</p>
              <p className="font-serif text-[20px] italic leading-[1.45] text-[#C9C1AE]">
                {deeper}
              </p>
            </div>
          )}
          <button
            onClick={() => setWriting(true)}
            className="mt-4 font-sans text-[13px] text-text-faint underline"
          >
            revisit my reflection
          </button>
        </div>
      )}
    </div>
  );
}
