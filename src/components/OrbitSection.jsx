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
    {
      title: "Technology that replaces plastic",
      desc: "Our barrier paper replaces flexible plastics in packaging supply chains.",
    },
    {
      title: "Designed for circular economy",
      desc: "Products remain fully recyclable within existing paper streams.",
    },
    {
      title: "Sustainable packaging future",
      desc: "Reducing landfill and plastic pollution worldwide.",
    },
  ];

  useEffect(() => {
    const arrows = gsap.utils.toArray(".innerArrow");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "+=1500",
        scrub: true,
      },
    });

    tl.to(arrows, {
      motionPath: {
        path: "#innerPath",
        align: "#innerPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      stagger: {
        each: 0.25,
      },
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={container}
      className="h-[200vh] flex items-center justify-center bg-[#f4f1ee]"
    >
      <div className="relative w-[1200px] h-[600px]">
        {/* SVG ORBITS */}
        <svg className="absolute inset-0 w-full h-full">
          {/* OUTER ELLIPSE */}
          <ellipse
            cx="600"
            cy="300"
            rx="550"
            ry="200"
            stroke="#999"
            strokeDasharray="3 6"
            fill="none"
          />

          {/* INNER CIRCLE */}
          <circle
            id="innerPath"
            cx="600"
            cy="300"
            r="200"
            stroke="#999"
            strokeDasharray="3 6"
            fill="none"
          />
        </svg>

        {/* ARROWS */}
        <img
          src="/arrow.svg"
          className="innerArrow absolute w-[18px] h-[18px]"
        />
        <img
          src="/arrow.svg"
          className="innerArrow absolute w-[18px] h-[18px]"
        />
        <img
          src="/arrow.svg"
          className="innerArrow absolute w-[18px] h-[18px]"
        />
        <img
          src="/arrow.svg"
          className="innerArrow absolute w-[18px] h-[18px]"
        />

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
