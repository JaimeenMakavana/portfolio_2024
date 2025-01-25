"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const AnimationDiv = ({
  background,
  color,
}: {
  background: string;
  color: string;
}) => {
  const pathname = usePathname();
  const shutterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shutter = shutterRef.current;

    if (shutter) {
      gsap.fromTo(
        shutter,
        {
          height: "100%",
          opacity: "0.9",
        },
        {
          height: "0%",
          duration: 0.7,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <div
      ref={shutterRef}
      className={`absolute inset-0  z-[1]`}
      style={{ background: background, color: color }}
    ></div>
  );
};

export default AnimationDiv;
