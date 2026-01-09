import Link from "next/link";
import {
  RiBankLine,
  RiShieldCheckLine,
  RiMapPinLine,
  RiHistoryLine,
  RiUserLine,
  RiErrorWarningLine,
} from "react-icons/ri";

const features = [
  {
    title: "How to Avoid Getting E-Challan",
    description:
      "Learn essential tips and best practices to avoid traffic violations and E-Challans. Follow speed limits, obey traffic signals, and drive responsibly.",
    href: "/how-avoid-challan",
    icon: RiShieldCheckLine,
    color: "red",
  },
  {
    title: "Pay E-Challan with Bank Account",
    description:
      "Step-by-step guide to pay your E-Challan using major Pakistani banks like HBL, Meezan Bank, NBP, and others.",
    href: "/pay-challan-bank",
    icon: RiBankLine,
    color: "blue",
  },
  {
    title: "Which Cities Have E-Challan?",
    description:
      "Discover which cities in Pakistan have E-Challan systems and understand digital traffic enforcement.",
    href: "/cities-echallan",
    icon: RiMapPinLine,
    color: "emerald",
  },
  {
    title: "History of E-Challan in Pakistan",
    description:
      "Explore the evolution of E-Challan systems in Pakistan and how AI modernized traffic enforcement.",
    href: "/history-echallan",
    icon: RiHistoryLine,
    color: "purple",
  },
  {
    title: "Who Can Pay an E-Challan?",
    description:
      "Learn who is responsible for paying E-Challans, including vehicle owners and drivers.",
    href: "/who-pay-challan",
    icon: RiUserLine,
    color: "indigo",
  },
  {
    title: "What Happens If You Avoid E-Challan?",
    description:
      "Understand penalties, fines, license suspension, and legal consequences of ignoring E-Challan.",
    href: "/what-if-avoid-challan",
    icon: RiErrorWarningLine,
    color: "orange",
  },
  {
    title: "Wrong E-Challan? What to Do",
    description:
      "Learn how to correct wrong E-Challans caused by camera errors or vehicle ownership issues.",
    href: "/what-if-get-wrong-challan",
    icon: RiErrorWarningLine,
    color: "orange",
  },
  {
    title: "Online Payment Issues",
    description:
      "Common problems faced during online E-Challan payments and how to resolve them.",
    href: "/issu-online-payment",
    icon: RiErrorWarningLine,
    color: "orange",
  },
  {
    title: "Tips for Smooth Verification",
    description:
      "Best practices to make E-Challan verification faster and error-free.",
    href: "/tips-echallan-varification",
    icon: RiErrorWarningLine,
    color: "orange",
  },
];

const colorClasses = {
  red: { iconBg: "bg-red-50", iconText: "text-red-600" },
  blue: { iconBg: "bg-blue-50", iconText: "text-blue-600" },
  sky: { iconBg: "bg-sky-50", iconText: "text-sky-600" },
  emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-600" },
  purple: { iconBg: "bg-purple-50", iconText: "text-purple-600" },
  indigo: { iconBg: "bg-indigo-50", iconText: "text-indigo-600" },
  orange: { iconBg: "bg-orange-50", iconText: "text-orange-600" },
};

export default function FeatureCardsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20">
      <div className="px-3 lg:px-32">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Comprehensive E-Challan Guides
          </h2>
          <p className="max-w-3xl mx-auto text-slate-700">
            Detailed guides on E-Challan payments, verification, penalties, and
            prevention across Pakistan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];

            return (
              <Link
                key={index}
                href={feature.href}
                prefetch={false}
                className="group block transition-transform hover:-translate-y-1"
                aria-label={feature.title}
              >
                <div className={`h-full rounded-2xl   bg-white p-6 shadow-sm `}>
                  <div className="flex justify-between mb-4">
                    <div
                      className={`h-12 w-12 flex items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText}`}
                    >
                      <Icon size={24} />
                    </div>
                   
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-slate-600">{feature.description}</p>

                  <div className="mt-4 text-sky-600 font-medium flex items-center">
                    Read more →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
