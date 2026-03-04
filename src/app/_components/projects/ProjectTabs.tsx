// src/app/_components/projects/ProjectTabs.tsx
"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/app/projects/projects.data";
import { ProjectCard } from "./ProjectCard";

type Group = "automation" | "personal";

export function ProjectTabs({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Group>("automation");

  const filtered = useMemo(() => {
    return projects
      .filter((p) => p.group === active)
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [active, projects]);

  const tabs: { key: Group; label: string }[] = [
    { key: "automation", label: "Automation Systems (Core)" },
    { key: "personal", label: "Personal Projects" },
  ];

  return (
    <>
      <div className="mt-10 flex gap-3 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`text-sm px-3 py-1 rounded-md border transition
              ${
                active === t.key
                  ? "border-white text-white"
                  : "border-zinc-800 text-zinc-400 hover:text-white"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={`${p.group}-${p.title}`} p={p} />
        ))}
      </div>
    </>
  );
}
