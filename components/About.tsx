"use client";

import { Container, Reveal } from "./Section";

export interface IAboutMe {
  id: number;
  type: "header" | "bio" | "strength" | "education";
  section?: string | null;
  order_index?: number | null;
  icon?: string | null;
  title?: string | null;
  content?: string | null;
}

const byOrder = (a: IAboutMe, b: IAboutMe) =>
  (a.order_index ?? 0) - (b.order_index ?? 0);

export const About = ({ data }: { data: Array<IAboutMe> }) => {
  const header = Object.fromEntries(
    data.filter((d) => d.type === "header").map((d) => [d.section, d.content]),
  );
  const bio = [
    ...data
      .filter((d) => d.type === "bio" && d.section === "whoIAm")
      .sort(byOrder),
    ...data
      .filter((d) => d.type === "bio" && d.section === "whatIDo")
      .sort(byOrder),
  ];
  const strengths = data.filter((d) => d.type === "strength").sort(byOrder);
  const education = data.filter((d) => d.type === "education").sort(byOrder);

  return (
    <Container>
      <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
        <Reveal className="col-span-12 lg:col-span-5">
          <p className="eyebrow mb-5">{header.title ?? "About"}</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-balance sm:text-[2.75rem] lg:sticky lg:top-28">
            {header.subtitle}
          </h2>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7" delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {bio.map((item, index) => (
              <p key={item.id} className={index === 0 ? "text-foreground" : ""}>
                {item.content}
              </p>
            ))}
          </div>

          {education.length > 0 && (
            <dl className="mt-10 space-y-3 border-t border-border pt-6 font-mono text-xs">
              {education.map((e) => (
                <div
                  key={e.id}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                >
                  <dt className="shrink-0 text-subtle-foreground sm:w-44">
                    {e.title}
                  </dt>
                  <dd className="text-muted-foreground">{e.content}</dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </div>

      {strengths.length > 0 && (
        <div className="mt-20 grid grid-cols-1 gap-x-8 border-t border-border sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-x-0">
          {strengths.map((s, idx) => (
            <Reveal
              key={s.id}
              delay={idx * 0.06}
              className="border-b border-border py-8 lg:border-b-0 lg:border-l lg:px-6 lg:py-10 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-mono text-xs text-highlight">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.content}
              </p>
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
};
