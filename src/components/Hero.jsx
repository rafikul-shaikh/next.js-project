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
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background-vdo.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-5xl">
          100% Curbside Recyclable, sealable, printable ultra high barrier
          paper, designed to replace flexible plastic packaging.
        </h1>
      </div>
    </section>
  );
}
