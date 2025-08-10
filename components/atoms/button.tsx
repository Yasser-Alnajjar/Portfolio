"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const buttonVariants = cva(
  "animation-pop cursor-pointer scale-100 active:scale-95 transform transition-[scale,color,background]  ease-out flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,_var(--color-primary)_90%,_black)]  focus-visible:ring-primary",
        tint: "bg-gray-200 hover:bg-[color-mix(in_oklab,_var(--color-gray-200)_90%,_black)] focus-visible:ring-gray-200",
        success:
          "bg-success text-white  hover:bg-[color-mix(in_oklab,_var(--color-success)_90%,_black)] focus-visible:ring-success",
        error:
          "bg-error text-white hover:bg-[color-mix(in_oklab,_var(--color-error)_90%,_black)] focus-visible:ring-error",
        warning:
          "bg-warning text-white hover:bg-[color-mix(in_oklab,_var(--color-warning)_90%,_black)] focus-visible:ring-warning",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        md: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const classNames = cn(buttonVariants({ variant, size, className }));

    const Comp = asChild ? Slot : "button";
    return <Comp className={classNames} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
