"use client";

import { ArrowUpRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IProject } from "@types";
import { cn } from "@lib/utils";
import {
  Container,
  Reveal,
  SectionHeader,
  TechList,
  hostname,
} from "./Section";

const ProjectImage = ({
  project,
  className,
  sizes,
}: {
  project: IProject;
  className?: string;
  sizes: string;
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      {project.image && !failed ? (
        <Image
          src={project.image}
          alt={project.title || "Project"}
          fill
          sizes={sizes}
          onError={() => setFailed(true)}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="hatch flex size-full flex-col items-center justify-center gap-2 p-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
          <ImageIcon size={14} />
          <span className="line-clamp-2">{project.title}</span>
        </div>
      )}
    </div>
  );
};

const ProjectLink = ({ url, label }: { url?: string | null; label: string }) =>
  url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 text-sm text-foreground"
    >
      <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover/link:border-highlight">
        {label}
      </span>
      <span className="font-mono text-[11px] text-subtle-foreground">
        {hostname(url)}
      </span>
      <ArrowUpRight
        size={14}
        className="text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </a>
  ) : null;

const paragraphs = (text?: string) =>
  (text ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

export const Projects = ({ projects }: { projects: Array<IProject> }) => {
  const featured = (projects ?? []).filter((p) => p.featured);
  const [spotlight, secondary] = [featured.slice(0, 2), featured.slice(2)];
  const others = (projects ?? []).filter((p) => !p.featured);

  return (
    <Container>
      <SectionHeader
        eyebrow="Selected Work"
        title="Products I've helped build."
        description="A selection of production applications, independent products, and frontend engineering work."
      />

      {/* Spotlight projects — alternating image / copy rows */}
      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
        {spotlight.map((project, index) => {
          const [lead, ...rest] = paragraphs(project.description);
          return (
            <Reveal
              key={project.title}
              className="group grid grid-cols-12 items-center gap-y-8 lg:gap-x-14"
            >
              <ProjectImage
                project={project}
                sizes="(min-width: 1024px) 680px, 100vw"
                className={cn(
                  "col-span-12 aspect-16/10 lg:col-span-7",
                  index % 2 === 1 && "lg:order-last",
                )}
              />
              <div className="col-span-12 lg:col-span-5">
                <p className="eyebrow mb-4">
                  {String(index + 1).padStart(2, "0")} / Featured project
                </p>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {lead}
                </p>
                {rest.map((p) => (
                  <p
                    key={p}
                    className={cn(
                      "mt-4 leading-relaxed",
                      p.length < 60
                        ? "font-medium text-highlight"
                        : "text-muted-foreground",
                    )}
                  >
                    {p}
                  </p>
                ))}
                <TechList items={project.tech} className="mt-7" />
                <div className="mt-7">
                  <ProjectLink url={project.liveurl} label="Visit project" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Remaining featured projects */}
      {secondary.length > 0 && (
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 border-t border-border pt-16 md:grid-cols-2 lg:mt-28">
          {secondary.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="group">
              <ProjectImage
                project={project}
                sizes="(min-width: 768px) 560px, 100vw"
                className="mb-7 aspect-video"
              />
              <p className="eyebrow mb-3">
                {String(spotlight.length + index + 1).padStart(2, "0")} /
                Featured project
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <TechList items={project.tech} className="mt-5" />
              <div className="mt-6">
                <ProjectLink url={project.liveurl} label="View project" />
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* Additional client & team work */}
      {others.length > 0 && (
        <div className="mt-24 lg:mt-32">
          <Reveal className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <p className="eyebrow mb-3">Additional projects</p>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                Client and team work
              </h3>
            </div>
            <span className="font-mono text-xs text-subtle-foreground">
              {String(others.length).padStart(2, "0")} projects
            </span>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {others.map((project, index) => {
              const Wrapper = project.liveurl ? "a" : "div";
              return (
                <Reveal key={project.title} delay={(index % 2) * 0.06}>
                  <Wrapper
                    {...(project.liveurl && {
                      href: project.liveurl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group flex flex-col sm:flex-row  gap-5 border-b border-border py-7"
                  >
                    <ProjectImage
                      project={project}
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="aspect-video sm:aspect-4/3 w-full sm:w-28 shrink-0 self-start"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-lg font-semibold leading-snug tracking-[-0.01em]">
                          {project.title}
                        </h4>
                        {project.liveurl && (
                          <ArrowUpRight
                            size={16}
                            className="mt-1 shrink-0 text-subtle-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight"
                          />
                        )}
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <TechList
                        items={project.tech?.slice(0, 3)}
                        className="mt-4"
                      />
                    </div>
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};
