import Link from "next/link";

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

function Badge({ text }: { text: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-300">
      {text}
    </span>
  );
}

export default function NFSeXmlAutomationProject() {
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
          NFSe XML Automation Pipeline
        </h1>

        <p className="mt-3 text-zinc-400">
          Private project — automation pipeline that downloads NFSe XML
          documents via a federal government API, organizes files per
          client/month, and generates Excel reports for auditing and
          reconciliation.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["APIs", "XML", "Data Processing", "Excel Reports", "Next.js"].map(
            (t) => (
              <Badge key={t} text={t} />
            ),
          )}
        </div>

        <Section title="Problem">
          <p>
            The workflow required downloading and organizing NFSe XML documents
            for multiple clients, then extracting key invoice fields into a
            structured format for manual auditing and reconciliation. The manual
            process was time-consuming and error-prone.
          </p>
        </Section>

        <Section title="Solution">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Integrated with a federal government API to fetch NFSe XML
              documents.
            </li>
            <li>
              Organized files in a structured directory layout (client/month).
            </li>
            <li>
              Parsed XML documents and generated Excel reports with normalized
              invoice fields for auditing.
            </li>
            <li>
              Provided a dashboard interface to monitor runs and outputs (high
              level).
            </li>
          </ul>
        </Section>

        <Section title="Tech">
          <ul className="list-disc pl-5 space-y-2">
            <li>API integration for document retrieval</li>
            <li>XML parsing and normalization pipelines</li>
            <li>Excel report generation for audit-friendly outputs</li>
            <li>Web interface (Next.js) for visibility and navigation</li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Reduced manual effort to collect and organize NFSe documents
            </li>
            <li>Standardized outputs for faster auditing and reconciliation</li>
            <li>Improved reliability by automating repeatable steps</li>
          </ul>
        </Section>

        <Section title="Notes">
          <p className="text-zinc-500 text-sm">
            Source code is private due to company policies. This page describes
            the system at a high level without exposing internal data, clients,
            or proprietary details.
          </p>
        </Section>
      </div>
    </section>
  );
}
