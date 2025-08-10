import { cn } from "@lib/utils";
import React from "react";

export const GrowSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rounded-full bg-primary animate-grow size-6 shrink-0",
        className
      )}
    />
  );
};
