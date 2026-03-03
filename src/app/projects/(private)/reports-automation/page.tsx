import Link from "next/link";

export default function ReportsAutomationProject() {
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
          Government Reports Automation
        </h1>

        <p className="mt-3 text-zinc-400">
          Private project — large-scale automation to download and process
          monthly government/municipal reports.
        </p>

        <p className="mt-10 text-zinc-500 text-sm">
          Under construction — details will be published at a high level (no
          sensitive data).
        </p>
      </div>
    </section>
  );
}
