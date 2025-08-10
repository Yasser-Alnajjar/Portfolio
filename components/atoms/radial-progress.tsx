import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

export const radialProgressVariants = cva("text-primary", {
  variants: {
    variant: {
      default: "text-primary",
      error: "text-error",
      success: "text-success",
      warning: "text-warning",
      info: "text-info",
      tint: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type RadialProgressVariant = VariantProps<
  typeof radialProgressVariants
>["variant"];

interface RadialProgressProps {
  value: number;
  label: string;
  size?: string;
  variant?: RadialProgressVariant;
  className?: string;
}

export const RadialProgress: React.FC<RadialProgressProps> = ({
  value,
  label,
  size = "5rem",
  variant,
  className,
}) => {
  const thickness = `calc(${size} / 50)`;
  const colorClass = radialProgressVariants({ variant });

  return (
    <div
      className={cn(
        "relative inline-grid place-content-center rounded-full align-middle shrink-0",
        className
      )}
      style={
        {
          "--value": value,
          "--size": size,
          "--thickness": thickness,
          height: "var(--size)",
          width: "var(--size)",
          boxSizing: "content-box",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 rounded-full border-[length:var(--thickness)] border-current/10"></div>

      <div
        className={cn("absolute inset-0 rounded-full", colorClass)}
        style={{
          background: `conic-gradient(currentColor calc(var(--value) * 1%), transparent 0%)`,
          mask: `radial-gradient(farthest-side, transparent calc(100% - var(--thickness)), black calc(100% - var(--thickness)))`,
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - var(--thickness)), black calc(100% - var(--thickness)))`,
        }}
      ></div>

      {/* Center Label */}
      <span className={cn("text-sm font-semibold uppercase", colorClass)}>
        {label}
      </span>
    </div>
  );
};
