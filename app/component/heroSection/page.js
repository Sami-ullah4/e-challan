"use client";

export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("challan-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="px-6 md:px-32 py-20 flex flex-col gap-6 
                  bg-cover bg-center"
      style={{ backgroundImage: "url('/heroBackgound.png')" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">
        check your challan online
      </h1>

      <p className="text-white/90 max-w-4xl text-base md:text-lg">
        Are you looking to pay your e-challan? You can now pay your traffic
        challan online using the government of Pakistan&apos;s digital challan
        system. In today&apos;s guide, we will walk you through the Pakistani
        online challan payment process and how to pay it using your mobile
        phone.
      </p>

      <button
        onClick={scrollToForm}
        className="mt-6 bg-white text-blue-600 hover:bg-gray-100
                   px-8 py-3 rounded-md font-medium w-fit transition-all duration-300"
      >
        Check Challan
      </button>
    </section>
  );
}
