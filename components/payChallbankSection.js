const PayChallanBank = () => {
  const bankSteps = [
    "Launch your bank app or visit the official website.",
    "Log in to your account using your credentials.",
    "Find the Government Payments or Bill Payment section.",
    "Enter your Challan ID and review the fee amount.",
    "Complete the payment and save the confirmation receipt.",
  ];

  const banks = [
    "HBL",
    "Meezan Bank",
    "NBP",
    "Bank of Punjab",
    "Allied Bank",
    "United Bank",
    "Faysal Bank",
    "Askari Bank",
    "Bank Islami",
  ];

  const renderStepList = (steps) => {
    return (
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
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
      id="pay-challan-bank"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20"
    >
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          Alternative payment option
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
          How to Pay E-Challan with a Bank Account?
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          If you prefer using your bank instead of digital wallets, most major
          Pakistani banks now support direct E-Challan payments through their
          mobile and internet banking platforms.
        </p>
      </div>

      {/* Two-column layout: steps + banks list */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-[1.7fr,1.3fr] lg:px-8">
        {/* Payment Steps Card */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm shadow-slate-200">
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-600">
              Bank payment
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              Pay via your bank app or website
            </h3>
          </div>
          <p className="text-sm text-slate-600 sm:text-base">
            The major banks of Pakistan have a challan payment option. Follow
            these simple steps to pay through your bank:
          </p>
          {renderStepList(bankSteps)}
        </div>

        {/* Banks List Card */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm shadow-slate-200">
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-600">
              Supported banks
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              Banks that support E-Challan
            </h3>
          </div>
          <p className="text-sm text-slate-600 sm:text-base">
            These banks typically offer E-Challan options inside their bill
            payment or government payments sections:
          </p>
          <ul className="grid grid-cols-1 gap-2.5 text-sm text-slate-800 sm:text-base">
            {banks.map((bank, index) => (
              <li
                key={index}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                {bank}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PayChallanBank;
