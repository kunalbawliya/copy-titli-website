import { useState } from "react";

const faqList = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur at nulla a faucibus egestas?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ut amet elementum mattis a curabitur varius fermentum. Massa faucibus vivamus fermentum auctor pellentesque eu euismod. Aliquam pulvinar ipsum turpis fermentum ut aliquam morbi scelerisque. A faucibus lorem cras velit.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur at nulla a faucibus egestas?",
    answer: "Placeholder answer for second FAQ.",
  },
  {
    question:
      "Ut amet elementum mattis a curabitur varius fermentum massa faucibus at nulla a faucibus?",
    answer: "Placeholder answer for third FAQ.",
  },
  {
    question:
      "Ut amet elementum mattis a curabitur varius fermentum massa faucibus at nulla a faucibus?",
    answer: "Placeholder answer for third FAQ.",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" px-4 max-w-4xl mx-auto mb-36">
      <h2 className="text-4xl font-semibold text-center mb-20">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-300">
        {faqList.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-start text-left"
            >
              <span className="text-2xl md:text-lg font-medium text-black">
                {faq.question}
              </span>
              <span className="text-2xl leading-none text-black ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden text-[16px] text-gray-700 mt-2 ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
