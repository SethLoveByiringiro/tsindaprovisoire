interface LogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

/** Hex road sign + checkmark — Tsindaprovisoire brand mark */
export default function Logo({ size = 64, className = "", glow = true }: LogoProps) {
  const id = `logo-glow-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {glow && (
        <defs>
          <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      <rect width="64" height="64" rx="14" fill="#0a0a0f" />
      <polygon
        points="32,8 50,18 50,38 32,48 14,38 14,18"
        fill="#12121a"
        stroke="#ffe66d"
        strokeWidth="2.5"
        filter={glow ? `url(#${id})` : undefined}
      />
      <circle cx="32" cy="28" r="9" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.85" />
      <circle cx="32" cy="28" r="2.5" fill="#00d4ff" opacity="0.9" />
      <path
        d="M32 22v3M32 31v3M26.5 23.5l2 2M35.5 30.5l2 2M37.5 28h-3M27.5 28h-3M35.5 25.5l-2 2M26.5 32.5l2 2"
        stroke="#00d4ff"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M22 34l6 6 14-14"
        stroke="#00ff88"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={glow ? `url(#${id})` : undefined}
      />
    </svg>
  );
}

export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <Logo size={size} className={className} glow={false} />;
}
