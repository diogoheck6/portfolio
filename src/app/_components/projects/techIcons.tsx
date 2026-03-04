import {
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

export function techIcon(name: string) {
  const key = name.toLowerCase();

  if (key === "python") return <SiPython />;
  if (key === "typescript") return <SiTypescript />;
  if (key === "react") return <SiReact />;
  if (key === "react.js") return <SiReact />;
  if (key === "next.js") return <SiNextdotjs />;
  if (key === "node.js") return <SiNodedotjs />;
  if (key === "fastapi") return <SiFastapi />;
  if (key === "docker") return <SiDocker />;
  if (key === "postgresql") return <SiPostgresql />;

  return null;
}
