import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

import Hero from "@/components/HeroSection";
import CheckChallan from "@/components/CheckChallanSection";
import LastSection from "@/components/LastSection";

const PayChallan = dynamic(() => import("../components/PayChallanSection"));
const EChallanForm = dynamic(() => import("../components/EChallanForm"), {
  loading: () => (
    <section className="bg-blue-600 py-12 md:py-32 flex items-center px-4 flex-col gap-20">
      <div className="bg-white rounded-xl shadow-lg p-8 md:max-w-6xl w-full mx-auto animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </section>
  ),
});

const WhatEchallan = dynamic(
  () => import("../components/WhatIsEChallanSection"),
  {
    loading: () => (
      <section className="px-2 lg:px-30 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-56 md:h-96 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
        </div>
      </section>
    ),
  }
);

const FeatureCardsSection = dynamic(() =>
  import("../components/FeatureCardsSection")
);
export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <CheckChallan />
      <Suspense fallback={null}>
        <EChallanForm />
      </Suspense>
      <Suspense fallback={null}>
        <WhatEchallan />
      </Suspense>
      {/* Feature Cards Section - Links to detailed pages */}
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

      <Suspense fallback={null}>
        <FeatureCardsSection />
      </Suspense>
      <LastSection />
    </main>
  );
}
