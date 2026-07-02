import { cn } from "@/lib/utils";

/**
 * ReportSection — the case-file page header shared by every report:
 * mono eyebrow (REPORT X), serif title, serif lead, then children.
 */
export function ReportSection({
  code,
  title,
  lead,
  children,
}: {
  code: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <article className={cn("animate-file-in")}>
      <p className="mb-2.5 font-mono text-[12px] tracking-[0.14em] text-umber-text">
        REPORT {code}
      </p>
      <h2 className="font-serif text-[28px] font-normal leading-[1.12] tracking-[-0.01em] text-paper-100 md:text-[40px]">
        {title}
      </h2>
      <p className="mb-9 mt-4 max-w-reading text-[16px] leading-[1.65] text-text-muted md:text-[17px]">
        {lead}
      </p>
      {children}
    </article>
  );
}
