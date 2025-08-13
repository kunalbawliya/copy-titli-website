import Head from "next/head";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import VisionMission from "@/components/VisionMission";
import BrandList from "@/components/BrandList";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import BlogCarousel from "@/components/BlogCarousel";
import { getSortedPostsData } from "@/lib/blogs";
import Hero from "@/components/Hero";
import JTT from "@/components/JTT";
import BTT from "@/components/BTT";
import Insta from "@/components/Insta";

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
    <div className="font-inter overflow-hidden bg-[#FFFBF7]">
      <Head>
        <title>Titli Foundation</title>
      </Head>

      {/* Background Gradient Blobs can be uncommented if needed */}
      {/* <div className="absolute left-[-50px] lg:left-[-200px] top-[-50px] lg:top-[-200px] h-[350px] lg:h-[800px] w-[350px] lg:w-[800px] rounded-full" />
      <div className="absolute right-[-50px] lg:right-[-100px] top-[400px] lg:top-[300px] h-[300px] lg:h-[600px] w-[300px] lg:w-[600px] rounded-full bg-gradient-to-r from-[#efddfe] to-[#F7ECFE] opacity-50 blur-3xl z-[-1]" /> */}

      <Navbar />

      <Hero />

      <Carousel />

      <VisionMission />

      <BrandList />

      <JTT />

      <Stats />

      <BlogCarousel blogs={allPostsData} />

      {/* 🌸 Break The Taboo Section */}
      <section className="text-center px-4 md:px-8 mt-20 flex flex-col items-center">
        <h3 className="font-inter text-[24px] max-w-[1024px] ">
          We believe that menstrual care is a fundamental right for all,
          regardless of their socio-economic status. Menstrual care should no
          longer be a source of shame or discomfort but be approached with
          knowledge, confidence, and sustainability.{" "}
        </h3>
        <h2 className="text-[18px] md:text-[22px] lg:text-[26px] max-w-4xl mx-auto text-black mt-[50px]">
          Join us in our efforts to{" "}
          <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
          positively impact the lives everywhere.
        </h2>
      </section>

      {/* 📸 Instagram Hover Section */}
      <Insta />

      <Footer />
    </div>
  );
}
