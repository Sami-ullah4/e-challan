const PayChallan = () => {
  const jazzCashSteps = [
    "Open your JazzCash mobile app.",
    "Go to the Traffic Challan section.",
    "Choose Punjab Traffic Challan, Karachi Traffic Police, or Islamabad Traffic Police.",
    "Select the option and enter your Challan ID.",
    "Review the total challan amount displayed.",
    "Pay the amount and save a screenshot of the receipt.",
  ];

  const easypaisaSteps = [
    "Open your Easypaisa mobile app.",
    "Navigate to the Traffic Challan section.",
    "Select Punjab, Karachi, or Islamabad Traffic Police.",
    "Enter your Challan ID carefully as shown on the ticket.",
    "Review the challan amount shown on the screen.",
    "Complete the payment and save the receipt for your record.",
  ];

  const renderStepList = (steps) => {
    return (
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
              {index + 1}
            </span>
            <p className="text-sm text-slate-700 sm:text-base">{step}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      id="pay-challan"
      className="bg-gradient-to-b from-slate-100 via-slate-50 to-white py-14 sm:py-20"
    >
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Step 3 • Pay securely
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
          How to Pay E-Challan in Pakistan?
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          Use trusted digital wallets like JazzCash and Easypaisa, or official
          provincial payment portals, to clear your traffic fines quickly and
          securely.
        </p>
      </div>

      {/* Payment Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* JazzCash */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm shadow-slate-200">
          <div className="flex items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">
                Digital wallet
              </p>
              <h3 className="text-xl font-semibold text-slate-900">
                Pay via JazzCash
              </h3>
            </div>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              Recommended
            </span>
          </div>

          {renderStepList(jazzCashSteps)}
        </div>

        {/* Easypaisa */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm shadow-slate-200">
          <div className="flex items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">
                Digital wallet
              </p>
              <h3 className="text-xl font-semibold text-slate-900">
                Pay via Easypaisa
              </h3>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Popular
            </span>
          </div>

          {renderStepList(easypaisaSteps)}
        </div>
      </div>
    </section>
  );
};

export default PayChallan;
