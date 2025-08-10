"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@lib/utils";
import { Button } from "./button";

interface TagSelectProps {
  options: string[];
  placeholder?: string;
  className?: string;
  onChange?: (selected: string[]) => void;
  value?: string[];
}

export function TagSelect({
  options,
  placeholder = "Select...",
  onChange,
  className,
  value = [],
}: TagSelectProps) {
  const [selected, setSelected] = useState<string[]>(value);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const unselected = options.filter((o) => !selected.includes(o));

  const handleSelect = (value: string) => {
    const updated = [...selected, value];
    setSelected(updated);
    onChange?.(updated);
  };

  const handleRemove = (value: string) => {
    const updated = selected.filter((item) => item !== value);
    setSelected(updated);
    onChange?.(updated);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef}>
      <input
        type="text"
        hidden
        readOnly
        aria-hidden
        value={selected.join(",")}
      />

      <div
        className={cn(
          "border border-foreground/40 rounded-lg bg-background min-h-[40px] flex flex-col justify-center  cursor-pointer",
          className
        )}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-center justify-between gap-2 px-3 py-2">
          <div className="flex items-center flex-wrap gap-2 text-xs">
            {selected.length === 0 ? (
              <p className="text-xs font-semibold select-none">{placeholder}</p>
            ) : (
              selected.map((tag, index) => (
                <div
                  key={index}
                  className="select-none capitalize bg-gray-200 px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1"
                >
                  <span>{tag}</span>
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(tag);
                    }}
                    className="size-4 text-xs p-0 text-red-500 hover:text-red-500"
                  >
                    <X className="size-3" />
                  </Button>
                </div>
              ))
            )}
          </div>
          <ChevronDown size={16} />
        </div>
        {expanded && (
          <ul className="overflow-auto h-52" role="listbox">
            {unselected.length === 0 ? (
              <li className="text-center text-sm px-2 py-6">No items left</li>
            ) : (
              unselected.map((tag, index) => (
                <li
                  key={index}
                  role="option"
                  aria-selected={false}
                  className="select-none capitalize hover:cursor-pointer hover:bg-gray-200 hover:p-2 hover:rounded-lg mx-5 text-xs font-semibold mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(tag);
                  }}
                >
                  {tag}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
