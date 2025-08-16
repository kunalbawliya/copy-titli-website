import React, { useState, useEffect } from 'react';

/**
 * A reusable Hero component that functions as an auto-playing slider.
 * It displays slides with static content, navigation dots, and a scroll hint.
 */
const Hero = () => {
  // State to track the currently active slide index.
  const [activeIndex, setActiveIndex] = useState(0);
  
  // The number of slides. We'll have 2 static slides.
  const numSlides = 2;

  /**
   * Handles changing the active slide when a dot is clicked.
   * @param {number} newIndex - The index of the slide to navigate to.
   */
  const handleDotClick = (newIndex) => {
    setActiveIndex(newIndex);
  };

  // --- AUTO-SLIDE LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % numSlides;
      setActiveIndex(nextIndex);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      {/* --- THIS IS THE CORRECTED LINE --- */}
      {/* Replaced lg:mx-[108px] with mx-auto to center the component */}
      <main className="w-full max-w-[1222px] mx-auto mt-[192px] pb-16 rounded-[20px] font-inter">
        {/* The main container for the slider. overflow-hidden hides the other slides. */}
        <div className="relative overflow-hidden ">
          {/* This inner div acts as a track for the slides. */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* --- SLIDE 1 --- */}
            <div className="w-full flex-shrink-0">
              <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Left: Hero Image */}
                <div className="w-full lg:w-1/2 flex justify-center mb-0">
                  <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                    <img
                      src="/images/main-hero-1.png"
                      alt="Cup Image"
                      className="object-contain w-auto h-[552px] rounded-[20px]"
                    />
                  </div>
                </div>
                {/* Right: Heading, Text, Button */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-24">
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
                      href="/donate"
                      className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                    >
                      Make a Donation
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* --- SLIDE 2 --- */}
            <div className="w-full flex-shrink-0">
              <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Left: Hero Image (Same as Slide 1 for now) */}
                <div className="w-full lg:w-1/2 flex justify-center mb-0">
                  <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                    <img
                      src="/images/main-hero-1.png"
                      alt="Cup Image"
                      className="object-contain w-auto h-[552px] rounded-[20px]"
                    />
                  </div>
                </div>
                {/* Right: Heading, Text, Button (Same as Slide 1 for now) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-24">
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
                      href="/donate"
                      className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                    >
                      Make a Donation
                    </a>
                  </div>
                </div>
              </section>
            </div>

          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-[1px] right-28 flex space-x-3">
            {[...Array(numSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
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
