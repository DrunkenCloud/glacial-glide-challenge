import { useEffect, useState } from "react";
import SkaterSVG from "./SkaterSVG";

const ScrollSkater = () => {
  const [mouseX, setMouseX] = useState(50); // percentage
  const [scrollY, setScrollY] = useState(0);
  const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    let lastX = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      setFacingRight(xPercent >= lastX);
      lastX = xPercent;
      setMouseX(xPercent);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Map scroll to vertical position (10% to 85% of viewport)
  const docHeight = typeof document !== "undefined"
    ? document.documentElement.scrollHeight - window.innerHeight
    : 1;
  const scrollPercent = docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0;
  const topPercent = 10 + scrollPercent * 75;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-[left] duration-150 ease-out"
      style={{
        top: `${topPercent}vh`,
        left: `${mouseX}%`,
        transform: `translateX(-50%) scaleX(${facingRight ? 1 : -1})`,
      }}
    >
      <SkaterSVG className="w-16 h-22 md:w-20 md:h-28 drop-shadow-[0_0_12px_hsl(195_100%_50%/0.4)]" />
      {/* Ice trail line below skater */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
};

export default ScrollSkater;
