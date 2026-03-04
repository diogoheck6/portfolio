// src/app/projects/page.tsx
import { ProjectTabs } from "@/app/_components/projects/ProjectTabs";
import { projects } from "@/app/projects/projects.data";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl">
        <h1 className="text-3xl font-semibold">Projects</h1>

        <p className="mt-3 text-zinc-400">
          Automation systems and public demos — built with a focus on clean
          architecture and real operational impact.
        </p>

        <ProjectTabs projects={projects} />
      </div>
    </section>
  );
}
