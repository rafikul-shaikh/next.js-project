"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Impact() {
  const container = useRef(null);

  const texts = [
    {
      title: "Sustainably sourced wood turned into paper",
      desc: "All our packaging is made from FSC or PEFC-certified paper-responsibly sourced to protect forests, support communities, and uphold the highest sustainability standards.",
      Icon: "/image/icon-1.svg",
    },
    {
      title: "A Reduced Manufacturing Carbon footprint",
      desc: "Our coating process operates at low temperature with high energy efficiency, keeping our manufacturing carbon footprint low while avoiding any persistent environmental pollutants.",
      Icon: "/image/icon-2.svg",
    },
    {
      title: "Paper recycling to end flexible plastics pollution",
      desc: "Unlike 98% of flexible plastic packages, which end up in landfills, incinerated, or polluting the environment, Nfinite packages are 100% curbside recyclable in standard paper recycling streams worldwide. That means your packaging can be recycled easily, every time, anywhere.",
      Icon: "/image/icon-3.svg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const arrows = gsap.utils.toArray(".innerArrow");
      const texts = gsap.utils.toArray(".impactText");

      // Initial hidden state
      gsap.set(".impactText", { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=3000", // Increased for smoother scroll
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. ARROW ROTATION (Duration set to 3)
      arrows.forEach((arrow, i) => {
        gsap.set(arrow, { x: 0, y: 0, xPercent: -50, yPercent: -50 });
        tl.to(
          arrow,
          {
            motionPath: {
              path: "#innerPath",
              align: "#innerPath",
              autoRotate: 90,
              alignOrigin: [0.5, 0.5],
              start: i * 0.25,
              end: 1 + i * 0.25,
            },
            ease: "none",
            duration: 4,
          },
          0,
        ); // All arrows start at time 0
      });

      // 2. TEXT CHANGE (Synchronized with the 3s duration)

      gsap.set(texts[0], { opacity: 1, y: 0 });

      const segmentDuration = 3 / texts.length;

      texts.forEach((text, i) => {
        const startTime = i * segmentDuration;

        tl.fromTo(
          text,
          {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: segmentDuration * 0.4,
            ease: "power2.out",
            immediateRender: false,
          },
          startTime,
        );

        // ❗ Only add fade-out if NOT last item
        if (i !== texts.length - 1) {
          tl.to(
            text,
            {
              opacity: 0,
              y: -40,
              duration: segmentDuration * 0.4,
              ease: "power2.in",
            },
            startTime + segmentDuration * 0.6,
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="impact"
        ref={container}
        className="light-section text-black h-screen flex items-center justify-center bg-[#fffaf6] overflow-hidden relative"
      >
        <div className="relative w-full h-full mx-auto">
          {/* SVG LAYER */}
          {/* <svg
            className="absolute top-1/2 left-1/2 w-[180vw] h-[180vw] sm:w-full sm:h-full -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 1500 800"
            preserveAspectRatio="xMidYMid meet"
          > */}
          <svg
            className="absolute top-1/2 left-1/2 w-[260vw] h-[260vw] sm:w-full sm:h-full -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 1500 800"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* OUTER ELLIPSE  */}
            <ellipse
              cx="750"
              cy="400"
              rx="750"
              ry="300"
              stroke="#999"
              strokeWidth="2.5" // Increased thickness for visibility
              strokeDasharray="1 4" // Larger dashes are easier to see on mobile
              strokeLinecap="round"
              fill="none"
            />

            {/* INNER CIRCLE PATH - This is what the arrows follow */}
            <path
              id="innerPath"
              d="M 450, 400 a 300, 300 0 1, 1 600, 0 a 300, 300 0 1, 1 -600, 0"
              stroke="#999" // Lighter color so it doesn't clash with the ellipse
              strokeWidth="2.5"
              strokeDasharray="2 3"
              fill="none"
            />
          </svg>

          {/* ARROW LAYER - Must match SVG exactly */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="innerArrow absolute text-[10px] sm:text-xs md:text-xl">
              ▲
            </div>
            <div className="innerArrow absolute text-[10px] sm:text-xs md:text-xl">
              ▲
            </div>
            <div className="innerArrow absolute text-[10px] sm:text-xs md:text-xl">
              ▲
            </div>
            <div className="innerArrow absolute text-[10px] sm:text-xs md:text-xl">
              ▲
            </div>
          </div>

          {/* CONTENT LAYER */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] 
          sm:w-[60%] md:w-[45%] lg:w-[35%] [420px] aspect-square flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {texts.map((item, index) => (
                <div
                  key={index}
                  className="impactText absolute inset-0 opacity-0 flex flex-col items-center justify-center text-center px-3 sm:px-4"
                >
                  {/* ICON */}
                  <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] mb-3">
                    <img
                      src={item.Icon}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h2 className="font-normal leading-tight mb-2 text-[clamp(14px,2.2vw,22px)]  max-w-[280px]">
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 leading-snug text-[clamp(10px,1.8vw,14px)] sm:maxw-[200px] md:maxw-[400px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Content */}
      <section
        id="impact"
        className=" bg-[#fffaf6] light-section text-black relative "
      >
        <div className="flex flex-col items-center gap-6 md:gap-16  text-center">
          <span className="rounded-sm border border-black/10 px-3 py-1 text-[11px] md:text-[13px] uppercase">
            Our Impact
          </span>

          <h2 className="mb-22 max-w-4xl text-[24px] sm:text-[32px] md:text-[56px] lg:text-[72px] xl:text-[84px] leading-none">
            A 40% lower carbon footprint <br />2 trillion fewer plastic packages
            polluting the environment
          </h2>
        </div>
      </section>
    </>
  );
}
