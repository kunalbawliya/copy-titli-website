import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { name: "Pondicherry, Puducherry", src: "/images/caro 1.png" },
  { name: "Kanpur, Uttar Pradesh", src: "/images/caro 4.png" },
  { name: "MG Road", src: "/images/caro 3.png" },
  { name: "SOS Village, Bangalore", src: "/images/caro 2.png" },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeLeft = () => {
    setDirection(1); // Swiping left means the carousel moves to the right (positive direction)
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const swipeRight = () => {
    setDirection(-1); // Swiping right means the carousel moves to the left (negative direction)
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getIndex = (offset) =>
    (activeIndex + offset + images.length) % images.length;

  // Variants for animation (No changes here)
  const leftVariants = {
    enter: (dir) => ({
      x: dir > 0 ? -300 : -100,
      scale: 0.8,
      opacity: 0,
    }),
    center: {
      x: -500,
      scale: 1.2,
      opacity: 0.7,
    },
    exit: (dir) => ({
      x: dir > 0 ? -500 : -300,
      scale: 0.7,
      opacity: 0,
    }),
  };

  const rightVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : 300,
      scale: 0.8,
      opacity: 0,
    }),

    center: {
      x: 180,
      scale: 1.2,
      opacity: 0.7,
    },
    exit: (dir) => ({
      x: dir > 0 ? 0 : 0,
      scale: 0.7,
      opacity: 0,
    }),
  };

  const centerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      scale: 0.8,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1.2,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? 0 : 0,
      scale: 0.8,
      opacity: 0,
    }),
  };

  return (
    <section className="relative flex flex-col items-center my-[80px] overflow-hidden px-2 sm:px-6 md:px-12">
      <div className="relative w-full max-w-[1200px] h-[420px] flex justify-center items-center">
        {/* --- I noticed your arrows were swapped, I've corrected them --- */}
        {/* Right Arrow */}
        <button
          onClick={swipeLeft}
          className="absolute right-[-1px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-[20px]"
        >
          &#8250;
        </button>

        {/* Left Arrow */}
        <button
          onClick={swipeRight}
          className="absolute left-[-1px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-[20px]"
        >
          &#8249;
        </button>

        {/* Left Card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`left-${getIndex(-1)}-${direction}`}
            custom={direction}
            variants={leftVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="hidden lg:block absolute top-15 left-1/2 -translate-x-1/2 z-5"
          >
            <Card data={images[getIndex(-1)]} small />
          </motion.div>
        </AnimatePresence>

        {/* Center Card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`center-${activeIndex}-${direction}`}
            custom={direction}
            variants={centerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute z-20"
          >
            <Card data={images[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Right Card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`right-${getIndex(1)}-${direction}`}
            custom={direction}
            variants={rightVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="hidden lg:block absolute top-15 left-1/2 z-5"
          >
            <Card data={images[getIndex(1)]} small />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center font-inter text-lg mt-[46px] mb-[10px] text-black">
        Want to see bigger picture? <br />
        <a
          href="/gallery"
          className="hover:text-pink-700"
        >
          Head to our gallery here
        </a>
      </div>
    </section>
  );
}

// --- ✨ MODIFIED CARD COMPONENT ✨ ---
function Card({ data, small = false }) {
  const size = small
    ? "w-[220px] sm:w-[260px] md:w-[320px] h-[160px] sm:h-[200px] md:h-[260px]"
    : "w-[280px] sm:w-[360px] md:w-[420px] h-[200px] sm:h-[270px] md:h-[320px] scale-105 shadow-xl";

  return (
    // 1. Add 'relative' to make it a positioning container.
    // 2. Remove the pink background color 'bg-[#fdc0d8]'.
    <div
      className={`relative rounded-[8px] overflow-hidden ${size} transition-all duration-300`}
    >
      {/* 3. Make the image fill the entire card height. */}
      <img
        src={data.src}
        alt={data.name}
        className="w-full h-full object-cover"
      />
      {/* 4. Add an overlay container for the gradient and text. */}
      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        {/* 5. Style the text to be white and positioned within the overlay. */}
        <p className="font-serif text-white text-base md:text-lg">
          {data.name}
        </p>
      </div>
    </div>
  );
}
