'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { usePathname } from 'next/navigation';

const AnimationDiv = () => {
    const pathname = usePathname();
    console.log('pathname::: ', pathname);
    const shutterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shutter = shutterRef.current;

        if (shutter) {
            gsap.fromTo(
                shutter,
                {
                    height: "100%",
                    opacity: "0.9"
                },
                {
                    height: "0%",
                    duration: 0.7,
                    ease: "power2.out"
                }
            )
        }
    }, [])
    return (
        <div ref={shutterRef}
            className={`absolute inset-0 ${['/projects', "/contact"].includes(pathname) ? 'bg-[--offwhite]' : "bg-[--charcoal]"}  z-[1]`}>

        </div>
    )
}

export default AnimationDiv