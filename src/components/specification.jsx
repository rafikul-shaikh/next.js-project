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
      <div className="border-b border-gray-400">
        <h2 className="text-lg font-semibold mb-20">Barrier Performance</h2>

        <div className="tech-row">
          <span className="tag">Moisture</span>
          <p>&lt;0.3 g/m2/day WVTR (38°C, 90% RH)</p>
        </div>

        <div className="tech-row">
          <span className="tag">Oxygen</span>
          <p>&lt;1 cc/m2/day OTR (23°C, 50% RH)</p>
        </div>

        <div className="tech-row">
          <span className="tag">Grease</span>
          <p>Excellent resistance to grease and oils</p>
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
