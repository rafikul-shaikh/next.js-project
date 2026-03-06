"use client";

export default function Impact() {
  return (
    <section className="relative flex items-center justify-center py-40 bg-[#e9e4de] overflow-hidden">
      {/* Orbit Container */}
      <div className="relative w-[900px] h-[400px] flex items-center justify-center">
        {/* Outer Orbit */}
        <div className="orbit orbit1">
          <div className="arrow"></div>
        </div>

        {/* Inner Orbit */}
        <div className="orbit orbit2">
          <div className="arrow"></div>
        </div>

        {/* Center Content */}
        <div className="absolute text-center max-w-sm">
          <h2 className="text-xl font-semibold mb-3">
            Sustainably sourced wood turned into paper
          </h2>

          <p className="text-sm text-gray-600">
            All our packaging is made from FSC or PEFC-certified paper —
            responsibly sourced to protect forests and support communities.
          </p>
        </div>
      </div>
    </section>
  );
}
