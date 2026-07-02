import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Card — restyled as a Life OS "conclusion" surface.
 * ink-700, hairline, 2px radius, soft file-shadow. No glow, no gradient.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-sm border border-hair bg-ink-700 shadow-file",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-2 font-mono text-[10px] tracking-meta",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardClaim = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-serif text-[21px] leading-[1.4] text-text", className)}
    {...props}
  />
));
CardClaim.displayName = "CardClaim";

const CardCitation = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-mono text-[11px] leading-[1.5] text-text-faint",
      className
    )}
    {...props}
  />
));
CardCitation.displayName = "CardCitation";

export { Card, CardHeader, CardClaim, CardCitation };
