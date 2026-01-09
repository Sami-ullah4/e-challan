export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
export default function CitiesEchallan() {
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
    <main >
      <article className="px-3 lg:px-32 py-20 space-y-8 text-slate-800 leading-relaxed">
        {/* Blog Header */}
        <header className="space-y-5 py-10 md:py-20">
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Which Cities Have E-Challan?
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            E-Challan now works in almost all the major cities of Punjab, Sindh
            and KPK. The system has brought numerous benefits to traffic
            management across Pakistan.
          </p>
        </header>

        {/* Blog Content */}
        <section className="space-y-6">
          {benefits.map((benefit, index) => (
            <section key={index} className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                {benefit.title}
              </h2>
              <p className="text-base text-slate-700">{benefit.description}</p>
            </section>
          ))}
        </section>
      </article>
    </main>
  );
}
