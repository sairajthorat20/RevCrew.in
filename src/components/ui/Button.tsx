import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-red text-text-primary border border-accent-red hover:bg-accent-red-hover hover:border-accent-red-hover active:bg-accent-red-active active:border-accent-red-active",
  secondary:
    "bg-surface-secondary text-text-primary border border-border hover:bg-surface-elevated hover:border-steel active:border-text-secondary",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-accent-red hover:text-accent-red active:border-accent-red-active",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary active:bg-surface-elevated",
  link:
    "bg-transparent text-accent-red underline-offset-4 hover:underline hover:text-accent-red-hover p-0 h-auto font-medium",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs tracking-wider uppercase font-mono",
  md: "h-10 px-4 text-sm font-medium",
  lg: "h-12 px-6 text-base font-semibold",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
  },
  ref
) {
  const isLink = "href" in props && typeof props.href === "string";
  const sizeStyles = variant === "link" ? "" : sizeClasses[size];

  const baseClasses =
    "inline-flex items-center justify-center gap-2 select-none rounded-[2px] transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer disabled:cursor-not-allowed";

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeStyles} ${className}`.trim();

  if (isLink) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      className={combinedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
