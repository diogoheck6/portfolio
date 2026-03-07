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

export default function PayrollValidationAnalyticsProject() {
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
            Payroll Operations
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            Validation & Dashboards
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Payroll Validation & Analytics System
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Internal system combining Python-based payroll validation workflows,
          Excel reconciliation outputs, and web dashboards to compare ERP
          results with rule-based calculations and expose operational metrics in
          a more usable way.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
          <p className="text-sm font-medium text-white">Outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Reduced spreadsheet-heavy review work by centralizing payroll
            validation outputs, reconciliation flows, and operational visibility
            through internal tooling.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Python",
            "SQL",
            "Excel Reports",
            "React",
            "TypeScript",
            "Next.js",
          ].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Section title="Context">
          <p>
            Payroll operations often depend on comparing ERP-generated values
            with expected calculations derived from business rules, while also
            tracking operational indicators across clients, routines, and
            internal workflows.
          </p>

          <p>
            When this is handled manually, analysts usually rely on multiple
            spreadsheets, exported reports, and repetitive validation steps,
            making the process slower and harder to review consistently.
          </p>
        </Section>

        <Section title="Problem">
          <p>The original workflow had a few recurring pain points:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Manual comparison between ERP outputs and expected payroll rules
            </li>
            <li>Spreadsheet-heavy reconciliation and validation routines</li>
            <li>
              Limited visibility into operational metrics and review status
            </li>
            <li>Higher effort to investigate inconsistencies across reports</li>
          </ul>
        </Section>

        <Section title="Solution">
          <p>
            I worked on a system that combined backend automation and web
            visibility for payroll-related workflows:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Python routines to validate payroll calculations against business
              rules
            </li>
            <li>Integration with ERP and legacy database data sources</li>
            <li>
              Generation of Excel reconciliation reports for structured review
            </li>
            <li>
              Web dashboards built with React, TypeScript, and Next.js to expose
              metrics and validation outputs
            </li>
          </ul>

          <p>
            This made it easier to move from fragmented spreadsheet analysis to
            a more centralized and repeatable operational workflow.
          </p>
        </Section>

        <Section title="Engineering Notes">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Python used for validation logic, automation, and data processing
            </li>
            <li>
              SQL and legacy database integration for operational data access
            </li>
            <li>
              Excel outputs designed for reconciliation and analyst review
            </li>
            <li>
              Next.js and React used for internal dashboards and visualization
            </li>
            <li>
              Architecture centered on practical workflows and operational
              clarity
            </li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Reduced manual review effort in payroll reconciliation routines
            </li>
            <li>Improved visibility into payroll validation workflows</li>
            <li>
              Centralized outputs previously scattered across spreadsheets and
              reports
            </li>
            <li>
              Supported faster investigation of inconsistencies in payroll
              operations
            </li>
          </ul>
        </Section>

        <Section title="Confidentiality">
          <p className="text-sm text-zinc-500">
            This project is documented as a private case study. Source code,
            business rules, client information, and internal datasets are not
            included due to company policies and confidentiality requirements.
          </p>
        </Section>
      </div>
    </section>
  );
}
