"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Technology() {
  gsap.registerPlugin(ScrollTrigger);
  const canvasRef = useRef(null);
  function noise(x, y, t) {
    return Math.sin(x * 0.01 + t) + Math.cos(y * 0.01 + t);
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const ROWS = 100;
    const COLS = 100;
    const LINE_COUNT = 12;

    let particles = [];

    // Create particles
    for (let i = 0; i < ROWS * COLS; i++) {
      let col = i % COLS;
      let row = Math.floor(i / COLS);

      // Stage 1 → FULL SCREEN NOISE
      let noiseX = Math.random() * width;
      let noiseY = Math.random() * height;

      // Stage 2 → RECTANGLE
      let rectW = width * 0.6;
      let rectH = height * 0.7;

      let rectX = width / 2 - rectW / 2 + (col / COLS) * rectW;
      let rectY = height / 2 - rectH / 2 + (row / ROWS) * rectH;

      // Stage 3 → LINES
      let lineIndex = Math.floor((row / ROWS) * LINE_COUNT);

      let lineY = height * 0.2 + (lineIndex / (LINE_COUNT - 1)) * height * 0.6;

      let lineX = (col / COLS) * width;

      particles.push({
        noiseX,
        noiseY,
        rectX,
        rectY,
        lineX,
        lineY,
      });
    }

    let progress = 0;

    // Draw loop
    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        let x, y;

        // Stage 1 → Noise → Rectangle
        if (progress < 0.3) {
          let t = progress / 0.3;

          x = p.noiseX + (p.rectX - p.noiseX) * t;
          y = p.noiseY + (p.rectY - p.noiseY) * t;
        }

        // Stage 2 → Rectangle → Lines
        else if (progress < 0.7) {
          let t = (progress - 0.3) / 0.4;

          x = p.rectX + (p.lineX - p.rectX) * t;
          y = p.rectY + (p.lineY - p.rectY) * t;
        }

        // Stage 3 → Final lines
        else {
          x = p.lineX;
          y = p.lineY;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 1.2, 1.2);
      });

      requestAnimationFrame(draw);
    }

    draw();

    // Scroll Animation
    gsap.to(
      { value: 0 },
      {
        value: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#technology",
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
        onUpdate: function () {
          progress = this.targets()[0].value;
        },
      },
    );

    // Parallax (background move like real site)
    gsap.to(".tech-background", {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: "#technology",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Resize fix
    window.addEventListener("resize", () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <section
      id="technology"
      className="relative flex flex-col bg-black text-white"
    >
      {/* BACKGROUND */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <canvas ref={canvasRef} className="h-full w-full"></canvas>
          </div>
        </div>

        {/* PROGRESS BAR */}
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden sm:block border border-white/20 px-4 py-4 rounded-sm">
          <div className="h-2 w-full bg-blue-900/20">
            <div className="h-full w-full origin-left bg-blue-500"></div>
          </div>
        </div> */}
      </div>

      {/* INTRO */}
      <div className="relative z-10 flex h-screen w-full items-start justify-center -mt-[80vh] pt-24 md:pt-32 lg:pt-40 ">
        <h2 className="text-4xl md:text-8xl text-center ">
          Our Barrier Technology
        </h2>
      </div>

      {/* SPACER */}
      <div className="h-[50vh] w-full"></div>

      {/* PART 1 */}
      <div className="relative  z-10 flex min-h-screen items-end md:items-start">
        <div className="flex flex-col gap-10 px-6 sm:px-10 md:px-35 py-10 md:mt-40 md:gap-12 md:pb-12 max-w-xl">
          <h3 className="  text-lg sm:text-xl md:text-3xl leading-snug">
            <span className="text-blue-400">water-based</span> dispersion
            coatings on high performance paper
          </h3>

          <div className="text-white/80 max-w-xl">
            <p className="text-sm">
              A highly engineered paper designed to run on high speed flow wrap
              packaging equipment.
              <br />
              <br />
              We use water-based dispersion coatings to prime, protect and
              provide sealability to our paper. They are ultra-thin, invisible,
              and dissolve during recycling — keeping the paper fully recyclable
              and compostable.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="w-20 border-t border-blue-400"></span>
              <span className="text-xs text-blue-400">
                Water-based dispersion coatings
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-20 h-2 border border-gray-500"></span>
              <span className="text-xs text-white/80">
                High performance paper
              </span>
            </li>

            <li className="flex items-center gap-4">
              <img
                src="https://nfinitepaper.com/_next/static/media/dotted-pattern.4760b076.svg"
                alt=""
                className="w-20 h-4"
              />
              <span className="text-xs text-white/80">
                Nfinite SALD barrier coating
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* PART 2 */}
      <div className="relative z-10 flex w-full flex-col">
        <h3 className="px-4 flex h-screen w-full flex-col justify-center gap-6 text-center text-3xl md:text-8xl py-20">
          <span className="self-start text-left">Hundreds of layers</span>
          <span className="self-start text-left text-white/80">
            by Spatial Atomic Layer Deposition
          </span>
        </h3>

        <div className="pt-[50vh]">
          <div className="flex flex-col gap-10 px-6 py-20 md:gap-12 md:max-w-sm md:ml-30">
            {/* TEXT BLOCK */}
            <div className="flex flex-col gap-8">
              <h4 className="text-xl md:text-3xl">
                SALD Barrier Science in Two Gases
              </h4>

              <div className="flex flex-col gap-6">
                {/* LABELS */}
                <div className="flex flex-wrap gap-3 pt-6">
                  <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="text-xs text-white/80">
                      Metal precursor gas
                    </span>
                  </div>

                  <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
                    <span className="w-2 h-2 rounded-full bg-green-300"></span>
                    <span className="text-xs text-white/80">Reactant gas</span>
                  </div>
                </div>

                <p className="text-sm text-white/80">
                  Our ultra-high barrier coating is created through a unique
                  Spatial Atomic Layer Deposition (SALD) process using two
                  simple gases: a metal source and a reactant, separated by
                  nitrogen. These gases react in sequence, forming hundreds of
                  mineral layers only a few atoms thick. The result is an
                  invisible coating that gives paper the same protective
                  performance as plastic, without changing its look or feel.
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="flex flex-col gap-6">
              <div>
                <h5 className="text-2xl">&gt;1000x</h5>
                <p className="text-sm text-white/80">
                  Thinner than a human hair
                </p>
              </div>

              <div>
                <h5 className="text-2xl">Open Air</h5>
                <p className="text-sm text-white/80">
                  Works at normal atmospheric pressure
                </p>
              </div>

              <div>
                <h5 className="text-2xl">High speed roll-to-roll</h5>
                <p className="text-sm text-white/80">
                  Roll-to-roll coating at 100–300 meters/minute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
