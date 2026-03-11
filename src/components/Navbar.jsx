"use client";
import { useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-12 md:px-7 py-8 md:py-5 text-white">
      <nav className="flex items-center justify-between">
        {/* <div>Nfinite</div> */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 161 19"
            className="w-42 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M24.173 6.274a3.24 3.24 0 0 1 3.423 3.153 3.42 3.42 0 0 1-3.224 3.499 3.24 3.24 0 0 1-3.423-3.152 3.42 3.42 0 0 1 3.224-3.5M11.577.524a2.534 2.534 0 0 1 2.677 2.466 2.674 2.674 0 0 1-2.522 2.737 2.534 2.534 0 0 1-2.677-2.466A2.674 2.674 0 0 1 11.577.524M16.69 13.318a1.457 1.457 0 0 1 1.54 1.418 1.537 1.537 0 0 1-1.45 1.573 1.457 1.457 0 0 1-1.54-1.417 1.537 1.537 0 0 1 1.45-1.574M3.712 11.92a1.907 1.907 0 0 1 2.015 1.855 2.01 2.01 0 0 1-1.898 2.06 1.907 1.907 0 0 1-2.015-1.856 2.01 2.01 0 0 1 1.898-2.06M17.811 2.9a2.81 2.81 0 0 1 2.971 2.735 2.967 2.967 0 0 1-2.798 3.037 2.81 2.81 0 0 1-2.971-2.736A2.967 2.967 0 0 1 17.811 2.9M12.583 14.603a1.72 1.72 0 0 1 1.817 1.673 1.815 1.815 0 0 1-1.711 1.858 1.72 1.72 0 0 1-1.817-1.674 1.815 1.815 0 0 1 1.711-1.857M2.155 6.624a2.165 2.165 0 0 1 2.288 2.107 2.284 2.284 0 0 1-2.155 2.338A2.165 2.165 0 0 1 .001 8.962a2.284 2.284 0 0 1 2.154-2.338M19.648 11.822c.57-.03 1.047.409 1.064.98a1.063 1.063 0 0 1-1.003 1.088c-.57.03-1.047-.41-1.064-.98a1.063 1.063 0 0 1 1.003-1.088M7.883 14.529A1.72 1.72 0 0 1 9.7 16.202 1.814 1.814 0 0 1 7.99 18.06a1.72 1.72 0 0 1-1.817-1.673 1.815 1.815 0 0 1 1.711-1.858M5.26 1.176a2.313 2.313 0 0 1 2.444 2.25 2.44 2.44 0 0 1-2.302 2.498 2.313 2.313 0 0 1-2.444-2.25A2.44 2.44 0 0 1 5.26 1.176M36.968 18.476a2.534 2.534 0 0 1-2.678-2.466 2.674 2.674 0 0 1 2.522-2.737 2.534 2.534 0 0 1 2.678 2.466 2.674 2.674 0 0 1-2.522 2.737M31.854 5.682a1.457 1.457 0 0 1-1.539-1.418 1.537 1.537 0 0 1 1.45-1.573 1.457 1.457 0 0 1 1.54 1.417 1.537 1.537 0 0 1-1.45 1.574M44.832 7.08a1.907 1.907 0 0 1-2.015-1.855 2.01 2.01 0 0 1 1.898-2.06 1.907 1.907 0 0 1 2.015 1.856 2.01 2.01 0 0 1-1.898 2.06M30.734 16.1a2.81 2.81 0 0 1-2.971-2.735 2.967 2.967 0 0 1 2.798-3.037 2.81 2.81 0 0 1 2.971 2.736 2.967 2.967 0 0 1-2.798 3.037M35.962 4.397a1.72 1.72 0 0 1-1.817-1.673A1.815 1.815 0 0 1 35.857.866a1.72 1.72 0 0 1 1.817 1.674 1.814 1.814 0 0 1-1.712 1.857M46.389 12.376a2.165 2.165 0 0 1-2.287-2.106 2.284 2.284 0 0 1 2.154-2.339 2.165 2.165 0 0 1 2.287 2.107 2.284 2.284 0 0 1-2.154 2.338M28.898 7.179c-.57.03-1.047-.41-1.064-.98a1.063 1.063 0 0 1 1.002-1.089c.57-.03 1.048.41 1.065.98a1.063 1.063 0 0 1-1.003 1.089M40.66 4.47a1.72 1.72 0 0 1-1.816-1.672A1.814 1.814 0 0 1 40.555.94a1.72 1.72 0 0 1 1.817 1.673 1.814 1.814 0 0 1-1.711 1.858M43.286 17.824a2.313 2.313 0 0 1-2.444-2.25 2.44 2.44 0 0 1 2.302-2.498 2.313 2.313 0 0 1 2.443 2.25 2.44 2.44 0 0 1-2.301 2.498"
              clipRule="evenodd"
            ></path>
            <path d="M148.449 3.986H161V.916h-12.551c-2.554 0-4.618 2.088-4.618 4.642v7.909c0 2.554 2.064 4.642 4.618 4.642H161v-3.07h-12.551c-.86 0-1.572-.713-1.572-1.572v-3.242h11.053v-3.07h-11.053V5.557c0-.86.712-1.572 1.572-1.572M124.157.916v3.07h7.05v14.123h3.07V3.986h7.049V.916zm-2.456 17.193V.916h-3.07v17.193zm-25.175 0V.916h-3.07v17.193zM78.267.916c-2.555 0-4.617 2.088-4.617 4.642v12.55h3.045V10.2h11.077V7.13H76.72V5.533c0-.86.713-1.572 1.573-1.572h12.55V.891zM68.1.916v12.423L57.053.953 53.976.99v17.12h3.07V5.852l11.053 12.144 3.07.113V.94zM113.051.916v12.423L102.006.953 98.928.99v17.12h3.07V5.852l11.053 12.144 3.07.113V.94z"></path>
          </svg>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-11 text-[13px] font-normal tracking-wide">
            <a href="#specifications" className="relative pb-1 group">
              Specifications
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#technology" className="relative pb-1 group">
              Technology
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#impact" className="relative pb-1 group">
              Impact
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#news" className="relative pb-1 group">
              News
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            <a href="#about" className="relative pb-1 group">
              About
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="h-11 px-6 text-[13px] bg-[#c7e6f5] text-black hover:bg-black hover:text-white transition-all duration-300 rounded"
          >
            {/* bg-[#c7e6f5] */}
            Contact us
          </button>
        </div>
      </nav>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Contact Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-162.5 bg-[#d6e3e6] text-black z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 mb-10">
          <h2 className="text-3xl font-semibold">Get in contact</h2>
          <button onClick={() => setOpen(false)}>
            <X className="cursor-pointer transition-transform duration-300 hover:rotate-90" />
          </button>
        </div>

        {/* Form */}
        <form className="px-4 space-y-5">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"

              // className="border border-black p-3 rounded-md outline-none text-black"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
            />
          </div>

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
          />

          {/* Phone */}
          <div className="flex">
            <select className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
            />
          </div>
          {/* <div className="w-full">
            <PhoneInput
              country={"in"}
              enableSearch={true}
              inputClass="!w-full !h-[48px] !text-black"
              containerClass="w-full"
            />
          </div> */}

          {/* Message */}
          <textarea
            placeholder="Message*"
            className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
          ></textarea>
        </form>
      </div>
    </header>
  );
}
