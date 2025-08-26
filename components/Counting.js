import React from 'react';
import CountUp from 'react-countup';

// Data for the stats cards to keep the JSX clean
const statsData = [
  { end: 4600, suffix: "+", label: "Pads donated" },
  { end: 200, suffix: "+", label: "Cups donated" },
  { end: 200, suffix: "+", label: "Volunteers" },
  { end: 60, suffix: "+", label: "Campaigns" },
];

const Counting = () => {
  return (
    <section className="max-w-[1180px] mx-auto mb-[90px] px-4">
      {/*
        Layout Strategy:
        - MOBILE: A flex column to stack and center the cards.
        - TABLET (md): Switches to a 2-column grid.
        - DESKTOP (lg): Switches to a 4-column grid.
      */}
      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            // MOBILE: Each card has a fixed width of 307px.
            // TABLET (md) & up: Width is reset to auto to fit the grid.
            className="bg-[#FFDFED] text-center p-6 rounded-[10px] flex flex-col justify-center w-[307px] md:w-auto"
          >
            <div 
              // DESKTOP (lg): Font size is reduced from 64px to 5xl (48px).
              className="text-[64px] lg:text-5xl font-semibold"
            >
              <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} enableScrollSpy />
            </div>
            <div 
              // DESKTOP (lg): Font size is reduced from 24px to xl (20px).
              className="text-[24px] lg:text-xl font-medium"
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-sm md:text-xl xl:text-[24px]  text-black mb-16 mt-8 ">
          <p>
            Scroll to find out what role you can play{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
    </section>
  );
};

export default Counting;