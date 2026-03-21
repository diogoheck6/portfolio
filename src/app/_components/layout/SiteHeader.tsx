"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm transition ${
        active ? "text-white" : "text-zinc-400 hover:text-white"
      }`}
    >
      {label}

      {active && (
        <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-white" />
      )}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-white">
            Diogo Rodrigues
          </span>

          <span className="text-[11px] text-zinc-500 transition group-hover:text-zinc-400">
            Financial Systems · Accounting Automation
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about" label="About" />

          <a
            href="https://github.com/diogoheck6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-zinc-400 transition hover:text-white"
          >
            <Github size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/diogo-rodrigues-41a56b388/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-zinc-400 transition hover:text-white"
          >
            <Linkedin size={16} />
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-zinc-800 p-2 text-zinc-200 transition hover:border-zinc-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 md:hidden">
          <div ref={panelRef} className="mx-auto max-w-5xl px-6 py-5">
            <div className="flex flex-col gap-4 text-sm">
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

              <div className="mt-2 flex items-center gap-4">
                <a
                  href="https://github.com/diogoheck6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/diogo-rodrigues-41a56b388/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
