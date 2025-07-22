import { useState } from "react";

const faqList = [
  {
    question: "1. What does Titli Foundation do?",
    answer:
      "Titli Foundation is a registered youth-led non-profit that promotes sustainable menstruation practices. We hold 12A and 80G certifications, enabling tax-exempt donations. Our mission is to spread awareness about eco-friendly menstrual products such as menstrual cups, cloth pads, biodegradable pads, and period panties. Through workshops, outreach programs, and digital campaigns, we aim to break period taboos and make sustainable menstruation accessible across communities. Our approach is rooted in empathy, education, and environmental care.",
  },
  {
    question: "2. Which communities does Titli Foundation cater to?",
    answer:
      "We work with a wide range of underserved and marginalized communities, including urban slums, rural villages, orphanages, schools, colleges, and shelters. We also work with sex workers and other vulnerable groups who lack access to menstrual health education and products. Our aim is to reach those who need it most — without bias or boundaries.",
  },
  {
    question: "3. What is a menstrual cup?",
    answer:
      "A menstrual cup is a reusable, bell-shaped cup made of medical-grade silicone or rubber that is inserted into the vagina to collect menstrual fluid. Unlike pads or tampons, a menstrual cup can be worn for up to 8-10 hours and lasts for several years with proper care, making it both eco-friendly and cost-effective. It’s safe, hygienic, and ideal for anyone looking for a sustainable, hassle-free period experience. With a little practice, it’s comfortable and completely leak-proof!",
  },
  {
    question: "4. Who can volunteer with Titli Foundation?",
    answer: `Anyone aged 14 and above is welcome to volunteer with us! Whether you’re a student, professional, or homemaker, if you care about menstrual health and sustainability, there’s a place for you at Titli. Volunteering offers you a chance to learn, grow, and create meaningful change. You can register using the volunteer form provided <a href="https://docs.google.com/forms/d/e/1FAIpQLSchxaCWixfYVKxbYRTjfBlWKfmiNNPqkpD-tG0y_k44twbP_Q/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">here</a>, and join our passionate community of changemakers!`,
  },
  {
    question: "5. What is the process of getting selected as a volunteer?",
    answer:
      "Once you fill out the volunteer registration form, our team will review your application. If shortlisted, you’ll receive an email invitation for an interview. Based on your responses and interest, we’ll place you in a department that aligns with your strengths. If selected after the interview, you’ll be added to our official WhatsApp group, where all project-related updates and activities are shared.",
  },
  {
    question: "6. Is this a paid or unpaid opportunity?",
    answer:
      "Volunteering with Titli Foundation is an unpaid opportunity. However, it offers valuable experience, skill-building, and a chance to work on real-world projects. Our volunteers often describe their time at Titli as life-changing — filled with learning, connection, and purpose. While there’s no financial compensation, the impact you create is priceless!",
  },
  {
    question: "7. How can a volunteer help?",
    answer: `
    Volunteers can contribute based on their interests and strengths by joining one of our six departments:<br/><br/>
    <ul class="list-disc pl-5">
      <li><strong>HR (Human Resources)</strong> – handles onboarding and internal engagement</li>
      <li><strong>PRM (Public Relations & Marketing)</strong> – builds partnerships and campaigns</li>
      <li><strong>GW (Groundwork)</strong> – conducts offline events, school visits, and awareness drives</li>
      <li><strong>SM (Social Media)</strong> – manages content and strategy across platforms</li>
      <li><strong>CW (Content Writers)</strong> – writes posts, scripts, and educational material</li>
      <li><strong>FF (Finance & Fundraising)</strong> – plans donations, sponsorships, and budgets</li>
    </ul>
    Every department plays a crucial role in achieving our mission.
  `,
  },
  {
    question: "8. How can one donate or make a monetary contribution?",
    answer:
      "We deeply appreciate your willingness to support our work. You can donate to Titli Foundation using the secure donation link provided on our website. Please note that currently we only accept donations from Indian bank accounts or UPI IDs. Every contribution directly supports our outreach programs, sustainable product distribution, and educational initiatives.",
  },
  {
    question: "9. What is the minimum donation required?",
    answer:
      `There is no minimum donation amount! At Titli, we believe that <strong>every penny counts</strong>. Whether it’s ₹10 or ₹10,000, your contribution helps us reach more menstruators with sustainable products and education. Collective efforts, no matter how small, can create a big impact.`,
  },
  {
    question: "10. Why promote sustainable menstrual products?",
    answer:
      "Disposable pads and tampons contribute significantly to non-biodegradable waste and often contain harmful chemicals. Sustainable products like menstrual cups, cloth pads, and biodegradable options are safer for the body, cheaper in the long run, and better for the planet. We want people to menstruate with dignity—without shame, waste, or worry.",
  },
  {
    question: "11. Do I need prior experience to join as a volunteer?",
    answer:
      "No prior experience is needed! We welcome enthusiastic learners and provide orientation and guidance once you join. All we expect is a willingness to learn, a respectful attitude, and commitment to our cause. Whether you're skilled in writing, outreach, social media, or event planning — we’ll help you find your fit!",
  },
  {
    question: "12. Can Titli Foundation conduct an awareness session in my school or college?",
    answer:
      "Yes, we’d love to! Titli Foundation regularly conducts awareness sessions in schools, colleges, and communities to educate people about sustainable menstruation and break menstrual taboos. If you’d like us to visit your institution, please reach out through our contact form. We tailor our sessions to suit different age groups and settings, ensuring they are interactive, informative, and impactful. Together, we can create safe spaces for dialogue and bring sustainable period practices to more people.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 max-w-4xl mx-auto mb-36">
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
              {/* ✅ This renders HTML inside the answer */}
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
