import { useEffect, useRef, useState } from "react";
import SkaterSVG from "./SkaterSVG";

const HeroSkater = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [facingRight, setFacingRight] = useState(true);
  const [visible, setVisible] = useState(false);
  const lastX = useRef(50);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setVisible(inBounds);

      if (inBounds) {
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;
        setFacingRight(xPct >= lastX.current);
        lastX.current = xPct;
        setPos({ x: xPct, y: yPct });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 right-0 h-1/3 z-20">
      {visible && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: `translate(-50%, -50%) scaleX(${facingRight ? 1 : -1})`,
          }}
        >
          <SkaterSVG className="w-16 h-22 md:w-20 md:h-28 drop-shadow-[0_0_12px_hsl(195_100%_50%/0.4)]" />
        </div>
      )}
    </div>
  );
};

export default HeroSkater;
