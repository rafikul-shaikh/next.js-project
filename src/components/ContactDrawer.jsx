"use client";

import { X } from "lucide-react";
import "react-phone-input-2/lib/style.css";

export default function ContactDrawer({ isOpen, closeContact }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[650px] bg-[#d6e3e6] text-black z-50 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 sm:p-6 mb-6 sm:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Get in contact
        </h2>

        <button onClick={closeContact}>
          <X className="cursor-pointer transition-transform duration-300 hover:rotate-90" />
        </button>
      </div>

      {/* Form */}
      <form className="px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name*"
            required
            className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition focus:invalid:border-red-500"
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition  focus:invalid:border-red-500"
          />
        </div>

        {/* Company */}
        <input
          type="text"
          placeholder="Company Name*"
          required
          className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition  focus:invalid:border-red-500"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          required
          className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition   focus:invalid:border-red-500"
        />

        {/* Phone */}
        <div className="flex flex-col sm:flex-row gap-2">
          <select className="border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black  focus:invalid:border-red-500 transition ">
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
          </select>

          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition  focus:invalid:border-red-500"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message*"
          rows="5"
          required
          className="w-full border border-gray-400 p-3 rounded-md outline-none text-black hover:border-black focus:border-black transition focus:invalid:border-red-500"
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
