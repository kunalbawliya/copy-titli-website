import { useState, useEffect } from 'react';
import Link from 'next/link';

// Style to remove tap highlight
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

// Custom Hook to Detect Window Size
function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

const POSTS_PER_PAGE_DESKTOP = 2; // Initial posts to show on desktop

export default function MoreArticles({ posts, showGoBackButton = false }) {
  const width = useWindowSize();
  const lgBreakpoint = 1024;

  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE_DESKTOP);

  if (!posts || posts.length === 0) {
    return null;
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE_DESKTOP);
  };

  const handleShowLess = () => {
    setVisibleCount(POSTS_PER_PAGE_DESKTOP);
    setIsExpanded(false);
  };

  const postsToShowOnDesktop = posts.slice(0, visibleCount);
  const showLoadMoreButton = visibleCount < posts.length;
  const showShowLessButton = isExpanded || visibleCount > POSTS_PER_PAGE_DESKTOP;

  return (
    <section className="mt-[96px] pb-[30px] lg:pb-[90px]">
      <div className="max-w-[817px] mx-auto px-[16px]">
        {/* CHANGE: This heading is now hidden by default and only appears on lg screens and up. */}
        <h2 className="text-[30px] font-bold text-center mb-[48px] hidden lg:block">
          More Articles
        </h2>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 gap-[50px]
            ${width < lgBreakpoint && !isExpanded ? 'hidden' : 'grid'}
          `}
        >
          {(width < lgBreakpoint && isExpanded ? posts : postsToShowOnDesktop).map(({ slug, title, coverImage }) => (
            <Link key={slug} href={`/blog/${slug}`} passHref style={noTapHighlight}>
              <div className="group cursor-pointer flex flex-col items-center">
                <div className="rounded-[15px] w-[306px] md:w-full overflow-hidden hover:shadow-lg">
                  <img
                    src={`/${coverImage}`}
                    alt={title}
                    className="w-full h-[289px] object-cover transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[16px] font-medium mt-[16px] text-black text-center w-[306px] md:w-full">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-[30px] lg:mt-[50px] space-x-4">
          {width < lgBreakpoint && !isExpanded && posts.length > 0 && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-[24px] text-black underline hover:text-black transition"
              style={noTapHighlight}
            >
              More blogs +
            </button>
          )}

          {width >= lgBreakpoint && showLoadMoreButton && (
            <button
              onClick={handleLoadMore}
              className="text-[24px] text-black underline hover:text-black transition"
              style={noTapHighlight}
            >
              Load more +
            </button>
          )}

          {showShowLessButton && (
            <button
              onClick={handleShowLess}
              className="text-[24px] text-black underline hover:text-black transition"
              style={noTapHighlight}
            >
              Show less
            </button>
          )}
        </div>
        
        {showGoBackButton && (
          <div className="text-center mt-[50px]">
            <Link
              href="/blog"
              className="text-[24px] text-black hover:text-black transition"
              style={noTapHighlight}
            >
              Go back to the article page
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}