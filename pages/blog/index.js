import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";
import MoreArticles from "../../components/MoreArticles"; // Make sure this is imported

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  // 1. Split posts into "featured" and "remaining"
  const featuredPosts = allPostsData.slice(0, 3);
  const remainingPosts = allPostsData.slice(3);

  // 2. State management for the "More blogs" grid
  const POSTS_PER_GRID = 2;
  const [gridVisibleCount, setGridVisibleCount] = useState(POSTS_PER_GRID);

  const handleGridLoadMore = () => {
    setGridVisibleCount((prevCount) => prevCount + POSTS_PER_GRID);
  };
  
  // Create the sliced array for the grid
  const gridPostsToShow = remainingPosts.slice(0, gridVisibleCount);

  return (
    <>
      <Navbar />
      <main className="bg-[#ffffff] text-black min-h-screen pt-[160px] md:pt-[180px] lg:pt-[198px] pb-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-24">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-pink-600 mb-[35px] font-inter leading-tight">
            From Our World to Yours
          </h1>
          <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] max-w-xl mx-auto">
            Dive into the ideas, challenges, and conversations that build the
            foundation of our work.
          </p>
        </section>

        {/* Section 1: Featured Blog Posts (Alternating Layout) */}
        <div className="w-[1123px] mx-auto flex flex-col gap-12">
          <div className="border-b border-gray-300"></div>
          {featuredPosts.map(
            (
              { slug, title, date, description, coverImage, author },
              index
            ) => (
              <React.Fragment key={slug}>
                <Link href={`/blog/${slug}`}>
                  <div
                    className={`flex flex-col md:flex-row ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    } items-center md:items-center gap-6 md:gap-[48px] cursor-pointer`}
                  >
                    <div className="w-[542px] h-[434px] rounded-[24px] overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img
                        src={`/${coverImage}`}
                        alt={title}
                        className="w-full h-full object-cover rounded-[24px]"
                      />
                    </div>
                    <div className="w-full md:flex-1">
                      <p className="text-[20px] font-light font-inter text-black mb-2">{date}</p>
                      <h2 className="text-[34px] font-medium font-inter mb-2 text-black leading-snug">{title}</h2>
                      <p className="text-[18px] font-light font-inter text-black mb-3">{description}</p>
                      <p className="text-[18px] font-inter font-medium mb-1 tracking-wide">{author}</p>
                    </div>
                  </div>
                </Link>
                <div className="border-b border-gray-300"></div>
              </React.Fragment>
            )
          )}
        </div>

        {/* Section 2: "More blogs" Grid (only shows if there are more than 3 posts) */}
        {remainingPosts.length > 0 && (
          <>
            <MoreArticles posts={gridPostsToShow} />
            
            {gridVisibleCount < remainingPosts.length && (
              <div className="text-center mt-[-40px]">
                <button
                  onClick={handleGridLoadMore}
                  className="text-gray-700 font-semibold tracking-wider text-lg hover:text-pink-600 transition underline"
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