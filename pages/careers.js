import Link from "next/link";
import CountUp from "react-countup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="pb-20 bg-[#FFFBF7] min-h-screen text-black font-inter">
        {/* --- HERO SECTION --- */}
        <div className="w-full max-w-[1222px] mx-auto px-4 md:px-8 lg:pt-[170px] py-20">
          <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
            {/* Left: Heading & Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 mt-8 lg:mt-0 font-inter">
              <h1 className="text-[60px] font-semibold leading-tight">
                Why Volunteer with Titli Foundation?
              </h1>
              <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[520px] leading-tight mx-auto lg:mx-0">
                At Titli Foundation, we empathize with the challenges faced by
                underprivileged menstruators when it comes to having a safe and
                hygienic period. We aim to provide them with sustainable
                menstrual products and raise awareness about menstrual hygiene
                and its safe practices.
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="w-full max-w-[532px] flex justify-center lg:justify-end">
              <div className="bg-gray-200 rounded-[20px] w-full h-[552px] flex items-center justify-center">
                <img
                  src="/images/cup.png"
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-[60%] h-[60%]"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="text-center text-[24px] text-black mt-[10px] mb-[125px]">
          Scroll to find out what role you can play{" "}
          <span className="inline-block animate-bounce">▼</span>
        </div>

        {/* --- UPDATED STATS SECTION --- */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch mb-[90px] px-4">
          <div className="bg-[#FFDFED] text-center p-6 rounded-[10px] flex flex-col justify-center">
            <div className="text-[64px] font-semibold">
              <CountUp end={4600} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <div className="text-[24px] font-medium">Pads donated</div>
          </div>
          <div className="bg-[#FFDFED] text-center p-6 rounded-[10px] flex flex-col justify-center">
            <div className="text-[64px] font-semibold">
              <CountUp end={200} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <div className="text-[24px] font-medium">Cups donated</div>
          </div>
          <div className="bg-[#FFDFED] text-center p-6 rounded-[10px] flex flex-col justify-center">
            <div className="text-[64px] font-semibold">
              <CountUp end={200} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <div className="text-[24px] font-medium">Volunteers</div>
          </div>
          <div className="bg-[#FFDFED] text-center p-6 rounded-[10px] flex flex-col justify-center">
            <div className="text-[64px] font-semibold">
              <CountUp end={60} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <div className="text-[24px] font-medium">Campaigns</div>
          </div>
        </section>

        {/* --- JOIN THE TEAM SECTION --- */}
        <section className="max-w-4xl mx-auto text-center my-20 px-4">
          <h2 className="text-[40px] md:text-[64px] font-semibold mb-12">
            Join the Team
          </h2>
          <p className="text-[20px] max-w-[827px] mx-auto">
            Titli operates across several cities, strategically selected to
            ensure a broad impact. Each department plays a unique and vital
            role, working collaboratively to drive our mission forward.
          </p>
        </section>

        {/* --- DEPARTMENTS GRID --- */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {departments.map(({ slug, title, description }) => (
            <div
              key={slug}
              className="bg-[#FFDFED] p-6 rounded-[15px] hover:shadow-lg transition cursor-default"
            >
              <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
                {title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-700">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* --- CTA SECTION --- */}
        <section className="text-center px-4 mb-10">
          <h2 className="text-lg md:text-2xl font-semibold mb-[50px]">
            Join us in our efforts to{" "}
            <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
            positively impact the lives everywhere.
          </h2>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
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
