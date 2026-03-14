// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Technology() {
//   useEffect(() => {
//     gsap.from(".tech-card", {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3,
//     });
//   }, []);

//   return (
//     <section id="technology" className="w-full h-full py-24 bg-black">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-white text-5xl font-bold mb-10 text-center">
//           Our Barrier Technology
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Card 1 */}
//           <div className="tech-card p-6 border rounded-xl">
//             <h3 className=" text-white text-xl font-semibold mb-3">
//               Water-Based Coating
//             </h3>

//             <p className="text-white">
//               Water-based dispersion coatings protect the paper and provide
//               sealability while keeping the structure recyclable.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="tech-card p-6 border rounded-xl">
//             <h3 className="text-xl font-semibold mb-3">
//               water-based dispersion coatings on high performance paper{" "}
//             </h3>

//             <p className="text-white">
//               A highly engineered paper designed to run on high speed flow wrap
//               packaging equipment. We use water-based dispersion coatings to
//               prime, protect and provide sealability to our paper. They are
//               ultra-thin, invisible, and dissolve during recycling — keeping the
//               paper fully recyclable and compostable.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Particles() {
  const ref = useRef();

  const [positions] = useState(() => {
    const arr = new Float32Array(3000);

    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }

    return arr;
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function PaperLayer() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#eeeeee" roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

export default function Technology() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".techText", {
        opacity: 1,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative h-[200vh] w-full bg-black text-white"
    >
      {/* 3D Canvas */}

      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
          <ambientLight intensity={0.5} />

          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Particles />

          <PaperLayer />
        </Canvas>
      </div>

      {/* Text Overlay */}

      <div className="absolute top-1/2 left-1/2 w-[700px] -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="techText opacity-0 text-4xl font-semibold mb-6">
          Our Barrier Technology
        </h2>

        <p className="techText opacity-0 text-gray-300 text-lg leading-relaxed">
          Water-based dispersion coatings protect the paper and provide
          sealability while keeping the structure recyclable. These ultra-thin
          nano layers act as a barrier against oxygen and moisture while
          maintaining full recyclability.
        </p>
      </div>
    </section>
  );
}
