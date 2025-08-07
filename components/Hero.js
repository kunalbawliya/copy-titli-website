import React, { useState } from 'react';

/**
 * A reusable Hero component that functions as a slider.
 * It displays slides with static content, navigation dots, and a scroll hint.
 */
const Hero = () => {
  // State to track the currently active slide index.
  const [activeIndex, setActiveIndex] = useState(0);
  
  // The number of slides. We'll have 2 static slides.
  const numSlides = 2;

  /**
   * Handles changing the active slide.
   * @param {number} newIndex - The index of the slide to navigate to.
   */
  const handleDotClick = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <>
      <main className="w-full max-w-[1222px] mx-auto lg:mx-[108px] mt-[192px] pb-16 rounded-[20px]">
        {/* The main container for the slider. overflow-hidden hides the other slides. */}
        <div className="relative overflow-hidden">
          {/* This inner div acts as a track for the slides. */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* --- SLIDE 1 --- */}
            <div className="w-full flex-shrink-0">
              <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Left: Hero Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                  <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                    <img
                      src="/images/cup.png"
                      alt="Cup Image"
                      className="object-contain w-[60%] h-[60%]"
                    />
                  </div>
                </div>
                {/* Right: Heading, Text, Button */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-10">
                  <div className="text-[36px] lg:text-[56px] font-bold leading-tight">
                    Make the switch,
                    <br />
                    one{" "}
                    <span className="font-shadows text-pink relative px-[10px]">
                      <img
                        className="absolute left-0 top-[5px] lg:top-[15px] scale-125 lg:scale-145"
                        src="/svgs/cupCircle.svg"
                        alt=""
                      />
                      cup
                    </span>{" "}
                    at a time.
                  </div>
                  <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[500px] mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet consectetur. Porttitor amet consequat
                    neque sapien lacus at non ridiculus lorem elit libero. Viverra in
                    nunc rutrum fusce sit molestie.
                  </p>
                  <div className="mt-8">
                    <a
                      href="/blog"
                      className="inline-block bg-pink hover:bg-dark-pink transition-all duration-200 text-white font-medium py-3 px-8 rounded-[12px]"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* --- SLIDE 2 --- */}
            <div className="w-full flex-shrink-0">
              <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Left: Hero Image (Same as Slide 1 for now) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                  <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                    <img
                      src="/images/cup.png"
                      alt="Cup Image"
                      className="object-contain w-[60%] h-[60%]"
                    />
                  </div>
                </div>
                {/* Right: Heading, Text, Button (Same as Slide 1 for now) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-10">
                  <div className="text-[36px] lg:text-[56px] font-bold leading-tight">
                    This is Slide 2
                    <br />
                    one{" "}
                    <span className="font-shadows text-pink relative px-[10px]">
                      <img
                        className="absolute left-0 top-[5px] lg:top-[15px] scale-125 lg:scale-145"
                        src="/svgs/cupCircle.svg"
                        alt=""
                      />
                      cup
                    </span>{" "}
                    at a time.
                  </div>
                  <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[500px] mx-auto lg:mx-0">
                    This is the second slide's content. You can change this text
                    and the image source to make it different from the first slide.
                  </p>
                  <div className="mt-8">
                    <a
                      href="/blog"
                      className="inline-block bg-pink hover:bg-dark-pink transition-all duration-200 text-white font-medium py-3 px-8 rounded-[12px]"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </section>
            </div>

          </div>

          {/* Navigation Dots */}
          {/* Positioned absolutely at the bottom right corner of the slider container. */}
          <div className="absolute bottom-[1px] right-28 flex space-x-3">
            {[...Array(numSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                // --- THIS IS THE CHANGED LINE ---
                // Added `rounded-full` to make the dots circular.
                className={`w-3 h-3 rounded-[100px] transition-colors duration-300 ${
                  activeIndex === index ? 'bg-pink' : 'bg-[#FFC5DE]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Scroll Hint */}
      <div className="text-center text-[24px]  text-black mt-16 lg:mt-24">
        Scroll to see where your donation goes{" "}
        <span className="inline-block animate-bounce">▼</span>
      </div>
    </>
  );
};

export default Hero;









// Hero without Slide
// import React from 'react';

// /**
//  * A reusable Hero component that displays the main heading, an image,
//  * descriptive text, a call-to-action button, and a scroll hint.
//  */
// const Hero = () => {
//   return (
//     // The component is wrapped in a React Fragment (<>) to return multiple elements.
//     <>
//       <main className="w-full max-w-[1222px] mx-auto lg:mx-[108px] mt-[192px] pb-16 rounded-[20px]">
//         {/* Hero Section */}
//         <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          
//           {/* Left: Hero Image */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
//             <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
//               <img
//                 src="/images/cup.png"
//                 alt="Cup Image"
//                 className="object-contain w-[60%] h-[60%]"
//               />
//             </div>
//           </div>

//           {/* Right: Heading, Text, Button */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-10">
//             <div className="text-[36px] lg:text-[56px] font-bold leading-tight">
//               Make the switch,
//               <br />
//               one{" "}
//               <span className="font-shadows text-pink relative px-[10px]">
//                 <img
//                   className="absolute left-0 top-[5px] lg:top-[15px] scale-125 lg:scale-145"
//                   src="/svgs/cupCircle.svg"
//                   alt=""
//                 />
//                 cup
//               </span>{" "}
//               at a time.
//             </div>
//             <p className="mt-6 text-[16px] lg:text-[18px] font-medium text-[#2F2F2F] max-w-[500px] mx-auto lg:mx-0">
//               Lorem ipsum dolor sit amet consectetur. Porttitor amet consequat
//               neque sapien lacus at non ridiculus lorem elit libero. Viverra in
//               nunc rutrum fusce sit molestie.
//             </p>
//             <div className="mt-8">
//               <a
//                 href="/blog"
//                 className="inline-block bg-pink hover:bg-dark-pink transition-all duration-200 text-white font-medium py-3 px-8 rounded-[12px]"
//               >
//                 Explore
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Scroll Hint */}
//       <div className="text-center text-[24px] text-gray-600 mt-16 lg:mt-24">
//         Scroll to see where your donation goes ↓
//       </div>
//     </>
//   );
// };

// export default Hero;