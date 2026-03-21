import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Software engineer focused on building automation and business
              systems that solve real operational problems.
            </h1>
          </div>

          <div className="shrink-0 sm:pt-1">
            <Image
              src="/images/profile/foto.jpeg"
              alt="Diogo Rodrigues"
              width={160}
              height={190}
              priority
              sizes="160px"
              className="rounded-2xl object-cover object-top w-[120px] h-[144px] sm:w-[150px] sm:h-[180px] ring-1 ring-zinc-700/50"
            />
          </div>
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400">
          <p>
            I am a Software Engineer focused on building automation and business
            systems that solve real operational problems.
          </p>

          <p>
            My career started in 2021 inside an accounting firm, where I began
            developing automation solutions to process large fiscal datasets and
            eliminate repetitive manual work.
          </p>

          <p>
            One of the first systems I built reduced up to{" "}
            <span className="font-medium text-zinc-300">
              ~3 hours of manual work per analyst
            </span>{" "}
            by automating the collection, validation, and reconciliation of
            fiscal data across multiple sources.
          </p>

          <p>
            Since then, I have specialized in transforming business requirements
            into reliable software systems — designing automation pipelines,
            integrations, and internal tools that directly impact efficiency and
            decision-making.
          </p>

          <p>
            I approach software development with a strong focus on business
            logic, system design, and sustainable architecture, prioritizing
            clarity, maintainability, and long-term value over specific
            technologies.
          </p>

          <p>
            While I have experience with Python, APIs, and modern web
            technologies (TypeScript, React, Next.js), I see technology as a
            tool — not the identity.
          </p>

          <p>
            My goal is simple:{" "}
            <span className="font-medium text-zinc-300">
              translate real-world requirements into software that delivers
              measurable impact and removes friction from business operations.
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Approach</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Business-driven design, sustainable architecture, clarity and
              long-term value over specific technologies.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Focus Areas</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Financial systems, accounting automation, process automation, and
              system integration.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Domain</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Accounting, payroll, fiscal operations, and process-heavy business
              environments.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/20 p-6">
          <p className="text-sm font-medium text-white">
            My work is centered on
          </p>

          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            <li>• Process automation</li>
            <li>• System integration and data reconciliation</li>
            <li>• Business-driven software design</li>
            <li>• Automation pipelines and reporting systems</li>
            <li>• Internal tools and operational dashboards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
