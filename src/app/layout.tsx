import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diogo Rodrigues | Software Developer",
  description:
    "Software Developer focused on building automation and business systems that reduce manual work and improve operational efficiency.",
  metadataBase: new URL("https://diogo.inf.br"),
  openGraph: {
    title: "Diogo Rodrigues | Software Developer",
    description:
      "Automation & business systems using Python, TypeScript, Node.js and React.",
    url: "https://diogo.inf.br",
    siteName: "Diogo Rodrigues",
    type: "website",
  },
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-300 hover:text-white transition"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {/* ✅ PRO IMPROVEMENT: Accessibility (looks pro) */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-zinc-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        {/* ✅ PRO IMPROVEMENT: Fixed navbar + consistent container */}
        <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Diogo Rodrigues
            </Link>

            <nav className="flex items-center gap-6">
              <NavLink href="/" label="Home" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/about" label="About" />
              <a
                href="https://github.com/diogoheck6"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/diogo-rodrigues-41a56b388/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </header>

        <main id="content" className="mx-auto max-w-5xl px-6">
          {children}
        </main>

        {/* ✅ PRO IMPROVEMENT: Clean footer */}
        <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-zinc-600">
          <div className="border-t border-zinc-800 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Diogo Rodrigues</span>
            <span>Automation • Business Systems • Clean Architecture</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
