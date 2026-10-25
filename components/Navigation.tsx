"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { ToggleTheme } from "./atoms/toggle-theme";
import { Container } from "./Section";
import { cn, scrollToSection } from "@lib/utils";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = ({ cv_url }: { cv_url?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 },
    );

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || isOpen
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => go("#home")}
            className="cursor-pointer font-mono text-xs font-medium uppercase tracking-[0.24em] text-foreground"
          >
            Yasser Alnajjar
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => go(item.href)}
                  className={cn(
                    "relative cursor-pointer py-1 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 mx-auto h-px bg-highlight transition-all duration-300",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ToggleTheme className="size-9 rounded-full bg-transparent" />
            {cv_url && (
              <a
                href={cv_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-9 items-center gap-2 rounded-full border border-input px-4 text-sm text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary sm:inline-flex"
                download
              >
                <Download size={14} />
                Download CV
              </a>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex size-9 items-center justify-center rounded-full border border-input text-foreground md:hidden"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col border-t border-border py-3 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => go(item.href)}
                className={cn(
                  "flex items-center justify-between py-3 text-left text-base",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="size-1.5 rounded-full bg-highlight" />
                )}
              </button>
            ))}
            {cv_url && (
              <a
                href={cv_url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-input text-sm"
              >
                <Download size={14} />
                Download CV
              </a>
            )}
          </div>
        )}
      </Container>
    </nav>
  );
};
