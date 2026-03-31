"use client";
import { useEffect, useRef } from "react";

export default function ProductMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let velocity = 0;
    let animationFrame;

    const marquee = marqueeRef.current;

    const animate = () => {
      velocity *= 0.9;
      x -= 0.5 + velocity;

      if (marquee) {
        if (x <= -marquee.scrollWidth / 2) {
          x += marquee.scrollWidth / 2;
        }

        marquee.style.transform = `translateX(${x}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      velocity += 0.7;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className=" light-section text-black relative bg-white py-12 overflow-hidden">
      {/* Moving Cards */}
      <div
        ref={marqueeRef}
        className="flex gap-3 w-max will-change-transform px-6 md:px-16 lg:px-32"
      >
        {/* Cards */}
        {[
          "img-1.jpg",
          "img-2.jpg",
          "img-3.jpg",
          "img-4.jpg",
          "img-5.jpg",
          "img-1.jpg",
          "img-2.jpg",
          "img-3.jpg",
        ].map((img, index) => (
          <div
            key={index}
            // className="min-w-55 sm:min-w-65 md:min-w-[320px] lg:min-w-95 xl:min-w-105
            //  h-65 sm:h-75 md:h-95 lg:h-112.5 xl:h-125
            //  rounded overflow-hidden "
            className="min-w-55 sm:min-w-65 md:min-w-[320px] lg:min-w-95 xl:min-w-105 h-65 sm:h-75 md:h-95 lg:h-112.5 xl:h-125  rounded overflow-hidden"
          >
            <img
              src={`/image/${img}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="w-full flex justify-center mt-10 md:mt-24 lg:mt-32">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-tight">
            Introducing a fully recyclable ultra high-barrier paper structure
            for the flexible packaging industry.
          </h1>
        </div>
      </div>
    </section>
  );
}
