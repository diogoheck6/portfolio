type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string;
  status?: "Private" | "Public" | "Planned";
  links?: { label: string; href: string }[];
};

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-lg border border-zinc-800 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">{p.title}</h3>
          {p.subtitle ? (
            <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
          ) : null}
        </div>

        {p.status ? (
          <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-400">
            {p.status}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-zinc-400 leading-relaxed">{p.description}</p>

      <p className="mt-4 text-sm text-zinc-500">{p.tech}</p>

      {p.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 text-zinc-300 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const realWorld: Project[] = [
    {
      title: "Accounting Automation Systems",
      subtitle: "Automation & business operations (internal/private)",
      status: "Private",
      description:
        "Designed and implemented Python automation systems for accounting and tax operations. Built cross-referencing tools to parse SPED files and integrate data from government tax authorities and public fiscal databases. Developed large-scale web scraping routines to download and process 1,000+ monthly government reports, automating validation workflows and reducing up to 3 hours of manual work per analyst.",
      tech: "Python • Automation • Data Processing • Web Scraping",
    },
  ];

  const personal: Project[] = [
    {
      title: "Coming soon",
      status: "Planned",
      description:
        "Public projects will be published here with GitHub repositories and live demos.",
      tech: "TypeScript • React • Next.js • Node.js",
    },

    /*
    Future Personal Projects (inspired by Filipe Deschamps)
    1) Markdown Editor (keyboard-first, accessibility)
    2) GitHub Repository Explorer (Octokit API, search/filter)
    3) CPU Monitor (backend metrics + WebSocket real-time UI)
    */
  ];

  const experiments: Project[] = [
    {
      title: "Learning Lab (WIP)",
      status: "Planned",
      description:
        "Small experiments while learning new technologies and patterns (state management, server components, websockets, testing).",
      tech: "React • Next.js • Architecture • Testing",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 text-zinc-400">
          A mix of real-world experience, personal projects, and experiments.
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Real-World Experience</h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Projects built in professional environments. Source code may be
            private.
          </p>

          <div className="mt-5 grid gap-5">
            {realWorld.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Personal Projects</h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Public projects with GitHub links and live demos.
          </p>

          <div className="mt-5 grid gap-5">
            {personal.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Experiments / Learning Lab</h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Small experiments created while learning.
          </p>

          <div className="mt-5 grid gap-5">
            {experiments.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
