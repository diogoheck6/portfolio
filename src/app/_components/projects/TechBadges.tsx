import { Badge } from "@/app/_components/ui/Badge";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiDocker,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

function getIcon(name: string) {
  const key = name.toLowerCase();

  if (key === "python") return <SiPython />;
  if (key === "typescript") return <SiTypescript />;
  if (key === "react") return <SiReact />;
  if (key === "react.js") return <SiReact />;
  if (key === "next.js") return <SiNextdotjs />;
  if (key === "github api") return <SiGithub />;
  if (key === "docker") return <SiDocker />;
  if (key === "fastapi") return <SiFastapi />;
  if (key === "sql") return <SiPostgresql />;

  return null;
}

export function TechBadges({ tech }: { tech: string[] }) {
  if (!tech?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => {
        const icon = getIcon(t);

        return (
          <Badge key={t}>
            <span className="flex items-center gap-2">
              {icon ? <span className="text-sm">{icon}</span> : null}
              {t}
            </span>
          </Badge>
        );
      })}
    </div>
  );
}
