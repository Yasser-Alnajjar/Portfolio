"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { IProject } from "@types";
import { scrollToSection } from "@lib/utils";
import { Container } from "./Section";

export interface IHero {
  id: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  cv_url: string;
  image_url: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = ({
  data,
  showcase = [],
  location,
}: {
  data: IHero;
  showcase?: Array<IProject>;
  location?: string;
}) => {
  const [front, back] = showcase.filter((p) => p.image);

  return (
    <Container>
      <div className="grid min-h-[calc(100svh-4rem)] grid-cols-12 items-center gap-y-16 py-16 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-6">
          <motion.div className="mb-7 flex items-center gap-3" {...fadeUp(0)}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            <p className="eyebrow">{data.title}</p>
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
            {...fadeUp(0.08)}
          >
            <span className="block text-muted-foreground">{data.greeting}</span>
            {data.name}.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            {...fadeUp(0.16)}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            {...fadeUp(0.24)}
          >
            <button
              onClick={() => scrollToSection("#work")}
              className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-[filter] hover:brightness-95"
            >
              Explore My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <a
              href={data.cv_url}
              target="_blank"
              download
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-input px-6 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-secondary"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            {...fadeUp(0.32)}
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="group inline-flex cursor-pointer items-center gap-1.5 border-b border-foreground/30 pb-0.5 text-sm transition-colors hover:border-highlight"
            >
              Let&apos;s Connect
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
            {location && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle-foreground">
                <MapPin size={12} />
                Based in {location}
              </span>
            )}
          </motion.div>
        </div>

        {/* Stacked product screenshots */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-5/4 w-full max-w-xl">
            {back && (
              <ScreenshotCard
                project={back}
                className="left-0 top-[6%] w-[78%] opacity-70"
              />
            )}
            {front && (
              <ScreenshotCard
                project={front}
                className="bottom-[10%] right-0 w-[82%] shadow-2xl"
                priority
              />
            )}
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-subtle-foreground">
              {[front, back].filter(Boolean).map((p) => (
                <span key={p.title}>
                  <span className="text-muted-foreground">{p.title}</span> —
                  featured
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

const ScreenshotCard = ({
  project,
  className,
  priority,
}: {
  project: IProject;
  className: string;
  priority?: boolean;
}) => (
  <div
    className={`absolute overflow-hidden rounded-xl border border-border bg-card p-1.5 ${className}`}
  >
    <div className="mb-1.5 flex items-center gap-1.5 px-1.5 pt-0.5">
      <span className="size-2 rounded-full bg-foreground/15" />
      <span className="size-2 rounded-full bg-foreground/15" />
      <span className="size-2 rounded-full bg-foreground/15" />
    </div>
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-secondary">
      <Image
        src={project.image}
        alt={project.title || "Project screenshot"}
        fill
        sizes="(min-width: 1024px) 480px, 90vw"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  </div>
);
