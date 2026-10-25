"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
    {children}
  </div>
);

export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) => (
  <Reveal className="grid grid-cols-12 items-end gap-6 lg:gap-8">
    <div className="col-span-12 lg:col-span-7">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
        {title}
      </h2>
    </div>
    {description && (
      <p className="col-span-12 max-w-md text-base leading-relaxed text-muted-foreground lg:col-span-5 lg:justify-self-end">
        {description}
      </p>
    )}
  </Reveal>
);

export const TechList = ({
  items,
  className,
}: {
  items?: Array<string> | null;
  className?: string;
}) =>
  items?.length ? (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] leading-4 text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : null;

export const hostname = (url?: string | null) => {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
