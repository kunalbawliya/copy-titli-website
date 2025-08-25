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
  const noTapHighlight = { WebkitTapHighlightColor: 'transparent' };

  return (
    // CHANGE: Updated the className here to apply the background image
    <div className="font-inter overflow-hidden bg-[url('/homepage-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Head>
        <title>Titli Foundation</title>
      </Head>

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
        <h3 className="hidden md:block font-inter text-[24px] max-w-[1024px]">
          We believe that menstrual care is a fundamental right for all,
          regardless of their socio-economic status. Menstrual care should no
          longer be a source of shame or discomfort but be approached with
          knowledge, confidence, and sustainability.{" "}
        </h3>
        
        <h2 className="text-[15px] md:text-[22px] lg:text-[24px] xl:text-[26px] max-w-[246px] md:max-w-[350px] lg:max-w-4xl mx-auto text-black mt-8 md:mt-[50px]">
          Join us in our efforts to{" "}
          <a
            href="https://www.instagram.com/explore/tags/breakthetaboo/"
            target="_blank"
            rel="noopener noreferrer"
            style={noTapHighlight}
          >
            <span className="text-pink-600 font-bold">#BreakTheTaboo</span>
          </a>{" "}
          and positively impact the lives everywhere.
        </h2>
      </section>

      <Insta />
      <Footer />
    </div>
  );
}