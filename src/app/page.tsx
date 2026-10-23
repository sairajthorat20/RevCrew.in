import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";

export default function Home() {
  const colorTokens = [
    {
      name: "Primary Background",
      token: "--color-bg-primary",
      hex: "#111214",
      bgClass: "bg-[#111214]",
      borderClass: "border-border",
      role: "Root page canvas & global backdrop",
    },
    {
      name: "Secondary Surface",
      token: "--color-surface-secondary",
      hex: "#191A1D",
      bgClass: "bg-[#191A1D]",
      borderClass: "border-border",
      role: "Cards, panels, navigation, dropdowns",
    },
    {
      name: "Primary Text",
      token: "--color-text-primary",
      hex: "#F4F4F2",
      bgClass: "bg-[#F4F4F2]",
      borderClass: "border-transparent",
      textPreview: true,
      role: "Headings, primary labels, active icons",
    },
    {
      name: "Secondary Text",
      token: "--color-text-secondary",
      hex: "#A4A5A7",
      bgClass: "bg-[#A4A5A7]",
      borderClass: "border-transparent",
      textPreview: true,
      role: "Body descriptions, nav links, captions",
    },
    {
      name: "Accent Red",
      token: "--color-accent-red",
      hex: "#E04444",
      bgClass: "bg-[#E04444]",
      borderClass: "border-transparent",
      role: "Selective focus, primary CTA, active telemetry",
    },
    {
      name: "Steel Grey",
      token: "--color-steel",
      hex: "#777B80",
      bgClass: "bg-[#777B80]",
      borderClass: "border-transparent",
      role: "Eyebrows, metadata, technical codes",
    },
    {
      name: "Border",
      token: "--color-border",
      hex: "#34363A",
      bgClass: "bg-[#34363A]",
      borderClass: "border-border",
      role: "Structural dividers, input outlines, grids",
    },
  ];

  const engineeringPillars = [
    {
      eyebrow: "PILLAR // 01",
      title: "Motorcycle Engineering",
      description:
        "Powertrain diagnostics, suspension geometry analysis, electrical wiring harnesses, and dynamometer calibration.",
      metric: "ENG-PROTO // V1",
    },
    {
      eyebrow: "PILLAR // 02",
      title: "Custom Bike Building",
      description:
        "TIG and MIG chassis welding, bespoke subframe construction, tank forming, and precision component machining.",
      metric: "FAB-CHASSIS // SPEC",
    },
    {
      eyebrow: "PILLAR // 03",
      title: "Technical Competitions",
      description:
        "Intercollegiate design reviews, rulebook compliance, finite element analysis (FEA), and technical presentations.",
      metric: "RULE-COMP // 2026",
    },
  ];

  return (
    <div className="flex-1 py-12 md:py-20">
      <Container size="default" className="space-y-20 md:space-y-28">
        {/* Brand Introduction */}
        <section aria-labelledby="brand-intro" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-surface-secondary px-3 py-1 font-mono text-xs text-steel">
              <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
              <span>REVCREW // SPEC-02 DESIGN SYSTEM</span>
            </div>
            <span className="font-mono text-xs text-steel">
              INSTITUTION: {siteConfig.institution}
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1
              id="brand-intro"
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-text-primary leading-none"
            >
              Motorcycle Technology & Innovation
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Official design system and component architecture for RevCrew VIT Pune.
              Engineered with a cinematic, technical, and minimal motorsport identity
              focused on engineering prototypes, fabrication, and vehicle technology.
            </p>
          </div>
        </section>

        {/* Section 1: Color Tokens */}
        <section aria-labelledby="tokens-heading" className="space-y-8">
          <SectionHeading
            eyebrow="// PALETTE ARCHITECTURE"
            title="Design Tokens"
            description="High-contrast motorsport engineering palette configured with CSS custom properties and Tailwind CSS v4."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colorTokens.map((c) => (
              <div
                key={c.name}
                className="rounded-[2px] border border-border bg-surface-secondary p-4 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-14 w-full rounded-[2px] border ${c.borderClass} ${c.bgClass} flex items-center justify-center`}
                  >
                    {c.textPreview && (
                      <span className="text-xs font-mono font-bold text-bg-primary">
                        SAMPLE
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-sm font-bold uppercase tracking-tight text-text-primary">
                    {c.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">{c.role}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-steel">
                  <span>{c.hex}</span>
                  <span className="text-steel/70">{c.token}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Typography Scale */}
        <section aria-labelledby="typography-heading" className="space-y-8">
          <SectionHeading
            eyebrow="// SCALE & WEIGHTS"
            title="Typography Hierarchy"
            description="Crisp letter-spacing, uppercase display scales, and monospace metadata built for technical legibility."
          />

          <div className="space-y-6 rounded-[2px] border border-border bg-surface-secondary p-6 md:p-8">
            <div className="pb-6 border-b border-border space-y-1">
              <span className="font-mono text-xs text-steel uppercase">
                Display // 48px - 60px Black
              </span>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-text-primary">
                Precision Engineering
              </p>
            </div>

            <div className="pb-6 border-b border-border space-y-1">
              <span className="font-mono text-xs text-steel uppercase">
                Heading 2 // 24px - 30px Bold
              </span>
              <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-text-primary">
                Chassis Geometry & Kinematics
              </p>
            </div>

            <div className="pb-6 border-b border-border space-y-1">
              <span className="font-mono text-xs text-steel uppercase">
                Technical Eyebrow // 12px Monospace Tracking-Widest
              </span>
              <div className="flex items-center gap-2">
                <span className="h-1 w-2 bg-accent-red" />
                <p className="font-mono text-xs uppercase tracking-widest text-steel">
                  {"// TELEMETRY PROTOCOL CAN-BUS V2.4"}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-steel uppercase">
                Body Regular & Muted // 14px - 16px
              </span>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
                RevCrew emphasizes empirical technical documentation, hands-on mechanical
                fabrication, and structured competitive design workflows for collegiate
                motorcycle engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Button Components */}
        <section aria-labelledby="buttons-heading" className="space-y-8">
          <SectionHeading
            eyebrow="// INTERACTION PRIMITIVES"
            title="Buttons & Variants"
            description="Keyboard-navigable buttons supporting primary, secondary, outline, ghost, and link variants with active, hover, and disabled states."
          />

          <div className="rounded-[2px] border border-border bg-surface-secondary p-6 md:p-8 space-y-8">
            {/* Standard Variants */}
            <div>
              <h3 className="text-xs font-mono uppercase text-steel mb-4">
                Variant Hierarchy (Medium Size)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">Outline Variant</Button>
                <Button variant="ghost">Ghost Variant</Button>
                <Button variant="link">Inline Link</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-xs font-mono uppercase text-steel mb-4">
                Size Proportions (Small, Medium, Large)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small (32px)
                </Button>
                <Button variant="primary" size="md">
                  Medium (40px)
                </Button>
                <Button variant="primary" size="lg">
                  Large (48px)
                </Button>
              </div>
            </div>

            {/* Interactive States */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-xs font-mono uppercase text-steel mb-4">
                Disabled & Focus States
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" disabled>
                  Disabled Primary
                </Button>
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Card & Container Primitives */}
        <section aria-labelledby="cards-heading" className="space-y-8">
          <SectionHeading
            eyebrow="// STRUCTURAL COMPONENTS"
            title="Card & Media Frame Primitives"
            description="Structured information modules engineered for technical specifications, vehicle components, and telemetry data."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {engineeringPillars.map((p, idx) => (
              <Card
                key={p.title}
                variant={idx === 0 ? "default" : "interactive"}
                accentTick={idx === 0}
              >
                <CardHeader>
                  <span className="font-mono text-xs uppercase tracking-widest text-steel">
                    {p.eyebrow}
                  </span>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="rounded-[2px] border border-border-subtle bg-bg-primary/60 p-3 font-mono text-xs text-steel">
                    <span>SPECIFICATION COMPLIANCE: PASSED</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <span>STATUS: ACTIVE</span>
                  <span className="text-text-primary font-bold">{p.metric}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
