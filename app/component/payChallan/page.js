export default function PayChallan() {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-12 ">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          How to Pay E-Challan in Pakistan?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          You can pay your e-challan using mobile apps like JazzCash and
          Easypaisa. For Punjab, you can also use the official ePay Punjab
          portal.
        </p>
      </div>

      {/* Payment Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* JazzCash */}
        <div className="bg-white  rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Payment via JazzCash
          </h3>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Open your JazzCash mobile app.</li>
            <li>Go to the Traffic Challan section.</li>
            <li>
              Choose one option: Punjab Traffic Challan, Karachi Traffic Police,
              or Islamabad Traffic Police.
            </li>
            <li>Select the option and enter your Challan ID.</li>
            <li>The total challan amount will be displayed.</li>
            <li>Pay the amount and save a screenshot of the receipt.</li>
          </ol>
        </div>

        {/* Easypaisa */}
        <div className="bg-white  rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Payment via Easypaisa
          </h3>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Open your Easypaisa mobile app.</li>
            <li>Navigate to the Traffic Challan section.</li>
            <li>
              Select Punjab, Karachi, or Islamabad Traffic Police.
            </li>
            <li>Enter your Challan ID carefully.</li>
            <li>Review the challan amount shown.</li>
            <li>Complete the payment and save the receipt.</li>
          </ol>
        </div>

      </div>
    </section>
  );
}
