import React from 'react';

/**
 * A reusable component section that encourages users to join the team.
 * It displays a heading and a call-to-action button.
 */
const JTT = () => {
  return (
    <section className="text-center px-4 md:px-8 mt-12 mb-24">
      <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-inter max-w-4xl mx-auto mb-6 text-black leading-snug">
        We’re always on the lookout for people that believe in menstrual
        dignity for all. Doesn’t matter who you are - we have a place for you.
      </h2>
      <a
        href="https://tr.ee/vx87XEdgfh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
          Join the Team
        </button>
      </a>
    </section>
  );
};

export default JTT;