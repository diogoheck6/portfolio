import React from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "muted";
}) {
  const base =
    "inline-flex items-center text-xs px-2 py-1 rounded-full border transition";

  const styles =
    variant === "muted"
      ? "border-zinc-800 text-zinc-400"
      : "border-zinc-800 text-zinc-300";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
