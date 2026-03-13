import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className=" light-section bg-white text-black py-10 px-4"
    >
      {/* bg-[#E9E3DD] */}

      <div className=" max-w-full mx-auto grid grid-cols-12 items-start">
        {/* [max-w-375] */}

        {/* LEFT BADGE */}
        <div className="col-span-2">
          <span className="text-[12px] border border-gray-400 px-3 py-1 rounded-md text-gray-700">
            Proven Leaders in ALD
          </span>
        </div>

        {/* TEXT CONTENT */}
        <div className="col-span-4 px-10 space-y-8 text-[18px] leading-6 text-black">
          <p>
            Nfinite is a spin-out from the Functional Nanomaterials Lab at the
            University of Waterloo (Canada), led by Dr. Kevin Musselman, a
            global pioneer in Spatial Atomic Layer Deposition (SALD).
          </p>

          <p>
            Over the past 20 years, Dr. Musselman has advanced SALD through
            dozens of peer-reviewed publications, building the scientific
            foundation that makes Nfinite unique: a company rooted in rigorous
            academic research, now bringing proven nanotechnology out of the lab
            and into industrial packaging applications.
          </p>
        </div>

        {/* IMAGE */}
        <div className="col-span-6 flex justify-end ml-10">
          <div className="relative w-125 h-150 rounded-lg overflow-hidden">
            <img src="/Lab.avif" alt="Lab" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
