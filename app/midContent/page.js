import { EChallanContentPart2 } from "@/lib/contentPart2/page";
import React from "react";

export default function ContentRenderer() {
    const data = EChallanContentPart2
  return (
    <div className="space-y-6 px-6 md:px-32 ">
      {data.map((item, index) => {
        switch (item.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-3xl font-bold text-gray-900 mt-6 scroll-mt-20"
              >
                {item.content}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="text-2xl font-semibold text-gray-800 mt-4 scroll-mt-16"
              >
                {item.content}
              </h3>
            );
          case "p":
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            );
          case "list_ordered":
            return (
              <ol
                key={index}
                className="list-decimal list-inside space-y-1 text-gray-700"
              >
                {item.items.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            );
          case "list_unordered":
            return (
              <ul
                key={index}
                className="list-disc list-inside space-y-1 text-gray-700"
              >
                {item.items.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
