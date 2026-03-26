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

      gsap.set(".impactText", {
        opacity: 0,
        y: 60, // start from bottom
      });

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

      // TEXT CHANGE animation (runs together with rotation)

      texts.forEach((text, i) => {
        tl.fromTo(
          text,
          {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          i * 1.2,
        ).to(
          text,
          {
            opacity: 0,
            y: -60,
            duration: 0.6,
            ease: "power3.in",
          },
          i * 1.2 + 0.6,
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
        className=" light-section  text-black bg-white h-screen  flex items-center justify-center "
        // h-[200vh
      >
        <div className=" relative w-full max-w-[1600px] aspect-square sm:aspect-[16/9] mt-[-40px] md:mt-[-15px] mx-auto overflow-hidden">
          {/* SVG ORBITS */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 w-[140%] sm:w-[110%] md:w-full h-full"
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
              strokeDasharray="1 3"
              strokeLinecap="round"
              fill="none"
            />

            {/* INNER CIRCLE PATH */}

            <path
              id="innerPath"
              d="M750,400 m-260,0 a260,260 0 1,1 520,0 a260,260 0 1,1 -520,0"
              stroke="#999"
              strokeDasharray="1 3"
              strokeLinecap="round"
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

          <div
            className="absolute top-1/2 left-1/2 
  w-[70%] sm:w-[60%] md:w-[50%] lg:w-[38%] xl:w-[28%] max-w-[420px]
  -translate-x-1/2 -translate-y-1/2 
  text-center px-4 sm:px-6 md:px-8
  flex items-center justify-center"
          >
            {texts.map((item, index) => (
              <div
                key={index}
                className="impactText absolute inset-0 opacity-0 flex items-center justify-center"
              >
                <div className="-mt-6 w-full flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 text-center scale-[0.85] sm:scale-[0.9] md:scale-100 lg:scale-105 xl:scale-110">
                  {/* ICON */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <img
                      src={item.Icon}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* TITLE */}
                  <h2 className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] text-[13px] sm:text-[15px] md:text-[18px] lg:text-[21px] leading-snug wrap-break-word">
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <div className="w-full max-w-[85%] sm:max-w-[75%] md:max-w-[65%]">
                    <p className="text-[10px] sm:text-[11px] md:text-[13px] text-gray-500 my-2 sm:my-3 md:my-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="light-section text-black relative ">
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
