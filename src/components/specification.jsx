"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Specification() {
  const data = [
    {
      title: "Fiber content",
      value: "85-95%, highest on the marke",
      icon: "https://nfinitepaper.com/cdn/f7b92858655e6ddccfca0b1a06eeb135812f2cbc-24x24.svg?auto=format",
    },
    {
      title: "Printability",
      value: "100% compatible with flexographic, gravure and digital printing",
      icon: "https://nfinitepaper.com/cdn/d0e46f926f372474c82a1f2e09bd3372e65ec81c-24x24.svg?auto=format",
    },
    {
      title: "Flexibility",
      value:
        "Excellent machinability on Horizontal and Vertical Form-Fill-Seal (FFS) packing lines with no compromise on speed, maintaining barrier performance post forming",
      icon: "https://nfinitepaper.com/cdn/e9a4bea5ff2dff472c81d087888acb281265f8f3-24x24.svg?auto=format",
    },
    {
      title: "Sealability",
      value:
        "Excellent sealability; available in both heat-seal and cold-seal versions",
      icon: "https://nfinitepaper.com/cdn/9cecf33d62b7cedd910cec700ee17578ac6ad5b3-24x24.svg?auto=format",
    },
    {
      title: "Grammage",
      value: "Ranging from 50 to 70 gsm",
      icon: "https://nfinitepaper.com/cdn/5bbe533d800918cab0427c57bc87ad553844094d-24x24.svg?auto=format",
    },
    {
      title: "Recyclability",
      value: "100% curbside recyclable in standard paper recycling streams",
      icon: "https://nfinitepaper.com/cdn/07ac0818a208632e8ef2ecba64af56cd6369fe25-24x24.svg?auto=format",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#d7e5e8] px-16 py-10 rounded-lg max-w-full h-full mt-20">
      {/* Header */}
      <div className="flex justify-between  border-b border-gray-400">
        <div className="flex items-center gap-3">
          <img
            src="https://nfinitepaper.com/cdn/e3d8c4e92a1bd81ff46619d8647885be3f59e496-24x24.svg?auto=format"
            alt=""
            className="w-6 h-6"
          />
          <h2 className="text-lg font-semibold">Barrier Performance</h2>
        </div>

        <div class=" p-6 rounded-lg shadow-md w-137.5 space-y-6">
          <div class="flex items-center gap-6">
            <div class="bg-cyan-400 text-white px-4 py-1 rounded-md font-medium">
              Moisture
            </div>
            <p class="text-gray-700">&lt;0.3 g/m2/day WVTR (38°C, 90% RH)</p>
          </div>
          <div class="flex items-center gap-6">
            <div class="bg-cyan-400 text-white px-4 py-1 rounded-md font-medium">
              Oxygen
            </div>
            <p class="text-gray-700">&lt;1 cc/m2/day OTR (23°C, 50% RH)</p>
          </div>

          <div class="flex items-center gap-6">
            <div class="bg-cyan-400 text-white px-4 py-1 rounded-md font-medium">
              Grease
            </div>
            <p class="text-gray-700">Excellent resistance to grease and oils</p>
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-400">
          {/* Title Row */}
          <div
            className="flex justify-between items-center py-6 cursor-pointer"
            onClick={() => setOpen(open === index ? null : index)}
          >
            {/* LEFT SIDE (ICON + TITLE) */}
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.title} className="w-5 h-5" />
              <p className="text-gray-800">{item.title}</p>
            </div>
            {/* <p className="text-gray-800">{item.title}</p> */}
            <span className="text-xl">
              {open === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {/* Dropdown Content */}
          {open === index && (
            <div className="pb-6 text-gray-600 text-sm">{item.value}</div>
          )}
        </div>
      ))}
    </section>
  );
}
