import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import TeamSection from "@/components/Team";
import Stats from "@/components/Stats";
import BTT from "@/components/BTT"; // Imported BTT component
import Insta from "@/components/Insta"; // Imported Insta component

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

      {/* --- REVERSED HERO SECTION (REPLACES MISSION STATEMENT) --- */}
      <main className="w-full max-w-[1222px] mx-auto px-4 md:px-8 lg:pt-[170px] py-20">
        <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
          {/* Left: Heading, Text, Button */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 mt-8 lg:mt-0 font-inter">
            <div className="text-[63px] font-semibold leading-tight">
              From awareness to action, redefining menstrual health
            </div>
            <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[520px] leading-tight mx-auto lg:mx-0">
              At Titli Foundation, we empathize with the challenges faced by
              underprivileged menstruators when it comes to having a safe and
              hygienic period. We aim to provide them with sustainable menstrual
              products and raise awareness about menstrual hygiene and its safe
              practices.
            </p>
            <div className="mt-8">
              <a
                href="https://tr.ee/vx87XEdgfh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
              >
                Join the Team
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-[532px] flex justify-center lg:justify-end">
            <div className="bg-gray-200 rounded-[20px] w-full h-[552px] flex items-center justify-center">
              <img
                src="/images/about-hero.png" // You can change this image to something relevant for the about page
                alt="Titli Foundation providing menstrual products"
                className="object-contain w-auto h-[552px] rounded-[20px]"
              />
            </div>
          </div>
        </section>
      </main>

      <div className="text-center text-[24px]  text-black mt-[10px] mb-[125px]">
        Scroll to see what Founder wants to tell you{" "}
        <span className="inline-block animate-bounce">▼</span>
      </div>

      {/* 🌸 Founder’s Message Section */}
      <section className="bg-[#ffffff] mt-16 px-4  mb-[107px] md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Founder Image */}
          <div className="w-[465px] h-[500px] md:h-1/2 md:w-1/2 flex justify-center">
            <img
              src="/images/team/founder.png" // Make sure to add image in public/images/
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

      <div className="flex justify-center mb-[73px]">
        <div className="max-w-[840px] text-center">
          {/* The text uses the Inter font, is 24px, and has a normal weight. */}
          {/* Each paragraph is in its own <p> tag for proper spacing. */}
          <p className="font-inter text-[24px] font-normal text-black mb-6">
            To achieve our goal, we conduct donation drives and awareness
            workshops in different sectors of Delhi, Mumbai, Bangalore, Ayodhya,
            Lucknow, Dehradun, Pune, Chandigarh and many such cities, reaching
            out to 2500+ menstruators.
          </p>
          <p className="font-inter text-[24px] font-normal text-black">
            While covering topics from puberty and reproductive health to
            menstrual health and safe menstruation practices, along with the
            usage of sustainable menstrual products. We hope to bring in a wave
            of change and break the taboo!
          </p>
        </div>
      </div>

      <section className="text-center px-4 mb-[50px] md:px-8 flex flex-col items-center">
        <h2 className="text-[18px] md:text-[22px] lg:text-[24px] max-w-4xl mx-auto mb-6 text-black">
          Join us in our efforts to{" "}
          <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
          positively impact the lives everywhere.
        </h2>
      </section>

      <Insta />

      <Footer />
    </>
  );
}
