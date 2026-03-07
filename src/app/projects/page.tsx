import { ProjectTabs } from "@/app/_components/projects/ProjectTabs";
import { projects } from "@/app/projects/projects.data";

export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Projects
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Automation systems, internal tools, and engineering case studies.
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          A selection of systems I built around automation, data processing,
          integrations, and operational workflows. Some projects are private due
          to company policies, but documented here as high-level case studies.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Automation, integrations, reconciliation workflows, and internal
              business systems.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Project Types</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Private production systems, internal platforms, and public demo
              projects.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-sm font-medium text-white">Approach</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Clean architecture, practical engineering, and measurable
              operational impact.
            </p>
          </div>
        </div>

        <ProjectTabs projects={projects} />
      </div>
    </section>
  );
}
