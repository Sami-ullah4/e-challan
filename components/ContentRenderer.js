import { EChallanContentPart2 } from "@/lib/contentPart2/page";

const ContentRenderer = () => {
  return (
    <section id="guide-content" className="px-3 lg:px-32 space-y-6">
      {EChallanContentPart2.map((item, idx) => (
        <div key={idx} className=" bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="contentWrapper ">
            <h2 className="font-bold mb-4">{item.h2}</h2>
          </div>
          <div className="contentWrapper ">
            <div dangerouslySetInnerHTML={{ __html: item.contentWrapper }} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContentRenderer;

