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
            duration: 3,
          },
          0,
        ); // All arrows start at time 0
      });

      // 2. TEXT CHANGE (Synchronized with the 3s duration)
      // We divide the 3s total duration by the number of text items

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
        className="light-section text-black h-screen flex items-center justify-center bg-[#fffaf6] overflow-hidden"
      >
        <div className="relative w-full max-w-400 aspect-square sm:aspect-[16/9] mx-auto">
          {/* SVG LAYER */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 w-full h-full overflow-visible"
            viewBox="0 0 1500 800"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* OUTER ELLIPSE - Made slightly smaller (700) to avoid edge clipping */}
            <ellipse
              cx="750"
              cy="400"
              rx="700"
              ry="260"
              stroke="#999"
              strokeWidth="1.5" // Increased thickness for visibility
              strokeDasharray="1 4" // Larger dashes are easier to see on mobile
              strokeLinecap="round"
              fill="none"
            />

            {/* INNER CIRCLE PATH - This is what the arrows follow */}
            <path
              id="innerPath"
              d="M 490, 400 a 260, 260 0 1, 1 520, 0 a 260, 260 0 1, 1 -520, 0"
              stroke="#999" // Lighter color so it doesn't clash with the ellipse
              strokeWidth="2"
              strokeDasharray="1 4"
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

          {/* <div className="absolute top-1/2 left-1/2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[38%] xl:w-[28%] max-w-105 -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 md:px-8 flex items-center justify-center">
            {texts.map((item, index) => (
              <div
                key={index}
                className="impactText absolute inset-0 opacity-0 flex items-center justify-center"
              >
                <div className="-mt-6 w-full flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 text-center scale-[0.85] sm:scale-[0.9] md:scale-100 lg:scale-105 xl:scale-110"> */}
          {/* ICON */}
          {/* <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <img
                      src={item.Icon}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div> */}

          {/* TITLE */}
          {/* <h2 className="w-full max-w-45 sm:max-w-50 md:max-w-60 text-[13px] sm:text-[15px] md:text-[18px] lg:text-[21px] leading-snug wrap-break-word">
                    {item.title}
                  </h2> */}

          {/* DESCRIPTION */}
          {/* <div className="w-full max-w-[85%] sm:max-w-[75%] md:max-w-[65%]">
                    <p className="text-[10px] sm:text-[11px] md:text-[13px] text-gray-500 my-2 sm:my-3 md:my-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div> */}
          {/*               
            ))}
          </div> */}
          {/* CONTENT LAYER */}
          {/* CONTENT LAYER - Proportional Safe Zone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[60vw] sm:w-[50vw] md:w-[40vw] max-w-[380px] aspect-square flex items-center justify-center -mt-8 sm:-mt-12 md:-mt-16">
              <div className="relative w-full h-full flex items-center justify-center">
                {texts.map((item, index) => (
                  <div
                    key={index}
                    className="impactText absolute inset-0 opacity-0 flex flex-col items-center justify-center text-center px-[10%]"
                  >
                    {/* ICON - Scaled as a percentage of the box */}
                    <div className="w-[15%] min-w-[24px] max-w-[40px] mb-[5%] flex-shrink-0">
                      <img
                        src={item.Icon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* TITLE - Fluid font size for tiny screens */}
                    <h2 className="w-full text-[1.8vw] sm:text-[1vw] md:text-[22px] font-bold leading-[1.1] mb-[4%]">
                      {item.title}
                    </h2>

                    {/* DESCRIPTION - Smallest font + Line Clamp */}
                    {/* <div className="w-full">
                      <p className="text-[1vw] sm:text-[1vw] md:text-[14px] text-gray-500 leading-snug line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                        {item.desc}
                      </p>
                    </div> */}
                    {/* DESCRIPTION - Restricted width and fluid font */}
                    <div className="w-full max-w-[85%] mx-auto">
                      <p className="text-[clamp(4px,1.5vw,14px)] text-gray-500 leading-tight line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
