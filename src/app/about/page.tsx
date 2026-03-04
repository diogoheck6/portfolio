// src/app/about/page.tsx
export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">About</h1>

        <p className="mt-6 text-zinc-400 leading-relaxed">
          I am a Python Automation Engineer focused on building business systems
          that eliminate manual work and improve operational efficiency.
        </p>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          I started my journey in 2021 inside an accounting firm, where I built
          automation tools to parse SPED tax files, scrape government fiscal
          portals, and cross-validate data across multiple public sources.
        </p>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          One of my first automation systems reduced up to ~3 hours of manual
          work per analyst by automating data collection, validation, and Excel
          reporting for fiscal reconciliation.
        </p>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          Over the past years I have built automation pipelines, RPA workflows
          in legacy ERP environments, and internal dashboards that help teams
          monitor processes and make faster decisions. I also use TypeScript,
          React and Next.js to build web interfaces that complement automation
          systems.
        </p>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          My goal is simple: build reliable, maintainable systems that create
          measurable impact in real business operations.
        </p>
      </div>
    </section>
  );
}
