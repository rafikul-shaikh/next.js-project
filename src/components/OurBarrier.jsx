"use client";
import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function OurBarrier() {
  const [open, setOpen] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollBy({
        left: container.offsetWidth, // move 1 full section
        behavior: "smooth",
      });

      // loop back to start
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 8000); // change speed here

    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      question: "What exactly does Nfinite sell?",
      answer:
        "We sell semi-finished, ultra-high barrier paper in 1-meter-wide rolls that are printable, sealable, and ready for downstream converting.",
    },
    {
      question: "Does Nfinite paper require lamination ?",
      answer:
        "No, Nfinite paper doesn’t use any lamination. It looks, feels, and performs like real paper without the need for a plastic film.",
    },
    {
      question: "Will it run on existing packing lines?",
      answer:
        "Nfinite paper is designed to run as a drop-in replacement on most high speed horizontal and vertical form-fill-seal (FFS) packing lines. ",
    },
    {
      question: "Does Nfinite paper contains metal?",
      answer:
        "No. Nfinite paper is not metallized and does not contain any metal.We use ultra-thin layers of a ceramic oxide, a naturally occurring, food safe, inert material that is completely non-metallic.Because it is non-metal and so thin, it remains fully compatible with standard paper recycling streams.  ",
    },
    {
      question: "What's the aspect of Nfinite paper ?",
      answer:
        "Nfinite paper looks and feels just like paper! Our coating is fully transparent, so it doesn’t have a metallic appearance on the inside.",
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section>
      <div className="relative min-h-screen rounded-lg py-20 flex flex-col items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-videoZoom"
        >
          <source src="/high.mp4" type="video/mp4" />
        </video>

        <p className="max-w-4xl px-4 text-white text-2xl md:text-6xl font-normal leading-tight drop-shadow-lg">
          Our High Barrier Paper Manufacturing Plant, scaling sustainable
          packaging in North America
        </p>
      </div>

      {/* Horizontal Scrolling with snap section */}
      <section
        ref={scrollRef}
        className="light-section bg-white text-black flex overflow-x-auto snap-x snap-mandatory font-normal w-full scroll-smooth no-scrollbar"
      >
        <div className="min-w-full snap-center px-4 py-20">
          <p className="max-w-4xl sm:text-3xl md:text-5xl font-normal leading-tight">
            {/* mx-auto  */}
            "Nfinite shares our commitment to creating a circular economy, and
            we look forward to continuing to work with them to develop
            innovative ways to deliver more sustainable packaging solutions."
          </p>
          <div className="py-15">
            <h1>FRANK LEHMANN</h1>
            <p className="text-gray-500">
              Vice President Corporate Venturing and Open Innovation of Amcor
            </p>
          </div>
        </div>
        <div className="min-w-full snap-center px-4 py-20">
          <p className="max-w-4xl  sm:text-3xl md:text-5xl font-normal leading-tight">
            "PepsiCo R&D started working with the Nfinite team while they were
            at the University of Waterloo, and in the short span of two years,
            they have made rapid progress from lab-scale technology to actual
            roll-to-roll coating implementation at different scales."
          </p>
          <div className="py-10 md:py-16">
            <h1>Sridevi Narayan-Sarathy</h1>
            <p className="text-gray-500">
              Technical Director / R&D Senior Fellow at PepsiCo
            </p>
          </div>
        </div>
        <div className="min-w-full snap-center px-4 py-20">
          <p className="max-w-3xl  sm:text-3xl md:text-5xl font-normal leading-tight">
            "Amcor is excited to be both an early-stage investor and a strategic
            collaboration partner to Nfinite on this ground breaking project."
          </p>
          <div className="py-10 md:py-15">
            <h1>Michael Hartman</h1>
            <p className="text-gray-500">
              Senior Fellow, Emerging Material/Process Development at Amcor
            </p>
          </div>
        </div>
        <div className="min-w-full snap-center px-4 py-20">
          <p className="max-w-3xl sm:text-3xl md:text-5xl font-normal leading-tight">
            "We are collaborating with partners like Nfinite to develop the next
            generation of recyclable and compostable flexible packaging with
            ultra-thin barrier coatings that meet the performance needs of our
            broad portfolio."
          </p>
          <div className="py-10 md:py-15">
            <h1>Mark Newman</h1>
            <p className="text-gray-500">
              Head of Packaging, Advanced Materials at Unilever
            </p>
          </div>
        </div>
      </section>

      {/* FAQ section  */}
      <section className=" light-section bg-white text-black border-t border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-10 md:py-0 min-h-100">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-center px-6 md:px-10 md:border-r border-gray-300">
            <div className="text-center max-w-xl">
              <span className="rounded-sm border border-black/10 px-3 py-2 text-[11px] md:text-[13px] uppercase">
                FAQ
              </span>

              <h2 className="mt-6 sm:mt-8 leading-tight font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Here are the essentials about Nfinite paper, how it works, and
                how it replaces plastic.
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className=" cursor-pointer border-b border-gray-300"
              >
                {/* button */}
                <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10 text-left">
                  <span className="text-base sm:text-lg md:text-xl pr-4">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-sm sm:text-base px-6 sm:px-10 pb-6 sm:pb-8 text-gray-600 max-w-xl leading-relaxed ">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
