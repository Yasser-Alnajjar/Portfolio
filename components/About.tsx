"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const ICONS: Record<string, JSX.Element> = {
  Code: <Code size={24} />,
  Palette: <Palette size={24} />,
  Zap: <Zap size={24} />,
  Users: <Users size={24} />,
};

export interface IAboutMe {
  id: number;
  type: "header" | "bio" | "strength" | "education";
  section?: string | null;
  order_index?: number | null;
  icon?: string | null;
  title?: string | null;
  content?: string | null;
}

export const About = ({ data }: { data: Array<IAboutMe> }) => {
  const header = Object.fromEntries(
    data.filter((d) => d.type === "header").map((d) => [d.section, d.content])
  );
  const whoIAm = data
    .filter((d) => d.type === "bio" && d.section === "whoIAm")
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));
  const whatIDo = data
    .filter((d) => d.type === "bio" && d.section === "whatIDo")
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));
  const strengths = data
    .filter((d) => d.type === "strength")
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));
  const education = data
    .filter((d) => d.type === "education")
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Header */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {header.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            {header.subtitle}
          </p>
        </motion.div>

        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Bio */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Who I Am */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {whoIAm.map((item, index) => (
                  <p key={index}>{item.content}</p>
                ))}
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                What I Do
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {whatIDo.map((item, index) => (
                  <p key={index}>{item.content}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strengths & Education */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Strengths */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                My Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((s, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="text-primary">
                      {s.icon && ICONS[s.icon]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{s.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {s.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Education & Background
              </h3>
              <div className="space-y-4">
                {education.map((e, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">{e.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {e.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
