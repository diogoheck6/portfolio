// src/app/layout.tsx
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
  title: "Diogo Rodrigues | Python Automation Engineer",
  description:
    "Python Automation Engineer building automation and business systems that reduce manual work and improve operational efficiency.",
  metadataBase: new URL("https://diogo.inf.br"),
  openGraph: {
    title: "Diogo Rodrigues | Python Automation Engineer",
    description:
      "Automation & business systems using Python, APIs, SQL, TypeScript and Next.js.",
    url: "https://diogo.inf.br",
    siteName: "Diogo Rodrigues",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-zinc-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="content" className="mx-auto max-w-5xl px-6">
          {children}
        </main>

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
