"use client";

import { useState } from "react";
import { eChallanContentPart3 } from "@/lib/contentPart2/page";

export default function AvoidChallan() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-30">
      {/* Clickable Heading */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <h2 className="text-4xl font-semibold flex items-center justify-between">
          How to Avoid Getting E Challan?
          <span className="text-xl">{open ? "−" : "+"}</span>
        </h2>
      </button>

      {/* Dropdown Card */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[5000px] mt-6" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border">
          {eChallanContentPart3.map((item, index) => {
            switch (item.type) {
              case "h1":
                return (
                  <h1
                    key={index}
                    className="text-2xl font-bold mt-6"
                  >
                    {item.content}
                  </h1>
                );

              case "h2":
                return (
                  <h2
                    key={index}
                    className="text-xl font-semibold mt-4"
                  >
                    {item.content}
                  </h2>
                );

              case "p":
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed"
                  >
                    {item.content}
                  </p>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
