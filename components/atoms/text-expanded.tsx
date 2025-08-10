"use client";

import { cn } from "@lib/utils";
import React, { useState } from "react";

interface ITextExpanded extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  limit?: number;
  expandClassName?: string;
}

export const TextExpanded = ({
  text,
  limit = 100,
  className,
  expandClassName,
  ...props
}: ITextExpanded) => {
  const isExpandable = text.length > limit;
  const [expanded, setExpanded] = useState(!isExpandable);

  const displayedText = expanded ? text : text.slice(0, limit);

  return (
    <p {...props} className={cn(className)}>
      {displayedText}
      {isExpandable && !expanded && "... "}
      {isExpandable && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "text-warning ml-1 underline cursor-pointer",
            expandClassName
          )}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </p>
  );
};
