"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      className="inline-flex items-center gap-2 rounded-full border border-on-nav/20 px-4 py-2 text-sm font-medium text-on-nav-muted transition-colors hover:border-on-nav/40 hover:text-on-nav"
    >
      <ArrowUp aria-hidden className="size-4" />
      Haut de page
    </button>
  );
}
