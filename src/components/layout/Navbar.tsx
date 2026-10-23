import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 font-black text-white tracking-wider text-base shadow-sm group-hover:bg-red-500 transition-colors">
            RC
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-lg leading-tight">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 leading-none">
              VIT Pune
            </span>
          </div>
        </Link>

        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Phase 1 Active
          </span>
        </div>
      </div>
    </header>
  );
}
