import Link from "next/link";
import { TechBadges } from "@/app/_components/projects/TechBadges";

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

export default function NFSeXmlAutomationProject() {
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
            Government API Integration
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            XML Processing
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          NFSe XML Automation Pipeline
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Automation pipeline built to download NFSe XML documents through a
          federal government API, organize files by client and period, extract
          relevant invoice fields, and generate structured Excel outputs for
          auditing and reconciliation workflows.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
          <p className="text-sm font-medium text-white">Outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Reduced manual effort in multi-client NFSe collection and
            organization workflows, while standardizing outputs for faster
            auditing, reconciliation, and operational review.
          </p>
        </div>

        <div className="mt-6">
          <TechBadges
            tech={[
              "Python",
              "APIs",
              "XML",
              "Data Pipelines",
              "Excel Reports",
              "Next.js",
            ]}
          />
        </div>

        <Section title="Context">
          <p>
            Accounting and fiscal teams often need to retrieve electronic
            service invoice documents for multiple clients, organize the files
            correctly, extract key invoice information, and prepare the data for
            auditing and reconciliation.
          </p>

          <p>
            When handled manually, this process becomes repetitive and fragile:
            downloading documents one by one, organizing folders, validating
            files, and moving data into spreadsheets for review consumes time
            and increases the chance of inconsistency.
          </p>
        </Section>

        <Section title="Problem">
          <p>The original workflow created several operational bottlenecks:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Manual retrieval of NFSe XML documents for multiple clients</li>
            <li>Repetitive file organization by client and period</li>
            <li>Manual extraction of invoice fields for auditing workflows</li>
            <li>Greater risk of inconsistency in high-volume routines</li>
          </ul>
        </Section>

        <Section title="Solution">
          <p>
            I built an automation pipeline that handled the main steps of the
            process in a more reliable and repeatable way:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Integrated with a federal government API to retrieve NFSe XML
              documents
            </li>
            <li>
              Organized downloaded files in a structured layout by client and
              period
            </li>
            <li>Parsed XML documents and normalized key invoice fields</li>
            <li>
              Generated Excel outputs designed for auditing and reconciliation
            </li>
            <li>
              Supported operational visibility through a web interface for run
              monitoring and output navigation
            </li>
          </ul>

          <p>
            The result was a workflow that reduced manual handling while making
            document retrieval and invoice verification more standardized across
            clients.
          </p>
        </Section>

        <Section title="Engineering Notes">
          <ul className="list-disc space-y-2 pl-5">
            <li>API integration used for document retrieval</li>
            <li>XML parsing and normalization pipeline for invoice fields</li>
            <li>
              Structured directory organization for operational consistency
            </li>
            <li>Excel report generation for audit-friendly review</li>
            <li>Web interface with Next.js for visibility and navigation</li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Reduced manual effort in collecting and organizing NFSe documents
            </li>
            <li>Standardized outputs for faster auditing and reconciliation</li>
            <li>Improved consistency in repeatable multi-client workflows</li>
            <li>Made invoice data easier to review and track operationally</li>
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
