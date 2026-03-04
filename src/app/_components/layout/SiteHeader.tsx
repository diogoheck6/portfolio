// src/app/_components/layout/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm text-zinc-300 hover:text-white transition"
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (!panelRef.current) return;
      const target = e.target as Node;
      if (!panelRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Diogo Rodrigues
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-800 p-2 text-zinc-200 hover:border-zinc-700 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95">
          <div ref={panelRef} className="mx-auto max-w-5xl px-6 py-4">
            <div className="flex flex-col gap-3">
              <NavLink href="/" label="Home" onClick={() => setOpen(false)} />
              <NavLink
                href="/projects"
                label="Projects"
                onClick={() => setOpen(false)}
              />
              <NavLink
                href="/about"
                label="About"
                onClick={() => setOpen(false)}
              />
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
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
