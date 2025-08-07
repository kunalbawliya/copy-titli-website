import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className=" pb-20 bg-[#FFFBF7] min-h-screen text-black font-inter">
        {/* --- REVERSED HERO SECTION (REPLACES MISSION STATEMENT) --- */}
        <main className="w-full max-w-[1222px] mx-auto px-4 md:px-8 lg:pt-[170px] py-20">
          <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
            {/* Left: Heading, Text, Button */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 mt-8 lg:mt-0 font-inter">
              <div className="text-[60px] font-semibold leading-tight">
                Why Volunteer with Titli Foundation?
              </div>
              <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[520px] leading-tight mx-auto lg:mx-0">
                At Titli Foundation, we empathize with the challenges faced by
                underprivileged menstruators when it comes to having a safe and
                hygienic period. We aim to provide them with sustainable
                menstrual products and raise awareness about menstrual hygiene
                and its safe practices.
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="w-[532px] flex justify-center lg:justify-end">
              <div className="bg-gray-200 rounded-[20px] w-full h-[552px] flex items-center justify-center">
                <img
                  src="/images/cup.png" // You can change this image to something relevant for the about page
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-[60%] h-[60%]"
                />
              </div>
            </div>
            {/* Scroll Hint */}
          </section>
        </main>

        <div className="text-center text-[24px]  text-black mt-[10px] mb-[125px]">
          Scroll to find out what role you can play{" "}
          <span className="inline-block animate-bounce">▼</span>
        </div>

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
