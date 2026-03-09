"use client";

export default function News() {
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
  ];

  return (
    <section className="px-10 py-20">
      {/* Heading */}
      <div className="flex justify-between mb-14">
        <h2 className="text-[120px] font-bold leading-none">Our</h2>
        <h2 className="text-[120px] font-bold leading-none">News</h2>
      </div>

      {/* Slider */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">
        {news.map((item, index) => (
          <div
            key={index}
            className="group min-w-[600px] h-[420px] rounded-lg overflow-hidden relative transform transition duration-500 hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm opacity-80 mt-2">{item.date}</p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm opacity-0 group-hover:opacity-100 transition">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
