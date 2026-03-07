export default function About() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Software engineer focused on automation, business systems, and
          operational efficiency.
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400">
          <p>
            I am a Software Engineer focused on building automation systems,
            data pipelines, and business tools that eliminate manual work and
            improve operational efficiency.
          </p>

          <p>
            My career started in 2021 inside an accounting firm, where I began
            developing Python automation tools to parse SPED tax files, collect
            fiscal data from government portals, and cross-validate information
            across multiple public data sources.
          </p>

          <p>
            One of the first systems I built reduced up to{" "}
            <span className="font-medium text-zinc-300">
              ~3 hours of manual work per analyst
            </span>{" "}
            by automating data collection, validation, and Excel-based fiscal
            reconciliation workflows.
          </p>

          <p>
            Since then, I have worked on automation pipelines, desktop
            automation in legacy ERP environments, internal dashboards, and data
            processing systems that help accounting and operational teams work
            with more speed, consistency, and visibility.
          </p>

          <p>
            In recent years, I have also expanded into TypeScript, React, and
            Next.js to build web interfaces that complement automation systems
            and turn operational data into usable internal tools.
          </p>

          <p>
            My goal is simple: build reliable, maintainable systems that create
            measurable impact in real business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Core Stack</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Python, SQL, APIs, TypeScript, React, and Next.js.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Focus Areas</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Automation, integrations, reconciliation workflows, and internal
              business systems.
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
          <p className="text-sm font-medium text-white">What I care about</p>

          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            <li>
              • Building systems that remove repetitive work and reduce
              operational friction
            </li>
            <li>
              • Connecting legacy workflows with modern tools, dashboards, and
              integrations
            </li>
            <li>
              • Writing software that is reliable, maintainable, and useful in
              real business contexts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
