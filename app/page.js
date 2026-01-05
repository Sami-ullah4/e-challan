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
      {/* Image Display */}
      <figure className="px-6 md:px-32">
        <Image
          src="/chalan-image.png" // path from public folder
          alt="Hero Background"
          width={1200} // desired width
          height={600} // desired height
          className="rounded-xl shadow-lg"
        />
      </figure>
      <AvoidChallan/>
    </main>
  );
}
