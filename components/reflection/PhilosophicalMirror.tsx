import { MirrorCard } from "./MirrorCard";
import { mirrorCards } from "@/lib/persona";

export function PhilosophicalMirror() {
  return (
    <article className="animate-file-in">
      <p className="mb-2.5 font-mono text-[12px] tracking-[0.14em] text-dust">
        REPORT I · REFLECTION
      </p>
      <h2 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.01em] text-paper-100 md:text-[40px]">
        The Philosophical Mirror
      </h2>
      <p className="mb-11 mt-4 max-w-[640px] font-serif text-[18px] leading-[1.65] text-text-muted md:text-[19px]">
        No more analysis. No advice. These questions are drawn from your own life
        and handed back to you. Sit with them — the system has nothing to add to
        your answer, only, sometimes, one more question.
      </p>
      <div className="flex flex-col gap-5">
        {mirrorCards.map((c) => (
          <MirrorCard key={c.id} card={c} />
        ))}
      </div>
    </article>
  );
}
