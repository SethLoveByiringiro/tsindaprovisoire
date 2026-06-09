interface LogoProps {
  size?: number;
  className?: string;
}

/** Hex road sign + steering wheel + checkmark — Tsinda Provisoire brand mark */
export default function Logo({ size = 64, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Tsinda Provisoire logo"
    >
      <rect width="64" height="64" rx="14" fill="#0a0a0f" />
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="12"
        stroke="#00ff88"
        strokeWidth="1"
        opacity="0.35"
      />
      <polygon
        points="32,7 51,18 51,38 32,49 13,38 13,18"
        fill="#1a1a2e"
        stroke="#ffe66d"
        strokeWidth="3"
      />
      <circle cx="32" cy="27" r="10" stroke="#00d4ff" strokeWidth="2" fill="#0a0a0f" />
      <circle cx="32" cy="27" r="3" fill="#00d4ff" />
      <path
        d="M32 20v2.5M32 31.5v2.5M25 22.5l1.8 1.8M37.2 29.7l1.8 1.8M40 27h-2.5M24 27h-2.5M37.2 24.3l-1.8 1.8M25 31.5l1.8 1.8"
        stroke="#00d4ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 35l7 7 15-15"
        stroke="#00ff88"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <Logo size={size} className={className} />;
}
