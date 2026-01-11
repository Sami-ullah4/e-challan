// import Image from "next/image";
// import HeroButton from "./heroButton";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-2 lg:px-32 py-20 lg:py-28 overflow-hidden bg-blue-900"
    >
      {/* <Image
        src="/heroBackgound.png"
        alt="Check E Challan Online Pakistan"
        fill
        priority
        quality={50}
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      /> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40"></div>
      {/* Content */}
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
        {/* <HeroButton /> */}
        <IoArrowDownCircleOutline
          size={50}
          className="text-pink-600 animate-bounce  transition duration-300"
        />
      </div>{" "}
    </section>
  );
};

export default Hero;
