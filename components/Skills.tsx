"use client";

import { ISkills } from "@types";
import { Container, Reveal } from "./Section";

export const Skills = ({
  data,
}: {
  data: {
    skills: Array<ISkills>;
    additional: Array<{
      id: string; // UUID
      skills: Array<string>; // Array of text
    }>;
  };
}) => {
  const columns = [
    ...data.skills.map((c) => ({
      title: c.category ?? "",
      items: c.skills?.map((s) => s.name ?? "").filter(Boolean) ?? [],
    })),
    ...(data.additional?.[0]?.skills?.length
      ? [{ title: "Practices & Tooling", items: data.additional[0].skills }]
      : []),
  ];

  return (
    <Container>
      <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
        <Reveal className="col-span-12 lg:col-span-4">
          <p className="eyebrow mb-5">Technical Expertise</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
            The tools behind the work.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            My technical expertise spans modern front-end technologies, from
            component architecture to state and data.
          </p>
        </Reveal>

        <div className="col-span-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">
          {columns.map((column, index) => (
            <Reveal key={column.title} delay={index * 0.06}>
              <h3 className="mb-5 border-b border-border pb-3 font-mono text-[11px] uppercase leading-4 tracking-[0.14em] text-subtle-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-snug text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
};
