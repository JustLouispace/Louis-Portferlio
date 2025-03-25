"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  duration = 60,
  reverse = false,
  pulse = false,
  twinkle = false
}: PropsWithChildren<{ 
  size: number; 
  rotation: number;
  duration?: number;
  reverse?: boolean;
  pulse?: boolean;
  twinkle?: boolean;
}>) => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const orbit = orbitRef.current;
    let animationFrame: number;
    let startTime: number | null = null;
    let rotationAngle = rotation;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed / (duration * 1000)) % 1;
      
      rotationAngle = rotation + (reverse ? -360 : 360) * progress;
      orbit.style.transform = `rotate(${rotationAngle}deg)`;
      
      const childElement = orbit.firstChild as HTMLElement;
      if (childElement) {
        childElement.style.transform = `rotate(${rotationAngle * (reverse ? 1 : -1)}deg)`;
      }

      // Twinkle effect
      if (starRef.current && twinkle) {
        const twinkleIntensity = 0.7 + Math.sin(elapsed / 500) * 0.3;
        starRef.current.style.opacity = `${twinkleIntensity}`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [rotation, duration, reverse, twinkle]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        ref={orbitRef}
        className="size-[800px]"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className="inline-flex" ref={starRef}>
          {children}
        </div>
      </div>
    </div>
  );
};