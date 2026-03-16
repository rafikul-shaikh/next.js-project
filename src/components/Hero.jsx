// "use client";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover "
//       >
//         <source src="/highest.mp4" type="video/mp4" />
//       </video>
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative h-full w-full flex flex-col items-center justify-end">
//         <div className="absolute inset-0 top-1/2 z-0 bg-linear-to-b from-transparent to-black/40 "></div>
//         <h1 className="z-1 py-28 text-[60px] text-white text-center leading-18 mx-32">
//           100% Curbside Recyclable, sealable, printable ultra high barrier
//           paper,
//           <span className="text-gray-400">
//             designed to replace flexible plastic packaging.
//           </span>
//         </h1>
//       </div>
//     </section>
//   );
// }

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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/highest.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-end">
        <div className="absolute inset-0 top-1/2 z-0 bg-gradient-to-b from-transparent to-black/40"></div>

        <h1
          className="z-10 pb-16 px-6 md:px-20 lg:px-40 text-center text-white
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px]
                       leading-tight"
        >
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
