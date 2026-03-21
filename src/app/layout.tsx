import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/app/_components/layout/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diogo Rodrigues | Software Engineer",
  description:
    "Software Engineer focused on Python automation, business systems, APIs, data pipelines, and modern web dashboards with TypeScript and Next.js.",
  metadataBase: new URL("https://diogo.inf.br"),
  openGraph: {
    title: "Diogo Rodrigues | Software Engineer",
    description:
      "Python automation, business systems, APIs, data pipelines, and modern web dashboards with TypeScript and Next.js.",
    url: "https://diogo.inf.br",
    siteName: "Diogo Rodrigues",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diogo Rodrigues | Software Engineer",
    description:
      "Software Engineer focused on Python automation, business systems, APIs, data pipelines, and modern web dashboards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />
          <SiteHeader />

          <main id="content" className="mx-auto max-w-5xl px-6">
            {children}
          </main>

          <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-zinc-600">
            <div className="flex flex-col gap-2 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Diogo Rodrigues</span>
              <span>
                Python • Automation • APIs • Data Pipelines • Business Systems
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
