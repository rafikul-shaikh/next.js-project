// "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const points = useRef();

  const particles = 45000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }

    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const arr = points.current.geometry.attributes.position.array;

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;

      arr[i3 + 1] += Math.sin(time + arr[i3]) * 0.0005;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.9} />
    </points>
  );
}

export default function Technology() {
  return (
    <div className="relative h-[200vh] w-full bg-[#06101c]">
      <div className="sticky top-0 h-screen">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={["#06101c"]} />

          <Particles />
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl text-white font-semibold">
            Our Barrier Technology
          </h1>
        </div>
      </div>
    </div>
  );
}
