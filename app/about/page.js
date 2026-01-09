import Link from "next/link";

export const metadata = {
  title: "About",
  robots: {
    index: false,
    follow: true,
  },
};

export default function About() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About e-Challan
          </h1>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Your comprehensive guide to understanding, checking, and paying
            electronic traffic challans in Pakistan
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Our mission
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Empowering Citizens with E-Challan Knowledge
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg">
              e-Challan is an informational platform dedicated to helping Pakistani
              citizens understand, navigate, and manage electronic traffic challans
              effectively. We believe that access to clear, accurate information
              about the E-Challan system empowers drivers to make informed decisions
              and contributes to safer roads across Pakistan.
            </p>

            <p>
              Our website serves as a comprehensive resource center, providing
              step-by-step guides, detailed explanations, and practical tips for
              everything related to E-Challans—from understanding what they are to
              checking your status, making payments, and avoiding violations in the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              What we offer
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Comprehensive E-Challan Resources
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Everything you need to know about E-Challans in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Check Challan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Check Your Challan
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Learn multiple methods to check your E-Challan status using CNIC,
                vehicle number, or SMS service. Quick and easy verification
                processes.
              </p>
            </div>

            {/* Payment Guides */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Payment Methods
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Detailed guides on paying via digital wallets (JazzCash, Easypaisa)
                and bank accounts. Step-by-step instructions for secure payments.
              </p>
            </div>

            {/* Understanding E-Challan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Understanding E-Challan
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Comprehensive explanations of what E-Challan is, how it works, its
                history in Pakistan, and which cities have implemented the system.
              </p>
            </div>

            {/* Avoid Violations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Avoid Violations
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Learn about common traffic violations that trigger E-Challans and
                best practices to stay compliant with traffic rules and regulations.
              </p>
            </div>

            {/* Coverage Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Coverage & History
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Information about which cities have E-Challan systems, the history
                of its implementation in Pakistan, and the evolution of digital
                traffic management.
              </p>
            </div>

            {/* Detailed Guides */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Detailed Guides
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                In-depth articles covering common violations, payment issues,
                dispute resolution, and tips for smoother E-Challan verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Key features
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Choose Our Platform
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Comprehensive Information
                </h3>
                <p className="text-slate-700">
                  All E-Challan related information in one place—from basic
                  concepts to advanced payment methods and violation prevention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Easy-to-Follow Guides
                </h3>
                <p className="text-slate-700">
                  Step-by-step instructions with clear explanations, making it easy
                  for anyone to check and pay their challans independently.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Up-to-Date Content
                </h3>
                <p className="text-slate-700">
                  Regularly updated information about payment methods, supported
                  banks, cities with E-Challan systems, and latest regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Free & Accessible
                </h3>
                <p className="text-slate-700">
                  All information is provided free of charge to help citizens
                  navigate the E-Challan system without any barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Important Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                This website is an <strong>informational platform</strong> designed
                to help Pakistani citizens understand and navigate the E-Challan
                system. We provide comprehensive guides, explanations, and resources
                to assist users in checking and paying their traffic challans.
              </p>
              <p>
                <strong>For official challan payments and verification</strong>,
                please visit the official government portals:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a
                    href="https://echallan.psca.gop.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    PSCA E-Challan Portal (Punjab)
                  </a>
                </li>
                <li>
                  Official provincial traffic police websites for Sindh, KPK, and
                  other regions
                </li>
              </ul>
              <p>
                We are not affiliated with any government agency. All payment
                transactions should be completed through official government
                channels or authorized payment gateways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to Check Your Challan?
          </h2>
          <p className="text-white/90 text-lg">
            Use our comprehensive guides to check and pay your E-Challan quickly
            and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/#challan-form"
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-medium rounded-md transition-colors"
            >
              Check Challan Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
