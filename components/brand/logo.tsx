type Variant = "default" | "inverse";

type LogoProps = {
  /** Taille de l'icône en pixels. */
  size?: number;
  /** Affiche « Pécule » à côté de l'icône. */
  withWordmark?: boolean;
  /** `inverse` : pour un fond vert sapin (carré blanc, texte blanc). */
  variant?: Variant;
  className?: string;
};

// Couleurs fixes : identité de marque, indépendante du thème clair/sombre.
const markColors: Record<Variant, { tile: string; stroke: string }> = {
  default: { tile: "#1f4d3a", stroke: "#ffffff" },
  inverse: { tile: "#ffffff", stroke: "#1f4d3a" },
};

/** Icône Pécule : P en anneau avec le point orange. */
export function LogoMark({ size = 32, variant = "default" }: { size?: number; variant?: Variant }) {
  const { tile, stroke } = markColors[variant];
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} aria-hidden className="shrink-0">
      <rect width="512" height="512" rx="116" fill={tile} />
      <path
        d="M164 396 V208 A92 92 0 1 1 256 300 H224"
        fill="none"
        stroke={stroke}
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="256" cy="208" r="30" fill="#ee8434" />
    </svg>
  );
}

export function Logo({ size = 32, withWordmark = true, variant = "default", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} variant={variant} />
      {withWordmark ? (
        <span
          className={`font-display font-extrabold tracking-tight ${
            variant === "inverse" ? "text-on-nav" : "text-primary"
          }`}
          style={{ fontSize: size * 0.75 }}
        >
          Pécule
        </span>
      ) : (
        <span className="sr-only">Pécule</span>
      )}
    </span>
  );
}
