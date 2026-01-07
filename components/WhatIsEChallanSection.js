import Image from "next/image";
import Link from "next/link";
import { RiAiGenerate2 } from "react-icons/ri";
import { BiCctv } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";

const WhatEchallan = () => {
  return (
    <>
      <section id="what-is-echallan" className="px-2 lg:px-30 pt-8">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What is E-Challan in Pakistan?
            </h2>

            <p className="text-gray-600 text-lg">
              The term <strong>E-Challan</strong> is derived from two words:
              <strong> "E"</strong> meaning electronic, and
              <strong> "Challan"</strong> which refers to an official document
              such as an invoice, summons, or receipt. Together, E-Challan means
              a digital ticket issued by the government for violating the law.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In Pakistan, the E-Challan system is a modern initiative
              introduced to penalize traffic rule violators. It is an automated
              digital ticketing system that records violations using
              surveillance cameras and monitoring technologies. The challan is
              linked to the offender&apos;s CNIC, ensuring transparency, efficiency,
              and accountability.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-10 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How Does E-Challan Work?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Electronic challan is an automated system that is connected with HD
            cameras, the traffic service database and{" "}
            <Link
              href="https://www.nadra.gov.pk/"
              className="text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NADRA
            </Link>{" "}
            in Pakistan.
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
          <div className="bg-gray-100 p-4 rounded-lg ">
            <div className="text-pink-700 pb-4">
              <BiCctv size={30} />
            </div>
            <h3 className="text-xl font-semibold">Cameras Detect Activity</h3>
            <p className="text-gray-600 text-lg">
              High definition cameras are equipped on highways. These detect any
              violation, such as no helmet, speeding, or signal violation.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg ">
            <div className="text-pink-700 pb-4">
              <FiDatabase size={30} />
            </div>
            <h3 className="text-xl font-semibold">Database Finds</h3>
            <p className="text-gray-600 text-lg">
              The cameras click a picture of the vehicle&apos;s license plate and
              send it to the database. The database then analyses and connects
              the license plate with the vehicle owner&apos;s CNIC
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg ">
            <div className="text-pink-700 pb-4">
              <RiAiGenerate2 size={30} />
            </div>
            <h3 className="text-xl font-semibold">E Challan Generation</h3>
            <p className="text-gray-600 text-lg">
              After all the processes, an e-challan is generated, and a text
              message is sent to your phone number. The SIM information is found
              in collaboration with NADRA and PTA.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg ">
            <div className="text-pink-700 pb-4">
              <MdOutlinePayments size={30} />
            </div>
            <h3 className="text-xl font-semibold">Voltaire Pays</h3>
            <p className="text-gray-600 text-lg">
              The violator then pays the e-challan using digital wallets such as
              Easypaisa and Jazzcash. Or they can visit their nearest traffic
              office to pay the challan manually.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatEchallan;
