"use client";

import { useMemo, useState } from "react";
import { PROJECT_GROUPS, type Project } from "@/app/projects/projects.data";
import { ProjectCard } from "./ProjectCard";

type Group = "automation" | "personal";

export function ProjectTabs({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Group>("automation");

  const currentGroup = PROJECT_GROUPS.find((g) => g.key === active);

  const filtered = useMemo(() => {
    return projects
      .filter((p) => p.group === active)
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [active, projects]);

  const featuredProject = filtered.find((p) => p.featured);
  const regularProjects = filtered.filter((p) => !p.featured);

  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-3">
        {PROJECT_GROUPS.map((group) => {
          const isActive = active === group.key;

          return (
            <button
              key={group.key}
              onClick={() => setActive(group.key)}
              className={`rounded-md border px-3 py-2 text-sm transition ${
                isActive
                  ? "border-white bg-white text-zinc-950"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {group.title}
            </button>
          );
        })}
      </div>

      {currentGroup ? (
        <div className="mt-5 max-w-3xl">
          <p className="text-sm leading-relaxed text-zinc-400">
            {currentGroup.description}
          </p>
        </div>
      ) : null}

      {filtered.length > 0 ? (
        <>
          {featuredProject ? (
            <div className="mt-8">
              <ProjectCard p={featuredProject} />
            </div>
          ) : null}

          {regularProjects.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={`${project.group}-${project.title}`}
                  p={project}
                />
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-zinc-800 bg-zinc-900/20 p-6">
          <p className="text-sm text-zinc-400">
            No projects available in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}
