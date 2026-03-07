// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Automation Engineer
        </h1>

        <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
          I build automation and business systems that reduce manual work and
          improve operational efficiency.
        </p>

        <p className="mt-5 flex flex-wrap items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm text-zinc-200 w-fit">
          <span className="text-zinc-400">Impact:</span>
          <span>
            Some of the automations I built have reduced up to{" "}
            <span className="font-semibold">~3 hours</span> of manual work per
            analyst.
          </span>
        </p>

        <p className="mt-3 text-zinc-500 text-sm">
          Python • Automation • APIs • SQL • TypeScript • Next.js
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-md bg-white text-zinc-950 text-sm font-medium hover:opacity-90 transition"
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="px-4 py-2 rounded-md border border-zinc-800 text-sm text-zinc-200 hover:border-zinc-700 transition"
          >
            About Me
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Focus</p>
            <p className="mt-2 text-sm text-zinc-400">
              Automation & business systems for real operational workflows.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Background</p>
            <p className="mt-2 text-sm text-zinc-400">
              5 years building Python automation and data-processing systems.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Now</p>
            <p className="mt-2 text-sm text-zinc-400">
              Building dashboards and automation platforms with Next.js + APIs.
            </p>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-14">
          <p className="text-sm font-medium">Featured Project</p>

          <div className="mt-3 rounded-lg border border-zinc-800 p-6">
            <p className="text-lg font-medium">SPED Cross-Check Automation</p>
            <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
              Automated SPED parsing, government data collection,
              cross-checking, and Excel reporting — reducing up to ~3 hours of
              manual work per analyst.
            </p>
            <p className="mt-3 text-zinc-500 text-sm">
              Python • SPED Parsing • Web Scraping • Excel Reports
            </p>

            <div className="mt-5">
              <Link
                href="/projects/sped-automation"
                className="text-sm underline underline-offset-4 text-zinc-300 hover:text-white transition"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          Portfolio under construction — more case studies coming soon.
        </p>
      </div>
    </section>
  );
}
