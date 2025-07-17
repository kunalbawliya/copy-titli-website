import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CareerDetail() {
  return (
    <>
      <Navbar />
      <main className="pt-[160px] pb-20 bg-white font-inter text-black px-4">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-[40px] md:text-[56px] font-semibold mb-[45px]">
            Finance & Fundraising
          </h1>
          <div className="flex flex-col md:flex-row justify-between text-[14px] text-left mb-8 gap-16 md:gap-0">
            <div className="pl-3 border-l-2 border-black">
              <p>
                Minimum of 1-2 years
                <br />
                of Industrial Experience
              </p>
            </div>
            <div className="pl-3 border-l-2 border-black">
              <p>
                Location: Mazgaon,
                <br />
                Mumbai
              </p>
            </div>
            <div className="pl-3 border-l-2 border-black">
              <p>
                10 am to 07 pm
                <br />
                Monday to Friday
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-[16px] md:text-[18px] leading-[1.6em] font-light space-y-6 px-4 mb-[140px] md:px-0">
          <p>
            Quwad is a Content, Strategy and Design Studio. We believe in going
            an extra mile. To ensure a touch of creativity, a little more
            innovation and to build a constant connection with you.
          </p>
          <p>
            Our squad consists of young minds who lead and imagine solutions
            that include Digital Content, Search Engine Optimization, Design,
            Video Production, Photography, Media Planning, Business Research,
            Brand Building and more.
          </p>
          <p>
            We have done some exciting work for brands like Teach For India,
            Aditya Birla Sun Life Insurance, Indiefolio, Dabur Red toothpaste,
            Intuit India, ABACA, Trunativ, Smotect, Comviva, Meet Magento New
            York and many more brands.
          </p>

          <div className="py-[70px]">
            <h2 className="font-medium text-lg mb-2">
              Major Responsibilities:
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Edit video footage for reels, brand films, campaigns, and
                YouTube content.
              </li>
              <li>
                Add motion graphics, sound design, and colour correction to
                enhance visual output.
              </li>
              <li>
                Collaborate with creative directors and scriptwriters to bring
                concepts to life.
              </li>
              <li>
                Manage raw footage, maintain backups, and ensure timely
                delivery.
              </li>
              <li>
                Stay updated on editing trends and apply them to content for
                maximum impact.
              </li>
              <li>
                Repurpose content across multiple formats for various platforms.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-lg mb-2">Requirements:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Diploma/Degree in Film, Media or a related field.</li>
              <li>
                Proficiency in Adobe Premiere Pro, After Effects, DaVinci
                Resolve or Final Cut Pro.
              </li>
              <li>Eye for detail, pacing, and storytelling.</li>
              <li>Ability to work independently and meet deadlines.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center max-w-4xl mx-auto px-4 md:px-0 mt-16">
          <h2 className="text-base md:text-xl font-medium mb-6">
            Join us in our efforts to{" "}
            <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
            positively impact the lives everywhere.
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <a
              href="https://tr.ee/vx87XEdgfh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink text-white px-8 py-3 rounded-[20px] text-base border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition w-full md:w-auto">
                Join the team
              </button>
            </a>
            <a
              href="https://tr.ee/vx87XEdgfh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink text-white px-[42px] py-3 rounded-[20px] text-base border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition w-full md:w-auto">
                Refer Now
              </button>
            </a>
          </div>

          {/* Instagram Section */}
          <a
            href="https://www.instagram.com/titlifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center mb-[128px] justify-center"
          >
            <img
              src="/svgs/instagram-logo.svg"
              alt="Instagram"
              className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[6rem]"
            />
            <span className="absolute left-full ml-0 -translate-x-[6rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
              Follow our journey
            </span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
