import { eChallanContentPart3 } from "@/lib/contentPart2/page";

const HowAvoidChallan = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Best practices
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
            How to Avoid Getting E-Challan
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Follow these essential tips to stay compliant with traffic rules and
            avoid receiving E-Challans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {eChallanContentPart3.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {item.h2}
              </h3>
              <div
                className="space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base"
                dangerouslySetInnerHTML={{ __html: item.contentWrapper }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAvoidChallan;
