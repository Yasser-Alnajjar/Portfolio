"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const alertVariants = cva(
  "relative flex text-sm items-center w-full rounded-lg border p-4 [&>svg~*]:pl-4 [&>svg+div]:translate-y-[-3px] [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        success: "border-success bg-success/5 text-success",
        error: "border-error bg-error/5 text-error ",
        info: "border-info bg-info/5 text-info ",
        warning: "border-warning bg-warning/5 text-warning ",
        gray: "border-gray-300 bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
