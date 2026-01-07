import { PiSeatbeltBold } from "react-icons/pi";

const CitesEchallan = () => {
  return (
    <section className="px-4 py-8 ">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Which Cities Have E-Challan?
        </h2>
        <p className="text-gray-700">
          E-Challan now works in almost all major cities of Punjab, Sindh, and
          KPK.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Improved Road Safety and Transparency
          </h3>
          <p className="text-gray-700 leading-relaxed">
            E-Challan has transformed Pakistan’s road safety and traffic
            management by automatically recording violations and issuing fines,
            reducing human error and manipulation.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Speed and Efficiency
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The process of issuing and paying challans is now much faster. Both
            authorities and citizens can manage traffic fines without
            unnecessary delays.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Convenient Payment Options
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Paying fines is easier than ever. Payments can be made instantly
            through your phone, whether you’re at home, at work, or travelling.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Accessibility for Everyone{" "}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Previously, people had to stand in long queues for hours to pay
            their speeding tickets. The digital system ensures that everyone,
            regardless of location, has equal access to pay their fines
            conveniently.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Reduction in Bribery and Corruption{" "}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            One of the most significant advantages of the E-Challan system is
            the reduction of bribery. In the past, people often had to pay
            officers extra money to process their fines. Now, with digital
            payments, the process is transparent, fair, and free from
            corruption.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            A Step Towards Digital Transformation{" "}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The introduction of E-Challan reflects Pakistan’s progress toward
            digital governance. It showcases how technology can simplify
            government procedures and make systems more citizen-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitesEchallan;
