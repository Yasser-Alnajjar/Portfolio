"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Falcon Focus Dashboard",
      description:
        "A modern, scalable admin dashboard built from the ground up with modular component architecture, role-based access control, and full internationalization support including RTL layouts.",
      image: "/api/placeholder/400/250",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui",
        "NextAuth.js",
        "next-intl",
      ],
      featured: true,
    },
    {
      title: "Alkhbaz v2 (E-Commerce)",
      description:
        "A comprehensive e-commerce platform with pre-order cart features, multi-fulfillment center system, and responsive design optimized for both mobile and desktop experiences.",
      image: "/api/placeholder/400/250",
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Payment APIs",
      ],
      liveUrl: "https://alkhbaz.com/ar",
      featured: true,
    },
    {
      title: "G-Mobile (E-Commerce)",
      description:
        "A mobile-first e-commerce platform with dynamic product catalog, promotional features, secure checkout process, and optimized performance for low-bandwidth users.",
      image: "/api/placeholder/400/250",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Payment Integration",
        "Performance Optimization",
      ],
      featured: false,
      liveUrl: "https://gmob.totplatform.net/ar",
    },
    {
      title: "Easy CLI Package",
      description:
        "An optimized NPM package for React and Vue component creation, automating development workflows and improving productivity with clear documentation.",
      image: "/api/placeholder/400/250",
      tech: ["Node.js", "NPM", "CLI Tools", "Documentation", "Automation"],
      featured: true,
    },
    {
      title: "TUBEX Corporate Website",
      description:
        "A comprehensive corporate website showcasing company achievements, products, and services with SMTP-based contact forms and file download capabilities.",
      image: "/api/placeholder/400/250",
      tech: ["React.js", "Next.js", "Tailwind CSS", "SMTP Integration", "SEO"],
      liveUrl: "https://tubex.sa",
      featured: false,
    },
    {
      title: "Storybook Component Library",
      description:
        "MDX-based documentation system with real-time component previews, usage guidelines, and consistent design system integration for reusability across projects.",
      image: "/api/placeholder/400/250",
      tech: ["Storybook", "MDX", "React.js", "Documentation", "Design System"],
      featured: false,
    },
    {
      title: "Trampoline Marketing Agency",
      description:
        "A modern, informative website for a marketing agency showcasing services, portfolio, and brand identity with SEO-friendly architecture and fast-loading pages.",
      image: "/api/placeholder/400/250",
      tech: ["React.js", "Next.js", "Tailwind CSS", "SEO", "Performance"],
      liveUrl: "https://trampoline.totplatform.net",
      featured: false,
    },
    {
      title: "Himash Furniture Platform",
      description:
        "A modern platform for furniture retail featuring intuitive UI/UX with masonry layout-based product listings for smooth user experience.",
      image: "/api/placeholder/400/250",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Masonry Layout", "UI/UX"],
      liveUrl: "https://himash.totplatform.net",
      featured: false,
    },
    {
      title: "Alshafak Website",
      description:
        "An informative website providing well-structured, user-friendly interface to showcase brand services and offerings with responsive design and fast loading.",
      image: "/api/placeholder/400/250",
      tech: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Performance",
      ],
      liveUrl: "https://alshafk.totplatform.net",
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        {/* Section Header */}
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
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
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
                      {project.tech.map((tech) => (
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
                  {project.liveUrl && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
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
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Project Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-yellow-200/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm text-muted-foreground">Thumbnail</p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  {project.liveUrl && (
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-primary text-primary-foreground text-center text-sm py-2 rounded-lg hover:bg-primary/90 transition-all duration-300"
                      >
                        Demo
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          className="col-span-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight size={20} />
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};
