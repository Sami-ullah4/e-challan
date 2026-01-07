const TipsEChallanVerification = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20 space-y-8 text-slate-800">

      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Tips That Make E-Challan Verification Smoother
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed">
          I have used the online portal to check my E-Challan and find all
          necessary details. Based on my experience, here are some useful tips:
        </p>
      </header>

      {/* Tips List */}
      <section className="space-y-6">
        <ul className="list-disc space-y-6 pl-5">

          <li>
            <p className="leading-relaxed">
              <strong>Visit the Official Website:</strong> Avoid third-party or
              fake checker websites. Always ensure the domain contains .gop.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Double Check Your Details:</strong> Even a minor mistake
              can lead to incorrect or no results. Double-check your CNIC,
              Chassis Number, and other information.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Be Patient:</strong> The E-Challan system handles
              large-scale data and may take time to refresh. Try again after
              some time if results don’t appear immediately.
            </p>
          </li>

          <li>
            <p className="leading-relaxed">
              <strong>Consult a Technical Expert:</strong> If you find the
              process confusing, consult a technical expert, read blogs, or
              watch educational YouTube videos to understand the system better.
            </p>
          </li>

        </ul>
      </section>

      {/* Tip Box */}
      <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
        <p className="text-sm md:text-base text-emerald-800">
          Tip: Always keep screenshots or reference numbers when checking or
          verifying your E-Challan online.
        </p>
      </div>

    </article>
  );
};

export default TipsEChallanVerification;
