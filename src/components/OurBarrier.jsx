"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function OurBarrier() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Does Nfinite paper require lamination ? ",
      answer:
        "No, Nfinite paper doesn’t use any lamination. It looks, feels, and performs like real paper without the need for a plastic film.",
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
      <div className="relative h-screen rounded-lg py-20 flex flex-col items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-videoZoom"
        >
          <source src="/high.mp4" type="video/mp4" />
        </video>

        <p className="w-4xl text-white text-5xl md:text-6xl font-semibold drop-shadow-lg">
          Our High Barrier Paper Manufacturing Plant, scaling sustainable
          packaging in North America
        </p>
      </div>

      {/* Horizontal Scrolling with snap section */}
      <section className="light-section bg-white text-black flex overflow-x-auto snap-x snap-mandatory w-full scroll-smooth no-scrollbar">
        <div className="min-w-full snap-center px-4 py-20">
          <p className="w-2xl text-3xl md:text-5xl font-semibold">
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
          <p className="w-2xl text-3xl md:text-5xl font-semibold">
            "PepsiCo R&D started working with the Nfinite team while they were
            at the University of Waterloo, and in the short span of two years,
            they have made rapid progress from lab-scale technology to actual
            roll-to-roll coating implementation at different scales."
          </p>
          <div className="py-15">
            <h1>Sridevi Narayan-Sarathy</h1>
            <p className="text-gray-500">
              Technical Director / R&D Senior Fellow at PepsiCo
            </p>
          </div>
        </div>
        <div className="min-w-full snap-center px-4 py-20">
          <p className="w-2xl text-3xl md:text-5xl font-semibold">
            "Amcor is excited to be both an early-stage investor and a strategic
            collaboration partner to Nfinite on this ground breaking project."
          </p>
          <div className="py-15">
            <h1>Michael Hartman</h1>
            <p className="text-gray-500">
              Senior Fellow, Emerging Material/Process Development at Amcor
            </p>
          </div>
        </div>
        <div className="min-w-full snap-center px-4 py-20">
          <p className="w-2xl text-3xl md:text-5xl font-semibold">
            "We are collaborating with partners like Nfinite to develop the next
            generation of recyclable and compostable flexible packaging with
            ultra-thin barrier coatings that meet the performance needs of our
            broad portfolio."
          </p>
          <div className="py-15">
            <h1>Mark Newman</h1>
            <p className="text-gray-500">
              Head of Packaging, Advanced Materials at Unilever
            </p>
          </div>
        </div>
      </section>
      {/* FAQ section  */}
      <section className=" light-section bg-white text-black border-t border-b border-gray-300">
        <div className="grid grid-cols-2 min-h-[600px]">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-center px-20 border-r border-gray-300">
            <div className="text-center max-w-xl">
              <span className="font-semibold border px-3 py-1 text-xs rounded">
                FAQ
              </span>

              <h2 className="text-4xl mt-8 leading-tight font-medium">
                Here are the essentials about Nfinite paper, how it works, and
                how it replaces plastic.
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-10 py-8 text-left"
                >
                  <span className="text-lg">{item.question}</span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <div className="px-10 pb-22 text-gray-600 max-w-xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
