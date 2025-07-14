import React from "react";

const Stats = () => {
  return (
    <section className="px-4 sm:pb-6 pb-[100px] bg-[#ffffff] text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto pb-[100px]">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* Box 1 - taller and rounded-md */}
          <div className="bg-purple-200 p-6 rounded-[10px] h-[418px] flex flex-col justify-center items-center">
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">Held</p>
            <p className="text-[90px] font-inter font-medium text-black leading-none">20+</p>
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">campaigns</p>
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">across India</p>
          </div>

          {/* Box 2 - shorter and more rounded */}
          <div className="bg-purple-100 p-6 rounded-[10px] h-[170px] flex items-center justify-center">
            <p className="text-[25px] font-inter font-medium text-gray-700 text-center">Every number tells a story</p>
          </div>

          {/* Box 3 - medium height and rounded-xl */}
          <div className="bg-purple-200 p-6 rounded-[10px] h-[419px] flex flex-col justify-center items-center">
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">More Than</p>
            <p className="text-[90px] font-inter font-medium text-black leading-none">2500+</p>
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">sustainable pads donated</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* Box 1 - rounded-full and normal height */}
          <div className="bg-purple-200 p-6 rounded-[10px] h-[263px] flex items-center justify-center">
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center max-w-[320px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Box 2 - tall with soft corner */}
          <div className="bg-purple-200 p-6 rounded-[10px] h-[466px] flex flex-col justify-center items-center">
            <p className="text-[25px] font-inter font-medium text-gray-700  text-center leading-none">More Than</p>
            <p className="text-[90px] font-inter font-medium text-black leading-none">200+</p>
            <p className="text-[25px] font-inter font-medium text-gray-700 mt-1 text-center leading-none">Cups donated</p>
          </div>

          {/* Box 3 - custom pixel height and rounded-md */}
          <div className="bg-purple-200 p-6 rounded-[10px] h-[278px] flex items-center justify-center">
            <p className="text-[25px] font-inter font-medium text-gray-700 text-center max-w-[320px] ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
