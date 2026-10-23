import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950 py-8 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <p className="text-sm font-medium text-neutral-300">
            {siteConfig.name}
          </p>
          <p className="text-xs text-neutral-500">
            {siteConfig.tagline} • {siteConfig.institution}
          </p>
        </div>
        <p className="text-xs text-neutral-500">
          © {currentYear} {siteConfig.shortName}. All rights reserved. Built for production on Vercel.
        </p>
      </div>
    </footer>
  );
}
