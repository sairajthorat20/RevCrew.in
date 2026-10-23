import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/95 backdrop-blur-sm">
      <Container size="default">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary rounded-[2px]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-accent-red font-black text-text-primary tracking-wider text-sm shadow-sm group-hover:bg-accent-red-hover transition-colors motion-reduce:transition-none">
              RC
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-text-primary text-base uppercase leading-none">
                {siteConfig.shortName}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-steel font-mono leading-tight mt-0.5">
                VIT Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary rounded-[2px] py-1 px-1.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* System Spec Badge & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-[2px] border border-border bg-surface-secondary px-2.5 py-1 text-xs font-mono text-steel">
              <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
              <span>SPEC 02 // DESIGN</span>
            </div>

            {/* Accessible Native Mobile Menu */}
            <details className="relative md:hidden group">
              <summary
                aria-label="Toggle navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-border bg-surface-secondary text-text-secondary hover:text-text-primary hover:border-steel cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </summary>
              <nav
                aria-label="Mobile Navigation"
                className="absolute right-0 top-full mt-2 w-48 rounded-[2px] border border-border bg-surface-secondary p-2 shadow-xl z-50 flex flex-col gap-1"
              >
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[2px] px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-elevated hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
