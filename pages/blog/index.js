import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = Array.from(
    new Set(allPostsData.flatMap((post) => post.tags || []))
  );

  const filteredPosts =
    activeTag === "All"
      ? allPostsData
      : allPostsData.filter((post) => post.tags?.includes(activeTag));

  return (
    <>
      <Navbar />
      <main className="bg-[#ffffff] text-black min-h-screen pt-[160px] md:pt-[180px] lg:pt-[198px] pb-24">
        {/* 🔥 Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-24">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-pink-600 mb-[35px] font-inter leading-tight">
            From Our World to Yours
          </h1>
          <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] max-w-xl mx-auto">
            Dive into the ideas, challenges, and conversations that build the
            foundation of our work.
          </p>
        </section>

        {/* 🔘 Tag Filters
        <div className="flex flex-wrap justify-center gap-3 mb-14 px-4 md:px-8 lg:px-28">
          <button
            className={`px-5 py-2 text-sm font-medium rounded-[100px] transition-all duration-300 transform ${
              activeTag === "All"
                ? "bg-pink text-white scale-105 shadow-md"
                : "bg-white text-pink-600 border border-pink-400 hover:bg-pink-100 hover:text-pink-700 hover:scale-105"
            }`}
            onClick={() => setActiveTag("All")}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-5 py-2 text-sm font-medium rounded-[100px] transition-all duration-300 transform ${
                activeTag === tag
                  ? "bg-pink text-white scale-105 shadow-md"
                  : "bg-white text-pink-600 border border-pink-400 hover:bg-pink-100 hover:text-pink-700 hover:scale-105"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div> */}

        {/* 📰 Blog Cards */}
        <div className="w-[1123px] mx-auto flex flex-col gap-12">
          <div className="border-b border-gray-300"></div>
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No blogs found for this tag.
            </p>
          ) : (
            filteredPosts.map(
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
                      {/* 🖼️ Image */}
                      <div className="w-[542px] h-[434px] rounded-[24px] overflow-hidden flex items-center justify-center flex-shrink-0">
                        <img
                          src={`/${coverImage}`}
                          alt={title}
                          className="w-full h-full object-cover rounded-[24px]"
                        />
                      </div>

                      {/* 📝 Content */}
                      <div className="w-full md:flex-1">
                        <p className="text-[20px] font-light font-inter text-black mb-2">
                          {date}
                        </p>

                        <h2 className="text-[34px] font-medium font-inter mb-2 text-black leading-snug">
                          {title}
                        </h2>

                        <p className="text-[18px] font-light font-inter text-black mb-3">
                          {description}
                        </p>

                        <p className="text-[18px] font-inter font-medium mb-1 tracking-wide">
                          {author}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="border-b border-gray-300"></div>
                </React.Fragment>
              )
            )
          )}
        </div>

        {/* 💌 Join the Team Section */}
        <section className="text-center px-4 md:px-8 mt-20 mb-20">
          <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-inter max-w-4xl mx-auto mb-6 text-black leading-snug">
            We’re always on the lookout for people that believe in menstrual
            dignity for all. Doesn’t matter who you are - we have a place for
            you.
          </h2>
          <a
            href="https://tr.ee/vx87XEdgfh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[20px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
              Join the Team
            </button>
          </a>
        </section>

        {/* 🌸 Break The Taboo Section */}
        <section className="text-center py-8 px-4 md:px-8 bg-white">
          <h2 className="text-[18px] md:text-[22px] lg:text-[26px] max-w-4xl mx-auto mb-6 text-black">
            Join us in our efforts to{" "}
            <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
            positively impact the lives everywhere.
          </h2>
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[20px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
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
      </main>
      <Footer />
    </>
  );
}
