import Link from "next/link";
import { Badge } from "@/app/_components/ui/Badge";
import { TechBadges } from "@/app/_components/projects/TechBadges";
import type { Project } from "@/app/projects/projects.data";

function StatusBadge({ status }: { status: Project["visibility"] }) {
  if (!status) return null;
  return <Badge variant="muted">{status}</Badge>;
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="
        group
        rounded-lg
        border border-zinc-800
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-zinc-600
        hover:shadow-lg
        hover:shadow-black/30
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium group-hover:text-white transition">
            {p.title}
          </h3>
          {p.subtitle ? (
            <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
          ) : null}
        </div>

        <StatusBadge status={p.visibility} />
      </div>

      <p className="mt-3 text-zinc-400 leading-relaxed">{p.description}</p>

      <TechBadges tech={p.tech} />

      {p.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-4">
          {p.links.map((l) => {
            const isExternal =
              l.kind === "external" || l.href.startsWith("http");
            const className =
              "text-sm underline underline-offset-4 text-zinc-300 hover:text-white transition";

            if (isExternal) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {l.label}
                </a>
              );
            }

            return (
              <Link key={l.href} href={l.href} className={className}>
                {l.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
