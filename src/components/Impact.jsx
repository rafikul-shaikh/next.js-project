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
      title: "Paper recycling to end flexible plastics pollution",
      desc: "Unlike 98% of flexible plastic packages, Nfinite packages are 100% curbside recyclable.",
    },
    {
      title: "Sustainably sourced wood turned into paper",
      desc: "All our packaging is made from FSC or PEFC Certified paper - responsibly sourced to protect forest, support communities , and unhold the highest sustainablity standard  ",
    },
    {
      title: "Plastic-free barrier technology",
      desc: "Our coating technology protects food while remaining recyclable.",
    },
    {
      title: "Designed for circular economy",
      desc: "Packaging designed to return back into the paper recycling stream.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const arrows = gsap.utils.toArray(".innerArrow");
      const texts = gsap.utils.toArray(".impactText");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });

      // ARROW ROTATION
      arrows.forEach((arrow, i) => {
        gsap.set(arrow, { xPercent: -50, yPercent: -50 });

        tl.to(
          arrow,
          {
            motionPath: {
              path: "#innerPath",
              align: "#innerPath",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: i * 0.25,
              end: 1 + i * 0.25,
            },
            ease: "none",
            duration: 3,
          },
          0,
        );
      });

      // TEXT CHANGE (runs together with rotation)
      texts.forEach((text, i) => {
        tl.to(text, { opacity: 1, duration: 0.5 }, i * 0.8).to(
          text,
          { opacity: 0, duration: 0.5 },
          i * 0.8 + 0.8,
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="impact"
        ref={container}
        className=" light-section bg-white text-black min-h-screen  flex items-center justify-center "
        // h-[200vh
      >
        <div className="relative w-full max-w-[1600px] aspect-[16/9] mx-auto overflow-hidden">
          {/* w-[320px] sm:w-[500px] md:w-[700px] lg:w-400 lg:h-200 mx-auto */}
          {/* SVG ORBITS */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1500 800"
            preserveAspectRatio="xMidYMid meet"
          >
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
            {/* <path
              id="innerPath"
              d="M750,400 m-260,0
               a260,260 0 1,1 520,0
               a260,260 0 1,1 -520,0"
              stroke="#999"
              strokeDasharray="3 6"
              fill="none"
            /> */}
            <path
              id="innerPath"
              d="M750,400 m-260,0 a260,260 0 1,1 520,0 a260,260 0 1,1 -520,0"
              stroke="#999"
              strokeDasharray="3 6"
              fill="none"
            />
          </svg>

          {/* ARROWS */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="innerArrow absolute text-xl"
              style={{ top: "50%", left: "50%" }}
            >
              ▲
            </div>
            <div
              className="innerArrow absolute text-xl"
              style={{ top: "50%", left: "50%" }}
            >
              ▲
            </div>
            <div
              className="innerArrow absolute text-xl"
              style={{ top: "50%", left: "50%" }}
            >
              ▲
            </div>
            <div
              className="innerArrow absolute text-xl"
              style={{ top: "50%", left: "50%" }}
            >
              ▲
            </div>
          </div>

          {/* CENTER TEXT */}

          <div className="absolute top-1/2 left-1/2 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
            {texts.map((item, index) => (
              <div
                key={index}
                className="impactText absolute inset-0 opacity-0"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-50  flex flex-col items-center justify-end">
        <div>
          <div>
            <div className="text-center">
              <h2 className="text-xl font-bold mb-18">Our Impact</h2>
              <h3 className=" max-w-5xl mx-auto mb-22 text-black text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-normal leading-none">
                A 40% lower carbon footprint 2 trillion fewer plastic packages
                polluting the environment
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
