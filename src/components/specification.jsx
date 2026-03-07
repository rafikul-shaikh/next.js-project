"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Specification() {
  const data = [
    {
      title: "Fiber content",
      value: "85-95%, highest on the marke",
    },
    {
      title: "Printability",
      value: "100% compatible with flexographic, gravure and digital printing",
    },
    {
      title: "Flexibility",
      value:
        "Excellent machinability on Horizontal and Vertical Form-Fill-Seal (FFS) packing lines with no compromise on speed, maintaining barrier performance post forming",
    },
    {
      title: "Sealability",
      value:
        "Excellent sealability; available in both heat-seal and cold-seal versions",
    },
    {
      title: "Grammage",
      value: "Ranging from 50 to 70 gsm",
    },
    {
      title: "Recyclability",
      value: "100% curbside recyclable in standard paper recycling streams",
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
            <p className="text-gray-800">{item.title}</p>
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
