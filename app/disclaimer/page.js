import Link from "next/link";
import { RiErrorWarningLine, RiShieldCheckLine, RiAlertLine } from "react-icons/ri";

export default function Disclaimer() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-amber-100 p-4 rounded-full">
              <RiErrorWarningLine className="w-12 h-12 text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Disclaimer
          </h1>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Important information about the nature and limitations of this website
          </p>
          <p className="text-white/80 text-sm">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          {/* Primary Disclaimer */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-amber-100 p-3 rounded-lg">
                <RiAlertLine className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Important Disclaimer
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    This website is an <strong>informational platform</strong> designed to help Pakistani citizens understand and navigate the E-Challan system. We provide comprehensive guides, explanations, and resources to assist users in checking and paying their traffic challans online.
                  </p>
                  <p>
                    <strong>We are not affiliated with, endorsed by, or connected to any government agency, traffic police department, or official E-Challan authority in Pakistan.</strong> This website operates independently as an educational and informational resource.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Disclaimer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Payment and Transaction Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>We do not process payments, handle transactions, or store financial information on this website.</strong>
              </p>
              <p>
                For official challan payments and verification, please visit the official government portals:
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
                <li>Official provincial traffic police websites for Sindh, KPK, Balochistan, and other regions</li>
                <li>Authorized payment gateway providers approved by government authorities</li>
              </ul>
              <p className="mt-4 text-amber-700 font-medium">
                ⚠️ All payment transactions must be completed through official government channels or authorized payment gateways. We are not responsible for any transactions conducted on third-party websites.
              </p>
            </div>
          </div>

          {/* Information Accuracy */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Information Accuracy Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                While we strive to provide accurate and up-to-date information about the E-Challan system, we cannot guarantee that all information on this website is:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Complete, accurate, or current</li>
                <li>Applicable to all provinces or regions</li>
                <li>Reflective of the latest policy changes or updates</li>
              </ul>
              <p className="mt-4">
                <strong>E-Challan regulations, payment methods, and procedures may vary:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By province (Punjab, Sindh, KPK, Balochistan)</li>
                <li>By city or region</li>
                <li>Over time as policies are updated</li>
              </ul>
              <p className="mt-4 text-slate-600 text-sm italic">
                We recommend verifying all information with official government sources before making any decisions based on the content provided on this website.
              </p>
            </div>
          </div>

          {/* No Liability */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                By using this website, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>We are not liable</strong> for any damages, losses, or consequences resulting from:
                  <ul className="list-circle list-inside space-y-1 ml-6 mt-2">
                    <li>Reliance on information provided on this website</li>
                    <li>Use of third-party websites linked from this site</li>
                    <li>Delays or issues with E-Challan payments or verifications</li>
                    <li>Inaccurate or outdated information</li>
                  </ul>
                </li>
                <li>
                  <strong>We do not guarantee</strong> that this website will be:
                  <ul className="list-circle list-inside space-y-1 ml-6 mt-2">
                    <li>Uninterrupted or error-free</li>
                    <li>Free from viruses or harmful components</li>
                    <li>Compatible with all devices or browsers</li>
                  </ul>
                </li>
                <li>
                  <strong>You are responsible</strong> for:
                  <ul className="list-circle list-inside space-y-1 ml-6 mt-2">
                    <li>Verifying information with official sources</li>
                    <li>Ensuring the security of your personal information</li>
                    <li>Making informed decisions about E-Challan payments</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Third-Party Links Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                This website contains links to external websites, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Official government portals (PSCA, provincial traffic police websites)</li>
                <li>Authorized payment gateway providers</li>
                <li>Other informational resources</li>
              </ul>
              <p className="mt-4">
                <strong>We are not responsible for:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The content, privacy practices, or security of third-party websites</li>
                <li>Any transactions or activities conducted on external websites</li>
                <li>The availability or functionality of linked websites</li>
              </ul>
              <p className="mt-4 text-slate-600 text-sm italic">
                We provide these links for convenience only. Your use of third-party websites is at your own risk, and you should review their terms of service and privacy policies.
              </p>
            </div>
          </div>

          {/* Form and Redirect Disclaimer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Form and Redirect Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                When you use the challan search form on this website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Information entered (CNIC, Challan Number)</strong> is used solely to redirect you to the official government portal
                </li>
                <li>
                  <strong>We do not store, save, or process</strong> any information entered in our forms
                </li>
                <li>
                  <strong>You will be redirected</strong> to the official PSCA E-Challan portal or other government websites
                </li>
                <li>
                  <strong>All subsequent actions</strong> (searching, viewing, or paying challans) are conducted on official government websites, not on this site
                </li>
              </ul>
              <p className="mt-4 text-amber-700 font-medium">
                ⚠️ Once redirected, you are subject to the terms and privacy policies of the official government websites.
              </p>
            </div>
          </div>

          {/* No Legal Advice */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              No Legal or Professional Advice
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                The information provided on this website is for <strong>informational and educational purposes only</strong> and does not constitute:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Legal advice</li>
                <li>Professional consultation</li>
                <li>Official government guidance</li>
                <li>Financial or payment advice</li>
              </ul>
              <p className="mt-4">
                If you have specific questions about your E-Challan, payment issues, or legal matters, please consult:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Official government authorities</li>
                <li>Traffic police departments</li>
                <li>Legal professionals</li>
                <li>Authorized representatives</li>
              </ul>
            </div>
          </div>

          {/* Updates and Changes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Updates and Changes
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify, update, or remove content on this website at any time</li>
                <li>Update this disclaimer without prior notice</li>
                <li>Discontinue or suspend the website temporarily or permanently</li>
              </ul>
              <p className="mt-4 text-slate-600 text-sm italic">
                We recommend reviewing this disclaimer periodically to stay informed about our terms and limitations.
              </p>
            </div>
          </div>

          {/* Acceptance */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border-2 border-sky-200 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-sky-100 p-3 rounded-lg">
                <RiShieldCheckLine className="w-6 h-6 text-sky-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer and all applicable terms and conditions.
                </p>
                <p className="text-slate-600 text-sm">
                  If you do not agree with any part of this disclaimer, please do not use this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Need More Information?
          </h2>
          <p className="text-white/90 text-lg">
            Visit our About page or check the official government portals for the most current information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md transition-colors"
            >
              Visit About Page
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-medium rounded-md transition-colors"
            >
              Return to Homepage
            </Link>
            <a
              href="https://echallan.psca.gop.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-md transition-colors"
            >
              Official Portal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
