"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const WhoPayChallan = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-2 lg:px-30 ">
      <div className="w-full">
        {/* Clickable Heading */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center rounded-lg p-2 bg-gray-50"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Who Can Pay an E-Challan?{" "}
          </h2>

          {/* Icon */}
          <FaChevronDown
            size={26}
            className={`text-gray-700 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Content */}
        {open && (
          <div className="mt-4 rounded-lg p-5 space-y-4 text-gray-700 text-lg ">
            <p>
              Any individual who has received an E-Challan for a traffic
              violation is responsible for paying it. In Pakistan, anyone
              holding a valid CNIC or driver's license can pay their E-Challan,
              either online or through authorised payment channels
            </p>

            <p>
              Typically, the registered owner of the vehicle is considered
              responsible for the payment, even if someone else was driving at
              the time of the violation. The challan is linked directly to the
              vehicle's registration number and the owner's CNIC.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoPayChallan;
