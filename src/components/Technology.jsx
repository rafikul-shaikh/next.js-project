"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Technology() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track if user is in this section
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];

    // Adaptive particle count for performance
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 6000 : 14000;
    const state = { progress: 0 };

    const init = () => {
      // Handle High DPI screens for sharpness
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < count; i++) {
        const isMetal = i % 2 === 0;

        // S1: Random Start
        const s1 = { x: Math.random() * w, y: Math.random() * h };
        // =========================== S-2 : Initial Cluster ==========================================
        // S2: Initial Cluster
        const s2 = {
          x: w * 0.5 + (Math.random() - 0.5) * (isMobile ? 200 : 350),
          y: h * 0.5 + (Math.random() - 0.5) * (isMobile ? 300 : 500),
        };
        // =========================== S-3 : Horizontal Layers ==========================================

        // S3: Horizontal Layers (Full Screen Coverage)
        const layerCount = 12; // Number of horizontal rows
        const layer = i % layerCount;
        const s3 = {
          x: Math.random() * w, // Full width
          y: (h / layerCount) * layer + (Math.random() - 0.5) * 20, // Spread across full height
        };

        // =========================== S-4 : 3D Box Formation code  ==========================================

        const boxSize = isMobile
          ? { w: 180, h: 280, d: 120 }
          : { w: 600, h: 300, d: 200 };
        let s4x, s4y, s4z;
        if (i % 8 === 0) {
          s4x = (Math.random() > 0.5 ? 1 : -1) * (boxSize.w / 2);
          s4y = (Math.random() - 0.5) * boxSize.h;
          s4z = (Math.random() > 0.5 ? 1 : -1) * (boxSize.d / 2);
        } else {
          s4x = (Math.random() - 0.5) * boxSize.w;
          s4y = (Math.random() - 0.5) * boxSize.h;
          s4z = (Math.random() - 0.5) * boxSize.d;
        }

        // ------------------code 2-------------------------

        // const boxSize = isMobile
        //   ? { w: 250, h: 200, d: 150 }
        //   : { w: 600, h: 300, d: 400 };

        // const numLayers = 3; // The 3 distinct paper layers seen in the images
        // const layerIndex = i % numLayers;

        // // Vertical spacing between the layers
        // const layerY = (layerIndex - 1) * (boxSize.h / 2);

        // let s4x, s4y, s4z;

        // // Logic to concentrate particles on the EDGES and SURFACES of the planes
        // if (i % 2 === 0) {
        //   // Type A: Edge Particles (Creates the bright outlines)
        //   const edge = i % 4;
        //   if (edge === 0) {
        //     // Front Edge
        //     s4x = (Math.random() - 0.5) * boxSize.w;
        //     s4z = boxSize.d / 2;
        //   } else if (edge === 1) {
        //     // Back Edge
        //     s4x = (Math.random() - 0.5) * boxSize.w;
        //     s4z = -boxSize.d / 2;
        //   } else if (edge === 2) {
        //     // Left Edge
        //     s4x = -boxSize.w / 2;
        //     s4z = (Math.random() - 0.5) * boxSize.d;
        //   } else {
        //     // Right Edge
        //     s4x = boxSize.w / 2;
        //     s4z = (Math.random() - 0.5) * boxSize.d;
        //   }
        //   s4y = layerY;
        // } else {
        //   // Type B: Surface Particles (Creates the faint "fill" of the paper)
        //   s4x = (Math.random() - 0.5) * boxSize.w;
        //   s4z = (Math.random() - 0.5) * boxSize.d;
        //   // Add a tiny bit of thickness to the "paper"
        //   s4y = layerY + (Math.random() - 0.5) * 5;
        // }

        // const s4 = { x: s4x, y: s4y, z: s4z };

        // -----------------code -3----------------

        // const boxSize = isMobile
        //   ? { w: 250, h: 200, d: 150 }
        //   : { w: 600, h: 300, d: 400 };

        // const numLayers = 3;
        // const layerIndex = i % numLayers;
        // const layerY = (layerIndex - 1) * (boxSize.h / 2);

        // let s4x, s4y, s4z;

        // // Force particles onto the "Wireframe" lines
        // const linePicker = i % 4;
        // const segmentPicker = Math.random();

        // if (i % 2 === 0) {
        //   // Horizontal edges (The Rectangles)
        //   s4y = layerY;
        //   if (linePicker === 0) {
        //     s4x = (segmentPicker - 0.5) * boxSize.w;
        //     s4z = boxSize.d / 2;
        //   } else if (linePicker === 1) {
        //     s4x = (segmentPicker - 0.5) * boxSize.w;
        //     s4z = -boxSize.d / 2;
        //   } else if (linePicker === 2) {
        //     s4z = (segmentPicker - 0.5) * boxSize.d;
        //     s4x = boxSize.w / 2;
        //   } else {
        //     s4z = (segmentPicker - 0.5) * boxSize.d;
        //     s4x = -boxSize.w / 2;
        //   }
        // } else {
        //   // Vertical connecting posts (The "Box" corners)
        //   s4x = (linePicker < 2 ? 1 : -1) * (boxSize.w / 2);
        //   s4z = (linePicker % 2 === 0 ? 1 : -1) * (boxSize.d / 2);
        //   s4y = (segmentPicker - 0.5) * boxSize.h;
        // }

        // const s4 = { x: s4x, y: s4y, z: s4z };

        // =========================== S-5 : Transition to Layered Sheets ==========================================

        // S5: Perspective Layered Sheets
        const sheetW = isMobile ? w * 0.8 : 500;
        const sheetH = isMobile ? 200 : 350;

        // Random points within a normalized 0-1 range for the sheet
        const relX = Math.random() - 0.5;
        const relY = Math.random() - 0.5;

        const s5 = {
          // X-axis: Apply a tilt/shear based on the Y position to create perspective
          x: (isMobile ? w * 0.5 : w * 0.75) + relX * sheetW + relY * 100,

          // Y-axis: Stack the two gases with a gap, and apply perspective compression
          y: h * 0.5 + (isMetal ? -70 : 70) + relY * sheetH * 0.5,

          // Z-axis: Small random depth for volume
          z: (Math.random() - 0.5) * 30,
        };

        // =========================== S-6 : Final Dispersal/Exit ==========================================

        // S6: Final Dispersal/Exit
        const s6 = { x: Math.random() * w, y: h + 100 };

        particles.push({
          x: s1.x,
          y: s1.y,
          s1,
          s2,
          s3,
          s4: { x: s4x, y: s4y, z: s4z },
          s5,
          s6,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          gasType: isMetal ? "metal" : "reactant",
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, w, h);

      const p = state.progress;

      particles.forEach((part) => {
        let tx,
          ty,
          r = 255,
          g = 255,
          b = 255,
          a = 0.7;

        if (p <= 1) {
          // S1 -> S2
          tx = part.s1.x + (part.s2.x - part.s1.x) * p;
          ty = part.s1.y + (part.s2.y - part.s1.y) * p;
        } else if (p <= 2) {
          // S2 -> S3
          const t = p - 1;
          tx = part.s2.x + (part.s3.x - part.s2.x) * t;
          ty = part.s2.y + (part.s3.y - part.s2.y) * t;
        } else if (p <= 3) {
          // S3 -> S4 (Rotating Box)
          const t = p - 2;
          const angle = Date.now() * 0.0008;
          const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
          const centerX = isMobile ? w * 0.5 : w * 0.75;
          tx = centerX + rx;
          ty = h * 0.5 + part.s4.y;

          if (part.gasType === "metal") {
            r = 130;
            g = 180;
            b = 255;
          } else {
            r = 160;
            g = 255;
            b = 170;
          }
        } else if (p <= 4) {
          // S4 -> S5 (Flat Sheets)
          const t = p - 3;
          const angle = Date.now() * 0.0004;
          const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
          const boxX = (isMobile ? w * 0.5 : w * 0.75) + rx;
          const boxY = h * 0.5 + part.s4.y;

          tx = boxX + (part.s5.x - boxX) * t;
          ty = boxY + (part.s5.y - boxY) * t;

          if (part.gasType === "metal") {
            r = 100;
            g = 170;
            b = 255;
          } else {
            r = 140;
            g = 255;
            b = 160;
          }
          a = 0.8;
        } else {
          // S5 -> S6 (Exit)
          const t = p - 4;
          tx = part.s5.x + (part.s6.x - part.s5.x) * t;
          ty = part.s5.y + (part.s6.y - part.s5.y) * t;
          a = 0.8 * (1 - t);
        }

        part.x += (tx - part.x) * 0.1 + part.vx;
        part.y += (ty - part.y) * 0.1 + part.vy;

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fillRect(part.x, part.y, part.size, part.size);
      });
      requestAnimationFrame(draw);
    };

    init();
    draw();

    const ST = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2, // Smoother scroll for mobile
      onToggle: (self) => setIsVisible(self.isActive),
      onUpdate: (self) => {
        state.progress = self.progress * 5;
        setScrollProgress(self.progress);
      },
    });

    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      ST.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="technology"
      className="relative flex flex-col bg-black text-white"
    >
      {/* FIXED BACKGROUND WRAPPER - BYPASSES STICKY ISSUES */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-0 overflow-hidden transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <canvas ref={canvasRef} className="h-full w-full block"></canvas>

        {/* DYNAMIC PROGRESS BAR */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 block sm:block border border-white/20 px-1 py-1 rounded-full w-32 sm:w-48 bg-black/40 backdrop-blur-md">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS (z-index 10 to stay above particles) */}
      <div className="relative z-10">
        {/* INTRO */}
        <div className="flex h-screen w-full items-start justify-center pt-24 md:pt-32 lg:pt-40">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center px-4">
            Our Barrier Technology
          </h2>
        </div>

        {/* PART 1 */}
        <div className="flex min-h-screen items-end md:items-start">
          <div className="flex flex-col gap-10 px-4 sm:px-6 md:px-16 lg:px-32 py-10 md:mt-40 md:gap-12 max-w-xl">
            <h3 className="text-lg sm:text-xl md:text-3xl leading-snug">
              <span className="text-blue-400">water-based</span> dispersion
              coatings on high performance paper
            </h3>
            <div className="text-white/80">
              <p className="text-sm">
                A highly engineered paper designed to run on high speed flow
                wrap packaging equipment.
                <br />
                <br />
                We use water-based dispersion coatings to prime, protect and
                provide sealability to our paper.
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
        <div className="flex w-full flex-col">
          <h3 className="px-4 sm:px-6 md:px-10 flex h-screen w-full flex-col justify-center gap-4 sm:gap-6 text-left text-xl sm:text-3xl md:text-6xl lg:text-8xl">
            <span>Hundreds of layers</span>
            <span className="text-white/80">
              by Spatial Atomic Layer Deposition
            </span>
          </h3>

          <div className="pt-[30vh] sm:pt-[50vh]">
            <div className="flex flex-col gap-10 px-6 py-20 md:gap-12 max-w-full sm:max-w-md md:max-w-sm md:ml-20 lg:ml-30">
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
                      <span className="text-xs text-white/80">
                        Reactant gas
                      </span>
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
      </div>
    </section>
  );
}
