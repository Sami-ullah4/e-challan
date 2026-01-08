const LastSection = () => {
  const faqs = [
    {
      question: "What to do if the website doesn't load?",
      answer:
        "The e challan website may be down sometimes. You can try after a few moments or reload the website in a new browser.",
    },
    {
      question: "Is there any extra fee to pay if you pay the challan online?",
      answer:
        "No, the online payments of e challan are completely free and you don't need to pay anything extra.",
    },
    {
      question: "How fast does the system register my challan?",
      answer:
        "The e-challan system updates almost in real time, but major updates and record synchronizations are usually completed within 24 hours.",
    },
    {
      question: "Can I pay E Challan from another city?",
      answer:
        "Yes, if you receive an email, SMS, or call about any challan, you can pay it from anywhere in Pakistan.",
    },
    {
      question: "Can Overseas Pakistani pay e challan?",
      answer: "No, overseas Pakistanis currently cannot pay an e challan.",
    },
    {
      question:
        "Is it safe to pay e challan with mobile wallets like JazzCash and Easypaisa?",
      answer:
        "Yes, Easypaisa and JazzCash are secure payment methods. Official government websites are SSL encrypted, making payments safe.",
    },
    {
      question: "How fast are the payments processed?",
      answer:
        "Payments are processed instantly and usually take only a few minutes via Easypaisa or other wallet apps.",
    },
  ];

  return (
    <>
      <section className="px-32">
        <h2 className="w-full text-center text-3xl font-semibold ">
          Conclusion
        </h2>
        <p className="text lg">
          E-Challan is an innovative technology introduced in Pakistan that has
          transformed the way people pay their traffic fines. This digital
          ticketing system has made the process more efficient, transparent, and
          convenient for everyone. While online challan systems have long been
          used in countries like the USA and across Europe, Pakistan has now
          successfully adopted this modern approach as well. Citizens can easily
          verify or pay their e-challans from the comfort of their homes. So,
          stay safe on the roads and play your part in making Pakistan a better
          place.
        </p>
      </section>
      <section className="px-2 lg:px-32 pt-10 space-y-6">
        <h2 className="w-full text-center text-3xl font-semibold">
        FAQs
        </h2>

        <div className=" space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg  shadow-sm p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default LastSection;
