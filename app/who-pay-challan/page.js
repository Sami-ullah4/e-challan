export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const WhoPayChallan = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl py-10 md:py-20">
          Who Can Pay an E-Challan?
        </h2>

        <div className="space-y-4 text-slate-700">
          <p className="leading-relaxed">
            Any individual who has received an E-Challan for a traffic violation
            is responsible for paying it. In Pakistan, anyone holding a valid
            CNIC or driver&apos;s license can pay their E-Challan, either online
            or through authorised payment channels.
          </p>

          <p className="leading-relaxed">
            Typically, the registered owner of the vehicle is considered
            responsible for the payment, even if someone else was driving at the
            time of the violation. The challan is linked directly to the
            vehicle&apos;s registration number and the owner&apos;s CNIC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoPayChallan;
