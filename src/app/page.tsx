import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Software Developer
        </h1>

        <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
          I build automation and business systems that reduce manual work and
          improve operational efficiency.
        </p>

        <p className="mt-3 text-zinc-500 text-sm">
          Python • TypeScript • Node.js • React • Next.js
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-md bg-white text-zinc-950 text-sm font-medium hover:opacity-90 transition"
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="px-4 py-2 rounded-md border border-zinc-800 text-sm text-zinc-200 hover:border-zinc-700 transition"
          >
            About Me
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Focus</p>
            <p className="mt-2 text-sm text-zinc-400">
              Automation & business systems for real operational workflows.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Background</p>
            <p className="mt-2 text-sm text-zinc-400">
              5 years with Python automation and data-processing systems.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 p-5">
            <p className="text-sm font-medium">Now</p>
            <p className="mt-2 text-sm text-zinc-400">
              Expanding into TypeScript/React/Next.js for modern interfaces.
            </p>
          </div>
        </div>

        {/* ✅ Featured Project (pro look) */}
        <div className="mt-14">
          <p className="text-sm font-medium">Featured Project</p>

          <div className="mt-3 rounded-lg border border-zinc-800 p-6">
            <p className="text-lg font-medium">SPED Cross-Check Automation</p>
            <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
              Automated fiscal file downloads, SPED parsing, cross-checking and
              Excel reporting — reducing up to ~3 hours of manual work per
              analyst.
            </p>
            <p className="mt-3 text-zinc-500 text-sm">
              Python • SPED Parsing • Web Scraping • Excel Reports
            </p>

            <div className="mt-5">
              <Link
                href="/projects/sped-automation"
                className="text-sm underline underline-offset-4 text-zinc-300 hover:text-white transition"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          Portfolio under construction — more projects coming soon.
        </p>
      </div>
    </section>
  );
}
