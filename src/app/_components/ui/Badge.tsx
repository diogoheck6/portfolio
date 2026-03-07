import React from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "muted" | "outline";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs transition";

  const styles =
    variant === "muted"
      ? "border-zinc-800 bg-zinc-900/40 text-zinc-400"
      : variant === "outline"
        ? "border-zinc-700 bg-transparent text-zinc-300"
        : "border-zinc-800 bg-zinc-900/50 text-zinc-300";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
