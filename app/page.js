import Image from "next/image";
import Hero from "@/components/HeroSection";
import EChallanForm from "@/components/EChallanForm";
import CheckChallan from "@/components/CheckChallanSection";
import WhatEchallan from "@/components/WhatIsEChallanSection";
// import AvoidChallan from "@/components/AvoidChallanSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <CheckChallan />
      <EChallanForm />
      <WhatEchallan />
      {/* Feature Cards Section - Links to detailed pages */}
      <figure className="px-6 md:px-32 hidden lg:block">
        <div className="relative w-full h-87.5 rounded-xl">
          <Image
            src="/chalan-image.png"
            alt="E-Challan Awareness Illustration"
            fill
            className="object-contain"
          />
        </div>
      </figure>
      <FeatureCardsSection />
      {/* Image Section */}
      {/*     
      <figure className="hidden lg:block px-30 h-[340px] ">
        <Image
          src="/road-challn.webp"
          alt="E-Challan Awareness Illustration"
          width={1200}
          height={420}
          loading="lazy"
          className="rounded-xl shadow-lg w-full h-112.5 object-cover"
        />
      </figure> */}
    </main>
  );
}
