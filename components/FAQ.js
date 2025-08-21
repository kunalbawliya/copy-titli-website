import { useState } from "react";

const faqList = [
  {
    question: "What is a menstrual cup?",
    answer:
      "A menstrual cup is a reusable, bell-shaped cup made of medical-grade silicone or rubber that is inserted into the vagina to collect menstrual fluid. Unlike pads or tampons, a menstrual cup can be worn for up to 8-10 hours and lasts for several years with proper care, making it both eco-friendly and cost-effective. It’s safe, hygienic, and ideal for anyone looking for a sustainable, hassle-free period experience. With a little practice, it’s comfortable and completely leak-proof!",
  },
  {
    question: "Who can volunteer with Titli Foundation?",
    answer: `Anyone aged 14 and above is welcome to volunteer with us! Whether you’re a student, professional, or homemaker, if you care about menstrual health and sustainability, there’s a place for you at Titli. Volunteering offers you a chance to learn, grow, and create meaningful change. You can register using the volunteer form provided <a href="https://docs.google.com/forms/d/e/1FAIpQLSchxaCWixfYVKxbYRTjfBlWKfmiNNPqkpD-tG0y_k44twbP_Q/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">here</a>, and join our passionate community of changemakers!`,
  },
  {
    question: "What is the process of getting selected as a volunteer?",
    answer:
      "Once you fill out the volunteer registration form, our team will review your application. If shortlisted, you’ll receive an email invitation for an interview. Based on your responses and interest, we’ll place you in a department that aligns with your strengths. If selected after the interview, you’ll be added to our official WhatsApp group, where all project-related updates and activities are shared.",
  },
  {
    question: "Is this a paid or unpaid opportunity?",
    answer:
      "Volunteering with Titli Foundation is an unpaid opportunity. However, it offers valuable experience, skill-building, and a chance to work on real-world projects. Our volunteers often describe their time at Titli as life-changing — filled with learning, connection, and purpose. While there’s no financial compensation, the impact you create is priceless!",
  },
  {
    question: "How can one donate or make a monetary contribution?",
    answer:
      "We deeply appreciate your willingness to support our work. You can donate to Titli Foundation using the secure donation link provided on our website. Please note that currently we only accept donations from Indian bank accounts or UPI IDs. Every contribution directly supports our outreach programs, sustainable product distribution, and educational initiatives.",
  },
  {
    question: "What is the minimum donation required?",
    answer:
      `There is no minimum donation amount! At Titli, we believe that <strong>every penny counts</strong>. Whether it’s ₹10 or ₹10,000, your contribution helps us reach more menstruators with sustainable products and education. Collective efforts, no matter how small, can create a big impact.`,
  },
  {
    question: "Can Titli Foundation conduct an awareness session in my school or college?",
    answer:
      "Yes, we’d love to! Titli Foundation regularly conducts awareness sessions in schools, colleges, and communities to educate people about sustainable menstruation and break menstrual taboos. If you’d like us to visit your institution, please reach out through our contact form. We tailor our sessions to suit different age groups and settings, ensuring they are interactive, informative, and impactful. Together, we can create safe spaces for dialogue and bring sustainable period practices to more people.",
  },
];

// Define the style object to remove tap highlight
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // CHANGE: Added mt-24 for mobile/md, which is removed on lg screens (lg:mt-0).
    <section className="px-4 pt-2 max-w-[836px] mx-auto mb-24 mt-24 lg:mt-0">
      <h2 
        // CHANGE: Font size is 24px on mobile/md, becomes 4xl on lg screens.
        className="text-[24px] lg:text-4xl font-semibold text-center mb-12 lg:mb-20"
      >
        Frequently Asked Questions
      </h2>

      {/* CHANGE: This container now centers the 307px cards on mobile/md screens. */}
      <div className="divide-y divide-gray-300 flex flex-col items-center lg:block">
        {faqList.map((faq, index) => (
          // CHANGE: Card width is 307px on mobile/md, becomes full-width on lg screens.
          <div key={index} className="py-6 max-w-[307px] md:max-w-[500px] lg:max-w-full">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-start text-left"
              style={noTapHighlight} // Added noTapHighlight
            >
              <span 
                // CHANGE: Question font size is 15px on mobile/md, becomes 2xl/lg on lg screens.
                className="text-[15px] lg:text-2xl font-medium text-black pr-2"
              >
                {faq.question}
              </span>
              <span className="text-xl lg:text-2xl leading-none text-black ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              // CHANGE: Answer font size is 14px on mobile/md, becomes 16px on lg screens.
              className={`transition-all duration-500 overflow-hidden text-[14px] lg:text-[16px] text-gray-700 mt-2 ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className="leading-relaxed"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}