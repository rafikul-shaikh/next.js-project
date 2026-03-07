"use client";

import { useRef, useEffect } from "react";

export default function ProductScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;

      const scrollProgress = Math.min(
        Math.max(-rect.top / sectionHeight, 0),
        1,
      );

      const scrollWidth = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${scrollProgress * scrollWidth}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="h-[300vh] relative bg-white">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden">
        {/* Horizontal Cards */}
        <div
          ref={trackRef}
          className="flex gap-20 px-20 pt-20 will-change-transform"
        >
          <div className="min-w-100 h-125 bg-gray-200 rounded-xl flex items-center justify-center text-xl font-semibold">
            Card 1
          </div>

          <div className="min-w-100 h-125 bg-gray-300 rounded-xl flex items-center justify-center text-xl font-semibold">
            Card 2
          </div>

          <div className="min-w-100 h-125 bg-gray-400 rounded-xl flex items-center justify-center text-xl font-semibold">
            Card 3
          </div>

          <div className="min-w-100 h-125 bg-gray-500 rounded-xl flex items-center justify-center text-xl font-semibold">
            Card 4
          </div>

          <div className="min-w-100 h-125 bg-gray-600 rounded-xl flex items-center justify-center text-white text-xl font-semibold">
            Card 5
          </div>
        </div>

        <div className="w-full flex justify-center pb-2">
          <div className="max-w-4xl text-center px-6">
            <h1 className="text-black text-2xl md:text-3xl font-medium leading-tight">
              Introducing a fully recyclable ultra high-barrier paper structure
              for the flexible packaging industry.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
