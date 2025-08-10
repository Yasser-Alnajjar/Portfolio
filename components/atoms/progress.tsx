"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const progressRootVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary/20",
        error: "bg-error/20",
        success: "bg-success/20",
        warning: "bg-warning/20",
        info: "bg-info/20",
        foreground: "bg-foreground/20",
        tint: "bg-[color-mix(in_oklab,_var(--color-gray-200)_90%,_black)]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        error: "bg-error",
        success: "bg-success",
        warning: "bg-warning",
        info: "bg-info",
        foreground: "bg-foreground",
        tint: "bg-[color-mix(in_oklab,_var(--color-gray-200)_90%,_black)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ProgressVariant = VariantProps<
  typeof progressRootVariants
>["variant"];

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  variant?: ProgressVariant;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressRootVariants({ variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressIndicatorVariants({ variant }))}
      style={{ transform: `translateX(-${100 - value}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
