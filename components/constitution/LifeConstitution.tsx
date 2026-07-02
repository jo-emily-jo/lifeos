"use client";

import { useMemo, useState } from "react";
import { constitutionArticles } from "@/lib/persona";
import { EditableItem, type ConsItem } from "./EditableItem";

let seq = 1000;
const uid = () => `c${seq++}`;

type State = Record<string, ConsItem[]>;

function seed(): State {
  const s: State = {};
  for (const a of constitutionArticles) {
    s[a.key] = a.items.map((text) => ({ id: uid(), text, yours: false }));
  }
  return s;
}

/**
 * Life Constitution — the final artifact. A living, fully-editable OS,
 * co-authored. Seven articles; nothing is final or sacred.
 */
export function LifeConstitution() {
  const [state, setState] = useState<State>(seed);

  const save = (key: string) => (id: string, text: string) =>
    setState((s) => ({
      ...s,
      [key]: s[key].map((it) => (it.id === id ? { ...it, text, yours: true } : it)),
    }));
  const remove = (key: string) => (id: string) =>
    setState((s) => ({ ...s, [key]: s[key].filter((it) => it.id !== id) }));
  const add = (key: string, text = "") =>
    setState((s) => ({ ...s, [key]: [...s[key], { id: uid(), text, yours: true }] }));

  const meta = useMemo(() => constitutionArticles, []);

  return (
    <article className="animate-file-in">
      <p className="mb-2.5 font-mono text-[12px] tracking-[0.14em] text-umber-text">
        REPORT § · YOUR LIFE OS
      </p>
      <h2 className="font-serif text-[34px] font-semibold leading-[1.05] tracking-[-0.01em] text-paper-100 md:text-[44px]">
        Life Constitution
      </h2>
      <p className="mb-3 mt-4 max-w-[660px] font-serif text-[18px] leading-[1.65] text-text-muted md:text-[19px]">
        A living draft — not advice you received, but the first version of an
        operating system written from your own life. Everything here is editable.
        Disagree with it. Cross things out. It only becomes yours once you have
        touched it.
      </p>
      <p className="mb-8 font-mono text-[11px] tracking-[0.08em] text-text-faint">
        DRAFT · CO-AUTHORED WITH THE SYSTEM
      </p>

      {meta.map((a) => (
        <section key={a.key} className="mt-5 border-t border-hair pt-6">
          <div className="mb-1 flex items-baseline gap-3.5">
            <span className="font-serif text-[16px] italic text-text-faint">
              Article {a.numeral}
            </span>
            <h3 className="font-sans text-[24px] font-semibold tracking-[-0.01em] text-paper-100">
              {a.title}
            </h3>
          </div>
          <p className="mb-4 text-[14px] text-text-muted">{a.subtitle}</p>

          {state[a.key].length === 0 && (
            <p className="px-0.5 pb-1.5 font-serif text-[15px] italic text-text-faint">
              Nothing here yet — this article is yours to write.
            </p>
          )}

          <div className="flex flex-col gap-2">
            {state[a.key].map((it) => (
              <EditableItem key={it.id} item={it} onSave={save(a.key)} onRemove={remove(a.key)} />
            ))}
          </div>

          {a.suggestions && (
            <div className="mt-3 flex flex-wrap gap-2">
              {a.suggestions.map((sug) => (
                <button
                  key={sug}
                  onClick={() => add(a.key, sug)}
                  className="rounded-sm border border-dashed border-umber/35 bg-umber/[0.06] px-3 py-2 text-left text-[13px] text-[#C9C1AE] transition-colors hover:bg-umber/[0.14]"
                >
                  + {sug}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => add(a.key)}
            className="mt-3 px-0.5 py-1 text-[13px] text-text-faint hover:text-[#C9C1AE]"
          >
            + Add to {a.title}
          </button>
        </section>
      ))}

      <div className="mt-12 border-t border-hair pt-8">
        <p className="mb-7 font-mono text-[11px] tracking-[0.1em] text-text-faint">
          DRAFTED BY YOU, WITH THE SYSTEM — A LIVING DOCUMENT
        </p>
        <p className="mb-3.5 font-serif text-[16px] italic text-text-faint">
          This whole process was never building toward an answer to…
        </p>
        <p className="mb-6 font-serif text-[19px] text-[#7a808a] line-through">
          “What should you do?”
        </p>
        <p className="max-w-[620px] font-serif text-[28px] font-medium leading-[1.4] text-paper-100 md:text-[33px]">
          Given everything you now know about yourself — what kind of life is worth
          choosing?
        </p>
      </div>
    </article>
  );
}
