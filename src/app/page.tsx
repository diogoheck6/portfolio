import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import Link from "next/link";
import { TechBadges } from "@/app/_components/projects/TechBadges";

const STACK = [
  { icon: SiPython, label: "Python" },
  { icon: SiFastapi, label: "FastAPI" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiDocker, label: "Docker" },
];

export default function Home() {
  return (
    <section className="py-20 md:py-28">
      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Software Engineer
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          I build software that automates business operations.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          I build automation and business systems that solve real operational
          problems — designing automation pipelines, integrations, and internal
          tools that eliminate manual work and directly impact efficiency and
          decision-making.
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

        <div className="mt-6 flex flex-wrap gap-2">
          {STACK.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <Icon className="text-base" />
              {label}
            </span>
          ))}
        </div>

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

          <div className="relative mt-4 cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/40 hover:ring-1 hover:ring-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 group">
            <Link
              href="/projects/payroll-accounting-mapper"
              className="absolute inset-0 z-0 rounded-2xl"
              aria-label="View Payroll Accounting Mapper case study"
            />
            <p className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-amber-100">
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

            <div className="mt-5 relative z-10">
              <TechBadges
                tech={[
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "Next.js",
                  "TypeScript",
                  "Docker",
                ]}
              />
            </div>

            <div className="relative z-10 mt-6">
              <Link
                href="/projects/payroll-accounting-mapper"
                className="text-sm text-zinc-400 underline underline-offset-4 transition hover:text-amber-300"
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
