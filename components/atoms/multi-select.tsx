"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Badge,
  Button,
  Input,
} from "@components";

export interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Array<Option>;
  selected: Array<string>;
  onChange: (selected: Array<string>) => void;
  onCreateOption?: (inputValue: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
  maxSelected?: number;
  creatable?: boolean;
  createText?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  onCreateOption,
  placeholder = "Select items...",
  searchPlaceholder = "Search...",
  emptyText = "No items found.",
  className,
  disabled = false,
  maxSelected,
  creatable = false,
  createText = "Create",
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const selectedOptions = React.useMemo(() => {
    return options.filter((option) => selected.includes(option.value));
  }, [options, selected]);

  const availableOptions = React.useMemo(() => {
    return options.filter((option) => !selected.includes(option.value));
  }, [options, selected]);

  const filteredOptions = React.useMemo(() => {
    if (!search) return availableOptions;
    return availableOptions.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [availableOptions, search]);

  const canCreateOption = React.useMemo(() => {
    if (!creatable || !search.trim()) return false;

    const searchLower = search.toLowerCase().trim();
    const optionExists = options.some(
      (option) =>
        option.label.toLowerCase() === searchLower ||
        option.value.toLowerCase() === searchLower
    );

    return !optionExists && searchLower.length > 0;
  }, [creatable, search, options]);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      if (maxSelected && selected.length >= maxSelected) {
        return;
      }
      onChange([...selected, value]);
    }
  };

  const handleRemove = (value: string) => {
    onChange(selected.filter((item) => item !== value));
  };

  const handleClear = () => {
    onChange([]);
  };

  const handleCreateOption = (inputValue: string) => {
    const newOption: Option = {
      label: inputValue.trim(),
      value: inputValue.trim().toLowerCase().replace(/\s+/g, "-"),
    };

    if (!selected.includes(newOption.value)) {
      if (maxSelected && selected.length >= maxSelected) {
        return;
      }
      onChange([...selected, newOption.value]);
    }

    if (onCreateOption) {
      onCreateOption(inputValue.trim());
    }

    setSearch("");
  };

  return (
    <div className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between min-h-10 h-auto p-2 bg-transparent"
            disabled={disabled}
          >
            <div className="flex flex-wrap gap-1 flex-1">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((option) => (
                  <Badge key={option.value} className="mr-1 mb-1">
                    {option.label}
                    <span
                      className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleRemove(option.value);
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={() => handleRemove(option.value)}
                    >
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </span>
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {selected.length > 0 && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClear();
                  }}
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </span>
              )}
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="!w-full p-0" align="start">
          <Command>
            <div className="flex items-center border-b px-3">
              <Input
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateOption(search);
                  }
                }}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <CommandList>
              {canCreateOption && (
                <CommandGroup>
                  <CommandItem
                    value={search}
                    onSelect={() => handleCreateOption(search)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">+</span>
                      {createText} &ldquo;{search.trim()}&ldquo;
                    </div>
                  </CommandItem>
                </CommandGroup>
              )}
              {filteredOptions.length === 0 && !canCreateOption ? (
                <CommandEmpty>{emptyText}</CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredOptions.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected.includes(option.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
