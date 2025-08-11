"use client";

import { ISkills } from "@types";
import { motion } from "framer-motion";

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
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Section Header */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            My technical expertise spans across modern Front-End Development
            technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="col-span-12 space-y-8 sm:space-y-12">
          {data.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary text-center">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {category?.skills?.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon with glow + float */}
                    <motion.div
                      className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-primary"
                      animate={{
                        y: [0, -5, 0], // floating effect
                        textShadow: [
                          "0 0 0px #d6c0a3",
                          "0 0 8px #d6c0a3",
                          "0 0 0px #d6c0a3",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {skill.icon}
                    </motion.div>

                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="col-span-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
              Additional Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {data.additional[0].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center space-x-2 text-muted-foreground text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="truncate">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
