import React from 'react';

/**
 * A reusable component for the Instagram follow link.
 * It shows a static button on mobile/tablet and a hover animation on desktop.
 */
const Insta = () => {
  const noTapHighlight = { WebkitTapHighlightColor: 'transparent' };

  return (
    <section className="flex justify-center mt-[50px] mb-[50px] lg:mb-[95px] ">
      <a
        href="https://www.instagram.com/titlifoundation"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        style={noTapHighlight}
      >
        {/* --- ✨ Mobile & Tablet View (< 1024px) ✨ --- */}
        {/* This now has a solid pink border instead of a gradient */}
        <div className="lg:hidden flex items-center gap-2 px-4 py-1 rounded-[10px] border-2 border-pink">
          <img
            src="/svgs/Instagram Button.png"
            alt="Instagram Logo"
            className="w-6 h-6"
          />
          <span className="font-semibold text-pink text-base whitespace-nowrap">
            Follow our journey
          </span>
        </div>

        {/* --- ✨ Desktop View (>= 1024px) ✨ --- */}
        {/* This is your original animated button, now only for large screens */}
        <div className="hidden lg:inline-flex relative items-center font-[Inter] font-semibold text-[20px] tracking-[-0.06em]">
          <img
            src="/svgs/Instagram Button.png"
            alt="Instagram"
            // --- ✨ BORDER REMOVED FROM HERE ✨ ---
            className="w-14 h-14 transition-transform duration-500 ease-in-out group-hover:-translate-x-[6rem] rounded-full"
          />
          <span className="absolute left-full ml-0 -translate-x-[6rem] origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out text-pink-600 px-4 py-1 rounded-full whitespace-nowrap">
            Follow our journey
          </span>
        </div>
      </a>
    </section>
  );
};

export default Insta;