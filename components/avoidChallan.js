import Link from "next/link";
import { IoMdTrendingDown } from "react-icons/io";
import { RiSpeedUpLine } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";

const TrafficInfoCard = ({ icon: Icon, children }) => {
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
};

const HowAvoidChallan = () => {
  return (
    <section className="bg-white rounded-lg p-2 lg:p-4 space-y-6">
      {/* Page Heading */}
      <h1 className="text-2xl lg:text-3xl font-bold">
        How to Avoid Getting E-Challan?
      </h1>

      {/* Intro */}
      <p className="text-lg max-w-5xl">
        Following traffic rules doesn't just help you avoid an{" "}
        <Link
          className="text-blue-600 underline"
          href="https://echallan.psca.gop.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Challan
        </Link>
        , it makes you a responsible citizen. Safe driving creates a smarter
        and safer road system in Pakistan.
      </p>

      {/* Cards */}
      <div className="space-y-6">
        <TrafficInfoCard icon={RiSpeedUpLine}>
          <h3 className="text-[22px] font-semibold">Follow Speed Limits</h3>
          <p className="text-lg">
            Always obey the speed limits displayed on signboards. Overspeeding
            is one of the most common reasons for getting an E-Challan.
          </p>
        </TrafficInfoCard>

        <TrafficInfoCard icon={IoMdTrendingDown}>
          <h3 className="text-[22px] font-semibold">Obey Traffic Signals</h3>
          <p className="text-lg">
            Never jump red lights or ignore traffic signals. Cameras at
            intersections automatically record violations and issue fines.
          </p>
        </TrafficInfoCard>

        <TrafficInfoCard icon={FaWalking}>
          <h3 className="text-[22px] font-semibold">
            Respect Pedestrian Crossings
          </h3>
          <p className="text-lg">
            Always stop for pedestrians at zebra crossings and avoid blocking
            walkways. This prevents fines and saves lives.
          </p>
        </TrafficInfoCard>

        <TrafficInfoCard icon={IoMdTrendingDown}>
          <h3 className="text-[22px] font-semibold">
            PSCA Online E-Challan Review
          </h3>

          <p>
            You can check your e-challan directly from the official portal:
            <a
              href="https://echallan.psca.gop.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium ml-1"
            >
              PSCA E-Challan Portal
            </a>
          </p>

          <p>
            Enter your License Plate Number and Vehicle Chassis Number to view
            your challan instantly. Payments can be made via JazzCash and other
            supported methods.
          </p>
        </TrafficInfoCard>

        <TrafficInfoCard icon={IoMdTrendingDown}>
          <h3 className="text-[22px] font-semibold">
            E-Challan Check via SMS
          </h3>

          <p>
            Dial <strong>8815</strong> and send your vehicle details via SMS.
            You’ll receive complete challan information including violation,
            date, location, and payable amount.
          </p>

          <p>
            This method is ideal for areas with weak internet connectivity,
            while the website works best with a stable connection.
          </p>
        </TrafficInfoCard>
      </div>
    </section>
  );
};

export default HowAvoidChallan;
