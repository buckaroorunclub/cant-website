"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

type RevealTag = "div" | "section" | "h2" | "h3" | "p" | "span";

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
  className?: string;
  delay?: number;
  variant?: "up" | "scale";
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Element = Tag as "div";
  const baseClass = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <Element
      ref={ref as RefObject<HTMLDivElement | null>}
      className={`${baseClass} ${visible ? "is-visible" : ""} ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Element>
  );
}
