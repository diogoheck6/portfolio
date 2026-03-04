// src/app/projects/projects.data.ts
export type ProjectVisibility = "Private" | "Public" | "Planned";
export type ProjectGroup = "automation" | "personal";

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  group: ProjectGroup;
  visibility?: ProjectVisibility;
  tech: string[];
  links?: { label: string; href: string; kind?: "internal" | "external" }[];
  featured?: boolean;

  // ordering inside each group
  order?: number;
};

export const PROJECT_GROUPS: {
  key: ProjectGroup;
  title: string;
  description: string;
}[] = [
  {
    key: "automation",
    title: "Automation Systems (Core)",
    description:
      "Automation and business systems focused on real operational impact. Source code may be private.",
  },
  {
    key: "personal",
    title: "Personal Projects",
    description: "Public projects and demos (linked when ready).",
  },
];

export const projects: Project[] = [
  // --------------------
  // Core automation (private / real-world)
  // --------------------
  {
    title: "SPED Cross-Check Automation",
    subtitle: "Fiscal validation workflow (internal/private)",
    group: "automation",
    visibility: "Private",
    order: 10,
    description:
      "Automated SPED parsing, government data collection, cross-checking across sources, and Excel reporting — reducing up to ~3 hours of manual work per analyst.",
    tech: ["Python", "SPED Parsing", "Web Scraping", "Excel Reports"],
    links: [
      {
        label: "Case study",
        href: "/projects/sped-automation",
        kind: "internal",
      },
    ],
    featured: true,
  },
  {
    title: "NFSe XML Automation Pipeline",
    subtitle: "Federal API integration + XML processing (internal/private)",
    group: "automation",
    visibility: "Private",
    order: 20,
    description:
      "Automated the download of NFSe XML documents via a federal government API, organized files per client/month, extracted invoice data, and generated Excel reports for auditing and reconciliation.",
    tech: ["APIs", "XML", "Data Processing", "Excel Reports", "Next.js"],
    links: [
      {
        label: "Case study",
        href: "/projects/nfse-xml-automation",
        kind: "internal",
      },
    ],
  },

  // --------------------
  // Personal projects (public demos) — roadmap order
  // --------------------
  {
    title: "CPU Monitor (Real-time WebSocket)",
    subtitle: "System metrics backend + real-time dashboard",
    group: "personal",
    visibility: "Planned",
    order: 1,
    description:
      "Collect CPU/RAM/process metrics and stream updates in real time via WebSocket to a clean dashboard UI. Great for practicing real-time systems, observability basics, and deployment with Docker.",
    tech: ["Python", "FastAPI", "WebSocket", "Docker", "Next.js"],
    // add later:
    // links: [{ label: "Repository", href: "https://github.com/...", kind: "external" }],
  },
  {
    title: "GitHub Repository Explorer",
    subtitle: "API integration + search/filter UX",
    group: "personal",
    visibility: "Planned",
    order: 2,
    description:
      "Explore GitHub repositories using the public GitHub API with search, filters, pagination and a clean UI.",
    tech: ["Next.js", "TypeScript", "React", "GitHub API"],
    // add later:
    // links: [{ label: "Repository", href: "...", kind: "external" }],
  },
  {
    title: "Automation Platform Demo (FastAPI)",
    subtitle: "Job runner + API + dashboard (public demo)",
    group: "personal",
    visibility: "Planned",
    order: 3,
    description:
      "A public demo of an automation platform: run jobs via FastAPI, track execution history, store outputs (CSV/Excel), and visualize results in a Next.js dashboard.",
    tech: ["Python", "FastAPI", "SQL", "Docker", "Next.js"],
  },
];
