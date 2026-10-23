import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs font-mono text-neutral-400">
        404 ERROR
      </div>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm text-neutral-400">
        The route or resource you are looking for does not exist or is currently being built in upcoming phases.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
        >
          Return to Foundation Home
        </Link>
      </div>
    </div>
  );
}
