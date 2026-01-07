const CommonIssuesEChallanPayment = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20 space-y-8 text-slate-800">

      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Common Issues with E Challan Online Payment
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed">
          While the E-Challan system has made traffic fine payments more
          convenient and transparent, it’s not completely flawless. Many
          citizens in Pakistan still face minor technical and official
          challenges when using the system. Here are some of the most common
          issues people encounter:
        </p>
      </header>

      {/* Issues List */}
      <section className="space-y-6">
        <ol className="list-decimal space-y-6 pl-5">

          <li>
            <p className="leading-relaxed">
              <strong>Wrong or Duplicate Challans</strong><br />
              Sometimes, drivers receive E-Challans for violations they didn’t
              commit, often due to unclear number plates or camera misreads. In
              some cases, the same violation may appear twice in the system.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Delay in System Updates</strong><br />
              After paying an E-Challan, it can take a few hours or even days
              for the payment status to update in the database. This delay may
              confuse or appear as an “unpaid” challan temporarily.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Limited Online Verification</strong><br />
              Some provincial E-Challan websites face downtime or technical
              issues, preventing users from checking or verifying challan
              details in real time; this occurs especially during maintenance
              or high-traffic periods.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Lack of Awareness</strong><br />
              Many citizens, especially in smaller towns of Punjab or Rural
              Sindh, are still unaware of how the E-Challan system works or how
              to pay it online. This leads to missed deadlines and unnecessary
              fines.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Missing or Unclear Photos</strong><br />
              Occasionally, the system-generated photo of the violation is too
              blurry or unclear to identify the vehicle properly. This makes
              it difficult for the owner to verify the offence.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Payment Gateway Errors</strong><br />
              Some users face issues while making payments through mobile apps
              like JazzCash or Easypaisa due to network errors, incorrect
              challan IDs, or temporary glitches in the payment system.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Slow Complaint Resolution</strong><br />
              When citizens report wrong challans or payment issues, the
              process to resolve these complaints can sometimes be slow due
              to bureaucratic delays or manual verification steps.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Limited Integration Across Provinces</strong><br />
              Each province has its own E-Challan platform. Currently, there’s
              no single national portal to manage challans across Pakistan,
              which can be inconvenient for people who drive in multiple
              regions.
            </p>
          </li>

        </ol>
      </section>

      {/* Note Box */}
      <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
        <p className="text-sm md:text-base text-amber-800">
          Note: Most of these issues are temporary and can usually be resolved
          by contacting the relevant traffic police department or using the
          official dispute system.
        </p>
      </div>

    </article>
  );
};

export default CommonIssuesEChallanPayment;
