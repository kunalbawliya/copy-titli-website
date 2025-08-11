import React from "react";

const StatRow = ({ imageUrl, statNumber, statText1, statText2, imagePosition }) => {
  // The JSX for the image part of the row
  const ImageSection = (
    <div className="md:w-2/3 w-full">
      <img
        src={imageUrl}
        alt={`${statText1} ${statText2}`}
        // Mobile height is shorter, desktop is taller.
        // On desktop, the image itself is rounded. On mobile, the parent card clips it.
        className="object-cover w-full h-[240px] md:h-[340px] md:rounded-[10px]"
      />
    </div>
  );

  // The JSX for the text/stat part of the row.
  // This now contains two different internal layouts for mobile and desktop.
  const TextSection = (
    // This wrapper handles desktop styles like background and shadow.
    // On mobile it's transparent, letting the parent card's background show through.
    <div className="md:w-1/3 w-full h-auto md:h-[340px] bg-transparent md:bg-white md:rounded-[10px] md:shadow-lg">
      
      {/* --- MOBILE LAYOUT (hidden on md screens and up) --- */}
      {/* This layout matches your new Figma design for mobile screens. */}
      <div className="md:hidden flex flex-row items-center justify-center gap-x-4 h-[91px]">
        <p className="text-[36px] font-bold text-black leading-none">
          {statNumber}
        </p>
        <p className="text-[14px] text-black">
          {statText1} <br/>
          {statText2}
        </p>
      </div>

      {/* --- DESKTOP LAYOUT (hidden by default, visible on md screens and up) --- */}
      {/* This is the original centered, stacked layout for larger screens. */}
      <div className="hidden md:flex flex-col justify-center items-center text-center h-full p-6">
        <p className="text-[24px] text-black mb-2">
          {statText1}
        </p>
        <p className="text-6xl font-bold text-black leading-none">
          {statNumber}
        </p>
        <p className="text-[24px] text-black mt-2">
          {statText2}
        </p>
      </div>
    </div>
  );

  // These classes define the main container for the row.
  const rowClasses = `
    flex flex-col md:flex-row        // Stacks on mobile, row on desktop
    items-stretch md:items-center   // Stretch content on mobile, center on desktop
    gap-0 md:gap-8                  // No gap for the unified mobile card
    ${imagePosition === "right" ? "md:flex-row-reverse" : ""}

    // Mobile "Card" Styles
    bg-pink-50 rounded-[10px] overflow-hidden shadow-lg
    
    // Desktop Overrides (removes the card look from the container)
    md:bg-transparent md:shadow-none md:overflow-visible
  `;

  return (
    <div className={rowClasses.replace(/\s+/g, ' ').trim()}>
      {ImageSection}
      {TextSection}
    </div>
  );
};


const Stats = () => {
  // All image URLs have been updated as requested.
  const statsData = [
    {
      imageUrl: "https://placehold.co/826x340/e2e8f0/334155?text=Donation+Image+1",
      statNumber: "4600+",
      statText1: "Pads donated",
      statText2: "and counting...",
      imagePosition: "left",
    },
    {
      imageUrl: "https://placehold.co/826x340/e2e8f0/334155?text=Donation+Image+2",
      statNumber: "200+",
      statText1: "Cups donated",
      statText2: "and counting...",
      imagePosition: "right",
    },
    {
      imageUrl: "https://placehold.co/826x340/e2e8f0/334155?text=Volunteer+Image",
      statNumber: "200+",
      statText1: "Contributing volunteers",
      statText2: "and counting...",
      imagePosition: "left",
    },
    {
      imageUrl: "https://placehold.co/826x340/e2e8f0/334155?text=Campaign+Image",
      statNumber: "60+",
      statText1: "Campaigns conducted",
      statText2: "and counting...",
      imagePosition: "right",
    },
  ];

  return (
    // Applied the 43px horizontal padding for mobile view.
    // The existing sm: and lg: classes will override this on larger screens.
    <section className="px-[43px] py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {statsData.map((stat, index) => (
          <StatRow
            key={index}
            imageUrl={stat.imageUrl}
            statNumber={stat.statNumber}
            statText1={stat.statText1}
            statText2={stat.statText2}
            imagePosition={stat.imagePosition}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;