export type ProjectVisibility = "Private" | "Public" | "Planned";
export type ProjectGroup = "automation" | "personal";
export type ProjectStatus = "Production" | "Case Study" | "Roadmap";

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  impact?: string;
  status?: ProjectStatus;
  group: ProjectGroup;
  visibility?: ProjectVisibility;
  tech: string[];
  links?: { label: string; href: string; kind?: "internal" | "external" }[];
  featured?: boolean;
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
      "Production-oriented automation and business systems built for real operational workflows. Source code may be private.",
  },
  {
    key: "personal",
    title: "Personal Projects",
    description:
      "Public demos and portfolio projects used to explore engineering ideas and modern tooling.",
  },
];

export const projects: Project[] = [
  {
    title: "SPED Cross-Check Automation",
    subtitle: "Fiscal validation workflow for accounting operations",
    group: "automation",
    visibility: "Private",
    status: "Case Study",
    order: 10,
    description:
      "Automation system that parses SPED tax files, collects government fiscal data, cross-validates multiple datasets, and generates Excel reconciliation reports for accounting workflows.",
    impact:
      "Reduced up to ~3 hours of manual work per analyst through automated collection, validation, and reconciliation.",
    tech: ["Python", "SPED Parsing", "Web Scraping", "Excel Reports"],
    links: [
      {
        label: "Read case study",
        href: "/projects/sped-automation",
        kind: "internal",
      },
    ],
    featured: true,
  },
  {
    title: "NFSe XML Automation Pipeline",
    subtitle: "Government API integration, XML processing, and audit workflows",
    group: "automation",
    visibility: "Private",
    status: "Case Study",
    order: 20,
    description:
      "Automated pipeline for downloading NFSe XML documents through government APIs, organizing files by client and period, extracting invoice data, and generating Excel reports for auditing and reconciliation.",
    impact:
      "Standardized document organization and reduced manual verification effort across multi-client invoice workflows.",
    tech: ["Python", "APIs", "XML", "Data Processing", "Excel Reports"],
    links: [
      {
        label: "Read case study",
        href: "/projects/nfse-xml-automation",
        kind: "internal",
      },
    ],
  },

  {
    title: "Digital Certificate Compliance Monitoring",
    subtitle:
      "Certificate metadata extraction, validation, and compliance visibility",
    group: "automation",
    visibility: "Private",
    status: "Case Study",
    order: 40,
    description:
      "Automation workflow that scans client directories, extracts certificate metadata, validates integrity and passwords, and presents compliance status through internal dashboards.",
    impact:
      "Improved visibility over certificate validity and reduced operational risk in certificate compliance monitoring workflows.",
    tech: ["Python", "Data Processing", "Validation", "Dashboards", "Next.js"],
    links: [
      {
        label: "Read case study",
        href: "/projects/digital-certificate-compliance",
        kind: "internal",
      },
    ],
  },

  {
    title: "CPU Monitor (Real-time WebSocket)",
    subtitle: "System metrics backend and real-time dashboard",
    group: "personal",
    visibility: "Planned",
    status: "Roadmap",
    order: 1,
    description:
      "Collect CPU, RAM, and process metrics and stream updates in real time via WebSocket to a clean dashboard UI.",
    impact:
      "Planned as a hands-on project for real-time systems, observability basics, and deployment practice.",
    tech: ["Python", "FastAPI", "WebSocket", "Docker", "Next.js"],
  },
  {
    title: "GitHub Repository Explorer",
    subtitle: "API integration with search, filters, and clean UX",
    group: "personal",
    visibility: "Planned",
    status: "Roadmap",
    order: 2,
    description:
      "Explore GitHub repositories using the public GitHub API with search, filters, pagination, and a clean interface.",
    impact:
      "Planned as a portfolio project focused on API integration and frontend product thinking.",
    tech: ["Next.js", "TypeScript", "React", "GitHub API"],
  },
  {
    title: "Automation Platform Demo",
    subtitle: "Job runner, API, execution history, and dashboard",
    group: "personal",
    visibility: "Planned",
    status: "Roadmap",
    order: 3,
    description:
      "Public demo of an automation platform with FastAPI jobs, execution history, CSV/Excel outputs, and a dashboard for monitoring runs.",
    impact:
      "Planned as a public-facing example of how automation systems can be structured end to end.",
    tech: ["Python", "FastAPI", "SQL", "Docker", "Next.js"],
  },
];
