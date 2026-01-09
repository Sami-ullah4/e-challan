export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const WhatIfAvoidChallan = () => {
  return (
    <main>
      <article className=" px-4 py-10 lg:px-32 space-y-8 text-slate-800 ">
        {/* Blog Title */}
        <header className="space-y-5  pt-20">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            What Happens If You Avoid E-Challan in Pakistan?
          </h1>

          <p className="text-lg text-slate-600">
            Ignoring or delaying your E-Challan payment can lead to serious
            legal and financial consequences. Pakistan’s E-Challan system is
            digitally connected with NADRA, traffic police, and vehicle
            registration databases—making it nearly impossible to escape unpaid
            fines.
          </p>
          <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
            <p className="text-sm md:text-base text-red-800">
              <strong>Important:</strong> Every unpaid E-Challan is permanently
              recorded against your vehicle number and CNIC until it is cleared.
            </p>
          </div>
          <p className="text-base md:text-lg">
            If you fail to pay your E-Challan on time, the system automatically
            escalates penalties. Below are the most common consequences faced by
            drivers who ignore their traffic challans.
          </p>
        </header>

        {/* Consequences List */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Consequences of Not Paying an E-Challan
          </h2>

          <ol className="list-decimal space-y-5 pl-5">
            <li>
              <strong>Accumulation of Fines:</strong>
              <p className="mt-1 text-slate-700">
                Late payment can result in additional penalties. Over time,
                small challans can grow into a significant financial burden.
              </p>
            </li>

            <li>
              <strong>Vehicle Registration Issues:</strong>
              <p className="mt-1 text-slate-700">
                Unpaid E-Challans are linked directly to your vehicle
                registration. Renewal requests may be blocked until all dues are
                cleared.
              </p>
            </li>

            <li>
              <strong>Driving License Suspension:</strong>
              <p className="mt-1 text-slate-700">
                Repeated violations or multiple unpaid challans may lead to
                suspension or non-renewal of your driving license.
              </p>
            </li>

            <li>
              <strong>Vehicle Impoundment:</strong>
              <p className="mt-1 text-slate-700">
                In some provinces, traffic police can impound vehicles with
                multiple unpaid challans during routine road checks.
              </p>
            </li>

            <li>
              <strong>Legal Action:</strong>
              <p className="mt-1 text-slate-700">
                Chronic offenders may face legal proceedings, court notices, or
                heavier fines imposed by traffic authorities.
              </p>
            </li>

            <li>
              <strong>Negative Traffic Record:</strong>
              <p className="mt-1 text-slate-700">
                Since E-Challan data is stored digitally, unpaid fines create a
                negative record linked to your CNIC, affecting future traffic-
                related verifications.
              </p>
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
};

export default WhatIfAvoidChallan;
