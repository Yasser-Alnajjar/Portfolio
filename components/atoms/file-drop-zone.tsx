"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { UploadCloud, X } from "lucide-react";
import { cn } from "@lib/utils";
import { Button } from "@components";

interface FileDropZoneProps {
  value?: File[];
  multiple?: boolean;
  onChange?: (files: File[]) => void;
}

export function FileDropZone({
  multiple,
  value = [],
  onChange,
}: FileDropZoneProps) {
  const [files, setFiles] = useState<File[]>(value);
  const [previews, setPreviews] = useState<(string | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const fileArray = Array.from(fileList);
    setFiles(fileArray);
    onChange?.(fileArray);

    const urls = fileArray.map((file) =>
      file.type.startsWith("image/") ? URL.createObjectURL(file) : null
    );
    setPreviews(urls);
  };

  const removeFile = (indexToRemove: number) => {
    const file = files[indexToRemove];
    if (file.type.startsWith("image/") && previews[indexToRemove]) {
      URL.revokeObjectURL(previews[indexToRemove]!);
    }

    const updatedFiles = files.filter((_, i) => i !== indexToRemove);
    const updatedPreviews = previews.filter((_, i) => i !== indexToRemove);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onChange?.(updatedFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);
  const handleClick = () => inputRef.current?.click();

  useEffect(() => {
    return () => {
      previews.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [previews]);

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={cn(
        "w-full border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center space-y-4 px-4 py-6",
        isDragging ? "border-blue-500 bg-blue-50" : "border-muted"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {files.length === 0 && (
        <div className="flex flex-col items-center justify-center text-sm text-muted-foreground space-y-2">
          <UploadCloud className="w-6 h-6 text-blue-500" />
          <p>
            {isDragging
              ? "Drop the files here..."
              : "Click or drag files to upload"}
          </p>
        </div>
      )}

      {files.length > 0 && (
        <div className="max-h-96 overflow-y-auto space-y-4 w-full">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              {file.type.startsWith("image/") && previews[index] ? (
                <div className="relative w-full flex items-center justify-center min-h-40">
                  <div className="flex items-center gap-2 absolute top-0 start-0 bg-black p-2 rounded text-xxs z-50">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="bg-transparent border border-transparent cursor-pointer hover:border-foreground text-red-500 rounded-full p-1 shadow"
                    >
                      <X size={12} />
                    </button>
                    {file.name}
                  </div>
                  <Image
                    src={previews[index]!}
                    alt={`preview-${index}`}
                    className="object-contain h-64"
                    width={256}
                    height={256}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm bg-foreground/10 rounded-lg p-2">
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    variant="tint"
                    size="icon"
                    className="cursor-pointer text-red-500 rounded-full"
                  >
                    <X size={14} />
                  </Button>
                  <div className="flex flex-col text-xxs justify-start gap-0.5">
                    <span className="text-start">{file.name}</span>
                    <span className="text-start">
                      {file.size >= 1024 * 1024
                        ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                        : `${Math.ceil(file.size / 1024)} KB`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
