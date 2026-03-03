import Link from "next/link";
// import { ProjectGallery } from "@/app/_components/ProjectGallery";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-zinc-400 leading-relaxed">{children}</div>
    </section>
  );
}

export default function SpedAutomationProject() {
  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <Link
          href="/projects"
          className="text-sm text-zinc-400 hover:text-white transition inline-flex items-center gap-2"
        >
          <span aria-hidden>←</span>
          Back to Projects
        </Link>

        <h1 className="mt-6 text-3xl font-semibold">
          SPED Cross-Check Automation
        </h1>

        <p className="mt-3 text-zinc-400">
          Private project — automation to download, parse and validate fiscal
          data, reducing manual work.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Python",
            "Automation",
            "SPED Parsing",
            "Web Scraping",
            "Excel Reports",
          ].map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <Section title="Problem">
          <p>
            Analysts needed to collect fiscal files from government portals,
            parse SPED data, and cross-check information across multiple
            sources. The workflow was repetitive, time-consuming, and prone to
            human error.
          </p>
        </Section>

        <Section title="Solution">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Automated the download of fiscal files from government sources
              (web scraping).
            </li>
            <li>Parsed SPED files and normalized the data for validation.</li>
            <li>
              Cross-referenced SPED data with external sources and generated
              Excel reports with inconsistencies and insights.
            </li>
          </ul>
        </Section>

        <Section title="Tech">
          <ul className="list-disc pl-5 space-y-2">
            <li>Python for automation, parsing and data processing</li>
            <li>Web scraping routines for government portals</li>
            <li>Excel report generation and validation pipelines</li>
            <li>Clean, maintainable architecture principles</li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced up to ~3 hours of manual work per analyst</li>
            <li>Improved reliability of validation workflows</li>
            <li>Reduced repetitive tasks and human error</li>
          </ul>
        </Section>

        <Section title="Notes">
          <p className="text-zinc-500 text-sm">
            Source code is private due to company policies. This page describes
            the system at a high level without exposing internal data, clients,
            or proprietary details.
          </p>
        </Section>

        {/*
        Optional Gallery (mocked/anonymized)
        <ProjectGallery
          images={[
            { src: "/projects/sped/mock-1.png", alt: "Mock validation report" },
            { src: "/projects/sped/mock-2.png", alt: "Excel insights" },
          ]}
        />
        */}
      </div>
    </section>
  );
}
