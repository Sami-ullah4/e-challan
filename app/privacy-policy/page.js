import Link from "next/link";
import { RiShieldCheckLine, RiLockLine, RiEyeLine, RiDeleteBinLine, RiFileTextLine } from "react-icons/ri";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-sky-100 p-4 rounded-full">
              <RiShieldCheckLine className="w-12 h-12 text-sky-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-white/80 text-sm">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-sky-100 p-3 rounded-lg">
                <RiFileTextLine className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  Introduction
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Welcome to <strong>e-Challan Pakistan</strong>. This Privacy Policy explains how we handle information when you visit our website. We are committed to protecting your privacy and ensuring transparency about our data practices.
                  </p>
                  <p>
                    This website is an <strong>informational platform</strong> designed to help Pakistani citizens understand and navigate the E-Challan system. We provide guides, explanations, and resources about checking and paying traffic challans online.
                  </p>
                  <p>
                    <strong>Important:</strong> We do not process payments on this website. All payment transactions must be completed through official government portals or authorized payment gateways.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <RiEyeLine className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      1. Information You Provide
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-2">
                      When you use our challan search form, you may provide:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li><strong>CNIC Number or Chassis Number:</strong> Used solely to redirect you to the official government portal for challan checking.</li>
                      <li><strong>Challan Number:</strong> Used only to facilitate the search process on the official portal.</li>
                    </ul>
                    <p className="text-slate-600 text-sm mt-3 italic">
                      <strong>Note:</strong> We do not store, save, or process this information. It is used only to redirect you to the official PSCA E-Challan portal (<a href="https://echallan.psca.gop.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">echallan.psca.gop.pk</a>).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      2. Automatically Collected Information
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-2">
                      When you visit our website, certain information may be automatically collected:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li><strong>Browser Information:</strong> Browser type, version, and language settings</li>
                      <li><strong>Device Information:</strong> Device type, operating system, and screen resolution</li>
                      <li><strong>IP Address:</strong> Your IP address (which may be used for security and analytics purposes)</li>
                      <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar technologies to improve your browsing experience and analyze site traffic</li>
                      <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and navigation patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      3. Third-Party Services
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our website may use third-party services (such as analytics tools or hosting providers) that may collect information about your visit. These services have their own privacy policies, and we encourage you to review them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <RiLockLine className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>To provide services:</strong> To enable the challan search functionality and redirect you to official portals</li>
                  <li><strong>To improve our website:</strong> To understand how visitors use our site and enhance user experience</li>
                  <li><strong>To ensure security:</strong> To detect and prevent fraud, abuse, or security issues</li>
                  <li><strong>To comply with legal obligations:</strong> To meet applicable laws, regulations, or legal processes</li>
                  <li><strong>To communicate:</strong> To respond to inquiries or provide updates about our services (if you contact us)</li>
                </ul>
                <p className="text-slate-600 text-sm mt-4 italic">
                  <strong>We do not:</strong> Sell your personal information to third parties, use your information for marketing purposes without consent, or store sensitive payment information (as we do not process payments).
                </p>
              </div>
            </div>
          </div>

          {/* Data Storage and Security */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Data Storage and Security
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>Form Data:</strong> Information entered in our challan search form is <strong>not stored</strong> on our servers. It is used only temporarily to redirect you to the official government portal.
              </p>
              <p>
                <strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect any data we collect. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <p>
                <strong>Data Retention:</strong> We do not retain form submission data. Automatically collected information (such as analytics data) may be retained for analytical purposes in accordance with industry standards.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device when you visit a website.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Types of Cookies We May Use:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Third-Party Links and Services
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Our website contains links to external websites, including official government portals such as:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://echallan.psca.gop.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">PSCA E-Challan Portal (Punjab)</a></li>
                <li>Official provincial traffic police websites</li>
                <li>Authorized payment gateway providers</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> We are not responsible for the privacy practices or content of these external websites. When you click on links to third-party sites, you will be subject to their privacy policies. We encourage you to review the privacy policies of any websites you visit.
              </p>
              <p>
                We are <strong>not affiliated</strong> with any government agency. All payment transactions should be completed through official government channels.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <RiDeleteBinLine className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Access:</strong> Request information about what data we have collected (if any)</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing (where applicable)</li>
                </ul>
                <p className="text-slate-600 text-sm mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Posting the updated policy on this page with a revised "Last Updated" date</li>
                <li>Displaying a prominent notice on our website (if significant changes are made)</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border-2 border-sky-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white rounded-lg p-4 border border-sky-200">
                <p className="text-slate-900 font-semibold mb-2">e-Challan Pakistan</p>
                <p className="text-slate-600 text-sm">
                  Website: <a href="/" className="text-blue-600 hover:underline">https://e-challan.pk</a>
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  For privacy-related inquiries, please use our website contact form or visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              ⚠️ Important Disclaimer
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm">
              This website is an <strong>informational platform</strong> only. We do not process payments, store financial information, or handle challan transactions. All payment transactions must be completed through official government portals or authorized payment gateways. We are not responsible for any issues arising from transactions on third-party websites.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Have Questions?
          </h2>
          <p className="text-white/90 text-lg">
            If you have any concerns about your privacy or our data practices, please don't hesitate to reach out.
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
          </div>
        </div>
      </section>
    </main>
  );
}
