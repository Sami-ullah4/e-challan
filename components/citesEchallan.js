const CitesEchallan = () => {
  const benefits = [
    {
      title: "Improved Road Safety and Transparency",
      description:
        "E-Challan has transformed the dynamics of Pakistan's road safety and traffic management. The digital system ensures transparency by automatically recording violations and issuing fines, minimising human error and manipulation.",
    },
    {
      title: "Speed and Efficiency",
      description:
        "The process of issuing and paying challans has become much quicker. With just a few clicks, both the authorities and citizens can manage traffic fines without unnecessary delays.",
    },
    {
      title: "Convenient Payment Options",
      description:
        "E-Challan has made paying fines easier than ever. You can now pay directly through your phone, without leaving your home. Whether you're travelling, at the office, or on a tea break, payments can be made instantly.",
    },
    {
      title: "Accessibility for Everyone",
      description:
        "Previously, people had to stand in long queues for hours to pay their speeding tickets. The digital system ensures that everyone, regardless of location, has equal access to pay their fines conveniently.",
    },
    {
      title: "Reduction in Bribery and Corruption",
      description:
        "One of the most significant advantages of the E-Challan system is the reduction of bribery. In the past, people often had to pay officers extra money to process their fines. Now, with digital payments, the process is transparent, fair, and free from corruption.",
    },
    {
      title: "A Step Towards Digital Transformation",
      description:
        "The introduction of E-Challan reflects Pakistan's progress toward digital governance. It showcases how technology can simplify government procedures and make systems more citizen-friendly.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Coverage
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
            Which Cities Have E-Challan?
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            E-Challan now works in almost all the major cities of Punjab, Sindh
            and KPK. The system has brought numerous benefits to traffic
            management across Pakistan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm shadow-slate-200"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitesEchallan;
