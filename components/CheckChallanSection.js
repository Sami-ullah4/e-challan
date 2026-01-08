const CheckChallan = () => {
  const stepsData = [
    {
      title: "Check E Challan Using CNIC",
      steps: [
        "Firstly, visit your province's official e challan website.",
        "Secondly, enter your CNIC into the field.",
        "Finally, complete the Captcha Puzzle and check the challan.",
      ],
    },
    {
      title: "Vehicle Number Check",
      steps: [
        "Go to the government official website.",
        "Enter your Vehicle Identity Number, also called VIN.",
        "Next, enter your CNIC number.",
        "Now, tap the check button and wait for the results to appear.",
      ],
    },
    {
      title: "E Challan SMS Method",
      steps: [
        "Open your phone's message app.",
        "Enter your Vehicle Chassis number and send it to 8815.",
        "You will receive an SMS with all your e challan details.",
      ],
    },
  ];

  return (
    <section id="check-challan" className="px-2 lg:px-32 space-y-3 md:space-y-5 py-4">
      <div className="max-w-3xl space-y-3">
       
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
          How to Check E Challan Online?
        </h2>
        <p className="text-gray-700 text-lg">
          There are three main methods to check e challan online in Pakistan.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {stepsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-600 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
              {item.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheckChallan;
