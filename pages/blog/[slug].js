import {
  getAllPostSlugs,
  getPostData,
  getSortedPostsData,
} from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPostsData = getSortedPostsData(); // <-- ADD THIS
  return {
    props: {
      postData,
      allPostsData, // <-- AND THIS
    },
  };
}

export default function Post({ postData, allPostsData }) {
  const moreArticles = allPostsData
    .filter((post) => post.slug !== postData.slug)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="bg-[#ffffff] text-gray-800 min-h-screen pt-[160px] md:pt-[180px] lg:pt-[198px] pb-24 px-4">
        <article className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 font-serif text-pink-700 text-center">
            {postData.title}
          </h1>

          {/* Author Block */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <img
                src="/icons/profile-placeholder.png"
                alt="Author"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-black font-medium">
                  {postData.author || "Titli Team"}
                </p>
                <p className="text-xs text-gray-500">{postData.date}</p>
              </div>
            </div>
          </div>

          {/* H2 + Paragraph */}
          <h2 className="text-2xl font-bold mb-4">
            {postData.subheading1 || "Lorem ipsum dolor sit amet consectetur."}
          </h2>
          <p className="mb-10 text-[16px] text-gray-700 leading-relaxed">
            {postData.subtext1 ||
              "Lorem ipsum dolor sit amet consectetur. Enim risus semper sit dolor vestibulum ac sit et."}
          </p>

          {/* 2 Grid Placeholder Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="h-64 bg-gray-300 rounded-[24px]"></div>
            <div className="h-64 bg-gray-300 rounded-[24px]"></div>
          </div>

          {/* H2 + Paragraph Again */}
          <h2 className="text-2xl font-bold mb-4">
            {postData.subheading2 || "Lorem ipsum dolor sit amet consectetur."}
          </h2>
          <p className="mb-10 text-[16px] text-gray-700 leading-relaxed">
            {postData.subtext2 ||
              "Enim risus semper sit dolor vestibulum ac sit et."}
          </p>

          {/* Cover Image */}
          <img
            src={`/${postData.coverImage}`}
            alt={postData.title}
            className="w-full h-[480px] object-cover rounded-[24px] mb-12 shadow-sm"
          />

          {/* Blog Content */}
          <div
            className="prose prose-lg prose-p:text-gray-800 prose-headings:font-serif prose-a:text-pink-600 max-w-none mb-20"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {/* Related Articles (More Articles) */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              More articles
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
              {moreArticles.map(({ slug, title, coverImage }) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <div className="cursor-pointer">
                    <div className="w-full h-40 rounded-xl mb-2 overflow-hidden">
                      <img
                        src={`/${coverImage}`}
                        alt={title}
                        className="w-full h-full object-cover rounded-[24px]"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-800 line-clamp-2">
                      {title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Go Back Link */}
          <div className="text-center mb-12">
            <Link href="/blog" className="text-xl text-black hover:text-pink ">
              Go back to the article page
            </Link>
          </div>

          {/* 🌸 Break The Taboo Section */}
          <section className="text-center py-0 px-4 bg-white">
            <h2 className="text-[24px] font-inter font-semibold max-w-2xl mx-auto mb-6 text-[#000000] md:text-2xl">
              Join us in our efforts to{" "}
              <span className="text-pink-600 font-bold">#BreakTheTaboo</span>{" "}
              and positively impact the lives everywhere.
            </h2>
            <button className="bg-pink text-white px-12 py-3 rounded-[30px] text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
              Change Begins With You
            </button>
          </section>

          {/* 📸 Instagram Hover Section */}
          <section className="flex justify-center py-1 mt-8">
            <div className="group relative w-fit flex items-center justify-center">
              <div className="relative inline-flex items-center font-[Inter] font-semibold text-[20px] tracking-[-0.06em]">
                <img
                  src="/svgs/instagram-logo.svg"
                  alt="Instagram"
                  className="w-14 h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[5.5rem]"
                />
                <span className="absolute left-full ml-0 -translate-x-[5.5rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
                  Follow our journey
                </span>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
