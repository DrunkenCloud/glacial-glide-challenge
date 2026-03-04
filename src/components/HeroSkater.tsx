import { useEffect, useRef, useState } from "react";
import SkaterSVG from "./SkaterSVG";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSkater = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: 50, y: 62 });
  const [facingRight, setFacingRight] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPointerInBounds, setIsPointerInBounds] = useState(false);
  const [mobileDurationMs, setMobileDurationMs] = useState(3600);
  const [desktopDurationMs, setDesktopDurationMs] = useState(2800);
  const lastX = useRef(50);
  const desktopAutoDirectionRef = useRef(true);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsPointerInBounds(inBounds);

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
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || isPointerInBounds) {
      return;
    }

    let timeoutId: number;
    let goingRight = desktopAutoDirectionRef.current;

    const randomLeftEdge = () => 3 + Math.random() * 9;
    const randomRightEdge = () => 88 + Math.random() * 9;
    const randomDuration = () => 2200 + Math.random() * 1800;
    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));
    const getSlopedY = (xPct: number) => {
      const slopeSign = Math.random() > 0.5 ? 1 : -1;
      const slopeStrength = 14 + Math.random() * 8;
      const centerLine = 46 + (Math.random() - 0.5) * 14;
      const normalizedX = (xPct - 50) / 50;
      const jitter = (Math.random() - 0.5) * 8;
      return clamp(
        centerLine + slopeSign * normalizedX * slopeStrength + jitter,
        12,
        86,
      );
    };

    setVisible(true);

    const skateToNextEdge = () => {
      const nextX = goingRight ? randomRightEdge() : randomLeftEdge();
      const nextY = getSlopedY(nextX);
      const duration = randomDuration();

      setFacingRight(goingRight);
      setDesktopDurationMs(duration);
      setPos({ x: nextX, y: nextY });

      goingRight = !goingRight;
      desktopAutoDirectionRef.current = goingRight;
      timeoutId = window.setTimeout(skateToNextEdge, duration);
    };

    timeoutId = window.setTimeout(skateToNextEdge, 150);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobile, isPointerInBounds]);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    let timeoutId: number;
    let goingRight = true;

    const randomLeftEdge = () => 2 + Math.random() * 10;
    const randomRightEdge = () => 88 + Math.random() * 10;
    const randomDuration = () => 3000 + Math.random() * 2400;
    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));
    const getSlopedY = (xPct: number) => {
      const slopeSign = Math.random() > 0.5 ? 1 : -1;
      const slopeStrength = 16 + Math.random() * 10;
      const centerLine = 44 + (Math.random() - 0.5) * 16;
      const normalizedX = (xPct - 50) / 50;
      const jitter = (Math.random() - 0.5) * 10;
      return clamp(
        centerLine + slopeSign * normalizedX * slopeStrength + jitter,
        10,
        88,
      );
    };

    setVisible(true);
    const initialX = randomLeftEdge();
    setPos({ x: initialX, y: getSlopedY(initialX) });
    setFacingRight(true);

    const skateToNextEdge = () => {
      const nextX = goingRight ? randomRightEdge() : randomLeftEdge();
      const nextY = getSlopedY(nextX);
      const duration = randomDuration();

      setFacingRight(goingRight);
      setMobileDurationMs(duration);
      setPos({ x: nextX, y: nextY });

      goingRight = !goingRight;
      timeoutId = window.setTimeout(skateToNextEdge, duration);
    };

    timeoutId = window.setTimeout(skateToNextEdge, 250);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobile]);

  const isAutoSkating = isMobile || !isPointerInBounds;

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 h-1/3 z-0"
    >
      {visible && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transition: isAutoSkating
              ? `left ${isMobile ? mobileDurationMs : desktopDurationMs}ms linear, top ${isMobile ? mobileDurationMs : desktopDurationMs}ms ease-in-out`
              : undefined,
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
