"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IProject } from "@types";
import { Button } from "./atoms";
import Image from "next/image";

export const Projects = ({ projects }: { projects: Array<IProject> }) => {
  console.log(projects);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in frontend
            development and problem-solving
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="col-span-12 space-y-12">
          {projects &&
            projects.length &&
            projects
              ?.filter((p) => p.featured)
              ?.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`grid grid-cols-12 items-center gap-4 lg:gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Project Image */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="relative group">
                      {project.image ? (
                        <Image
                          src={project.image}
                          width={400}
                          height={250}
                          alt={project.title || "Project"}
                          className="aspect-video w-full rounded-lg mb-4"
                        />
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-yellow-200/20 rounded-xl border border-border overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-6xl mb-4">🖼️</div>
                              <p className="text-muted-foreground">
                                Project Screenshot
                              </p>
                              <p className="text-sm text-muted-foreground">
                                400x250px
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="col-span-12 lg:col-span-6 space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project?.tech?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Project Links */}
                    {project.liveurl && (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild>
                          <a href={project.liveurl} target="_blank">
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          className="col-span-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-primary text-center mb-8">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects &&
              projects.length &&
              projects
                ?.filter((p) => !p.featured)
                ?.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Project Thumbnail */}
                    {project.image ? (
                      <Image
                        src={project.image}
                        width={300}
                        height={300}
                        alt={project.title || "Project"}
                        className="aspect-video w-full rounded-lg mb-4"
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-yellow-200/10 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📱</div>
                          <p className="text-sm text-muted-foreground">
                            Thumbnail
                          </p>
                        </div>
                      </div>
                    )}
                    {/* Project Info */}
                    <h4 className="font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project?.tech?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project?.tech && project?.tech?.length > 3 && (
                        <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                          +{project?.tech?.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    {project.liveurl && (
                      <div className="flex gap-2">
                        <Button asChild className="flex-1" size="md">
                          <a href={project.liveurl} target="_blank">
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
