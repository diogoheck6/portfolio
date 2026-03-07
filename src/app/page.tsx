import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Software Engineer
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          I build software that automates business operations.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          I design automation systems, data pipelines, internal tools, and web
          dashboards that eliminate manual work, improve operational efficiency,
          and support better decision-making in real business workflows.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-200 w-fit">
          <span className="font-medium text-zinc-500">Impact</span>
          <span className="text-zinc-600">•</span>
          <span>
            Some systems I built reduced up to{" "}
            <span className="font-semibold text-white">
              ~3 hours of manual work
            </span>{" "}
            per analyst per day.
          </span>
        </div>

        <p className="mt-5 text-sm text-zinc-500">
          Python • APIs • SQL • Data Pipelines • TypeScript • React • Next.js
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:opacity-90"
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="rounded-md border border-zinc-800 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-700 hover:text-white"
          >
            About Me
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Automation, integrations, and business systems built for real
              operational workflows.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Background</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              4+ years building Python automation and data-processing systems
              for accounting and business operations.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Now</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Building dashboards, automation pipelines, and internal tools with
              Python, APIs, and Next.js.
            </p>
          </div>
        </div>

        <div className="mt-18 mt-16">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-white">Featured Project</p>

            <Link
              href="/projects"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              See all projects →
            </Link>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7">
            <p className="text-2xl font-semibold tracking-tight text-white">
              SPED Cross-Check Automation
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Automation system that parses SPED tax files, collects government
              fiscal data, cross-validates multiple datasets, and generates
              Excel reconciliation reports for accounting workflows.
            </p>

            <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 text-sm text-zinc-400">
              <span className="font-medium text-zinc-500">Impact</span>
              <span className="mx-2 text-zinc-600">•</span>
              <span>
                Reduced up to{" "}
                <span className="font-medium text-zinc-300">
                  ~3 hours of manual work
                </span>{" "}
                per analyst through automated collection, validation, and
                reconciliation.
              </span>
            </div>

            <p className="mt-5 text-sm text-zinc-500">
              Python • SPED Parsing • Web Scraping • Excel Reports
            </p>

            <div className="mt-6">
              <Link
                href="/projects/sped-automation"
                className="text-sm text-zinc-300 underline underline-offset-4 transition hover:text-white"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7">
          <p className="text-sm font-medium text-white">What I build</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Automation Systems
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Python-based workflows that replace repetitive manual tasks and
                improve consistency in operational processes.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                Data Pipelines
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Structured processing flows for collecting, validating, and
                transforming business and fiscal data.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                Internal Tools
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Practical systems that support accounting, payroll, and
                operational teams in real workflows.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                Dashboards & Visibility
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Web interfaces built with React and Next.js to expose metrics,
                validation outputs, and operational status.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          Portfolio under construction — more case studies and public demos
          coming soon.
        </p>
      </div>
    </section>
  );
}
