import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: string;
  fullWidth?: boolean;
  size?: string;
  align?: string;
  rounded?: boolean;
  className?: string;
}
export default function Button({
  children,
  variant = "primary",
  fullWidth,
  size,
  align = "center",
  rounded = true,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    variant && `btn-${variant}`,
    size && `text-${size}`,
    align && `text-${align}`,
    rounded &&
      (typeof rounded === "boolean" ? "rounded" : `rounded-${rounded}`),
    fullWidth && "w-full",
    className,
  ].filter(Boolean);

  return (
    <button className={twMerge(classes.join(" "))} {...rest}>
      {children}
    </button>
  );
}
