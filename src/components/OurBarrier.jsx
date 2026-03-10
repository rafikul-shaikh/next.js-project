import React from "react";

export default function OurBarrier() {
  return (
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
  );
}
