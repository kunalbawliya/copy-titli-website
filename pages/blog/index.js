import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";
import MoreArticles from "../../components/MoreArticles";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

export default function Blog({ allPostsData }) {
  const featuredPosts = allPostsData.slice(0, 3);
  const remainingPosts = allPostsData.slice(3);

  const POSTS_PER_GRID = 2;
  const [gridVisibleCount, setGridVisibleCount] = useState(POSTS_PER_GRID);

  const handleGridLoadMore = () => {
    setGridVisibleCount((prevCount) => prevCount + POSTS_PER_GRID);
  };

  const gridPostsToShow = remainingPosts.slice(0, gridVisibleCount);

  return (
    <>
      <Navbar />
      <main className="bg-[#ffffff] text-black min-h-screen pt-[160px] md:pt-[180px] lg:pt-[198px] pb-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-24">
          <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold text-pink-600 mb-[35px] font-inter leading-tight ">
            From Our World to Yours
          </h1>
          <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] max-w-xl mx-auto">
            Dive into the ideas, challenges, and conversations that build the
            foundation of our work.
          </p>
        </section>

        {/* Section 1: Featured Blog Posts (Corrected for no cropping) */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center lg:items-stretch gap-8 lg:gap-12 px-4">
          <div className="w-full border-b border-gray-300"></div>
          {featuredPosts.map(
            ({ slug, title, date, description, coverImage, author }, index) => (
              <React.Fragment key={slug}>
                <Link href={`/blog/${slug}`} style={noTapHighlight}>
                  <div
                    className={`flex flex-col lg:flex-row ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    } items-center w-full gap-8 lg:gap-[48px] cursor-pointer`}
                  >
                    {/* Image Container */}
                    <div className="w-full max-w-[306px] md:max-w-[520px] md:w-full lg:w-[542px] lg:h-[434px] rounded-[24px] overflow-hidden flex-shrink-0">
                      <img
                        src={`/${coverImage}`}
                        alt={title}
                        // CHANGE: 'object-contain' ensures the whole image is visible
                        className="w-full h-full object-contain bg-gray-100 rounded-[24px]"
                      />
                    </div>
                    {/* Text Content */}
                    <div className="w-full max-w-[306px] md:max-w-[540px] mx-auto md:w-full lg:w-1/2">
                      <p className="text-[14px] lg:text-[px] font-light font-inter text-black mb-2">
                        {date}
                      </p>
                      <h2 className="text-[24px] lg:text-[32px] font-medium font-inter mb-2 text-black leading-tight">
                        {title}
                      </h2>
                      <p className="text-sm lg:text-[16px] font-light font-inter text-black mb-3 hidden sm:block">
                        {description}
                      </p>
                      <p className="text-[14px] lg:text-[15px] font-inter font-medium mb-1 tracking-wide">
                        {author}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="w-full border-b border-gray-300"></div>
              </React.Fragment>
            )
          )}
        </div>

        {/* Section 2: "More blogs" Grid */}
        {remainingPosts.length > 0 && (
          <>
            <MoreArticles posts={gridPostsToShow} />
            {gridVisibleCount < remainingPosts.length && (
              <div className="text-center mt-[-40px] hidden lg:block">
                <button
                  onClick={handleGridLoadMore}
                  className="text-[24px] text-black underline hover:text-black transition"
                  style={noTapHighlight}
                >
                  Load more +
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
