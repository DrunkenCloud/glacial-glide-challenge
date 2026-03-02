import { useEffect, useState } from "react";
import SkaterSVG from "./SkaterSVG";

const ScrollSkater = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topPercent = 2 + scrollPercent * 88; // 2% to 90%

  return (
    <div className="fixed right-0 top-0 bottom-0 w-16 md:w-20 z-40 pointer-events-none hidden md:block">
      {/* Frozen lake strip */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 border-l border-primary/10">
        {/* Ice crack lines */}
        <div className="absolute top-[15%] left-2 right-2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-3" />
        <div className="absolute top-[35%] left-1 right-3 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent -rotate-2" />
        <div className="absolute top-[55%] left-3 right-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-1" />
        <div className="absolute top-[75%] left-2 right-2 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent -rotate-3" />
        <div className="absolute top-[90%] left-1 right-3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-2" />

        {/* Subtle shimmer dots */}
        <div className="absolute top-[20%] left-3 w-1 h-1 rounded-full bg-primary/20 animate-ice-shimmer" />
        <div className="absolute top-[45%] right-3 w-1 h-1 rounded-full bg-primary/20 animate-ice-shimmer" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[70%] left-5 w-1 h-1 rounded-full bg-primary/20 animate-ice-shimmer" style={{ animationDelay: "2s" }} />
      </div>

      {/* Skater */}
      <div
        className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-200 ease-out"
        style={{ top: `${topPercent}%` }}
      >
        <SkaterSVG className="w-12 h-16 md:w-14 md:h-20 drop-shadow-[0_0_10px_hsl(195_100%_50%/0.3)]" />
      </div>
    </div>
  );
};

export default ScrollSkater;
