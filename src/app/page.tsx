export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Diogo Rodrigues
      </h1>

      <p className="mt-4 text-zinc-400 text-lg max-w-xl">
        Software Developer focused on automation and business systems.
      </p>

      <p className="mt-2 text-zinc-500 text-sm">
        Python • TypeScript • Node.js • React
      </p>

      <div className="mt-8 flex gap-6">
        <a
          href="https://www.linkedin.com/in/diogo-rodrigues-41a56b388/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/diogoheck6"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          GitHub
        </a>
      </div>

      <p className="mt-10 text-xs text-zinc-600">
        Portfolio under construction — projects coming soon.
      </p>
    </main>
  );
}
