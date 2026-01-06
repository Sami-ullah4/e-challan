"use client";

export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("challan-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="px-2 lg:px-32 py-10 lg:py-24 flex flex-col gap-6 
                  bg-cover bg-center"
      style={{ backgroundImage: "url('/heroBackgound.png')" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl ">
        check your challan online
      </h1>

      <p className="text-white/90 max-w-4xl text-lg ">
        Are you looking to pay your e-challan? You can now pay your traffic
        challan online using the government of Pakistan&apos;s digital challan
        system. In today&apos;s guide, we will walk you through the Pakistani
        online challan payment process and how to pay it using your mobile
        phone.
      </p>

      <button
        onClick={scrollToForm}
        className=" text-white bg-blue-600  py-3 w-32   rounded-md font-medium "
      >
        Check Challan
      </button>
    </section>
  );
}
