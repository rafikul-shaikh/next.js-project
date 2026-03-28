"use client";
import { useRef } from "react";
import { MoveLeft, MoveRight, ChevronRight } from "lucide-react";

export default function News() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      // const scrollAmount = 624; // Card width (600) + gap (24)

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };
  const news = [
    {
      title:
        "Nfinite secures funding to scale up breakthrough paper packaging solution",
      date: "Press release - Dec 16, 2025",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title:
        "Nfinite nabs $4.6 million to prove it can make paper that performs like plastic",
      date: "Betakit article - Dec 9, 2025",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title:
        "Nfinite closes $6.5M USD SEED financing to revolutionize flexible food packaging",
      date: "Press release - May 14, 2024",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "EMF report ",
      // "The role it could play in tackling small-format flexible plastic pollution in markets with high leakage rates",
      date: "March 10th",
      image: "/image-2.jpg",
    },
  ];

  return (
    <section id="news" className="ml-3 py-12 md:py-20">
      {/* Heading */}
      <div className="flex justify-between items-end mb-14  px-2 sm:px-4 md:px-10 lg:px-4 ">
        <h2 className="text-4xl sm:text-6xl md:text-9xl lg:text-[250px] font-normal leading-none">
          Our
        </h2>
        <h2 className="text-3xl sm:text-6xl md:text-9xl lg:text-[250px] font-normal leading-none">
          News
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {news.map((item, index) => (
          <div
            key={index}
            className="group min-w-70 sm:min-w-87.5 md:min-w-112.5 lg:min-w-150
               h-90 sm:h-105 md:h-130 lg:h-175
             rounded-lg overflow-hidden relative transform transition duration-500 cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover  transition-transform duration-1000 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-10 left-6 text-white max-w-md">
              <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                {item.title}
              </h3>
              <p className="text-sm opacity-80 mt-8">{item.date}</p>
            </div>

            {/* Arrow Button */}

            <div className="absolute bottom-6 right-6 bg-white text-black w-10 h-10 flex items-center justify-center rounded-sm transition group-hover:bg-cyan-500 group-hover:text-white">
              <ChevronRight />
            </div>
          </div>
        ))}
      </div>

      {/* 5. Navigation Buttons (Bottom Right) */}
      <div className="flex justify-end gap-2 mt-8">
        <button
          onClick={() => scroll("left")}
          className="border border-gray-300 rounded-md w-12 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <MoveLeft size={20} className="text-gray-600" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="border border-gray-300 rounded-md w-12 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <MoveRight size={20} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
}
