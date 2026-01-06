import Image from "next/image";
import Efrom from "./component/e-challan-forn/page";
import Hero from "./component/heroSection/page";
import ContentRenderer from "./midContent/page";
import CheckChallan from "./component/CheckE-Chalan/page";
import AvoidChallan from "./component/avoidChallan/page";
export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <CheckChallan />
      <Efrom />
      <ContentRenderer />

      {/* Image Section */}
      <figure className="px-6 md:px-32 hidden lg:block">
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/chalan-image.png"
            alt="E-Challan Awareness Illustration"
            fill
            loading="lazy" // explicit (default anyway)
            sizes="(min-width: 768px) 100vw, 0vw"
            className="object-cover "
            priority={false} // ensures lazy load
          />
        </div>
      </figure>

      <AvoidChallan />
    </main>
  );
}
