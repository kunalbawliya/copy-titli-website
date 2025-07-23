import Head from "next/head";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import VisionMission from "@/components/VisionMission";
import BrandList from "@/components/BrandList";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import BlogCarousel from "@/components/BlogCarousel";
import { getSortedPostsData } from "@/lib/blogs";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  console.log("allPostsData on Home page:", allPostsData);
  return (
    <div className="font-inter overflow-hidden">
      <Head>
        <title>Titli Foundation</title>
      </Head>

      {/* Background Gradient Blobs */}
      <div className="absolute left-[-50px] lg:left-[-200px] top-[-50px] lg:top-[-200px] h-[350px] lg:h-[800px] w-[350px] lg:w-[800px] rounded-full" />
      <div className="absolute right-[-50px] lg:right-[-100px] top-[400px] lg:top-[300px] h-[300px] lg:h-[600px] w-[300px] lg:w-[600px] rounded-full bg-gradient-to-r from-[#efddfe] to-[#F7ECFE] opacity-50 blur-3xl z-[-1]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between py-20 pt-48 max-w-[1336px] m-auto">
        {/* Left: Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-gray-200 rounded-[20px] w-full max-w-[500px] h-[400p x] lg:h-[500px] flex items-center justify-center">
            <img
              src="/images/cup.png"
              alt="Cup Image"
              className="object-contain w-[60%] h-[60%]"
            />
          </div>
        </div>

        {/* Right: Heading, Text, Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className=" text-[36px] lg:text-[56px] font-bold leading-[1.4em] mt-1 lg:mt-2">
            Make the switch,
            <br />
            one{" "}
            <span className="font-shadows text-pink relative px-[10px]">
              <img
                className="absolute left-0 top-[5px] lg:top-[15px] scale-145"
                src="/svgs/cupCircle.svg"
              />
              cup
            </span>{" "}
            at a time.
          </div>
          <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[500px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur. Porttitor amet consequat
            neque sapien lacus at non ridiculus lorem elit libero. Viverra in
            nunc rutrum fusce sit molestie.
          </p>
          <div className="mt-8">
            <a
              href="/blog"
              className="inline-block bg-pink hover:bg-dark-pink transition-all duration-200 text-white font-medium py-3 px-8 rounded-[12px]"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Hint */}
      <div className="text-center text-[24px] text-gray-600 mb-[30px]">
        Scroll to see where your donation goes ↓
      </div>

      <Carousel />

      <VisionMission />

      <BrandList />

      {/* 💌 Join the Team Section */}
      <section className="text-center px-4 md:px-8 pt-24 pb-24">
        <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-inter max-w-4xl mx-auto mb-6 text-black leading-snug">
          We’re always on the lookout for people that believe in menstrual
          dignity for all. Doesn’t matter who you are - we have a place for you.
        </h2>
        <a
          href="https://tr.ee/vx87XEdgfh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[30px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
            Join the Team
          </button>
        </a>
      </section>

      <Stats />

      <BlogCarousel blogs={allPostsData} />

      {/* 🌸 Break The Taboo Section */}
      <section className="text-center px-4 md:px-8 pt-20 flex flex-col items-center">
        <h3 className="font-inter text-[24px] max-w-[1024px] ">
          We believe that menstrual care is a fundamental right for all,
          regardless of their socio-economic status. Menstrual care should no
          longer be a source of shame or discomfort but be approached
          with knowledge, confidence, and sustainability.{" "}
        </h3>
        <br/>
        <h2 className="text-[18px] md:text-[22px] lg:text-[26px] max-w-4xl mx-auto mb-6 text-black">
          Join us in our efforts to{" "}
          <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
          positively impact the lives everywhere.
        </h2>
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[30px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
            Change Begins With You
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
    </div>
  );
}
