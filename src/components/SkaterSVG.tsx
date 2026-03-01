interface SkaterSVGProps {
  className?: string;
}

const SkaterSVG = ({ className = "" }: SkaterSVGProps) => {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ice trail */}
      <path
        d="M30 155 Q50 150 70 152 Q90 154 110 150"
        stroke="hsl(195 100% 70% / 0.4)"
        strokeWidth="2"
        strokeDasharray="4 3"
        className="animate-ice-shimmer"
      />
      <path
        d="M20 158 Q45 153 75 155 Q95 157 115 153"
        stroke="hsl(195 100% 60% / 0.2)"
        strokeWidth="1"
      />

      {/* Skate blade */}
      <path
        d="M45 148 L75 146"
        stroke="hsl(200 20% 80%)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Boot */}
      <path
        d="M50 148 L50 138 Q50 135 53 135 L62 135 Q65 135 65 138 L65 146"
        fill="hsl(210 40% 20%)"
        stroke="hsl(210 30% 30%)"
        strokeWidth="0.5"
      />

      {/* Extended leg (skating pose) */}
      <path
        d="M57 135 L55 115"
        stroke="hsl(210 40% 25%)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Back leg extended */}
      <path
        d="M57 120 L78 135"
        stroke="hsl(210 40% 25%)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Back skate */}
      <path
        d="M76 137 L88 135"
        stroke="hsl(200 20% 80%)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Torso */}
      <path
        d="M55 115 L52 85"
        stroke="hsl(195 80% 40%)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Jacket detail */}
      <path
        d="M48 95 L56 95"
        stroke="hsl(195 100% 50% / 0.5)"
        strokeWidth="1"
      />

      {/* Arms - graceful pose */}
      <path
        d="M52 95 L30 80"
        stroke="hsl(195 80% 40%)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M52 95 L75 78"
        stroke="hsl(195 80% 40%)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Hands */}
      <circle cx="28" cy="79" r="3" fill="hsl(30 50% 75%)" />
      <circle cx="77" cy="77" r="3" fill="hsl(30 50% 75%)" />

      {/* Neck */}
      <path
        d="M52 85 L52 78"
        stroke="hsl(30 50% 75%)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="52" cy="70" r="10" fill="hsl(30 50% 75%)" />

      {/* Hair / helmet */}
      <path
        d="M42 68 Q42 58 52 57 Q62 58 62 68"
        fill="hsl(210 50% 20%)"
      />

      {/* Scarf flowing */}
      <path
        d="M48 82 Q40 85 35 90 Q32 95 38 93"
        stroke="hsl(195 100% 50%)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-ice-shimmer"
      />

      {/* Ice sparkles */}
      <circle cx="25" cy="152" r="1.5" fill="hsl(195 100% 80%)" className="animate-ice-shimmer" opacity="0.6" />
      <circle cx="90" cy="149" r="1" fill="hsl(195 100% 80%)" className="animate-ice-shimmer" opacity="0.5" />
      <circle cx="60" cy="155" r="1.2" fill="hsl(200 60% 85%)" className="animate-ice-shimmer" opacity="0.4" />
    </svg>
  );
};

export default SkaterSVG;
