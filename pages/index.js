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
      <BTT />

      {/* 📸 Instagram Hover Section */}
      <Insta />

      <Footer />
    </div>
  );
}
