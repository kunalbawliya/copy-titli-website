import React, { useState, useEffect } from 'react';

// Style to remove tap highlight on touch devices
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

// --- Custom Hook to Detect Window Size ---
function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

// --- Main Component ---
const AboutHero = () => {
  const width = useWindowSize();
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1280; // Matched Hero component's breakpoint

  // --- Mobile Layout (< 768px) ---
  if (width > 0 && width < tabletBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[308px] mx-auto pt-24 px-4 pb-8 font-inter">
          <section className="flex flex-col items-center text-center">
            {/* Text Content Area */}
            <div className="w-full mt-8 max-w-[341px]">
              <div className="text-[32px] font-semibold leading-tight mb-4">
                From awareness to action, redefining menstrual health
              </div>
              <p className="text-[12px] text-[#000000]">
                At Titli Foundation, we empathize with the challenges faced by
                underprivileged menstruators. We aim to provide sustainable products and
                raise awareness about menstrual hygiene.
              </p>
            </div>
            {/* Image Area */}
            <div className="rounded-[10px] w-full max-w-sm flex items-center justify-center mt-6">
              <img
                src="/images/about-hero.png"
                alt="Titli Foundation providing menstrual products"
                className="object-contain w-full h-auto rounded-[10px]"
              />
            </div>
             {/* Button below image */}
             {/* <div className="mt-8">
                <a
                  href="https://tr.ee/vx87XEdgfh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink text-white px-8 py-3 rounded-[10px] text-base border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                  style={noTapHighlight}
                >
                  Join the Team
                </a>
              </div> */}
          </section>
        </main>
        <div className="text-center text-sm text-[#4A4A4A] mb-16">
          <p>
            Scroll to see what Founder wants to tell you{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }

  // --- Tablet Layout (768px - 1199px) ---
  else if (width >= tabletBreakpoint && width < desktopBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[1024px] mx-auto pt-32 px-6 pb-16 font-inter">
          <section className="flex flex-row items-center justify-between">
            {/* Left: Hero Text */}
            <div className="w-1/2 text-left pr-10 ">
              <div className="text-4xl lg:text-5xl font-semibold leading-tight">
                From awareness to action, redefining menstrual health
              </div>
              <p className="mt-5 text-[14px] text-[#000000] max-w-md">
                At Titli Foundation, we empathize with the challenges faced by
                underprivileged menstruators when it comes to having a safe and
                hygienic period. We aim to provide them with sustainable menstrual
                products and raise awareness.
              </p>
              <a
                href="https://tr.ee/vx87XEdgfh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-pink text-white px-8 py-2 rounded-[10px] text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                style={noTapHighlight}
              >
                Join the Team
              </a>
            </div>
            {/* Right: Img */}
            <div className="w-1/2 flex justify-end">
              <div className="rounded-[20px] w-full max-w-[450px] h-full flex items-center justify-center">
                <img
                  src="/images/about-hero.png"
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-auto h-full rounded-[20px]"
                />
              </div>
            </div>            
          </section>
        </main>
        <div className="text-center text-xl text-[#4A4A4A] mt-20 mb-24">
          <p>
            Scroll to see what Founder wants to tell you{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }

  // --- Desktop Layout (>= 1280px) ---
  else {
    return (
      <>
        <main className="w-full max-w-[1222px] mx-auto pt-[170px] pb-20 px-4 md:px-8">
            <section className="w-full flex flex-row items-center justify-between">
              {/* Left: Heading, Text, Button */}
              <div className="w-1/2 flex flex-col justify-center text-left lg:pr-10 font-inter">
                <div className="text-[63px] font-semibold leading-tight">
                  From awareness to action, redefining menstrual health
                </div>
                <p className="mt-6 text-[18px] max-w-[520px] leading-tight">
                  At Titli Foundation, we empathize with the challenges faced by
                  underprivileged menstruators when it comes to having a safe and
                  hygienic period. We aim to provide them with sustainable menstrual
                  products and raise awareness about menstrual hygiene and its safe practices.
                </p>
                <div className="mt-8">
                  <a
                    href="https://tr.ee/vx87XEdgfh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink text-white px-12 py-3 rounded-[10px] text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                    style={noTapHighlight}
                  >
                    Join the Team
                  </a>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="w-1/2 flex justify-center lg:justify-end">
                <div className="bg-gray-200 rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                  <img
                    src="/images/about-hero.png"
                    alt="Titli Foundation providing menstrual products"
                    className="object-contain w-auto h-[552px] rounded-[20px]"
                  />
                </div>
              </div>
            </section>
        </main>

        <div className="text-center text-[24px] text-[#4A4A4A] mt-[10px] mb-[125px]">
          Scroll to see what Founder wants to tell you{" "}
          <span className="inline-block animate-bounce">▼</span>
        </div>
      </>
    );
  }
};

export default AboutHero;