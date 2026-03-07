import Link from "next/link";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-400">
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 px-2.5 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function SpedAutomationProject() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <span aria-hidden>←</span>
          Back to Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            Private Case Study
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            Accounting Operations
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            Python Automation
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          SPED Cross-Check Automation
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Automation system built to parse SPED tax files, collect fiscal data
          from government portals, cross-validate multiple datasets, and
          generate Excel reconciliation reports for accounting workflows.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
          <p className="text-sm font-medium text-white">Outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Reduced up to{" "}
            <span className="font-medium text-zinc-300">~3 hours</span> of
            manual work per analyst by automating collection, validation, and
            reconciliation steps that were previously repetitive and
            error-prone.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Python",
            "SPED Parsing",
            "Web Scraping",
            "Data Validation",
            "Excel Reports",
            "Business Automation",
          ].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Section title="Context">
          <p>
            In accounting and fiscal operations, analysts often need to compare
            information from SPED files with external fiscal sources and manual
            reports. This process is repetitive, detail-heavy, and highly
            sensitive to inconsistencies.
          </p>

          <p>
            Before automation, much of the workflow depended on manually
            collecting data, interpreting fiscal files, validating information
            across sources, and organizing results into spreadsheets for review.
          </p>
        </Section>

        <Section title="Problem">
          <p>The original workflow created three main issues:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>High manual effort for recurring validation routines</li>
            <li>Greater exposure to human error during reconciliation</li>
            <li>Slow turnaround for analysts handling multiple clients</li>
          </ul>
        </Section>

        <Section title="Solution">
          <p>
            I built an automation workflow in Python that handled the critical
            steps of the process end to end:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Parsing and normalizing SPED fiscal data</li>
            <li>
              Collecting complementary fiscal information from government
              portals
            </li>
            <li>Cross-validating data across multiple sources</li>
            <li>
              Generating Excel reconciliation reports for operational analysis
            </li>
          </ul>

          <p>
            The goal was not only speed, but also consistency: turning a
            repetitive validation routine into a more reliable and repeatable
            process.
          </p>
        </Section>

        <Section title="Engineering Notes">
          <ul className="list-disc space-y-2 pl-5">
            <li>Python used for parsing, automation, and data processing</li>
            <li>Web scraping routines for public fiscal portals</li>
            <li>
              Structured transformation flow for validation and reconciliation
            </li>
            <li>Excel output designed for operational review by analysts</li>
            <li>Architecture focused on maintainability and practical reuse</li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc space-y-2 pl-5">
            <li>Reduced up to ~3 hours of manual work per analyst</li>
            <li>Improved consistency in reconciliation workflows</li>
            <li>Reduced repetitive operational effort</li>
            <li>
              Made validation outputs easier to review and share internally
            </li>
          </ul>
        </Section>

        <Section title="Confidentiality">
          <p className="text-sm text-zinc-500">
            This project is documented as a private case study. Source code,
            internal rules, client information, and sensitive datasets are not
            included due to company policies and confidentiality requirements.
          </p>
        </Section>
      </div>
    </section>
  );
}
