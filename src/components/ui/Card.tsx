import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  variant?: "default" | "elevated" | "interactive";
  accentTick?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-surface-secondary border-border",
  elevated: "bg-surface-elevated border-border",
  interactive:
    "bg-surface-secondary border-border hover:border-steel focus-within:border-accent-red transition-colors duration-200 motion-reduce:transition-none",
};

export function Card({
  as: Component = "div",
  variant = "default",
  accentTick = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={`relative rounded-[2px] border p-5 sm:p-6 flex flex-col ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {accentTick && (
        <span
          className="absolute top-0 left-0 h-[2px] w-8 bg-accent-red"
          aria-hidden="true"
        />
      )}
      {children}
    </Component>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-1 pb-3 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  as: Component = "h3",
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: React.ElementType }) {
  return (
    <Component
      className={`text-base sm:text-lg font-bold uppercase tracking-tight text-text-primary ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-xs sm:text-sm text-text-secondary leading-relaxed ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`py-1 text-sm text-text-secondary ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-steel font-mono ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
