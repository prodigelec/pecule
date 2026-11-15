type LogoProps = {
  /** Taille de l'icône en pixels. */
  size?: number;
  /** Affiche « Pécule » à côté de l'icône. */
  withWordmark?: boolean;
  className?: string;
};

/** Icône Pécule : P en anneau avec le point orange. Couleurs fixes (identité de marque). */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-hidden
      className="shrink-0"
    >
      <rect width="512" height="512" rx="116" fill="#1f4d3a" />
      <path
        d="M164 396 V208 A92 92 0 1 1 256 300 H224"
        fill="none"
        stroke="#ffffff"
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="256" cy="208" r="30" fill="#ee8434" />
    </svg>
  );
}

export function Logo({ size = 32, withWordmark = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withWordmark ? (
        <span
          className="font-display font-extrabold tracking-tight text-primary"
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
