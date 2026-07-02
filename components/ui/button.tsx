import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button — restyled to Life OS tokens.
 * Quiet states: colour/border only, never scale or glow.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-umber-text/70 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-paper-100 text-ink-900 hover:bg-white active:bg-paper-200",
        secondary:
          "border border-hair-strong text-text hover:border-[rgba(236,230,216,0.3)] hover:bg-[rgba(236,230,216,0.04)]",
        ghost:
          "text-text-muted underline-offset-2 hover:text-text hover:underline",
        destructive:
          "border border-oxblood/30 text-oxblood-text hover:border-oxblood/50 hover:bg-oxblood/10",
      },
      size: {
        default: "px-5 py-[11px]",
        sm: "px-3 py-2 text-[13px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
