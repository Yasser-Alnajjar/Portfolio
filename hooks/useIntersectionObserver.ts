"use client";
import { useState, useEffect, RefObject } from "react";

export const useIntersectionObserver = (
  ref: RefObject<Element | null>,
  className: string,
  threshold?: number
) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (className) entry.target.classList.add(className);
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );
    if (ref.current) observer.observe(ref.current);
  }, [ref, className, threshold]);
  return { inView };
};
