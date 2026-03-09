"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function OrbitImpact() {
  const container = useRef(null);
  const ellipsePath = useRef(null);
  const circlePath = useRef(null);

  useLayoutEffect(() => {
    const outerItems = gsap.utils.toArray(".outer-item");
    const innerItems = gsap.utils.toArray(".inner-item");

    const ctx = gsap.context(() => {
      // OUTER ORBIT (ELLIPSE)
      outerItems.forEach((item, i) => {
        gsap.to(item, {
          motionPath: {
            path: ellipsePath.current,
            align: ellipsePath.current,
            autoRotate: true,
            start: i * 0.25,
            end: i * 0.25 + 1,
          },
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "+=1200",
            scrub: true,
          },
        });
      });

      // INNER ORBIT (CIRCLE)
      innerItems.forEach((item, i) => {
        gsap.to(item, {
          motionPath: {
            path: circlePath.current,
            align: circlePath.current,
            autoRotate: true,
            start: i * 0.5,
            end: i * 0.5 + 1,
          },
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "+=1200",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="h-[160vh] flex items-center justify-center bg-[#e9e4df]"
    >
      <div className="relative w-150 h-150">
        <svg className="absolute w-full h-full">
          {/* Outer Elliptical Orbit */}

          <path
            ref={ellipsePath}
            d="M80,300 a220,140 0 1,0 440,0 a220,140 0 1,0 -440,0"
            fill="none"
            stroke="#999"
            strokeDasharray="4 6"
          />

          {/* Inner Circular Orbit */}

          <path
            ref={circlePath}
            d="M300,180 a120,120 0 1,0 0.1,0"
            fill="none"
            stroke="#bbb"
            strokeDasharray="3 5"
          />
        </svg>

        {/* OUTER ORBIT ITEMS */}

        <div className="outer-item absolute text-xl">▲</div>
        <div className="outer-item absolute text-xl">▲</div>
        <div className="outer-item absolute text-xl">▲</div>
        <div className="outer-item absolute text-xl">▲</div>

        {/* INNER ORBIT ITEMS */}

        <div className="inner-item absolute text-lg">●</div>
        <div className="inner-item absolute text-lg">●</div>

        {/* CENTER TEXT */}

        <div className="absolute inset-0 flex items-center justify-center text-center px-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Sustainably sourced wood turned into paper
            </h2>

            <p className="text-gray-600 text-sm">
              Our packaging is responsibly sourced to protect forests and
              support sustainability standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
