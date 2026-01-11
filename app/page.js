import Image from "next/image";

import Hero from "@/components/HeroSection";
// import CheckChallan from "@/components/CheckChallanSection";
import dynamic from "next/dynamic";
 const CheckChallan = dynamic(()=>import("../components/CheckChallanSection"))
const EChallanForm = dynamic(() => import("../components/EChallanForm"), {
  loading: () => <div>Loading form...</div>,
});

const WhatEchallan = dynamic(() =>
  import("../components/WhatIsEChallanSection")
);

const PayChallan = dynamic(() => import("../components/PayChallanSection"));

const FeatureCardsSection = dynamic(() =>
  import("../components/FeatureCardsSection")
);

const LastSection = dynamic(() => import("../components/LastSection"));

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Above the fold - load immediately */}
      <Hero />
      <CheckChallan />

      {/* Below the fold - lazy load */}
      <EChallanForm />
      <WhatEchallan />

      <figure className="px-6 md:px-32 hidden lg:block">
        <div className="relative w-full h-87.5 rounded-xl">
          <Image
            src="/chalan-image.png"
            alt="E-Challan Awareness Illustration"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-contain"
            quality={85}
          />
        </div>
      </figure>

      <PayChallan />
      <FeatureCardsSection />
      <LastSection />
    </main>
  );
}
