import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { getImageAssetById } from "@/data/assets";

export default function Home() {
  // Verified Assets from centralized catalog
  const heroBanner = getImageAssetById("branding-banner-4k");
  const fmaeRaceGrid = getImageAssetById("eng-fmae-race-grid");
  const fmaeInspection = getImageAssetById("eng-fmae-technical-inspection");
  const fmaePaddock = getImageAssetById("eng-fmae-paddock-scrutineering");
  const fmaeBikePit = getImageAssetById("eng-fmae-competition-bike-pit");

  const eventCampus = getImageAssetById("event-campus-exhibition");
  const eventDisplay = getImageAssetById("event-bike-showcase-display");
  const eventLineup = getImageAssetById("event-superbike-lineup");
  const eventCustom = getImageAssetById("event-custom-garage-showcase");

  const tripTwisties = getImageAssetById("trip-pawna-convoy-twisties");
  const tripGlide = getImageAssetById("trip-pawna-convoy-glide");
  const tripDestination = getImageAssetById("trip-pawna-waterside-destination");

  // Technical Domain Divisions (structured by engineering discipline)
  const technicalDivisions = [
    {
      code: "DIV // 01",
      title: "Chassis & Vehicle Dynamics",
      domains: [
        {
          name: "Chassis & Structural Design",
          description: "Tubular spaceframe geometry, subframe fabrication, stress distribution, and torsional stiffness calculations.",
        },
        {
          name: "Vehicle Dynamics",
          description: "Rake, trail, center-of-gravity elevation, roll-axis determination, and cornering stability under acceleration.",
        },
        {
          name: "Suspension & Linkage",
          description: "Inverted telescopic fork tuning, rear monoshock linkage kinematics, spring preload, and damping rebound analysis.",
        },
      ],
    },
    {
      code: "DIV // 02",
      title: "Powertrain & Mechanical Systems",
      domains: [
        {
          name: "Powertrain Optimization",
          description: "Engine mounting isolation, primary and secondary reduction ratios, sprocket sizing, and tuned exhaust routing.",
        },
        {
          name: "Braking Systems",
          description: "Hydraulic caliper sizing, master cylinder hydraulic ratios, thermal dissipation, and braided stainless line routing.",
        },
        {
          name: "Fabrication & Machining",
          description: "TIG and MIG tubular welding, sheet metal shaping, precision lathe turning, and custom CNC component bracketry.",
        },
      ],
    },
    {
      code: "DIV // 03",
      title: "Electronics, Electrical & Telemetry",
      domains: [
        {
          name: "Motorsport Wiring Harness",
          description: "Custom lightweight wiring looms, Deutsch DT waterproof connectors, solid-state relays, and battery management.",
        },
        {
          name: "Telemetry & Sensor Logging",
          description: "Wheel-speed hall sensors, throttle position logging, exhaust gas thermal probes, and real-time CAN bus data acquisition.",
        },
      ],
    },
    {
      code: "DIV // 04",
      title: "Digital Design, Aero & Research",
      domains: [
        {
          name: "CAD & Digital Prototyping",
          description: "Parametric 3D solid modeling, packaging interference detection, clearance verification, and Finite Element Analysis (FEA).",
        },
        {
          name: "Aerodynamics & Fairings",
          description: "Frontal area drag reduction, radiator cooling duct efficiency, high-speed stability, and composite fairing mounting.",
        },
        {
          name: "Research & Rulebook Compliance",
          description: "Materials fatigue testing, technical competition rulebook compliance reporting, and technical documentation standards.",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* =========================================================================
          SECTION A: CINEMATIC HERO
          ========================================================================= */}
      <section
        id="hero"
        aria-label="RevCrew Hero"
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden border-b border-border bg-bg-primary"
      >
        {/* Cinematic Backdrop Image with High Contrast Gradient Overlay */}
        {heroBanner && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroBanner.src}
              alt={heroBanner.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25 filter contrast-125"
            />
            {/* Vignette & Contrast Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-bg-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary" />
          </div>
        )}

        <Container size="default" className="relative z-10 py-16 sm:py-24 md:py-32">
          <div className="max-w-4xl space-y-8">
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-surface-secondary/90 px-3 py-1 font-mono text-xs text-steel backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red animate-pulse" />
              <span>VIT PUNE // MOTORCYCLE TECHNOLOGY & INNOVATION CLUB</span>
            </div>

            {/* Core Positioning Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-text-primary leading-[0.95]">
                We don&apos;t just ride machines.
                <span className="block mt-2 text-accent-red">
                  We build them.
                </span>
              </h1>
            </div>

            {/* Editorial Subhead */}
            <p className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
              Vishwakarma Institute of Technology&apos;s collegiate motorcycle engineering collective.
              We build competition prototypes, engineer custom chassis geometry, diagnose powertrains,
              and fabricate performance motorcycles from the workshop up.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#engineering" variant="primary" size="lg">
                Explore Engineering Showcase ↓
              </Button>
              <Button href="#technical-domains" variant="secondary" size="lg">
                Technical Domains
              </Button>
              <Button href="/assets" variant="outline" size="lg">
                Verified Media Archive →
              </Button>
            </div>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="mt-16 sm:mt-24 pt-6 border-t border-border/80 grid grid-cols-2 gap-4 sm:grid-cols-4 font-mono text-xs">
            <div>
              <span className="text-steel uppercase block text-[10px]">Primary Mandate</span>
              <span className="text-text-primary font-semibold mt-0.5 block">Prototype Engineering</span>
            </div>
            <div>
              <span className="text-steel uppercase block text-[10px]">Workshop Base</span>
              <span className="text-text-primary font-semibold mt-0.5 block">VIT Pune Mechanical Labs</span>
            </div>
            <div>
              <span className="text-steel uppercase block text-[10px]">Championship Target</span>
              <span className="text-text-primary font-semibold mt-0.5 block">FMAE Moto Student India</span>
            </div>
            <div>
              <span className="text-steel uppercase block text-[10px]">Core Methodology</span>
              <span className="text-text-primary font-semibold mt-0.5 block">CAD Modeling & TIG Fabrication</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION B: ENGINEERING SHOWCASE (Flagship Focus)
          ========================================================================= */}
      <section
        id="engineering"
        aria-labelledby="engineering-heading"
        className="py-20 md:py-32 border-b border-border bg-bg-primary"
      >
        <Container size="default" className="space-y-16">
          <SectionHeading
            eyebrow="// FLAGSHIP FOCUS // NATIONAL COMPETITIONS"
            title="Engineering Showcase"
            description="RevCrew builds, instruments, and field-tests collegiate prototype motorcycles for national technical championships including FMAE Moto Student India."
          />

          {/* Flagship Hero Feature Card: Competition Starting Grid */}
          {fmaeRaceGrid && (
            <div className="rounded-[2px] border border-border bg-surface-secondary overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] sm:min-h-[420px] bg-[#0d0e10]">
                  <Image
                    src={fmaeRaceGrid.src}
                    alt={fmaeRaceGrid.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-[2px] bg-bg-primary/90 px-2.5 py-1 font-mono text-[11px] text-text-primary border border-border">
                    {"FMAE MOTO STUDENT // STARTING GRID"}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-steel">
                      <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
                      <span>DYNAMIC TRACK SCRUTINEERING</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary">
                      Competition Starting Grid Lineup
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      Lined up on national racing circuits alongside collegiate engineering teams from across the country.
                      RevCrew competition prototypes are subjected to empirical performance criteria: dynamic acceleration,
                      brake balance trials, maneuverability courses, and multi-lap endurance tests.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border-subtle space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-steel">
                      <span>Event Category:</span>
                      <span className="text-text-primary font-bold">Moto Student India</span>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Evaluation Protocol:</span>
                      <span className="text-text-primary font-bold">Dynamic Track Scrutineering</span>
                    </div>
                    <div className="flex justify-between text-steel">
                      <span>Vehicle Class:</span>
                      <span className="text-text-primary font-bold">Custom Collegiate Prototype</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3-Column Engineering Detail Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Technical Inspection */}
            {fmaeInspection && (
              <Card variant="default" className="overflow-hidden p-0" accentTick>
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={fmaeInspection.src}
                    alt={fmaeInspection.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-steel">
                      {"RULEBOOK COMPLIANCE"}
                    </span>
                    <CardTitle>Technical Inspection</CardTitle>
                    <CardDescription>
                      Official judges verifying chassis dimensions, frame weld integrity, braking system redundancy,
                      electrical kill switches, and strict adherence to competition rulebook standards.
                    </CardDescription>
                  </div>
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-steel">
                    <span>STAGE: STATIC SCRUTINY</span>
                    <span className="text-text-primary font-semibold">VERIFIED</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Paddock Assembly */}
            {fmaePaddock && (
              <Card variant="default" className="overflow-hidden p-0" accentTick>
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={fmaePaddock.src}
                    alt={fmaePaddock.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-steel">
                      {"PIT PADDOCK OPERATIONS"}
                    </span>
                    <CardTitle>Paddock Triage & Assembly</CardTitle>
                    <CardDescription>
                      Live pit lane mechanical servicing, suspension preload adjustment, chain tension calibration,
                      and rapid mechanical triage executed under time-restricted competition heats.
                    </CardDescription>
                  </div>
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-steel">
                    <span>STAGE: PIT OPERATIONS</span>
                    <span className="text-text-primary font-semibold">ACTIVE</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Finished Prototype Machine */}
            {fmaeBikePit && (
              <Card variant="default" className="overflow-hidden p-0" accentTick>
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={fmaeBikePit.src}
                    alt={fmaeBikePit.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-steel">
                      {"PROTOTYPE MACHINE"}
                    </span>
                    <CardTitle>Competition Prototype</CardTitle>
                    <CardDescription>
                      The fully fabricated competition motorcycle mounted on the paddock stand, featuring lightweight
                      tubular spaceframe, performance exhaust routing, and competition technical decals.
                    </CardDescription>
                  </div>
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-steel">
                    <span>STAGE: DEPLOYED BUILD</span>
                    <span className="text-text-primary font-semibold">PADDOCK</span>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION C: TECHNICAL DOMAINS
          ========================================================================= */}
      <section
        id="technical-domains"
        aria-labelledby="domains-heading"
        className="py-20 md:py-32 border-b border-border bg-surface-secondary/40"
      >
        <Container size="default" className="space-y-16">
          <SectionHeading
            eyebrow="// MULTI-DISCIPLINARY WORKSTREAMS"
            title="Technical Domains"
            description="Ten specialized engineering divisions operating collaboratively through CAD modeling, workshop machining, electrical design, and track evaluation."
          />

          {/* Division Matrix Layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {technicalDivisions.map((division) => (
              <div
                key={division.code}
                className="rounded-[2px] border border-border bg-surface-secondary p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-accent-red font-medium">
                      {division.code}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-text-primary">
                      {division.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-steel">
                    {division.domains.length} Workstreams
                  </span>
                </div>

                <div className="space-y-5">
                  {division.domains.map((domain) => (
                    <div key={domain.name} className="space-y-1">
                      <h4 className="text-sm font-bold text-text-primary uppercase tracking-tight">
                        {domain.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {domain.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Methodology Banner */}
          <div className="rounded-[2px] border border-border bg-bg-primary p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h4 className="text-sm font-bold uppercase tracking-tight text-text-primary">
                Technical Documentation & CAD Verification
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                All vehicle assemblies undergo strict CAD interference checks and Finite Element Analysis before raw steel tubing is notched, bent, or welded in the workshop.
              </p>
            </div>
            <Button href="/assets" variant="outline" size="md">
              View Verified Photo Records →
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION D: CAMPUS EVENTS & BIKE SHOWCASE
          ========================================================================= */}
      <section
        id="events"
        aria-labelledby="events-heading"
        className="py-20 md:py-32 border-b border-border bg-bg-primary"
      >
        <Container size="default" className="space-y-16">
          <SectionHeading
            eyebrow="// PUBLIC DEMONSTRATIONS & EXHIBITIONS"
            title="Campus Events & Showcase"
            description="Exhibiting student-built machines, performance superbikes, and custom fabrication to the broader VIT Pune academic and collegiate community."
          />

          {/* 4-Panel Editorial Showcase Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Campus Gathering */}
            {eventCampus && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={eventCampus.src}
                    alt={eventCampus.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-steel uppercase">
                      {"CAMPUS STAGE"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary">
                      Motorcycle Exhibition
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Crowds of engineering students gathered around the RevCrew presentation stage during collegiate expo.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    LOCATION: VIT PUNE CAMPUS
                  </div>
                </div>
              </Card>
            )}

            {/* Central Display */}
            {eventDisplay && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={eventDisplay.src}
                    alt={eventDisplay.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-steel uppercase">
                      {"EXHIBITION LINEUP"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary">
                      Custom Bike Display
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Customized street and track motorcycles positioned on exhibition podiums for detailed technical review.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    EVENT: BIKE SHOWCASE
                  </div>
                </div>
              </Card>
            )}

            {/* Superbike Lineup */}
            {eventLineup && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={eventLineup.src}
                    alt={eventLineup.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-steel uppercase">
                      {"PERFORMANCE MACHINES"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary">
                      Sportbike Lineup
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Performance motorcycles brought together for mechanical sound tests and rider interaction sessions.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    CATEGORY: SPORT & TRACK
                  </div>
                </div>
              </Card>
            )}

            {/* Custom Garage Fabrication */}
            {eventCustom && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={eventCustom.src}
                    alt={eventCustom.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-steel uppercase">
                      {"WORKSHOP CRAFT"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary">
                      Fabrication Details
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Exhaust weld seams, custom swingarm mounts, and bespoke chassis finishes demonstrated to students.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    CRAFT: CUSTOM FABRICATION
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION E: RIDES & COMMUNITY (Subordinated Hierarchy)
          ========================================================================= */}
      <section
        id="rides"
        aria-labelledby="rides-heading"
        className="py-20 md:py-32 border-b border-border bg-surface-secondary/20"
      >
        <Container size="default" className="space-y-16">
          <SectionHeading
            eyebrow="// ROAD TESTING & CAMARADERIE"
            title="Community Rides & Expeditions"
            description="Riding is where mechanical preparation meets real-world asphalt. RevCrew conducts disciplined group expeditions through Western Ghats mountain passes to evaluate endurance, road stability, and rider safety culture."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Twisties */}
            {tripTwisties && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={tripTwisties.src}
                    alt={tripTwisties.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-steel uppercase">
                      {"GHAT ROUTE NAVIGATION"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary mt-1">
                      Mountain Pass Riding
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      Navigating twisty mountain curves through the Western Ghats under coordinated convoy discipline.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    ROUTE: WESTERN GHATS
                  </div>
                </div>
              </Card>
            )}

            {/* Highway Formation */}
            {tripGlide && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={tripGlide.src}
                    alt={tripGlide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-steel uppercase">
                      {"CONVOY DISCIPLINE"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary mt-1">
                      Staggered Formation
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      Cruising on open asphalt with designated lead and sweep marshals maintaining safe stopping intervals.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    PROTOCOL: STAGGERED CONVOY
                  </div>
                </div>
              </Card>
            )}

            {/* Destination Campsite */}
            {tripDestination && (
              <Card variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={tripDestination.src}
                    alt={tripDestination.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-steel uppercase">
                      {"DESTINATION REST POINT"}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-text-primary mt-1">
                      Pawna Lake Campsite
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      Arrival at the Pawna Lake waterside campsite after completing the weekend mechanical endurance trial.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-steel">
                    ARCHIVED EXPEDITION: PAWNA LAKE
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION F: ABOUT REVCREW
          ========================================================================= */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-20 md:py-32 border-b border-border bg-bg-primary"
      >
        <Container size="default" className="space-y-16">
          <SectionHeading
            eyebrow="// INSTITUTIONAL FOUNDATION & ETHOS"
            title="About RevCrew"
            description="The dedicated motorcycle technology and innovation club of Vishwakarma Institute of Technology, Pune."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Mission & Workshop Culture */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-[2px] border border-border bg-surface-secondary p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-text-primary">
                  Engineering Education through Physical Fabrication
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Founded at Vishwakarma Institute of Technology, Pune, RevCrew was established to bridge
                  collegiate classroom theory with real-world motorcycle engineering. We believe that
                  understanding vehicle dynamics requires more than solving differential equations—it demands
                  fabricating chassis, turning precision bushings on lathes, and logging sensor telemetry on race circuits.
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Every build undertaken by RevCrew is designed, welded, assembled, and tested by undergraduate engineers.
                  Our work fosters interdisciplinary teamwork spanning mechanical design, electronics, powertrain tuning,
                  and technical project management.
                </p>
              </div>

              {/* Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-[2px] border border-border bg-surface-secondary p-4 space-y-2">
                  <span className="font-mono text-xs text-accent-red font-semibold">01 // EMPIRICAL</span>
                  <h4 className="text-sm font-bold text-text-primary uppercase">Calculated Design</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    FEA stress simulations, weight distribution models, and rulebook compliance before manufacturing.
                  </p>
                </div>
                <div className="rounded-[2px] border border-border bg-surface-secondary p-4 space-y-2">
                  <span className="font-mono text-xs text-accent-red font-semibold">02 // WORKSHOP</span>
                  <h4 className="text-sm font-bold text-text-primary uppercase">Hands-On Craft</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Direct student execution of tube notching, TIG frame welding, wiring harness loomed in-house.
                  </p>
                </div>
                <div className="rounded-[2px] border border-border bg-surface-secondary p-4 space-y-2">
                  <span className="font-mono text-xs text-accent-red font-semibold">03 // CULTURE</span>
                  <h4 className="text-sm font-bold text-text-primary uppercase">Rider Safety</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Certified riding gear, safety circuit redundancy, and disciplined convoy road conduct.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Identity & Workshop Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-[2px] border border-border bg-surface-secondary p-6 sm:p-8 space-y-6">
                <div className="pb-4 border-b border-border space-y-1">
                  <span className="font-mono text-xs text-steel uppercase">
                    {"INSTITUTIONAL AFFILIATION"}
                  </span>
                  <h4 className="text-base font-bold uppercase text-text-primary">
                    Vishwakarma Institute of Technology
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Autonomous Institute • Bibwewadi, Pune, Maharashtra
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs text-steel">
                  <div>
                    <span className="block text-[10px] uppercase text-steel/80">Affiliation Authority</span>
                    <span className="text-text-primary font-semibold">VIT Pune Student Activities (Technical)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-steel/80">Primary Competition Target</span>
                    <span className="text-text-primary font-semibold">FMAE Moto Student National Competition</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-steel/80">Core Facility</span>
                    <span className="text-text-primary font-semibold">Mechanical Workshop & Fabrication Labs</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-steel/80">Club Status</span>
                    <span className="text-accent-red font-bold">Active Technical Innovation Organization</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button href="/assets" variant="outline" size="md" className="w-full">
                    View Verified Media Archive →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION G: FINAL BRANDED CTA
          ========================================================================= */}
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="relative py-24 sm:py-32 bg-surface-secondary border-b border-border overflow-hidden"
      >
        <Container size="default" className="relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-bg-primary px-3 py-1 font-mono text-xs text-steel">
            <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
            <span>VIT PUNE MOTORCYCLE INNOVATION</span>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-text-primary leading-tight"
            >
              Engineered to compete.
              <span className="text-accent-red block">
                Proven on the road.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-text-secondary leading-relaxed">
              Explore our full photographic archive, review our competition inspection records,
              or learn more about the RevCrew collegiate motorcycle engineering team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/assets" variant="primary" size="lg">
              Explore Media Archive (20 Images, 3 Videos) →
            </Button>
            <Button href="#engineering" variant="secondary" size="lg">
              Return to Engineering Showcase ↑
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle max-w-xl mx-auto font-mono text-xs text-steel space-y-1">
            <p className="text-text-primary font-semibold uppercase">
              RevCrew • Vishwakarma Institute of Technology, Pune
            </p>
            <p className="text-steel/80">
              Bibwewadi, Pune, Maharashtra 411037 • Technical Activities Club
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
