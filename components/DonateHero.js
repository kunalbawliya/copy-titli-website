import React, { useState, useEffect } from "react";

const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

const DonateHero = ({ handleScrollToDonate }) => {
  const width = useWindowSize();
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1280;

  // --- Mobile Layout (< 768px) ---
  if (width > 0 && width < tabletBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[308px] mx-auto mt-24 px-4 pb-12 font-inter">
          <section className="flex flex-col items-center text-center">
            <div className="w-full mt-8 max-w-[341px]">
              <h1 className="text-[30px] font-semibold leading-tight mb-4">
                Small steps towards Breaking the Taboo
              </h1>
              <p className="text-[12px] max-w-[259px] mx-auto">
                By donating, you are directly contributing towards providing
                underprivileged menstruators with essential and sustainable
                menstrual hygiene products.
              </p>
            </div>
            <div className="rounded-[10px] w-full max-w-sm flex items-center justify-center mt-6">
              <img
                src="/images/career and donate-hero.png"
                alt="Titli Foundation providing menstrual products"
                className="object-contain w-full h-auto rounded-[10px]"
              />
            </div>
          </section>
        </main>
        <div className="text-center text-sm text-black mb-16">
          <p>
            Scroll to make a donation{" "}
            <span className="inline-block animate-bounce">▼</span>
          </p>
        </div>
      </>
    );
  }

  // --- Tablet Layout (768px - 1279px) ---
  else if (width >= tabletBreakpoint && width < desktopBreakpoint) {
    return (
      <>
        <main className="w-full max-w-[1024px] mx-auto mt-32 px-6 pb-16 font-inter">
          <section className="flex flex-row items-center justify-between">
            <div className="w-1/2 flex justify-start">
              <div className="rounded-[20px] w-full max-w-[450px] h-full flex items-center justify-center">
                <img
                  src="/images/career and donate-hero.png"
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-auto h-full rounded-[20px]"
                />
              </div>
            </div>
            <div className="w-1/2 text-left pl-10">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Small steps towards Breaking the Taboo
              </h1>
              <p className="mt-5 text-lg max-w-md">
                By donating to our cause, you are directly contributing towards
                providing underprivileged menstruators across the country with
                essential and sustainable menstrual hygiene products.
              </p>
            </div>
          </section>
        </main>
        <div className="text-center text-xl text-black mt-20 mb-24">
          <p>
            Scroll to make a donation{" "}
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
        <main className="w-full max-w-[1222px] mx-auto mt-[170px] pb-20 px-4 md:px-8">
          <section className="w-full flex flex-row items-center justify-between">
            <div className="w-1/2 flex flex-col justify-center text-left lg:pr-10 font-inter">
              <h1 className="text-[60px] font-semibold leading-tight">
                Small steps towards Breaking the Taboo
              </h1>
              <p className="mt-6 text-[18px] font-medium max-w-[520px] leading-tight">
                By donating to our cause, you are directly contributing towards
                providing underprivileged menstruators across the country with
                essential and sustainable menstrual hygiene products. Rest
                assured that every penny of your donation will go towards this
                noble cause.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleScrollToDonate}
                  style={noTapHighlight}
                  className="bg-pink text-white px-8 md:px-12 py-3 rounded-[10px] text-base md:text-lg border-2 border-transparent hover:bg-white hover:text-pink hover:border-pink duration-300 transition"
                >
                  Make a donation
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-center lg:justify-end">
              <div className="rounded-[20px] w-full max-w-[532px] h-[552px] flex items-center justify-center">
                <img
                  src="/images/career and donate-hero.png"
                  alt="Titli Foundation providing menstrual products"
                  className="object-contain w-auto h-[552px] rounded-[20px]"
                />
              </div>
            </div>
          </section>
        </main>
        <div className="text-center text-[24px] text-black mt-[10px] mb-[125px]">
          Scroll to make a donation{" "}
          <span className="inline-block animate-bounce">▼</span>
        </div>
      </>
    );
  }
};

export default DonateHero;
