import {
  eChallanContentPart3,
  eChallanExtraContent4,
} from "@/lib/contentPart2/page";
import Image from "next/image";
import Link from "next/link";

export default function AvoidChallan() {
  return (
    <section className="px-2  md:px-32 space-y-2 ">
      <div className="bg-white rounded-lg p-2 lg:p-4">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl py-2  rounded-2xl mb-5 font-bold">
          How to Avoid Getting E-Challan?
        </h2>

        {/* Intro */}
        <p className="text-lg max-w-5xl pb-6">
          Following traffic rules doesn’t just help you avoid an{" "}
          <Link
            className="text-blue-600 underline"
            href="https://echallan.psca.gop.pk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Challan
          </Link>
          , it makes you a responsible citizen. By driving safely and respecting
          others on the road, you contribute to a smoother, safer, and smarter
          transportation system in Pakistan.
        </p>

        {/* PART 3 CONTENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {eChallanContentPart3.map((card, index) => (
            <div
              key={`part3-${index}`}
              className="rounded-xl shadow-md p-6 bg-white shadow-gray-400"
            >
              <h2 className=" l font-semibold mb-3">{card.h2}</h2>

              <div
                className={` text-gray-700 text-lg leading-relaxed space-y-3`}
                dangerouslySetInnerHTML={{ __html: card.contentWrapper }}
              />
            </div>
          ))}
        </div>
      </div>

      <figure className="px-6 md:px-32 hidden lg:block py-9">
        <div className="  rounded-xl ">
          <Image
            src="/road-challn.webp"
            alt="E-Challan Awareness Illustration"
            width={1200}
            height={420}
            loading="lazy"
            className="rounded-xl shadow-lg hidden lg:block w-full h-[450px] object-cover"
          />
        </div>
      </figure>

      {/* EXTRA CONTENT CARDS */}
      {eChallanExtraContent4.map((item, index) => (
        <div
          key={`extra-${index}`}
          className="bg-white rounded-xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{item.h2}</h2>
          <div
            className={` text-gray-700 text-lg leading-relaxed space-y-3`}
            dangerouslySetInnerHTML={{ __html: item.contentWrapper }}
          />
        </div>
      ))}
    </section>
  );
}
