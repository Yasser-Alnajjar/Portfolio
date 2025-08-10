"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";
import { Badge, Button } from "./atoms";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Front End Developer",
      company: "Falcon Focus (Remotely)",
      location: "Saudi Arabia",
      period: "June 2025 - Present",
      description: [
        "Architected and implemented a modern, scalable admin dashboard from the ground up",
        "Built using fully modular component architecture with reusable data tables and dynamic forms",
        "Integrated robust authentication and session handling via NextAuth.js with role-based access control",
        "Implemented full internationalization (i18n) with next-intl including RTL layout support",
        "Designed with Tailwind CSS and Shadcn/ui for consistency and accessibility",
        "Leveraged Next.js App Router and server components for optimal performance",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui",
        "NextAuth.js",
        "next-intl",
      ],
    },
    {
      title: "Senior Front End Developer",
      company: "Tot Platform (On-Site)",
      location: "Egypt",
      period: "October 2023 - June 2025",
      description: [
        "Led development of Alkhbaz v2 e-commerce platform with pre-order cart features",
        "Mentored team of four developers and created responsive website for mobile/desktop",
        "Implemented user-agent based routing and multi-fulfillment center system",
        "Developed G-Mobile e-commerce with dynamic product catalog and secure checkout",
        "Built TUBEX corporate website with SMTP integration and file download capabilities",
        "Created Storybook component library with MDX documentation and real-time previews",
      ],
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Payment APIs",
        "Storybook",
      ],
    },
    {
      title: "React Developer",
      company: "Active 4 Web (On-Site)",
      location: "Egypt",
      period: "January 2022 - October 2023",
      description: [
        "Enhanced user experience by implementing responsive web designs",
        "Developed reusable components to facilitate faster development timelines",
        "Increased website traffic with SEO-friendly coding practices",
        "Updated old code bases to modern development standards",
        "Developed Easy CLI package for React and Vue component creation",
        "Published and maintained NPM package with clear documentation",
      ],
      tech: [
        "React.js",
        "JavaScript",
        "SEO",
        "NPM Package",
        "CLI Tools",
        "Component Development",
      ],
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
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
            My journey in Front-End Development, from React development to
            senior roles
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="col-span-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-10 sm:space-y-14">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[14px] sm:left-[15px] md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 mt-6" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:order-first"
                    }`}
                  >
                    <motion.div
                      className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Header */}
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                          {experience.title}
                        </h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base flex-wrap">
                          <div className="flex items-center space-x-2 text-primary">
                            <Building size={16} className="sm:w-5 sm:h-5" />
                            <span className="font-medium">
                              {experience.company}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin size={16} className="sm:w-5 sm:h-5" />
                            <span>{experience.location}</span>
                          </div>

                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar size={16} className="sm:w-5 sm:h-5" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {experience.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-muted-foreground text-xs sm:text-sm leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.tech.map((tech, i) => (
                            <Badge key={i} className="text-xs sm:text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Section */}
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-6 lg:p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Want to know more?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Download my complete CV to see detailed information about my
              experience, education, and achievements in front-end development.
            </p>
            <Button className="mx-auto">Download Full CV</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
