import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 bg-white min-h-screen text-black font-inter">
        {/* Hero Section */}
        <section className="max-w-[1024px] mx-auto text-center mb-16 px-4">
          <h1 className="text-[40px] md:text-[56px] font-semibold mb-6">
            Why Volunteer with Titli?
          </h1>
          <p className="text-[16px] md:text-[20px] font-light mb-4 leading-[1.6em]">
            Titli Foundation is a registered NGO that stands as a catalyst for
            change, with a clear focus on eradicating period poverty. Our
            approach is simple yet profound: we aim to replace the shadows of
            shame and discomfort with the enlightenment of knowledge, the boost
            of confidence, and the promise of sustainability.
          </p>
          <p className="text-[16px] md:text-[20px] font-light leading-[1.6em]">
            Lorem ipsum dolor sit amet consectetur. Quam sed vitae sit justo
            gravida mi diam nunc. Nisl et id faucibus condimentum diam ipsum
            interdum. Sit cras nisi massa dolor sem nunc viverra scelerisque.
            Quis tortor mollis mattis ultricies velit neque neque nisi mi.
            Libero dictum non pellentesque porta montes. Ac morbi pellentesque
            vivamus gravida fermentum.
          </p>
        </section>

        {/* Stats Section */}
        <section className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 px-4">
          <div className="bg-[#D3BEDF] text-center p-6 rounded-[10px] w-full md:w-[384px] text-lg md:text-2xl font-medium">
            More than 200+ menstrual cups donated
          </div>
          <div className="bg-[#D3BEDF] text-center p-6 rounded-[10px] w-full md:w-[384px] text-lg md:text-2xl font-medium">
            Over 200+ volunteers engaged to lead & support
          </div>
          <div className="bg-[#D3BEDF] text-center p-6 rounded-[10px] w-full md:w-[384px] text-lg md:text-2xl font-medium">
            Conducted 20+ awareness campaigns across India
          </div>
        </section>

        {/* Scroll Text */}
        <div className="text-center text-lg md:text-2xl mb-16 px-4">
          <p>Scroll to find out what role you can play ▼</p>
        </div>

        {/* Join the Team */}
        <section className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-[40px] md:text-[64px] font-semibold mb-6">
            Join the Team
          </h2>
          <p className="text-sm md:text-base font-light max-w-[600px] mx-auto">
            At Titli Foundation, there’s room for everyone who wants to make a
            difference. Whether you’re just starting out or bringing years of
            experience, what matters most is your heart for change.
          </p>
        </section>

        {/* Departments Grid */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {departments.map(({ slug, title, description }) => (
            <div className="bg-[#FFDFED] p-6 rounded-[15px] hover:shadow-lg transition cursor-default">
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
                {title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-700">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center px-4 mb-10">
          <h2 className="text-lg md:text-2xl font-semibold mb-4">
            Join us in our efforts to{" "}
            <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
            positively impact the lives everywhere.
          </h2>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[20px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink transition">
              Join the Team
            </button>
          </a>
        </section>

        {/* Instagram CTA */}
        <section className="flex justify-center mb-16">
          <a
            href="https://www.instagram.com/titlifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-fit flex items-center justify-center"
          >
            <div className="relative inline-flex items-center font-semibold text-[18px] md:text-[20px]">
              <img
                src="/svgs/instagram-logo.svg"
                alt="Instagram"
                className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[6rem]"
              />
              <span className="absolute left-full ml-0 -translate-x-[6rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
                Follow our journey
              </span>
            </div>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

const departments = [
  {
    slug: "groundwork",
    title: "Groundwork Department (GW)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "pr-media",
    title: "Public Relations & Media Department (PRM)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "content-writing",
    title: "Content Writing Department (CW)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "finance-fundraising",
    title: "Finance and Fundraising Department (FnF)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "social-media",
    title: "Social Media Department (SM)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "hr",
    title: "Human Resources Department (HR)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
];
