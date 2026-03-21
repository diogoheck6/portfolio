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
import { Database, Cpu, FileJson, Globe, Server } from "lucide-react";

function getIcon(name: string) {
  const key = name.toLowerCase().trim();

  if (key === "python" || key === "python 3.12") return <SiPython />;
  if (key === "typescript") return <SiTypescript />;
  if (key === "react") return <SiReact />;
  if (key === "react.js") return <SiReact />;
  if (key === "next.js" || key === "next.js 15") return <SiNextdotjs />;
  if (key === "github api") return <SiGithub />;
  if (key === "docker") return <SiDocker />;
  if (key === "fastapi") return <SiFastapi />;
  if (key === "postgresql" || key === "postgresql 17") return <SiPostgresql />;
  if (key === "sql") return <SiPostgresql />;
  if (key === "asyncpg") return <Database size={14} />;
  if (key === "pm2") return <Server size={14} />;
  if (key === "xml") return <FileJson size={14} />;
  if (key === "apis") return <Globe size={14} />;
  if (key === "websocket") return <Cpu size={14} />;

  return null;
}

export function TechBadges({ tech }: { tech: string[] }) {
  if (!tech?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => {
        const icon = getIcon(t);

        return (
          <span
            key={t}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-700/60 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            {icon ? <span className="text-sm">{icon}</span> : null}
            {t}
          </span>
        );
      })}
    </div>
  );
}
