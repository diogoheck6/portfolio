import Link from "next/link";
import { Badge } from "@/app/_components/ui/Badge";
import { TechBadges } from "@/app/_components/projects/TechBadges";
import type { Project } from "@/app/projects/projects.data";
import { Lock, FileText, Star } from "lucide-react";

function VisibilityBadge({
  visibility,
}: {
  visibility?: Project["visibility"];
}) {
  if (!visibility) return null;

  if (visibility === "Private") {
    return (
      <Badge variant="muted">
        <span className="flex items-center gap-1">
          <Lock size={12} />
          Private
        </span>
      </Badge>
    );
  }

  if (visibility === "Public") {
    return <Badge variant="default">Public</Badge>;
  }

  return <Badge variant="outline">Planned</Badge>;
}

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;

  if (status === "Case Study") {
    return (
      <Badge variant="outline">
        <span className="flex items-center gap-1">
          <FileText size={12} />
          Case Study
        </span>
      </Badge>
    );
  }

  return <Badge variant="outline">{status}</Badge>;
}

export function ProjectCard({ p }: { p: Project }) {
  const primaryLink = p.links?.find(
    (l) => l.kind === "internal" || !l.href.startsWith("http"),
  );

  return (
    <div
      className={`
        relative
        group
        rounded-xl
        border border-zinc-800
        bg-zinc-900/20
        p-6 pt-10
        transition-all duration-300
        hover:-translate-y-1
        hover:border-amber-500/40
        hover:ring-1 hover:ring-amber-500/30
        hover:shadow-xl
        hover:shadow-amber-500/5
        ${primaryLink ? "cursor-pointer" : ""}
        ${p.featured ? "border-amber-500/20 ring-1 ring-amber-500/30" : ""}
      `}
    >
      {primaryLink ? (
        <Link
          href={primaryLink.href}
          className="absolute inset-0 z-0 rounded-xl"
          aria-label={`View ${p.title}`}
        />
      ) : null}
      {p.featured ? (
        <div className="absolute -top-3 left-4 z-10">
          <div className="flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-300 shadow-sm backdrop-blur">
            <Star size={12} />
            Featured
          </div>
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100 transition group-hover:text-amber-100">
            {p.title}
          </h3>

          {p.subtitle ? (
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">
              {p.subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <VisibilityBadge visibility={p.visibility} />
          <StatusBadge status={p.status} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {p.description}
      </p>

      {p.impact ? (
        <div className="mt-4 rounded-md border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-xs text-zinc-400">
          <span className="text-zinc-500">Impact</span>{" "}
          <span className="text-zinc-300">• {p.impact}</span>
        </div>
      ) : null}

      <div className="mt-4">
        <TechBadges tech={p.tech} />
      </div>

      {p.links?.length ? (
        <div className="relative z-10 mt-5 flex flex-wrap gap-4">
          {p.links.map((l) => {
            const isExternal =
              l.kind === "external" || l.href.startsWith("http");

            const className =
              "text-sm underline underline-offset-4 text-zinc-300 transition hover:text-white";

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
