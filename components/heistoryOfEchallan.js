"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const HistoryChallan = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="px-2 lg:px-30  ">
      <div className="w-full">
        {/* Clickable Heading */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center rounded-lg p-2 bg-gray-50"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            History of E-Challan in Pakistan
          </h2>

          {/* Icon */}
          <FaChevronDown size={26}
            className={`text-gray-700 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Content */}
        {open && (
          <div className="mt-4 rounded-lg p-5 space-y-4 text-gray-700 text-lg ">
            <p>
              In the past, the concept of E-Challan was almost unknown to the
              people of Pakistan. Internet usage was limited, and online banking
              was primarily confined to corporations and commercial entities.
              Due to the lack of technological advancement and digital literacy,
              most citizens were unfamiliar with electronic systems. Government
              institutions also faced challenges such as scarce digital data,
              outdated processes, and a shortage of trained personnel capable of
              implementing such modern infrastructure.
            </p>

            <p>
              The transformation began when the Punjab Government took the
              initiative to introduce the E-Challan system in major cities like
              Lahore and Islamabad. The success of the program encouraged the
              authorities to expand it across other regions of Punjab. Following
              this success, the federal government adopted the system and
              extended its implementation to Sindh, Khyber Pakhtunkhwa (KPK),
              and Balochistan.
            </p>

            <p>
              With the rise of AI and automation technologies around 2025, the
              E-Challan system underwent rapid modernisation. AI-enabled cameras
              and automated number plate recognition (ANPR) systems made traffic
              monitoring more accurate and efficient.
            </p>

            <p>
              When the system was introduced in Karachi, it became a major
              headline. As Pakistan’s largest city, Karachi saw increased public
              interest, including viral and unexpected camera snapshots shared
              widely on social media.
            </p>

            <p>
              Today, the E-Challan system stands as a symbol of Pakistan’s
              progress toward digital governance, transparency, and smart city
              infrastructure.
            </p>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default HistoryChallan;
