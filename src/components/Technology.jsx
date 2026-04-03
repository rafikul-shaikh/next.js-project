// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Technology() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let w, h;
//     let particles = [];
//     const count = 18000;
//     const state = { progress: 0 };

//     const init = () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//       particles = [];

//       for (let i = 0; i < count; i++) {
//         // 1. Initial Mist (Screenshot 124)
//         const s1 = { x: Math.random() * w, y: Math.random() * h };

//         // 2. Dense Block (Screenshot 127)
//         const s2 = {
//           x: w * 0.5 + (Math.random() - 0.5) * 350,
//           y: h * 0.5 + (Math.random() - 0.5) * 500,
//         };

//         // 3. Layered Paper (Screenshot 128)
//         const layer = i % 10;
//         const s3 = {
//           x: w * 0.2 + Math.random() * (w * 0.6),
//           y: h * 0.3 + layer * (h * 0.05),
//         };

//         // 4. SALD Box (Screenshot 132 & 144)
//         const box = { w: 300, h: 400, d: 200 };
//         let s4x, s4y, s4z;
//         if (i % 8 === 0) {
//           // Edges
//           s4x = (Math.random() > 0.5 ? 1 : -1) * (box.w / 2);
//           s4y = (Math.random() - 0.5) * box.h;
//           s4z = (Math.random() > 0.5 ? 1 : -1) * (box.d / 2);
//         } else {
//           // Volume
//           s4x = (Math.random() - 0.5) * box.w;
//           s4y = (Math.random() - 0.5) * box.h;
//           s4z = (Math.random() - 0.5) * box.d;
//         }

//         // 5. FULL AREA ENDING (New Target)
//         const s5 = { x: Math.random() * w, y: Math.random() * h };

//         particles.push({
//           x: s1.x,
//           y: s1.y,
//           s1,
//           s2,
//           s3,
//           s4: { x: s4x, y: s4y, z: s4z },
//           s5,
//           size: Math.random() * 1.4 + 0.5,
//           vx: (Math.random() - 0.5) * 0.8,
//           vy: (Math.random() - 0.5) * 0.8,
//           gasType: i % 2 === 0 ? "metal" : "reactant",
//         });
//       }
//     };

//     const draw = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
//       ctx.fillRect(0, 0, w, h);

//       const p = state.progress;

//       particles.forEach((part, i) => {
//         let tx, ty;
//         let r = 255,
//           g = 255,
//           b = 255,
//           a = 0.6;

//         if (p <= 1) {
//           // Mist -> Block
//           tx = part.s1.x + (part.s2.x - part.s1.x) * p;
//           ty = part.s1.y + (part.s2.y - part.s1.y) * p;
//         } else if (p <= 2) {
//           // Block -> Layers
//           const t = p - 1;
//           tx = part.s2.x + (part.s3.x - part.s2.x) * t;
//           ty = part.s2.y + (part.s3.y - part.s2.y) * t;
//         } else if (p <= 3) {
//           // Layers -> 3D Box
//           const t = p - 2;
//           const angle = Date.now() * 0.0007;
//           const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
//           tx = w * 0.72 + rx;
//           ty = h * 0.5 + part.s4.y;

//           if (t > 0.3) {
//             if (part.gasType === "metal") {
//               r = 100;
//               g = 180;
//               b = 255;
//             } else {
//               r = 150;
//               g = 255;
//               b = 180;
//             }
//           }
//         } else {
//           // 3D Box -> FULL AREA (Final expansion)
//           const t = p - 3;
//           const angle = Date.now() * 0.0007;
//           const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
//           const boxX = w * 0.72 + rx;
//           const boxY = h * 0.5 + part.s4.y;

//           // Interpolate from box position to full screen random position
//           tx = boxX + (part.s5.x - boxX) * t;
//           ty = boxY + (part.s5.y - boxY) * t;

//           // Optional: Return to white or keep gas colors
//           if (part.gasType === "metal") {
//             r = 100;
//             g = 180;
//             b = 255;
//           } else {
//             r = 150;
//             g = 255;
//             b = 180;
//           }
//           a = 0.6 * (1 - t * 0.3); // Slight fade out at very end
//         }

//         part.x += (tx - part.x) * 0.07 + part.vx;
//         part.y += (ty - part.y) * 0.07 + part.vy;

//         ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
//         ctx.fillRect(part.x, part.y, part.size, part.size);
//       });

//       requestAnimationFrame(draw);
//     };

//     init();
//     draw();

//     gsap.to(state, {
//       progress: 4, // Progress now goes up to 4 for the final stage
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=9000",
//         scrub: 1.2,
//         pin: true,
//       },
//     });

//     window.addEventListener("resize", init);
//     return () => {
//       window.removeEventListener("resize", init);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       id="technology"
//       className="relative flex flex-col bg-black text-white"
//     >
//       {/* BACKGROUND */}
//       <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="h-full w-full">
//             <canvas ref={canvasRef} className="h-full w-full"></canvas>
//           </div>
//         </div>

//         {/* PROGRESS BAR */}
//         {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden sm:block border border-white/20 px-4 py-4 rounded-sm">
//           <div className="h-2 w-full bg-blue-900/20">
//             <div className="h-full w-full origin-left bg-blue-500"></div>
//           </div>
//         </div> */}
//         {/* DYNAMIC PROGRESS BAR */}
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden sm:block border border-white/20 px-1 py-1 rounded-full w-48 bg-black/40 backdrop-blur-md">
//           <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-blue-500 transition-all duration-75 ease-out"
//               style={{ width: `${scrollProgress * 100}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* INTRO */}
//       <div className="relative z-10 flex h-screen w-full items-start justify-center -mt-[80vh] pt-24 md:pt-32 lg:pt-40 ">
//         <h2 className="text-4xl md:text-8xl text-center ">
//           Our Barrier Technology
//         </h2>
//       </div>

//       {/* SPACER */}
//       <div className="h-[50vh] w-full"></div>

//       {/* PART 1 */}
//       <div className="relative  z-10 flex min-h-screen items-end md:items-start">
//         <div className="flex flex-col gap-10 px-6 sm:px-10 md:px-35 py-10 md:mt-40 md:gap-12 md:pb-12 max-w-xl">
//           <h3 className="  text-lg sm:text-xl md:text-3xl leading-snug">
//             <span className="text-blue-400">water-based</span> dispersion
//             coatings on high performance paper
//           </h3>

//           <div className="text-white/80 max-w-xl">
//             <p className="text-sm">
//               A highly engineered paper designed to run on high speed flow wrap
//               packaging equipment.
//               <br />
//               <br />
//               We use water-based dispersion coatings to prime, protect and
//               provide sealability to our paper. They are ultra-thin, invisible,
//               and dissolve during recycling — keeping the paper fully recyclable
//               and compostable.
//             </p>
//           </div>

//           <ul className="flex flex-col gap-4">
//             <li className="flex items-center gap-4">
//               <span className="w-20 border-t border-blue-400"></span>
//               <span className="text-xs text-blue-400">
//                 Water-based dispersion coatings
//               </span>
//             </li>

//             <li className="flex items-center gap-4">
//               <span className="w-20 h-2 border border-gray-500"></span>
//               <span className="text-xs text-white/80">
//                 High performance paper
//               </span>
//             </li>

//             <li className="flex items-center gap-4">
//               <img
//                 src="https://nfinitepaper.com/_next/static/media/dotted-pattern.4760b076.svg"
//                 alt=""
//                 className="w-20 h-4"
//               />
//               <span className="text-xs text-white/80">
//                 Nfinite SALD barrier coating
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* PART 2 */}
//       <div className="relative z-10 flex w-full flex-col">
//         <h3 className="px-4 flex h-screen w-full flex-col justify-center gap-6 text-center text-3xl md:text-8xl py-20">
//           <span className="self-start text-left">Hundreds of layers</span>
//           <span className="self-start text-left text-white/80">
//             by Spatial Atomic Layer Deposition
//           </span>
//         </h3>

//         <div className="pt-[50vh]">
//           <div className="flex flex-col gap-10 px-6 py-20 md:gap-12 md:max-w-sm md:ml-30">
//             {/* TEXT BLOCK */}
//             <div className="flex flex-col gap-8">
//               <h4 className="text-xl md:text-3xl">
//                 SALD Barrier Science in Two Gases
//               </h4>

//               <div className="flex flex-col gap-6">
//                 {/* LABELS */}
//                 <div className="flex flex-wrap gap-3 pt-6">
//                   <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
//                     <span className="w-2 h-2 rounded-full bg-blue-400"></span>
//                     <span className="text-xs text-white/80">
//                       Metal precursor gas
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
//                     <span className="w-2 h-2 rounded-full bg-green-300"></span>
//                     <span className="text-xs text-white/80">Reactant gas</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-white/80">
//                   Our ultra-high barrier coating is created through a unique
//                   Spatial Atomic Layer Deposition (SALD) process using two
//                   simple gases: a metal source and a reactant, separated by
//                   nitrogen. These gases react in sequence, forming hundreds of
//                   mineral layers only a few atoms thick. The result is an
//                   invisible coating that gives paper the same protective
//                   performance as plastic, without changing its look or feel.
//                 </p>
//               </div>
//             </div>

//             {/* STATS */}
//             <div className="flex flex-col gap-6">
//               <div>
//                 <h5 className="text-2xl">&gt;1000x</h5>
//                 <p className="text-sm text-white/80">
//                   Thinner than a human hair
//                 </p>
//               </div>

//               <div>
//                 <h5 className="text-2xl">Open Air</h5>
//                 <p className="text-sm text-white/80">
//                   Works at normal atmospheric pressure
//                 </p>
//               </div>

//               <div>
//                 <h5 className="text-2xl">High speed roll-to-roll</h5>
//                 <p className="text-sm text-white/80">
//                   Roll-to-roll coating at 100–300 meters/minute
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ================================  code2   =========================================

// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function TechnologySection() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext("2d");
//   let w, h;
//   let particles = [];
//   const count = 16000;
//   const state = { progress: 0 };

//   const init = () => {
//     w = canvas.width = window.innerWidth;
//     h = canvas.height = window.innerHeight;
//     particles = [];
//     for (let i = 0; i < count; i++) {
//       const s1 = { x: Math.random() * w, y: Math.random() * h };
//       const s2 = {
//         x: w * 0.5 + (Math.random() - 0.5) * 350,
//         y: h * 0.5 + (Math.random() - 0.5) * 500,
//       };
//       const layer = i % 10;
//       const s3 = {
//         x: w * 0.2 + Math.random() * (w * 0.6),
//         y: h * 0.3 + layer * (h * 0.05),
//       };
//       const box = { w: 300, h: 400, d: 200 };
//       let s4x, s4y, s4z;
//       if (i % 8 === 0) {
//         s4x = (Math.random() > 0.5 ? 1 : -1) * (box.w / 2);
//         s4y = (Math.random() - 0.5) * box.h;
//         s4z = (Math.random() > 0.5 ? 1 : -1) * (box.d / 2);
//       } else {
//         s4x = (Math.random() - 0.5) * box.w;
//         s4y = (Math.random() - 0.5) * box.h;
//         s4z = (Math.random() - 0.5) * box.d;
//       }
//       const s5 = { x: Math.random() * w, y: Math.random() * h };
//       particles.push({
//         x: s1.x,
//         y: s1.y,
//         s1,
//         s2,
//         s3,
//         s4: { x: s4x, y: s4y, z: s4z },
//         s5,
//         size: Math.random() * 1.3 + 0.5,
//         vx: (Math.random() - 0.5) * 0.6,
//         vy: (Math.random() - 0.5) * 0.6,
//         gasType: i % 2 === 0 ? "metal" : "reactant",
//       });
//     }
//   };

//   const draw = () => {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
//     ctx.fillRect(0, 0, w, h);
//     const p = state.progress;
//     particles.forEach((part) => {
//       let tx,
//         ty,
//         r = 255,
//         g = 255,
//         b = 255,
//         a = 0.6;
//       if (p <= 1) {
//         tx = part.s1.x + (part.s2.x - part.s1.x) * p;
//         ty = part.s1.y + (part.s2.y - part.s1.y) * p;
//       } else if (p <= 2) {
//         const t = p - 1;
//         tx = part.s2.x + (part.s3.x - part.s2.x) * t;
//         ty = part.s2.y + (part.s3.y - part.s2.y) * t;
//       } else if (p <= 3) {
//         const t = p - 2;
//         const angle = Date.now() * 0.0006;
//         const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
//         tx = w * 0.7 + rx;
//         ty = h * 0.5 + part.s4.y;
//         if (t > 0.3) {
//           if (part.gasType === "metal") {
//             r = 100;
//             g = 180;
//             b = 255;
//           } else {
//             r = 150;
//             g = 255;
//             b = 180;
//           }
//         }
//       } else {
//         const t = p - 3;
//         const angle = Date.now() * 0.0006;
//         const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
//         const boxX = w * 0.7 + rx;
//         const boxY = h * 0.5 + part.s4.y;
//         tx = boxX + (part.s5.x - boxX) * t;
//         ty = boxY + (part.s5.y - boxY) * t;
//         if (part.gasType === "metal") {
//           r = 100;
//           g = 180;
//           b = 255;
//         } else {
//           r = 150;
//           g = 255;
//           b = 180;
//         }
//         a = 0.6 * (1 - t);
//       }
//       part.x += (tx - part.x) * 0.08 + part.vx;
//       part.y += (ty - part.y) * 0.08 + part.vy;
//       ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
//       ctx.fillRect(part.x, part.y, part.size, part.size);
//     });
//     requestAnimationFrame(draw);
//   };

//   init();
//   draw();

//   const ST = ScrollTrigger.create({
//     trigger: containerRef.current,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     onToggle: (self) => setIsVisible(self.isActive),
//     onUpdate: (self) => {
//       state.progress = self.progress * 4;
//       setScrollProgress(self.progress);
//     },
//   });

//   window.addEventListener("resize", init);
//   return () => {
//     window.removeEventListener("resize", init);
//     ST.kill();
//   };
// }, []);

//   return (
//     <div ref={containerRef} className="relative bg-black w-full h-[600vh]">
//       {/* ANIMATION LAYER */}
//       <div
//         className={`fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none transition-opacity duration-500 ease-in-out ${
//           isVisible ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <canvas ref={canvasRef} className="block w-full h-full" />
//       </div>

//       {/* THE SCROLLING CONTENT */}
//       <div className="relative z-10">
//         {/* Slide 1 */}
//         <section className="h-screen flex items-center justify-center">
//           <h2 className="text-white text-[clamp(2rem,8vw,6rem)] font-extralight text-center leading-tight">
//             Our Barrier <br /> Technology
//           </h2>
//         </section>

//         {/* Slide 2 */}
//         <section className="h-screen flex items-center px-[10%]">
//           <div className="max-w-[600px] text-white">
//             <h3 className="text-blue-400 text-3xl md:text-4xl mb-6 font-light leading-snug">
//               water-based dispersion
//             </h3>
//             <p className="text-lg md:text-xl opacity-70 font-light leading-relaxed">
//               Priming and protecting paper while remaining fully recyclable and
//               compostable.
//             </p>
//           </div>
//         </section>

//         {/* Slide 3 */}
//         <section className="h-screen flex flex-col justify-center px-[10%]">
//           <h3 className="text-white text-[clamp(2rem,6vw,5rem)] font-extralight leading-none">
//             Hundreds of layers
//           </h3>
//           <p className="text-blue-400 uppercase tracking-[0.2em] text-sm md:text-base mt-4 font-medium">
//             Spatial Atomic Layer Deposition
//           </p>
//         </section>

//         {/* Slide 4 */}
//         <section className="h-screen flex items-center px-[10%]">
//           <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-md text-white max-w-[400px]">
//             <h4 className="text-2xl mb-4 font-light">SALD Science</h4>
//             <p className="text-sm md:text-base opacity-60 leading-relaxed">
//               Two simple gases reacting in sequence to form invisible mineral
//               layers.
//             </p>
//           </div>
//         </section>

//         {/* Slide 5 */}
//         <section className="h-screen flex items-center justify-center">
//           <p className="text-white/20 uppercase tracking-[0.5em] text-[0.7rem] font-medium">
//             End of Sequence
//           </p>
//         </section>
//       </div>

//       {/* FIXED PROGRESS BAR */}
//       <div
//         className={`fixed bottom-[50px] left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-white/10 z-20 transition-opacity duration-500 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div
//           className="h-full bg-blue-500 transition-all duration-100"
//           style={{ width: `${scrollProgress * 100}%` }}
//         />
//       </div>
//     </div>
//   );
// }
// ===================================  Code 3  ==============================================

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Technology() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track if user is in this section
  const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   let w, h;
  //   let particles = [];
  //   const count = 18000;
  //   const state = { progress: 0 };

  //   const init = () => {
  //     w = canvas.width = window.innerWidth;
  //     h = canvas.height = window.innerHeight;
  //     particles = [];

  //     for (let i = 0; i < count; i++) {
  //       const s1 = { x: Math.random() * w, y: Math.random() * h };
  //       const s2 = {
  //         x: w * 0.5 + (Math.random() - 0.5) * 350,
  //         y: h * 0.5 + (Math.random() - 0.5) * 500,
  //       };
  //       const layer = i % 10;
  //       const s3 = {
  //         x: w * 0.2 + Math.random() * (w * 0.6),
  //         y: h * 0.3 + layer * (h * 0.05),
  //       };
  //       const box = { w: 300, h: 400, d: 200 };
  //       let s4x, s4y, s4z;
  //       if (i % 8 === 0) {
  //         s4x = (Math.random() > 0.5 ? 1 : -1) * (box.w / 2);
  //         s4y = (Math.random() - 0.5) * box.h;
  //         s4z = (Math.random() > 0.5 ? 1 : -1) * (box.d / 2);
  //       } else {
  //         s4x = (Math.random() - 0.5) * box.w;
  //         s4y = (Math.random() - 0.5) * box.h;
  //         s4z = (Math.random() - 0.5) * box.d;
  //       }
  //       const s5 = { x: Math.random() * w, y: Math.random() * h };

  //       particles.push({
  //         x: s1.x,
  //         y: s1.y,
  //         s1,
  //         s2,
  //         s3,
  //         s4: { x: s4x, y: s4y, z: s4z },
  //         s5,
  //         size: Math.random() * 1.4 + 0.5,
  //         vx: (Math.random() - 0.5) * 0.8,
  //         vy: (Math.random() - 0.5) * 0.8,
  //         gasType: i % 2 === 0 ? "metal" : "reactant",
  //       });
  //     }
  //   };

  //   const draw = () => {
  //     ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  //     ctx.fillRect(0, 0, w, h);
  //     const p = state.progress;

  //     particles.forEach((part) => {
  //       let tx,
  //         ty,
  //         r = 255,
  //         g = 255,
  //         b = 255,
  //         a = 0.6;
  //       if (p <= 1) {
  //         tx = part.s1.x + (part.s2.x - part.s1.x) * p;
  //         ty = part.s1.y + (part.s2.y - part.s1.y) * p;
  //       } else if (p <= 2) {
  //         const t = p - 1;
  //         tx = part.s2.x + (part.s3.x - part.s2.x) * t;
  //         ty = part.s2.y + (part.s3.y - part.s2.y) * t;
  //       } else if (p <= 3) {
  //         const t = p - 2;
  //         const angle = Date.now() * 0.0007;
  //         const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
  //         tx = w * 0.72 + rx;
  //         ty = h * 0.5 + part.s4.y;
  //         if (t > 0.3) {
  //           if (part.gasType === "metal") {
  //             r = 100;
  //             g = 180;
  //             b = 255;
  //           } else {
  //             r = 150;
  //             g = 255;
  //             b = 180;
  //           }
  //         }
  //       } else {
  //         const t = p - 3;
  //         const angle = Date.now() * 0.0007;
  //         const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
  //         const boxX = w * 0.72 + rx;
  //         const boxY = h * 0.5 + part.s4.y;
  //         tx = boxX + (part.s5.x - boxX) * t;
  //         ty = boxY + (part.s5.y - boxY) * t;
  //         if (part.gasType === "metal") {
  //           r = 100;
  //           g = 180;
  //           b = 255;
  //         } else {
  //           r = 150;
  //           g = 255;
  //           b = 180;
  //         }
  //         a = 0.6 * (1 - t * 0.3);
  //       }
  //       part.x += (tx - part.x) * 0.07 + part.vx;
  //       part.y += (ty - part.y) * 0.07 + part.vy;
  //       ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
  //       ctx.fillRect(part.x, part.y, part.size, part.size);
  //     });
  //     requestAnimationFrame(draw);
  //   };

  //   init();
  //   draw();

  //   // MAIN SCROLL TRIGGER
  //   const ST = gsap.to(state, {
  //     progress: 4,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: "+=9000",
  //       scrub: 1.2,
  //       // pin: true,
  //       onToggle: (self) => setIsVisible(self.isActive), // Fix visibility
  //       onUpdate: (self) => setScrollProgress(self.progress), // Update bar
  //     },
  //   });

  //   window.addEventListener("resize", init);
  //   return () => {
  //     window.removeEventListener("resize", init);
  //     ST.scrollTrigger.kill();
  //   };
  // }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];
    const count = 16000;
    const state = { progress: 0 };

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < count; i++) {
        const s1 = { x: Math.random() * w, y: Math.random() * h };
        const s2 = {
          x: w * 0.5 + (Math.random() - 0.5) * 350,
          y: h * 0.5 + (Math.random() - 0.5) * 500,
        };
        const layer = i % 10;
        const s3 = {
          x: w * 0.2 + Math.random() * (w * 0.6),
          y: h * 0.3 + layer * (h * 0.05),
        };
        const box = { w: 300, h: 400, d: 200 };
        let s4x, s4y, s4z;
        if (i % 8 === 0) {
          s4x = (Math.random() > 0.5 ? 1 : -1) * (box.w / 2);
          s4y = (Math.random() - 0.5) * box.h;
          s4z = (Math.random() > 0.5 ? 1 : -1) * (box.d / 2);
        } else {
          s4x = (Math.random() - 0.5) * box.w;
          s4y = (Math.random() - 0.5) * box.h;
          s4z = (Math.random() - 0.5) * box.d;
        }
        const s5 = { x: Math.random() * w, y: Math.random() * h };
        particles.push({
          x: s1.x,
          y: s1.y,
          s1,
          s2,
          s3,
          s4: { x: s4x, y: s4y, z: s4z },
          s5,
          size: Math.random() * 1.3 + 0.5,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          gasType: i % 2 === 0 ? "metal" : "reactant",
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, w, h);
      const p = state.progress;
      particles.forEach((part) => {
        let tx,
          ty,
          r = 255,
          g = 255,
          b = 255,
          a = 0.6;
        if (p <= 1) {
          tx = part.s1.x + (part.s2.x - part.s1.x) * p;
          ty = part.s1.y + (part.s2.y - part.s1.y) * p;
        } else if (p <= 2) {
          const t = p - 1;
          tx = part.s2.x + (part.s3.x - part.s2.x) * t;
          ty = part.s2.y + (part.s3.y - part.s2.y) * t;
        } else if (p <= 3) {
          const t = p - 2;
          const angle = Date.now() * 0.0006;
          const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
          tx = w * 0.7 + rx;
          ty = h * 0.5 + part.s4.y;
          if (t > 0.3) {
            if (part.gasType === "metal") {
              r = 100;
              g = 180;
              b = 255;
            } else {
              r = 150;
              g = 255;
              b = 180;
            }
          }
        } else {
          const t = p - 3;
          const angle = Date.now() * 0.0006;
          const rx = part.s4.x * Math.cos(angle) - part.s4.z * Math.sin(angle);
          const boxX = w * 0.7 + rx;
          const boxY = h * 0.5 + part.s4.y;
          tx = boxX + (part.s5.x - boxX) * t;
          ty = boxY + (part.s5.y - boxY) * t;
          if (part.gasType === "metal") {
            r = 100;
            g = 180;
            b = 255;
          } else {
            r = 150;
            g = 255;
            b = 180;
          }
          a = 0.6 * (1 - t);
        }
        part.x += (tx - part.x) * 0.08 + part.vx;
        part.y += (ty - part.y) * 0.08 + part.vy;
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
      scrub: true,
      onToggle: (self) => setIsVisible(self.isActive),
      onUpdate: (self) => {
        state.progress = self.progress * 4;
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
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden sm:block border border-white/20 px-1 py-1 rounded-full w-48 bg-black/40 backdrop-blur-md">
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
          <h2 className="text-4xl md:text-8xl text-center">
            Our Barrier Technology
          </h2>
        </div>

        {/* PART 1 */}
        <div className="flex min-h-screen items-end md:items-start">
          <div className="flex flex-col gap-10 px-6 sm:px-10 md:px-32 py-10 md:mt-40 md:gap-12 max-w-xl">
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
          <h3 className="px-10 flex h-screen w-full flex-col justify-center gap-6 text-left text-3xl md:text-8xl">
            <span>Hundreds of layers</span>
            <span className="text-white/80">
              by Spatial Atomic Layer Deposition
            </span>
          </h3>

          {/* <div className="flex flex-col gap-10 px-6 py-20 md:gap-12 md:max-w-md md:ml-32">
            <div className="flex flex-col gap-8">
              <h4 className="text-xl md:text-3xl">
                SALD Barrier Science in Two Gases
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-xs">Metal precursor gas</span>
                </div>
                <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded">
                  <span className="w-2 h-2 rounded-full bg-green-300"></span>
                  <span className="text-xs">Reactant gas</span>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Our ultra-high barrier coating is created through a unique SALD
                process using two simple gases...
              </p>
            </div>
          </div> */}
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
