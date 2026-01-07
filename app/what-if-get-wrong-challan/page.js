const WhatIfWrongChallan = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20 text-slate-800 space-y-8">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          What to Do If You Get a Wrong E-Challan
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed">
          Sometimes, you might receive an E-Challan by mistake, usually because
          of unclear number plates, camera errors, previous ownership of the
          vehicle, or system glitches. Don’t worry, you can easily get it
          corrected by following these steps:
        </p>
      </header>

      {/* Steps */}
      <section className="space-y-6">
        <ol className="space-y-6 list-decimal pl-5">
          <li>
            <p className="text-base leading-relaxed">
              <strong>Verify the Challan Details:</strong> Go to your province’s
              official E-Challan website (for Punjab:{" "}
              <a
                href="https://echallan.psca.gop.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                echallan.psca.gop.pk
              </a>
              ). Check the photo and information carefully including vehicle
              number, date, and location. If the image clearly doesn't show your
              vehicle, it’s likely a system error.
            </p>
          </li>

          <li>
            <p className="text-base leading-relaxed">
              <strong>Contact the Traffic Police:</strong> Call your city’s
              traffic helpline or visit the nearest Traffic Police Office. Take
              your CNIC, vehicle registration, and a print or screenshot of the
              wrong challan. They’ll verify the details and cancel it if it’s
              incorrect.
            </p>
          </li>

          <li>
            <p className="text-base leading-relaxed">
              <strong>File and Dispute Report Online:</strong> The Punjab
              Government portal allows you to file and resolve disputes online.
              You can visit their official website to check your E-Challan in
              Punjab or solve disputes related to it.
            </p>
          </li>

          <li>
            <p className="text-base leading-relaxed">
              <strong>Wait Patiently:</strong> Official disputes take some time
              to resolve due to the complexity of the system. After verifying
              your information and reporting the issue, wait for officials to
              resolve the dispute and notify you.
            </p>
          </li>
        </ol>
      </section>

      {/* Info Box */}
      <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50 p-5">
        <p className="text-sm md:text-base text-sky-800">
          Tip: Always keep screenshots and reference numbers until the dispute
          is fully resolved.
        </p>
      </div>
    </article>
  );
};

export default WhatIfWrongChallan;
