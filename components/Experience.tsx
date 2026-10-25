"use client";

import { IExperience } from "@types";
import { cn } from "@lib/utils";
import { Container, Reveal, SectionHeader } from "./Section";

// "Falcon Focus (Remotely)" -> { name: "Falcon Focus", mode: "Remote" }
const parseCompany = (company?: string | null) => {
  const match = company?.match(/^(.*?)\s*\((.*)\)\s*$/);
  const mode = match?.[2].replace(/ly$/i, "");
  return { name: match?.[1] ?? company ?? "", mode };
};

export const Experience = ({ data }: { data: Array<IExperience> }) => {
  return (
    <Container>
      <SectionHeader
        eyebrow="Experience"
        title="Professional experience."
        description="Roles across SaaS, cybersecurity, e-commerce, and agency work — from React development to senior frontend ownership."
      />

      <div className="mt-16 border-b border-border lg:mt-20">
        {data.map((experience, index) => {
          const { name, mode } = parseCompany(experience.company);
          const current = /present/i.test(experience.period ?? "");
          return (
            <Reveal key={index}>
              <article className="grid grid-cols-12 gap-y-6 border-t border-border py-10 lg:gap-x-10 lg:py-14">
                <div className="col-span-12 font-mono text-xs lg:col-span-3">
                  <p className="flex items-center gap-2 text-foreground">
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        current ? "bg-highlight" : "bg-subtle-foreground/50",
                      )}
                    />
                    {experience.period?.replace(/\s*-\s*/, " — ")}
                  </p>
                  <p className="mt-2 pl-3.5 text-subtle-foreground">
                    {[mode, experience.location].filter(Boolean).join(" · ")}
                  </p>
                </div>

                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    {name}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {experience.title}
                  </p>
                  {experience.tech?.length ? (
                    <p className="mt-5 font-mono text-[11px] leading-5 text-subtle-foreground">
                      {experience.tech.join(" · ")}
                    </p>
                  ) : null}
                </div>

                <ul className="col-span-12 space-y-3 lg:col-span-5">
                  {experience.description?.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.8em] h-px w-3 shrink-0 bg-subtle-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
};
