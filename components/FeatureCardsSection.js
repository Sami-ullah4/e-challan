"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  RiBankLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiMapPinLine,
  RiHistoryLine,
  RiUserLine,
  RiErrorWarningLine,
} from "react-icons/ri";

const FeatureCardsSection = () => {
  const features = useMemo(() => [
    {
      title: "How to Avoid Getting E-Challan",
      description:
        "Learn essential tips and best practices to avoid traffic violations and E-Challans. Follow speed limits, obey traffic signals, and drive responsibly.",
      href: "/how-avoid-challan",
      icon: RiShieldCheckLine,
      color: "red",
      badge: "Safety Tips",
    },
    {
      title: "Pay E-Challan with Bank Account",
      description:
        "Step-by-step guide to pay your E-Challan using major Pakistani banks. Learn how to use HBL, Meezan Bank, NBP, and other supported banks.",
      href: "/pay-challan-bank",
      icon: RiBankLine,
      color: "blue",
      badge: "Bank Payment",
    },
    {
      title: "How to Pay E-Challan",
      description:
        "Complete guide on paying E-Challan using digital wallets like JazzCash and Easypaisa. Quick, secure, and convenient payment methods.",
      href: "/pay-challan",
      icon: RiMoneyDollarCircleLine,
      color: "sky",
      badge: "Digital Wallets",
    },
    {
      title: "Which Cities Have E-Challan?",
      description:
        "Discover which cities in Pakistan have E-Challan systems and learn about the benefits of digital traffic management across provinces.",
      href: "/cities-echallan",
      icon: RiMapPinLine,
      color: "emerald",
      badge: "Coverage",
    },
    {
      title: "History of E-Challan in Pakistan",
      description:
        "Learn about the evolution of E-Challan system in Pakistan, from its introduction in major cities to nationwide implementation and modernization with AI technology.",
      href: "/history-echallan",
      icon: RiHistoryLine,
      color: "purple",
      badge: "Background",
    },
    {
      title: "Who Can Pay an E-Challan?",
      description:
        "Understand who is responsible for paying E-Challans in Pakistan. Learn about eligibility, vehicle ownership responsibilities, and payment requirements.",
      href: "/who-pay-challan",
      icon: RiUserLine,
      color: "indigo",
      badge: "Eligibility",
    },
    {
      title: "What Happens If You Avoid E-Challan?",
      description:
        "Learn about the serious consequences of ignoring or delaying E-Challan payments, including fines accumulation, registration issues, license suspension, and legal action.",
      href: "/what-if-avoid-challan",
      icon: RiErrorWarningLine,
      color: "orange",
      badge: "Consequences",
    },
    {
      title: "What to Do If You Get a Wrong E-Challan",
      description:
        "Sometimes, you might receive an E-Challan by mistake, usually because of unclear number plates, camera errors, previous ownership of the vehicle, or system glitches. Don’t worry, you can easily get it corrected by following these steps:",
      href: "/what-if-get-wrong-challan",
      icon: RiErrorWarningLine,
      color: "orange",
      badge: "Consequences",
    },
    {
      title: "Common Issues with E-Challan Online Payment",
      description:
        "Sometimes, you might receive an E-Challan by mistake, usually because of unclear number plates, camera errors, previous ownership of the vehicle, or system glitches. Don’t worry, you can easily get it corrected by following these steps:",
      href: "/issu-online-payment",
      icon: RiErrorWarningLine,
      color: "orange",
      badge: "Consequences",
    },
    {
      title: "Tips That Make E-Challan Verification Smoother",
      description:
        "Sometimes, you might receive an E-Challan by mistake, usually because of unclear number plates, camera errors, previous ownership of the vehicle, or system glitches. Don’t worry, you can easily get it corrected by following these steps:",
      href: "/tips-echallan-varification",
      icon: RiErrorWarningLine,
      color: "orange",
      badge: "Consequences",
    },
  ], []);

  const colorClasses = useMemo(() => ({
    red: {
      iconBg: "bg-red-50",
      iconText: "text-red-600",
      accent: "border-red-200",
      hover: "hover:border-red-300",
    },
    blue: {
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      accent: "border-blue-200",
      hover: "hover:border-blue-300",
    },
    sky: {
      iconBg: "bg-sky-50",
      iconText: "text-sky-600",
      accent: "border-sky-200",
      hover: "hover:border-sky-300",
    },
    emerald: {
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      accent: "border-emerald-200",
      hover: "hover:border-emerald-300",
    },
    purple: {
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      accent: "border-purple-200",
      hover: "hover:border-purple-300",
    },
    indigo: {
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
      accent: "border-indigo-200",
      hover: "hover:border-indigo-300",
    },
    orange: {
      iconBg: "bg-orange-50",
      iconText: "text-orange-600",
      accent: "border-orange-200",
      hover: "hover:border-orange-300",
    },
  }), []);

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20">
      <div className=" px-3  lg:px-32">
        {/* Section Heading */}
        <div className="mb-12 space-y-4 text-center">
         
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
            Comprehensive E-Challan Guides
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-base">
            Access detailed guides and information about E-Challan payments,
            avoiding violations, and understanding the system across Pakistan.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];

            return (
              <Link
                key={index}
                href={feature.href}
                className="group block transition-transform hover:-translate-y-1"
                prefetch={false}
                aria-label={`Read more about ${feature.title}`}
              >
                <div
                  className={`h-full rounded-2xl border-2 ${colors.accent} ${colors.hover} bg-white/90 p-6 shadow-sm shadow-slate-200 transition-all hover:shadow-md`}
                >
                  {/* Card Header */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} shadow-sm`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center text-sm font-medium text-sky-600 group-hover:text-sky-700">
                    Read more
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
