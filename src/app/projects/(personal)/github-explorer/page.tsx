import Link from "next/link";

function Badge({ text }: { text: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-300">
      {text}
    </span>
  );
}

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

export default function GitHubExplorerProject() {
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
          GitHub Repository Explorer
        </h1>

        <p className="mt-3 text-zinc-400">
          Personal project — explore GitHub repositories using the public GitHub
          API with search, filters and a clean UI.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge text="Next.js" />
          <Badge text="TypeScript" />
          <Badge text="React" />
          <Badge text="GitHub API" />
          <Badge text="UI/UX" />
        </div>

        {/* Placeholder links */}
        <div className="mt-6 flex flex-wrap gap-4">
          <span className="text-sm underline underline-offset-4 text-zinc-600 cursor-not-allowed">
            Live demo (coming soon)
          </span>

          <span className="text-sm underline underline-offset-4 text-zinc-600 cursor-not-allowed">
            Repository (coming soon)
          </span>
        </div>

        <Section title="Goal">
          <p>
            Build a practical project to practice real-world API consumption, UI
            state management, loading/error handling, and search/filter UX.
          </p>
        </Section>

        <Section title="Planned Features">
          <ul className="list-disc pl-5 space-y-2">
            <li>Search repositories by keyword</li>
            <li>Filter by language, stars, forks, updated date</li>
            <li>Pagination and debounced search</li>
            <li>Repository details view</li>
            <li>Responsive layout and accessible UI</li>
          </ul>
        </Section>

        <Section title="Implementation Checklist (organic)">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Create a simple search page with an input + submit button (no
              debounce yet).
            </li>
            <li>Fetch data from GitHub Search API and render a list.</li>
            <li>Add loading and error states (empty state too).</li>
            <li>
              Add filters (language, stars) and keep state in URL query params.
            </li>
            <li>Add pagination (page + per_page) and UX improvements.</li>
            <li>Create a details page for a repo (README preview optional).</li>
            <li>Add tests for the API layer + a couple of UI tests.</li>
            <li>Deploy demo and link the repo.</li>
          </ol>
        </Section>

        <Section title="Notes">
          <p className="text-zinc-500 text-sm">
            Inspired by project ideas that emphasize real API integration and
            strong UX fundamentals.
          </p>
        </Section>
      </div>
    </section>
  );
}
