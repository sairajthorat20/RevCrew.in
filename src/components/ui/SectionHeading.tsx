import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = "h2",
  className = "",
}: SectionHeadingProps) {
  const HeadingTag = level;

  const headingSizes: Record<NonNullable<SectionHeadingProps["level"]>, string> = {
    h1: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight",
    h2: "text-2xl sm:text-3xl font-bold tracking-tight",
    h3: "text-xl sm:text-2xl font-bold tracking-tight",
  };

  const isCenter = align === "center";

  return (
    <div
      className={`space-y-2 ${isCenter ? "text-center" : "text-left"} ${className}`.trim()}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-1 w-2 bg-accent-red" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-steel font-medium">
            {eyebrow}
          </span>
        </div>
      )}

      <HeadingTag
        className={`${headingSizes[level]} text-text-primary uppercase leading-tight`}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={`text-sm sm:text-base text-text-secondary leading-relaxed ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
