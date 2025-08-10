"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

export const About = () => {
  const strengths = [
    {
      icon: <Code size={24} />,
      title: "Problem Solving",
      description:
        "Strong analytical skills and efficient problem-solving abilities",
    },
    {
      icon: <Palette size={24} />,
      title: "Component Architecture",
      description: "Expert in creating reusable and maintainable components",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description:
        "Skilled in optimizing applications for better user experience",
    },
    {
      icon: <Users size={24} />,
      title: "Team Leadership",
      description: "Experience leading and mentoring development teams",
    },
  ];

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
            About Me
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            Get to know me better and understand what drives my passion for
            Front-End Development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:gap-8">
          {/* Left Column - Bio */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                Who I Am
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a passionate Front-End Developer with over 3 years of
                  experience in creating modern web applications. My journey in
                  web development started with a passion for building
                  user-friendly interfaces and has evolved into a professional
                  career delivering high-quality, scalable applications.
                </p>
                <p>
                  I specialize in React.js, Next.js, TypeScript, and modern
                  front-end technologies. I excel in creating reusable
                  components, implementing SEO strategies, and optimizing
                  application performance to ensure the best user experience
                  possible.
                </p>
                <p>
                  My strong problem-solving skills and adaptability ensure
                  efficient project delivery and high-quality code standards.
                  I'm constantly learning and adapting to new technologies to
                  deliver the best possible solutions for my clients and
                  employers.
                </p>
              </div>
            </div>

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                What I Do
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I build modern, responsive web applications that provide
                  exceptional user experiences. My approach combines technical
                  expertise with strategic thinking to deliver solutions that
                  exceed expectations.
                </p>
                <p>
                  From concept development to final deployment, I ensure every
                  component serves a purpose and contributes to the overall
                  functionality. I work closely with clients to understand their
                  vision and translate it into robust, scalable applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                My Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary flex-shrink-0 mt-1">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                        {strength.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                Education & Background
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Al-Azhar University
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Faculty of Sharia and Law - Cairo, Egypt
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Continuous Learning
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Regularly updating skills through modern web technologies
                      and industry trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
