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
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const swipeRight = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > activeIndex ? 1 : -1);
    setActiveIndex(slideIndex);
  };

  const getIndex = (offset) =>
    (activeIndex + offset + images.length) % images.length;

  const leftVariants = {
    enter: (dir) => ({ x: dir > 0 ? -300 : -100, scale: 0.8, opacity: 0 }),
    center: { x: -500, scale: 1.2, opacity: 0.7 },
    exit: (dir) => ({ x: dir > 0 ? -500 : -300, scale: 0.7, opacity: 0 }),
  };

  const rightVariants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : 300, scale: 0.8, opacity: 0 }),
    center: { x: 180, scale: 1.2, opacity: 0.7 },
    exit: (dir) => ({ x: dir > 0 ? 0 : 0, scale: 0.7, opacity: 0 }),
  };

  const centerVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, scale: 0.8, opacity: 0 }),
    center: { x: 0, scale: 1.2, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? 0 : 0, scale: 0.8, opacity: 0 }),
  };

  return (
    <section className="relative flex flex-col items-center my-[80px] overflow-hidden px-2 sm:px-6 md:px-12">
      <div className="relative w-full max-w-xs md:max-w-md lg:max-w-[1200px] h-[420px] flex justify-center items-center">
        {/* Arrows are hidden until lg screens */}
        <button
          onClick={swipeLeft}
          className="absolute right-[-1px] top-[180px] z-30 text-5xl w-14 h-14 hidden lg:flex items-center justify-center rounded-[20px]"
        >
          &#8250;
        </button>
        <button
          onClick={swipeRight}
          className="absolute left-[-1px] top-[180px] z-30 text-5xl w-14 h-14 hidden lg:flex items-center justify-center rounded-[20px]"
        >
          &#8249;
        </button>

        {/* Left Card is hidden until lg screens */}
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

        {/* Right Card is hidden until lg screens */}
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

      {/* Navigation Dots are visible until lg screens */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-pink-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center font-inter text-lg mt-[46px] mb-[10px] text-black">
        Want to see bigger picture? <br />
        <a href="/gallery" className="text-pink-500 underline hover:text-pink-700">
          Head to our gallery here
        </a>
      </div>
    </section>
  );
}

function Card({ data, small = false }) {
  // Sizes now defined for mobile/tablet (base, md) and desktop (lg)
  const size = small
    // Side card sizes (now only visible on lg and up)
    ? "lg:w-[320px] lg:h-[260px]"
    // Center card sizes: base for mobile, md for tablet, lg for desktop
    : "w-[300px] h-[220px] md:w-[360px] md:h-[270px] lg:w-[420px] lg:h-[320px] scale-105 shadow-xl";

  return (
    <div className={`relative rounded-[8px] overflow-hidden ${size} transition-all duration-300`}>
      <img
        src={data.src}
        alt={data.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <p className="font-inter text-white text-base md:text-lg">
          {data.name}
        </p>
      </div>
    </div>
  );
}