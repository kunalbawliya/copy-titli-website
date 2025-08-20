import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Style to remove tap highlight, applied to all clickable elements
const noTapHighlight = { WebkitTapHighlightColor: "transparent" };

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

  // --- ✨ NEW: SWIPE HANDLER FUNCTION ✨ ---
  // This function will be called when a user finishes dragging the card.
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // Min drag distance to trigger a swipe
    const swipePower = Math.abs(info.velocity.x) * info.offset.x;

    if (swipePower < -swipeThreshold) {
      // Swiped left (next image)
      swipeLeft();
    } else if (swipePower > swipeThreshold) {
      // Swiped right (previous image)
      swipeRight();
    }
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
    <section className="relative flex flex-col items-center my-[80px] overflow-hidden px-6" style={noTapHighlight}>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[1200px] h-[300px] sm:h-[350px] md:h-[420px] flex justify-center items-center">
        <button
          onClick={swipeLeft}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 text-5xl w-14 h-14 hidden xl:flex items-center justify-center rounded-[20px]"
        >
          &#8250;
        </button>
        <button
          onClick={swipeRight}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 text-5xl w-14 h-14 hidden xl:flex items-center justify-center rounded-[20px]"
        >
          &#8249;
        </button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`left-${getIndex(-1)}-${direction}`}
            custom={direction}
            variants={leftVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="hidden xl:block absolute top-15 left-1/2 -translate-x-1/2 z-5"
          >
            <Card data={images[getIndex(-1)]} small />
          </motion.div>
        </AnimatePresence>

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
            // --- ✨ NEW: DRAG & SWIPE PROPS ADDED HERE ✨ ---
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Card data={images[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`right-${getIndex(1)}-${direction}`}
            custom={direction}
            variants={rightVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="hidden xl:block absolute top-15 left-1/2 -translate-x-1/2 z-5"
          >
            <Card data={images[getIndex(1)]} small />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4 xl:hidden" style={noTapHighlight}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-[100px] transition-colors ${
              activeIndex === index ? "bg-pink" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center font-inter text-lg mt-[46px] mb-[10px] text-black">
        Want to see bigger picture? <br />
        <a
          href="/gallery"
          className="text-pink-500 underline hover:text-pink-700" style={noTapHighlight}
        >
          Head to our gallery here
        </a>
      </div>
    </section>
  );
}

function Card({ data, small = false }) {
  const size = small
    ? "xl:w-[320px] xl:h-[260px]"
    : "w-[260px] h-[228px] sm:w-[384px] sm:h-[285px] md:w-[450px] md:h-[335px] lg:w-[440px] lg:h-[320px] xl:w-[420px] xl:h-[300px] scale-105 shadow-xl";

  return (
    <div
      className={`relative rounded-[8px] overflow-hidden ${size} transition-all duration-300` }
    >
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
