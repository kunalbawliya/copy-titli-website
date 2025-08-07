import React from 'react';

/**
 * A reusable component for the "Break The Taboo" section.
 * It includes a mission statement and a call-to-action button.
 */
const BTT = () => {
  return (
    <section className="text-center px-4 md:px-8 pt-20 flex flex-col items-center">
      <h3 className="font-inter text-[24px] max-w-[1024px] ">
        We believe that menstrual care is a fundamental right for all,
        regardless of their socio-economic status. Menstrual care should no
        longer be a source of shame or discomfort but be approached with
        knowledge, confidence, and sustainability.{" "}
      </h3>
      <br />
      <h2 className="text-[18px] md:text-[22px] lg:text-[26px] max-w-4xl mx-auto mb-6 text-black">
        Join us in our efforts to{" "}
        <span className="text-pink-600 font-bold">#BreakTheTaboo</span> and
        positively impact the lives everywhere.
      </h2>
      <a href="" target="_blank" rel="noopener noreferrer">
        <button className="bg-pink text-white px-8 md:px-12 py-3 rounded-[30px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition">
          Change Begins With You
        </button>
      </a>
    </section>
  );
};

export default BTT;
