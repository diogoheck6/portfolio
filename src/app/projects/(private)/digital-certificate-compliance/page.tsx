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

export default function DigitalCertificateComplianceProject() {
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
            Compliance Monitoring
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-xs text-zinc-300">
            Certificate Validation
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Digital Certificate Compliance Monitoring
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Automation workflow built to scan client directories, extract
          certificate metadata, validate integrity and passwords, and provide
          dashboard visibility over certificate status and compliance-related
          operational risks.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/20 p-5">
          <p className="text-sm font-medium text-white">Outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Improved visibility over certificate validity and reduced
            operational risk by centralizing metadata extraction, validation,
            and compliance-oriented monitoring.
          </p>
        </div>

        <div className="mt-6">
          <TechBadges
            tech={["Python", "Data Processing", "Validation", "Next.js"]}
          />
        </div>

        <Section title="Context">
          <p>
            Teams responsible for operational compliance often need to manage
            digital certificates across multiple clients, keeping track of
            expiration dates, ownership metadata, file integrity, and password
            validity.
          </p>

          <p>
            Without automation, this process usually depends on manually opening
            files, checking metadata, organizing lists, and monitoring status
            through fragmented spreadsheets or directory structures.
          </p>
        </Section>

        <Section title="Problem">
          <p>The manual workflow created several recurring issues:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Low visibility into certificate expiration and status across
              clients
            </li>
            <li>Manual effort to inspect metadata and validate files</li>
            <li>
              Higher risk of missing invalid, expired, or inaccessible
              certificates
            </li>
            <li>
              Difficulties in tracking compliance-related issues operationally
            </li>
          </ul>
        </Section>

        <Section title="Solution">
          <p>
            I worked on an automation workflow that centralized certificate
            inspection and monitoring:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Scanned client directories to locate certificate files</li>
            <li>
              Extracted metadata such as CNPJ, company name, and expiration date
            </li>
            <li>Validated certificate integrity and password access</li>
            <li>
              Organized outputs for compliance-oriented operational review
            </li>
            <li>
              Exposed certificate status through internal dashboard visibility
            </li>
          </ul>

          <p>
            This created a more structured way to monitor certificate health and
            reduce the operational friction of compliance tracking.
          </p>
        </Section>

        <Section title="Engineering Notes">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Python used for file scanning, metadata extraction, and validation
              routines
            </li>
            <li>
              Structured processing flow for certificate status inspection
            </li>
            <li>
              Validation logic focused on integrity, access, and expiration
              tracking
            </li>
            <li>
              Dashboard layer used to improve visibility and operational
              follow-up
            </li>
            <li>
              Designed as an internal workflow for practical compliance
              monitoring
            </li>
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Improved visibility into certificate validity and expiration
              status
            </li>
            <li>Reduced manual effort in certificate inspection workflows</li>
            <li>
              Lowered operational risk around missing or invalid certificates
            </li>
            <li>
              Made compliance monitoring easier to track and review internally
            </li>
          </ul>
        </Section>

        <Section title="Confidentiality">
          <p className="text-sm text-zinc-500">
            This project is documented as a private case study. Source code,
            certificate files, client information, and internal operational
            rules are not included due to company policies and confidentiality
            requirements.
          </p>
        </Section>
      </div>
    </section>
  );
}
