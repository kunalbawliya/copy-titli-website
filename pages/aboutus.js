import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import TeamSection from "@/components/Team";
import Stats from "@/components/Stats";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Titli Foundation</title>
        <meta
          name="description"
          content="Learn more about the mission and impact of Titli Foundation in promoting menstrual dignity and awareness."
        />
      </Head>

      <Navbar />

      {/* 🎯 Mission Statement Section */}
      <section className="text-center px-4 md:px-8 lg:pt-[170px]  py-20 bg-white">
        <h1 className="text-[28px] md:text-[36px] lg:text-[64px] font-semibold font-inter leading-tight text-black max-w-4xl mx-auto mb-6">
          From awareness to action,
          <br className="hidden md:block" />
          redefining menstrual health
        </h1>

        <p className="text-[20px] font-inter font-light md:text-base text-[#000] max-w-[900px] max-h-[168px] mx-auto mb-[50px]">
          At Titli Foundation, we empathize with the challenges faced by
          underprivileged menstruators when it comes to having a safe and
          hygienic period. We aim to provide them with sustainable menstrual
          products and raise awareness about menstrual hygiene and its safe
          practices. <br />
          To achieve our goal, we conduct donation drives and awareness
          workshops in different sectors of Delhi, Mumbai, Bangalore, Ayodhya,
          Lucknow, Dehradun, Pune, Chandigarh and many such cities, reaching out
          to 2500+ menstruators. While covering topics from puberty and
          reproductive health to menstrual health and safe menstruation
          practices, along with the usage of sustainable menstrual products. We
          hope to bring in a wave of change and break the taboo!
        </p>

        <a
          href="https://tr.ee/vx87XEdgfh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[20px] text-base md:text-lg font-semibold border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink transition duration-300">
            Join the team
          </button>
        </a>

        <p className="text-[24px] text-black mt-[123px]">
          Scroll to see what our founder wants to tell you{" "}
          <span className="inline-block animate-bounce">▼</span>
        </p>
      </section>

      {/* 🌸 Founder’s Message Section */}
      <section className="bg-[#ffffff] py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Founder Image */}
          <div className="w-[465px] h-[500px] md:h-1/2 md:w-1/2 flex justify-center">
            <img
              src="/images/founder.jpg" // Make sure to add image in public/images/
              alt="Alankrita Pandey - Founder Titli Foundation"
              className="rounded-[20px] w-[465px] h-[500px] max-w-[400px] object-cover shadow-lg"
            />
          </div>

          {/* Message */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-black font-inter font-[24px] text-base md:text-lg leading-relaxed mb-6">
              What started out as a will to help a few in need, turned out to be
              the biggest responsibility of my life. Sometimes I look back and
              wonder, it really did take just one step to change the lives of
              many.
              <br />
              We often think about bringing the change, revolutionizing society,
              but then all of it just comes down to – "I can't change the
              world." The fact is, we don't need to change the world, we need to
              change ourselves.
              <br />
              Just initiating a conversation around menstruation speaks volumes
              of how willing you are to bring a change; and that’s what Titli is
              all about.
            </p>

            <h3 className="text-[36px] font-inter md:text-2xl font-semibold text-black mb-1">
              Alankrita Pandey
            </h3>
            <p className="text-black text-[24px] font-inter md:text-base">
              Founder, Titli Foundation
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

      <Stats />

      {/* 🌸 Break The Taboo Section */}
      <section className="text-center px-4 md:px-8  flex flex-col items-center">
        <h3 className="font-inter text-[24px] max-w-[1024px] ">
          We believe that menstrual care is a fundamental right for all,
          regardless of their socio-economic status. Menstrual care should no
          longer be a source of shame or discomfort but be approached
          with knowledge, confidence, and sustainability.{" "}
        </h3>
        <br />
        <h2 className="text-[18px] md:text-[22px] lg:text-[26px] max-w-4xl mx-auto mb-6 text-black">
          Join us in our efforts to{" "}
          <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
          positively impact the lives everywhere.
        </h2>
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[15px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
            Join the team
          </button>
        </a>
      </section>

      {/* 📸 Instagram Hover Section */}
      <section className="flex justify-center py-4 pt-7 pb-[95px]">
        <a
          href="https://www.instagram.com/titlifoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-fit flex items-center justify-center"
        >
          <div className="relative inline-flex items-center font-[Inter] font-semibold text-[18px] md:text-[20px] tracking-[-0.06em]">
            <img
              src="/svgs/instagram-logo.svg"
              alt="Instagram"
              className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[6rem]"
            />
            <span className="absolute left-full ml-0 -translate-x-[6rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
              Follow our journey
            </span>
          </div>
        </a>
      </section>

      <Footer />
    </>
  );
}
