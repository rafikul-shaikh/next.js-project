// "use client";
// import { useEffect, useRef } from "react";

// export default function ProductScroll() {
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     let x = 0;
//     let velocity = 0;

//     const marquee = marqueeRef.current;

//     const animate = () => {
//       velocity *= 0.9; //this line controls How quickly the speed returns to normal, (less value , less speed)

//       x -= 0.5 + velocity; // this Line controls the constant movement speed(less value , less speed  )

//       if (marquee) {
//         //   if (x < -marquee.scrollWidth / 2) {
//         //     x = 0;
//         //   }
//         if (x <= -marquee.scrollWidth / 2) {
//           x += marquee.scrollWidth / 2;
//         }

//         marquee.style.transform = `translateX(${x}px)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     const handleScroll = () => {
//       velocity += 0.7; // it increase Speed when scrolling(less value , less speed)
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className=" light-section text-black relative bg-white py-12 overflow-hidden">
//       {/* Moving Cards */}
//       <div
//         ref={marqueeRef}
//         className="flex gap-3 w-max will-change-transform px-6 md:px-20 lg:px-40"
//       >
//         {/* Card 1 */}
//         <div className="min-w-100 h-125  rounded overflow-hidden">
//           <img
//             src="/image/img-1.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Card 2 */}
//         <div className="min-w-100 h-125  rounded overflow-hidden">
//           <img
//             src="/image/img-2.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Card 3 */}
//         <div className="min-w-100 h-125  rounded overflow-hidden">
//           <img
//             src="/image/img-3.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Card 4 */}
//         <div className="min-w-100 h-125  rounded overflow-hidden">
//           <img
//             src="/image/img-4.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Card 5 */}
//         <div className="min-w-100 h-125  rounded overflow-hidden">
//           <img
//             src="/image/img-5.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Duplicate Cards for Infinite Loop */}

//         <div className="min-w-100 h-125 rounded overflow-hidden">
//           <img
//             src="/image/img-1.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="min-w-100 h-125 rounded overflow-hidden">
//           <img
//             src="/image/img-2.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="min-w-100 h-125 rounded overflow-hidden">
//           <img
//             src="/image/img-3.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="w-full flex justify-center mt-25">
//         <div className="max-w-4xl text-center px-6">
//           <h1 className="w-2xl text-black text-2xl md:text-4xl font-medium leading-tight ">
//             Introducing a fully recyclable ultra high-barrier paper structure
//             for the flexible packaging industry.
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useRef } from "react";

export default function ProductScroll() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let velocity = 0;
    let animationFrame;

    const marquee = marqueeRef.current;

    const animate = () => {
      velocity *= 0.9;
      x -= 0.5 + velocity;

      if (marquee) {
        if (x <= -marquee.scrollWidth / 2) {
          x += marquee.scrollWidth / 2;
        }

        marquee.style.transform = `translateX(${x}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      velocity += 0.7;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="text-black relative bg-white py-12 overflow-hidden">
      {/* Moving Cards */}
      <div
        ref={marqueeRef}
        className="flex gap-3 w-max will-change-transform px-6 md:px-16 lg:px-32"
      >
        {/* Cards */}
        {[
          "img-1.jpg",
          "img-2.jpg",
          "img-3.jpg",
          "img-4.jpg",
          "img-5.jpg",
          "img-1.jpg",
          "img-2.jpg",
          "img-3.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[320px] lg:min-w-[380px] xl:min-w-[420px]
             h-[260px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[500px]
             rounded overflow-hidden "
          >
            <img
              src={`/image/${img}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="w-full flex justify-center mt-10 md:mt-24 lg:mt-32">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-tight">
            Introducing a fully recyclable ultra high-barrier paper structure
            for the flexible packaging industry.
          </h1>
        </div>
      </div>
    </section>
  );
}
