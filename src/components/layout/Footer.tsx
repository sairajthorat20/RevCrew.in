import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-border bg-bg-primary py-10 text-text-secondary">
      <Container size="default">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:text-left md:flex-row">
          <div className="border-l-0 sm:border-l-2 sm:border-accent-red sm:pl-3">
            <p className="text-sm font-bold uppercase tracking-tight text-text-primary">
              {siteConfig.name}
            </p>
            <p className="mt-0.5 text-xs text-steel font-mono">
              {siteConfig.tagline} • {siteConfig.institution}
            </p>
          </div>

          <div className="text-xs text-steel font-mono text-center md:text-right">
            <p>© {currentYear} {siteConfig.shortName}. Production Engineering Platform.</p>
            <p className="mt-0.5 text-[11px] text-steel/80">Automotive & Motorcycle Innovation Club • VIT Pune</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
