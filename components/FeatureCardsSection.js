import Link from "next/link";
import {
  RiBankLine,
  RiShieldCheckLine,
  RiMapPinLine,
  RiHistoryLine,
  RiUserLine,
  RiErrorWarningLine,
  RiFileEditLine,
  RiMoneyDollarCircleLine,
  RiCheckboxCircleLine,
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
    icon: RiFileEditLine,
    color: "rose",
  },
  {
    title: "Online Payment Issues",
    description:
      "Common problems faced during online E-Challan payments and how to resolve them.",
    href: "/issu-online-payment",
    icon: RiMoneyDollarCircleLine,
    color: "amber",
  },
  {
    title: "Tips for Smooth Verification",
    description:
      "Best practices to make E-Challan verification faster and error-free.",
    href: "/tips-echallan-varification",
    icon: RiCheckboxCircleLine,
    color: "teal",
  },
];

const colorClasses = {
  red: { iconBg: "bg-red-50", iconText: "text-red-700" },
  blue: { iconBg: "bg-blue-50", iconText: "text-blue-700" },
  sky: { iconBg: "bg-sky-50", iconText: "text-sky-700" },
  emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-700" },
  purple: { iconBg: "bg-purple-50", iconText: "text-purple-700" },
  indigo: { iconBg: "bg-indigo-50", iconText: "text-indigo-700" },
  orange: { iconBg: "bg-orange-50", iconText: "text-orange-700" },
  rose: { iconBg: "bg-rose-50", iconText: "text-rose-700" },
  amber: { iconBg: "bg-amber-50", iconText: "text-amber-700" },
  teal: { iconBg: "bg-teal-50", iconText: "text-teal-700" },
};

export default function FeatureCardsSection() {
  return (
    <section 
      className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="px-3 lg:px-32">
        <div className="mb-12 text-center space-y-4">
          <h2 
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900"
          >
            Comprehensive E-Challan Guides
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-800">
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
                className="group block transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 rounded-2xl"
                aria-label={`Read more about ${feature.title}`}
              >
                <article className="h-full rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between mb-4">
                    <div
                      className={`h-12 w-12 flex items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText}`}
                      aria-hidden="true"
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-4 text-sky-700 font-medium flex items-center gap-1">
                    <span>Read more</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}