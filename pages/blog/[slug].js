import { getSortedPostsData, getPostData } from "../../lib/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import MoreArticles from "../../components/MoreArticles";

export async function getStaticPaths() {
  const allPosts = getSortedPostsData();
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPosts = getSortedPostsData();

  const otherPosts = allPosts
    .filter((post) => post.slug !== params.slug)
    .slice(0, 2);

  return {
    props: {
      postData,
      otherPosts,
    },
  };
}

const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

export default function Post({ postData, otherPosts }) {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black pt-[192px]">
        <div className="max-w-[1180px] mx-auto px-[16px]">
          {/* Blog Header */}
          <header className="text-center mb-[30px] lg:mb-[50px]">
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-bold mb-[30px] lg:mb-[50px] leading-tight">
              {postData.title}
            </h1>
            <p className="text-[18px] md:text-[24px] text-black mb-[15px]">
              {postData.author}
            </p>
            <p className="text-[14px] md:text-[16px] text-black mb-[50px]">
              {postData.date}
            </p>
          </header>

          {/* Banner Image Container */}
          <div className="mb-[30px]  lg:mb-[90px] rounded-[16px] overflow-hidden max-w-[307px] md:max-w-[520px] lg:max-w-[1024px] mx-auto ">
            <img
              src={`/${postData.coverImage}`}
              alt={postData.title}
              className="w-full h-full object-cover"
              style={{ aspectRatio: "1024 / 768" }}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-[48px]">
            {/* Left Column: Blog Content */}
            <div className="w-full lg:w-3/4 max-w-[360px] md:max-w-[670px] lg:max-w-none mx-auto ">
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>

            {/* Right Column: Table of Contents */}
            {/* CHANGE: Added 'hidden' to hide on mobile/tablet. 'lg:block' makes it visible on large screens. */}
            <aside className="w-full lg:w-1/4 hidden lg:block">
              <div className="lg:sticky lg:top-[128px]">
                <div>
                  <h3 className="text-[20px] font-bold mb-[16px] pt-[16px] border-t border-gray-300">
                    Table of Contents
                  </h3>
                  <ul className="space-y-[12px] pb-[16px] border-b border-gray-300 leading-normal">
                    {postData.headings?.map((heading) => (
                      <li key={heading.slug}>
                        <a
                          href={`#${heading.slug}`}
                          className="text-gray-700 hover:text-pink-600 transition"
                          style={noTapHighlight}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <MoreArticles posts={otherPosts} showGoBackButton={true} />
        
      </main>
      <Footer />
      {/* CSS for styling the blog content */}
      <style jsx global>{`
        .blog-content p,
        .blog-content li {
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 24px;
        }
        .blog-content h2 {
          font-size: 30px;
          font-weight: 500;
          margin-top: 50px;
          margin-bottom: 24px;
          scroll-margin-top: 125px; 
        }
        .blog-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-top: 32px;
          margin-bottom: 16px;
          scroll-margin-top: 198px; 
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 30px;
        }
        .blog-content a {
          color: #db2777;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #9d174d;
        }
        .blog-content strong {
          font-weight: 700;
        }
      `}</style>
    </>
  );
}