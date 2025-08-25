import React, { useState, useEffect } from 'react';

// Style to remove tap highlight, applied to all clickable elements
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

// --- Custom Hook to Detect Window Size ---
// This hook listens to the browser window's size and returns the current width.
function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}


// --- Main Hero Component ---
const Hero = () => {
  // --- SLIDER LOGIC ---
  const [activeIndex, setActiveIndex] = useState(0);
  const numSlides = 2;
  const slideInterval = 10000;

  const handleDotClick = (newIndex) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % numSlides);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Get window width from the hook
  const width = useWindowSize();

  // Define breakpoints
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1280;

  // --- RENDER LOGIC ---

  // Mobile Layout (< 768px)
  if (width > 0 && width < tabletBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[308px] mx-auto mt-24 px-4 pb-12 font-inter">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Slide 1 Mobile */}
              <div className="w-full flex-shrink-0">
                <section className="flex flex-col items-center text-center">
                  <div className="mt-8 w-full max-w-[301px]">
                    <div className="text-[34px] font-bold leading-tight mb-4">
                      Make the switch,
                      <br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-2">
                        <img
                          className="absolute left-0 top-1 scale-125"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="text-[12px] font-normal text-[#000000]">
                      Lorem ipsum dolor sit amet consectetur. Porttitor amet
                      consequat neque sapien lacus at non ridiculus lorem elit
                      libero. Viverra in nunc rutrum{" "}
                    </p>
                  </div>
                  <div className="rounded-[10px] w-full max-w-sm flex items-center justify-center mt-6">
                    <img
                      src="/images/main-hero-1.png"
                      alt="Cup Image"
                      className="object-contain w-full h-auto rounded-[10px]"
                    />
                  </div>
                </section>
              </div>
              {/* Slide 2 Mobile */}
              <div className="w-full flex-shrink-0">
                <section className="flex flex-col items-center text-center">
                  <div className="mt-8 w-full max-w-[301px]">
                    <div className="text-[34px] font-bold leading-tight mb-4">
                      Make the switch,
                      <br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-2">
                        <img
                          className="absolute left-0 top-1 scale-125"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="text-[12px] font-normal text-[#000000]">
                      This is the second slide's content. You can change this
                      text and the image source to make it different from the
                      first slide.
                    </p>
                  </div>
                  <div className="rounded-[10px] w-full max-w-sm flex items-center justify-center mt-6">
                    <img
                      src="/images/main-hero-1.png"
                      alt="Cup Image"
                      className="object-contain w-full h-auto rounded-[10px]"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <div className="text-center text-[12px] text-[#4A4A4A]">
          <p>
            Scroll to see where your donation goes{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }

  // Tablet / Small Laptop Layout (768px - 1279px)
  else if (width >= tabletBreakpoint && width < desktopBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[1024px] mx-auto mt-32 px-6 pb-16 font-inter">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Slide 1 Tablet */}
              <div className="w-full flex-shrink-0">
                <section className="flex flex-row items-center justify-between">
                  <div className="w-1/2 flex justify-start">
                    <div className=" rounded-[20px] w-full max-w-[450px] h-full flex items-center justify-center">
                      <img
                        src="/images/main-hero-1.png"
                        alt="Cup Image"
                        className="object-contain w-auto h-full rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-10">
                    <div className="text-4xl font-bold leading-tight">
                      Make the switch,
                      <br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-2">
                        <img
                          className="absolute left-0 top-1 scale-125"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="mt-5 text-lg font-normal text-[#000000] max-w-md">
                      Lorem ipsum dolor sit amet consectetur. Porttitor amet
                      consequat neque sapien lacus at non ridiculus lorem elit
                      libero.
                    </p>
                    <a
                      href="/donate"
                      className="mt-8 inline-block bg-pink text-white px-10 py-3 rounded-[10px]"
                      style={noTapHighlight}
                    >
                      Make a Donation
                    </a>
                  </div>
                </section>
              </div>
              {/* Slide 2 Tablet */}
              <div className="w-full flex-shrink-0">
                <section className="flex flex-row items-center justify-between">
                  <div className="w-1/2 flex justify-start">
                    <div className="rounded-[20px] w-full max-w-[450px] h-full flex items-center justify-center">
                      <img
                        src="/images/main-hero-1.png"
                        alt="Cup Image"
                        className="object-contain w-full h-full rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-10">
                    <div className="text-4xl font-semibold leading-tight">
                      This is Slide 2<br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-2">
                        <img
                          className="absolute left-0 top-1 scale-125"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="mt-5 text-lg font-normal text-[#000000] max-w-md">
                      This is the second slide's content. You can change this
                      text and the image source to make it different from the
                      first slide.
                    </p>
                    <a
                      href="/donate"
                      className="mt-8 inline-block bg-pink text-white px-10 py-3 rounded-[10px]"
                      style={noTapHighlight}
                    >
                      Make a Donation
                    </a>
                  </div>
                </section>
              </div>
            </div>
             {/* Navigation Dots */}
            <div className="absolute bottom-2 right-10 flex space-x-3">
              {[...Array(numSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-[100px] ${activeIndex === index ? 'bg-pink' : 'bg-[#FFC5DE]'}`}
                  style={noTapHighlight}
                />
              ))}
            </div>
          </div>
        </main>
        <div className="text-center text-xl text-[#4A4A4A] mt-20">
          <p>
            Scroll to see where your donation goes{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }

  // Large Desktop Layout (>= 1280px)
  else {
    return (
      <>
        <main className="w-full max-w-[1222px] mx-auto mt-[192px] pb-16 rounded-[20px] font-inter">
          <div className="relative overflow-hidden ">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Slide 1 Desktop */}
              <div className="w-full flex-shrink-0">
                <section className="w-full flex flex-row items-center justify-between">
                  <div className="w-1/2 flex justify-center">
                    <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                      <img
                        src="/images/main-hero-1.png"
                        alt="Cup Image"
                        className="object-contain w-auto h-[552px] rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col justify-center text-left pl-24">
                    <div className="text-[56px] font-bold leading-tight">
                      Make the switch,
                      <br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-[10px]">
                        <img
                          className="absolute left-0 top-[15px] scale-145"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="mt-6 text-[18px] font-normal text-[#000000] max-w-[500px]">
                      Lorem ipsum dolor sit amet consectetur. Porttitor amet
                      consequat neque sapien lacus at non ridiculus lorem elit
                      libero. Viverra in nunc rutrum fusce sit molestie.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/donate"
                        className="bg-pink text-white px-12 py-3 rounded-[10px] text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                        style={noTapHighlight}
                      >
                        Make a Donation
                      </a>
                    </div>
                  </div>
                </section>
              </div>
              {/* Slide 2 Desktop */}
              <div className="w-full flex-shrink-0">
                <section className="w-full flex flex-row items-center justify-between">
                  <div className="w-1/2 flex justify-center">
                    <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                      <img
                        src="/images/main-hero-1.png"
                        alt="Cup Image"
                        className="object-contain w-auto h-[552px] rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col justify-center text-left pl-24">
                    <div className="text-[56px] font-bold leading-tight">
                      This is Slide 2<br />
                      one{" "}
                      <span className="font-shadows text-pink relative px-[10px]">
                        <img
                          className="absolute left-0 top-[15px] scale-145"
                          src="/svgs/cupCircle.svg"
                          alt=""
                        />
                        cup
                      </span>{" "}
                      at a time.
                    </div>
                    <p className="mt-6 text-[18px] font-normal text-[#000000] max-w-[500px]">
                      This is the second slide's content. You can change this
                      text and the image source to make it different from the
                      first slide.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/donate"
                        className="bg-pink text-white px-12 py-3 rounded-[10px] text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                        style={noTapHighlight}
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
                    activeIndex === index ? "bg-pink" : "bg-[#FFC5DE]"
                  }`}
                  style={noTapHighlight}
                />
              ))}
            </div>
          </div>
        </main>
        <div className="text-center text-[24px] text-[#4A4A4A] mt-24">
          <p>
            Scroll to see where your donation goes{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }
};

export default Hero;
