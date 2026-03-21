import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/backgrounds/tech-meeting.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.06] saturate-50"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90" />
      <div className="relative z-10 max-w-4xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Software Engineer
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              I build software that automates business operations.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              I build automation and business systems that solve real
              operational problems — designing automation pipelines,
              integrations, and internal tools that eliminate manual work and
              directly impact efficiency and decision-making.
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
              Python • FastAPI • PostgreSQL • SQL • TypeScript • React • Next.js
              • Docker
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
          </div>

          <div className="shrink-0 lg:pt-3">
            <Image
              src="/images/profile/foto.jpeg"
              alt="Diogo Rodrigues"
              width={220}
              height={260}
              priority
              sizes="220px"
              className="rounded-2xl object-cover object-top w-[160px] h-[190px] sm:w-[200px] sm:h-[240px] lg:w-[220px] lg:h-[260px] ring-1 ring-zinc-700/50"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Process automation, system integration, and business-driven
              software design.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Background</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              4+ years building automation solutions for accounting and
              operational environments, starting in 2021.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Approach</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Business logic first. Technology as a tool, not the identity —
              clarity, maintainability, and long-term value.
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
              Payroll Accounting Mapper
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Full-stack web application for accounting firms that reads payroll
              Excel reports, resolves accounting mappings per company and cost
              center, and exports journal entries formatted for direct import
              into the accounting system — eliminating hours of manual
              spreadsheet work per client, every month.
            </p>

            <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 text-sm text-zinc-400">
              <span className="font-medium text-zinc-500">Impact</span>
              <span className="mx-2 text-zinc-600">•</span>
              <span>
                A process that took{" "}
                <span className="font-medium text-zinc-300">
                  hours per company in Excel
                </span>{" "}
                now completes in seconds — with full traceability of mapped and
                unmapped events across the entire client portfolio.
              </span>
            </div>

            <p className="mt-5 text-sm text-zinc-500">
              Python • FastAPI • PostgreSQL • Next.js • TypeScript • Docker
            </p>

            <div className="mt-6">
              <Link
                href="/projects/payroll-accounting-mapper"
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
                Process Automation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Workflows that replace repetitive manual tasks, reduce
                operational friction, and improve process consistency.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                System Integration & Data Reconciliation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Connecting ERPs, government APIs, and legacy databases into
                cohesive, auditable data flows.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                Automation Pipelines & Reporting
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Structured pipelines that collect, validate, transform, and
                export business data into actionable outputs.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-200">
                Internal Tools & Operational Dashboards
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Web interfaces that expose metrics, validation outputs, and
                operational status to the teams that need them.
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
