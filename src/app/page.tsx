import { siteConfig } from "@/config/site";

export default function Home() {
  const pillars = [
    {
      title: "Motorcycle Engineering",
      description: "Powertrain diagnostics, chassis dynamics, electrical systems, and telemetry optimization.",
    },
    {
      title: "Custom Bike Building",
      description: "Hands-on fabrication, custom subframes, metal shaping, and bespoke mechanical assembly.",
    },
    {
      title: "Technical Competitions",
      description: "Intercollegiate engineering challenges, innovation showcases, and competitive design reports.",
    },
    {
      title: "Riding Experiences",
      description: "Track days, group expeditions, safety workshops, and real-world testing feedback.",
    },
  ];

  const systemStatus = [
    { name: "Framework", value: "Next.js (App Router)" },
    { name: "Language", value: "TypeScript (Strict)" },
    { name: "Styling", value: "Tailwind CSS v4" },
    { name: "Linting", value: "ESLint (Flat Config)" },
    { name: "Target Platform", value: "Vercel Production" },
    { name: "Milestone", value: "Phase 1 Foundation" },
  ];

  return (
    <div className="flex-1 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-semibold text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            VIT Pune • RevCrew 2.0
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
            REVCREW
          </h1>
          <p className="mt-2 text-xl font-bold text-red-500 sm:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="mt-4 text-base text-neutral-400 sm:text-lg">
            {siteConfig.description}
          </p>
        </div>

        {/* System & Foundation Status */}
        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-neutral-800">
            <div>
              <h2 className="text-lg font-bold text-white">Technical Foundation Status</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Verified zero-error baseline for RevCrew Web 2.0
              </p>
            </div>
            <span className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Phase 1 Complete
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {systemStatus.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4"
              >
                <dt className="text-xs font-medium text-neutral-400">{item.name}</dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-200">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Club Pillars */}
        <div className="mt-12">
          <h2 className="text-xs font-semibold tracking-wider text-neutral-500 uppercase text-center sm:text-left">
            Core Club Dimensions
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-neutral-800/60 bg-neutral-900/20 p-5 hover:border-neutral-700 transition-colors"
              >
                <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
