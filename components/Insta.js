import React from 'react';

/**
 * A reusable component for the Instagram follow link.
 * It features a logo that slides to reveal text on hover.
 */
const Insta = () => {
  return (
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
  );
};

export default Insta;
