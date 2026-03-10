"use client";

export default function ProductScroll() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Moving Cards */}
      <div className="flex gap-4 w-max animate-marquee px-20">
        {/* Card 1 */}
        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 5 */}
        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Duplicate Cards for Infinite Loop */}

        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[400px] h-[500px] rounded overflow-hidden">
          <img
            src="/image/img-3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="w-full flex justify-center mt-20">
        <div className="max-w-4xl text-center px-6">
          <h1 className="text-black text-2xl md:text-3xl font-medium leading-tight">
            Introducing a fully recyclable ultra high-barrier paper structure
            for the flexible packaging industry.
          </h1>
        </div>
      </div>
    </section>
  );
}
