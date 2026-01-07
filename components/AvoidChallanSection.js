import { eChallanExtraContent4 } from "@/lib/contentPart2/page";
import Image from "next/image";


const AvoidChallan = () => {
  return (
    <section id="avoid-challan" className="px-2 md:px-32 space-y-8">
      {/* Image */}
     

      {/* EXTRA CONTENT CARDS */}
      {eChallanExtraContent4.map((item, index) => (
        <div
          key={`extra-${index}`}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{item.h2}</h2>
          <div
            className="text-gray-700 text-lg leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: item.contentWrapper }}
          />
        </div>
      ))}
    </section>
  );
};

export default AvoidChallan;
