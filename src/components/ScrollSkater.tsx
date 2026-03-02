import { useEffect, useRef, useState } from "react";
import SkaterSVG from "./SkaterSVG";

const ScrollSkater = () => {
  const [pos, setPos] = useState({ x: 50, y: 70 });
  const [facingRight, setFacingRight] = useState(true);
  const lastX = useRef(50);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth) * 100;
      const yPct = (e.clientY / window.innerHeight) * 100;
      setFacingRight(xPct >= lastX.current);
      lastX.current = xPct;
      setPos({ x: xPct, y: yPct });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: `translate(-50%, -50%) scaleX(${facingRight ? 1 : -1})`,
      }}
    >
      <SkaterSVG className="w-16 h-22 md:w-20 md:h-28 drop-shadow-[0_0_12px_hsl(195_100%_50%/0.4)]" />
    </div>
  );
};

export default ScrollSkater;
