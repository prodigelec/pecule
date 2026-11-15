"use client";

import { useEffect, useState } from "react";

/** Id de la section actuellement au milieu de l'écran (pour surligner le lien). */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Bande horizontale au centre de l'écran : une seule section la traverse.
      { rootMargin: "-45% 0px -55% 0px" },
    );
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
