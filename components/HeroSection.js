"use client";

import { useCallback } from "react";

const Hero = () => {
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById("challan-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative px-2 lg:px-32 py-20 lg:py-28 flex flex-col gap-6 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/heroBackgound.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40"></div>
      <div className="relative z-10 max-w-4xl space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Check your challan online
        </h1>

        <p className="text-white/90 max-w-4xl text-lg sm:text-xl leading-relaxed">
          Are you looking to pay your e-challan? You can now pay your traffic
          challan online using the government of Pakistan&apos;s digital challan
          system. In today&apos;s guide, we will walk you through the Pakistani
          online challan payment process and how to pay it using your mobile
          phone.
        </p>

        <button
          onClick={scrollToForm}
          className="text-white bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-md font-medium text-base transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to challan search form"
        >
          Check Challan
        </button>
      </div>
    </section>
  );
};

export default Hero;
