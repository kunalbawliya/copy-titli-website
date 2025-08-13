import Link from 'next/link';

export default function MoreArticles({ posts, showGoBackButton = false }) {
  // If there are no posts, don't render anything.
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-[96px] pb-[90px]">
      <div className="max-w-[817px] mx-auto px-[16px]">
        <h2 className="text-[30px] font-bold text-center mb-[48px]">
          More Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          {posts.map(({ slug, title, coverImage }) => (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <div className="group cursor-pointer">
                <div className="rounded-[15px] overflow-hidden">
                  <img
                    src={`/${coverImage}`}
                    alt={title}
                    className="w-full h-[289px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[16px] font-medium mt-[16px] text-black items-center text-center ">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* This button will only show if you pass the `showGoBackButton` prop as true */}
        {showGoBackButton && (
          <div className="text-center mt-[50px]">
            <Link
              href="/blog"
              className="text-[24px] text-black hover:text-black transition"
            >
              Go back to the article page
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}