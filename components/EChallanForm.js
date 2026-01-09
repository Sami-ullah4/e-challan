"use client";

import { useState, useCallback, useMemo } from "react";

const EChallanForm = () => {
  const [cnic, setCnic] = useState("");
  const [challan, setChallan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Increased animation duration to 4 seconds
  const ANIMATION_DURATION = 4000; // 4 seconds in milliseconds

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!cnic || !challan) return;

    setLoading(true);

    // Redirect only after animation completes
    const redirect = () => {
      window.location.href = "https://echallan.psca.gop.pk/?vehicle=";
    };

    // Use setTimeout with the same duration as animation
    setTimeout(redirect, ANIMATION_DURATION);
  }, [cnic, challan]);

  const handleCnicChange = useCallback((e) => {
    setCnic(e.target.value);
  }, []);

  const isFormValid = useMemo(() => {
    return cnic.trim() !== "" && challan.trim() !== "";
  }, [cnic, challan]);

  return (
    <section
      id="challan-form"
      style={{ backgroundImage: "url('/heroBackgound.png')" }}
      className="bg-blue-600 py-12 md:py-20 flex items-center px-4 flex-col gap-20 bg-no-repeat bg-cover"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 md:max-w-6xl w-full mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Search Challan
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Enter your details below to check your e-challan status
          </p>
        </div>

        {/* Progress bar */}
        {loading && (
          <div className="w-full h-2 bg-blue-100 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-blue-600 animate-progress"></div>
          </div>
        )}

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CNIC */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                CNIC Number or Chassis Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={cnic}
                onChange={handleCnicChange}
                disabled={loading}
                placeholder="12345-1234567-1"
                autoComplete="off"
                aria-required="true"
                className={`w-full rounded-md px-4 py-3 border
                  focus:outline-none focus:ring-2
                  ${
                    submitted && !cnic
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>

            {/* Challan */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Challan Number <span className="text-red-500">*</span>
                <span className="text-gray-500 text-sm">
                  {" "}
                  (ABC 000, ABC 0000, ABC-00-0000)
                </span>
              </label>
              <input
                type="text"
                value={challan}
                onChange={(e) => setChallan(e.target.value)}
                disabled={loading}
                placeholder="Enter challan number"
                className={`w-full rounded-md px-4 py-3 border
                  focus:outline-none focus:ring-2
                  ${
                    submitted && !challan
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading || !isFormValid}
              className={`px-8 py-3 rounded-md font-medium transition-colors
                ${
                  loading || !isFormValid
                    ? "bg-blue-400 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }`}
              aria-label="Search for challan"
            >
              {loading ? "Searching..." : "Search Challan"}
            </button>
          </div>
        </form>
      </div>

      {/* Progress animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 4s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default EChallanForm;