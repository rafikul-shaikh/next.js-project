"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Technology() {
  useEffect(() => {
    gsap.from(".tech-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="w-full h-full py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-5xl font-bold mb-10 text-center">
          Our Barrier Technology
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="tech-card p-6 border rounded-xl">
            <h3 className=" text-white text-xl font-semibold mb-3">
              Water-Based Coating
            </h3>

            <p className="text-white">
              Water-based dispersion coatings protect the paper and provide
              sealability while keeping the structure recyclable.
            </p>
          </div>

          {/* Card 2 */}
          <div className="tech-card p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              water-based dispersion coatings on high performance paper{" "}
            </h3>

            <p className="text-white">
              A highly engineered paper designed to run on high speed flow wrap
              packaging equipment. We use water-based dispersion coatings to
              prime, protect and provide sealability to our paper. They are
              ultra-thin, invisible, and dissolve during recycling — keeping the
              paper fully recyclable and compostable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
