"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover animate-videoZoom"
      >
        <source src="/highest.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute bottom-38  z-10 text-center px-40 ">
        <h1 className="text-white text-3xl md:text-6xl font-semibold drop-shadow-lg">
          100% Curbside Recyclable, sealable, printable ultra high barrier
          paper,
          <span className="text-gray-400">
            designed to replace flexible plastic packaging.
          </span>
        </h1>
      </div>
    </section>
  );
}
