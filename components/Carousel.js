import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { name: "JP Nagar", src: "/images/caro1.png" },
  { name: "Connaught Place, Delhi", src: "/images/caro2.png" },
  { name: "Indiranagar", src: "/images/caro3.png" },
  { name: "MG Road", src: "/images/caro4.png" },
  { name: "Sector 62", src: "/images/caro5.png" },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeLeft = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const swipeRight = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const getIndex = (offset) => (activeIndex + offset + images.length) % images.length;

  // Variants
  const leftVariants = {
    enter: (dir) => ({
      x: dir > 0 ? -300 : -100,
      scale: 0.8,
      opacity: 0,
    }),
    center: {
      x: -400,
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
      x: 80,
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
        {/* Arrows */}
        <button
          onClick={swipeLeft}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 z-30 text-xl sm:text-3xl bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          &#8250;
        </button>

        <button
          onClick={swipeRight}
          className="absolute left-[10px] top-1/2 -translate-y-1/2 z-30 text-xl sm:text-3xl bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
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

      <div className="text-center mt-[30px] text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </section>
  );
}

function Card({ data, small = false }) {
  const size = small
    ? "w-[220px] sm:w-[260px] md:w-[320px] h-[160px] sm:h-[200px] md:h-[260px]"
    : "w-[280px] sm:w-[360px] md:w-[420px] h-[200px] sm:h-[270px] md:h-[320px] scale-105 shadow-2xl";

  return (
    <div className={`rounded-[8px] overflow-hidden bg-[#fdc0d8] ${size} transition-all duration-300`}>
      <img src={data.src} alt={data.name} className="w-full h-[90%] object-cover" />
      <div className="text-left font-serif text-black text-sm py-1 px-4">{data.name}</div>
    </div>
  );
}
