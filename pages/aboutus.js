import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import TeamSection from "@/components/Team";
import Stats from "@/components/Stats";
import BTT from "@/components/BTT";
import Insta from "@/components/Insta";

// IMPORT YOUR CUSTOM COMPONENTS
import AboutHero from "@/components/AboutHero";
import FoundersMessage from "@/components/FoundersMessage"; // Added this import

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

      {/* Hero Section Component */}
      <AboutHero />

      {/* Founder's Message Component */}
      {/* This replaces the large block of hardcoded JSX */}
      <FoundersMessage />

      <TeamSection />

      <div className="flex justify-center mb-[73px] px-4">
        <div className="max-w-[314px] lg:max-w-[830px] text-center">
          <p className="font-inter text-[14px] lg:text-[24px] font-normal text-black mb-6">
            To achieve our goal, we conduct donation drives and awareness
            workshops in different sectors of Delhi, Mumbai, Bangalore, Ayodhya,
            Lucknow, Dehradun, Pune, Chandigarh and many such cities, reaching
            out to 2500+ menstruators.
          </p>
          <p className="font-inter text-[14px] lg:text-[24px] font-normal text-black">
            While covering topics from puberty and reproductive health to
            menstrual health and safe menstruation practices, along with the
            usage of sustainable menstrual products. We hope to bring in a wave
            of change and break the taboo!
          </p>
        </div>
      </div>

      <section className="text-center px-4 mb-[50px] md:px-8 flex flex-col items-center">
        <h2 className="text-[15px] md:text-2xl max-w-[236px] lg:max-w-4xl mx-auto mb-6 text-black">
          Join us in our efforts to{" "}
          <span className="text-pink font-bold">#BreakTheTaboo</span> and
          positively impact lives everywhere.
        </h2>
      </section>

      <Insta />
      <Footer />
    </>
  );
}