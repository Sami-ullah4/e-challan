import { IoMdTrendingDown } from "react-icons/io";
import { RiSpeedUpLine } from "react-icons/ri";

import {
  eChallanContentPart3,
  eChallanExtraContent4,
} from "@/lib/contentPart2/page";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Reusable Card Component
========================= */
function TrafficInfoCard({ icon: Icon, children }) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition p-6">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l-2xl" />

      <div className="flex gap-5 items-start">
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shadow-sm">
            <Icon size={30} />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 text-gray-800">{children}</div>
      </div>
    </div>
  );
}

export default function AvoidChallan() {
  return (
    <section className="px-2 md:px-32 space-y-8">
      <div className="bg-white rounded-lg p-2 lg:p-4 space-y-6">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold">
          How to Avoid Getting E-Challan?
        </h2>

        {/* Intro */}
        <p className="text-lg max-w-5xl">
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

        {/* Cards */}
        <div className="space-y-6">
          <TrafficInfoCard icon={RiSpeedUpLine}>
            <h3 className="text-[22px] font-semibold">Follow Speed Limits</h3>
            <p className="text-lg">
              Never cross a red light or ignore traffic signs. Cameras at
              intersections record every vehicle that jumps signals, resulting
              in an automatic fine.
            </p>
          </TrafficInfoCard>

          <TrafficInfoCard icon={IoMdTrendingDown}>
            <h3 className="text-[22px] font-semibold">Follow Speed Limits</h3>
            <p className="text-lg">
              Always obey the speed limits displayed on signboards. Overspeeding
              is one of the most common reasons for getting an E-Challan.
              Remember, speed limits may vary by area, road type, and vehicle
              category.
            </p>
          </TrafficInfoCard>

          <TrafficInfoCard icon={IoMdTrendingDown}>
            <h3 className="text-[22px] font-semibold">
              Respect Pedestrian Crossing
            </h3>
            <p className="text-lg">
              Always stop for pedestrians at zebra crossings and avoid blocking
              walkways. This not only prevents fines but also promotes a culture
              of safety and respect.
            </p>
          </TrafficInfoCard>

          <TrafficInfoCard icon={IoMdTrendingDown}>
            <h3 className="text-[22px] font-semibold">
              PSCA Online E Challan Review
            </h3>

            <p>
              I visited the official PSCA website to check my e-challan. The
              overall experience was great. You can check your challan directly
              from the official portal:
              <a
                href="https://echallan.psca.gop.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium ml-1"
              >
                PSCA E-Challan Portal
              </a>
              .
            </p>

            <p>
              The site loaded just in time and the UI was very friendly. I entered
              my License Plate Number and Vehicle Chassis Number and my e-challan
              appeared instantly. I paid the fine using my JazzCash wallet.
            </p>
          </TrafficInfoCard>

          <TrafficInfoCard icon={IoMdTrendingDown}>
            <h3 className="text-[22px] font-semibold">
              PSCA Online E Challan Review
            </h3>

            <p>
              I visited the official PSCA website to check my e-challan. The
              overall experience was great, the site loaded just in time and the
              UI was very friendly. There were two boxes, one which required the
              License Plate Number while the other required the Vehicle Chassis
              Number.
            </p>

            <p>
              I entered both respectively and my e challan was shown. Luckily,
              it was just a minor speeding violation which I then paid using my
              JazzCash wallet.
            </p>
          </TrafficInfoCard>

          <TrafficInfoCard icon={IoMdTrendingDown}>
            <h3 className="text-[22px] font-semibold">
              E Challan Check with Phone Number
            </h3>

            <p>
              I dialed 8815 and sent a text message which had my License Plate and
              other necessary info. Moments later I got a reply with all the
              details of the e challan that were registered on my CNIC and
              vehicle.
            </p>

            <p>
              It was a quick and full info text that contained my violation type,
              date and location. Additionally, it also showed the total amount
              and how I can pay it.
            </p>

            <p>
              The overall experience with this option was also very good. I
              would recommend using both methods if possible. The phone number e
              challan verification is great for areas with weaker or no internet
              access, while the official government website works best with a
              good internet connection and smartphone.
            </p>
          </TrafficInfoCard>
        </div>
      </div>

      {/* Image */}
      <figure className="hidden lg:block py-9">
        <Image
          src="/road-challn.webp"
          alt="E-Challan Awareness Illustration"
          width={1200}
          height={420}
          loading="lazy"
          className="rounded-xl shadow-lg w-full h-112.5 object-cover"
        />
      </figure>

      {/* EXTRA CONTENT CARDS */}
      {eChallanExtraContent4.map((item, index) => (
        <div
          key={`extra-${index}`}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {item.h2}
          </h2>
          <div
            className="text-gray-700 text-lg leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: item.contentWrapper }}
          />
        </div>
      ))}
    </section>
  );
}
