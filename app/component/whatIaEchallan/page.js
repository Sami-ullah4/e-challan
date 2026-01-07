import Image from "next/image";

export default function WhatEchallan() {
  return (
    <section className="px-3 lg:px-30 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
        {/* Image Section */}
        <figure className="relative w-full h-56 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/echallanM.jpg"
            alt="E-Challan System in Pakistan"
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        </figure>

        {/* Content Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What is E-Challan in Pakistan?
          </h2>

          <p className="text-gray-600 text-lg">
            The term <strong>E-Challan</strong> is derived from two words:
            <strong> "E"</strong> meaning electronic, and
            <strong> "Challan"</strong> which refers to an official document
            such as an invoice, summons, or receipt. Together, E-Challan means a
            digital ticket issued by the government for violating the law.
          </p>

          <p className="text-gray-600 leading-relaxed">
            In Pakistan, the E-Challan system is a modern initiative introduced
            to penalize traffic rule violators. It is an automated digital
            ticketing system that records violations using surveillance cameras
            and monitoring technologies. The challan is linked to the offender's
            CNIC, ensuring transparency, efficiency, and accountability.
          </p>
        </div>
      </div>
    </section>
  );
}
