"use client";

import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactDrawer({ isOpen, closeContact }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[650px] bg-[#d6e3e6] text-black z-50 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6 mb-10">
        <h2 className="text-3xl font-semibold">Get in contact</h2>

        <button onClick={closeContact}>
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

        {/* Message */}
        <textarea
          placeholder="Message*"
          rows="5"
          className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md text-lg font-medium cursor-pointer hover:bg-[#71cbe1] transition"
        >
          Contact us
        </button>
      </form>
    </div>
  );
}
