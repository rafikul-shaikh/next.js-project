"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function OrbitSection() {
  const container = useRef(null);

  const texts = [
    {
      title: "Paper recycling to end flexible plastics pollution",
      desc: "Unlike 98% of flexible plastic packages, Nfinite packages are 100% curbside recyclable.",
    },
  ];

  useEffect(() => {
    const arrows = gsap.utils.toArray(".innerArrow");

    arrows.forEach((arrow, i) => {
      gsap.set(arrow, {
        xPercent: -50,
        yPercent: -50,
      });

      gsap.to(arrow, {
        motionPath: {
          path: "#innerPath",
          align: "#innerPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: i * 0.25,
          end: 1 + i * 0.25,
        },
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "+=1500",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={container}
      className="h-[200vh] flex items-center justify-center bg-[#f4f1ee]"
    >
      <div className="relative w-[1600px] h-[800px]">
        {/* SVG ORBITS */}
        <svg className="absolute inset-0 w-full h-full">
          {/* OUTER ELLIPSE */}
          <ellipse
            cx="750"
            cy="400"
            rx="720"
            ry="260"
            stroke="#999"
            strokeDasharray="3 6"
            fill="none"
          />

          {/* INNER CIRCLE PATH */}
          <path
            id="innerPath"
            d="M750,400 m-260,0
               a260,260 0 1,1 520,0
               a260,260 0 1,1 -520,0"
            stroke="#999"
            strokeDasharray="3 6"
            fill="none"
          />
        </svg>

        {/* ARROWS */}
        <div
          className="innerArrow absolute text-xl"
          style={{ top: "400px", left: "500px" }}
        >
          ▲
        </div>
        <div
          className="innerArrow absolute text-xl"
          style={{ top: "400px", left: "500px" }}
        >
          ▲
        </div>
        <div
          className="innerArrow absolute text-xl"
          style={{ top: "400px", left: "500px" }}
        >
          ▲
        </div>
        <div
          className="innerArrow absolute text-xl"
          style={{ top: "400px", left: "500px" }}
        >
          ▲
        </div>

        {/* CENTER TEXT */}
        <div className="absolute top-1/2 left-1/2 w-[380px] -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-xl font-semibold mb-3">{texts[0].title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {texts[0].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
