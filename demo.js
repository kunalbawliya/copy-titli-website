import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
      <main className="bg-[#fff5f8] text-gray-800 min-h-screen pt-8 pb-16">
        {/* 🔥 Hero Section */}
        <section className="max-w-6xl mx-auto px-4 text-center mb-12">
          <h1 className="text-5xl font-bold text-pink-600 mb-4 font-serif">
            Blogs & Articles
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Read stories, experiences, and updates from our initiatives.
          </p>
        </section>

        {/* 🔘 Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            style={{ borderRadius: "20px" }}
            className={`px-5 py-2 text-sm font-medium transition-all duration-300 transform rounded-full ${
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
              style={{ borderRadius: "20px" }}
              key={tag}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 transform rounded-full ${
                activeTag === tag
                  ? "bg-pink text-white scale-105 shadow-md "
                  : "bg-white text-pink-600 border border-pink-400 hover:bg-pink-100 hover:text-pink-700 hover:scale-105"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 📰 Blog Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No blogs found for this tag.
            </p>
          ) : (
            filteredPosts.map(
              ({
                slug,
                title,
                date,
                description,
                coverImage,
                tags = [],
                category,
              }) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden border border-pink-200 shadow hover:shadow-lg transition group cursor-pointer flex flex-col h-full">
                    <img
                      src={`/${coverImage}`}
                      alt={title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5 flex flex-col flex-1">
                      {category && (
                        <p className="text-xs text-pink-500 uppercase mb-1 tracking-wider">
                          {category}
                        </p>
                      )}
                      <h2 className="text-2xl font-semibold mb-2 group-hover:text-pink-600 font-serif">
                        {title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-3 flex-1">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-auto">{date}</p>
                    </div>
                  </div>
                </Link>
              )
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
