import { useState } from "react";
import clsx from "clsx";

// Data for the components with the original image paths.
const cardData = [
  {
    title: "Our Vision",
    headline: "“Make sustainable menstruation products accessible to all”",
    body: "At Titli, we envisage a world where menstruation is no longer a taboo and sustainable menstrual products are easily accessible to all and Titli works tirelessly for the same.",
    image: "/images/vision.png",
  },
  {
    title: "Our Mission",
    headline: "“Break the taboo”",
    body: "Create awareness around menstrual hygiene, break generational taboos around it and promote sustainable practices through a change in menstrual habits.",
    image: "/images/mission.png",
  },
];

export default function VisionMission() {
  // State for the mobile accordion view. 'Our Vision' is open by default.
  const [activeItem, setActiveItem] = useState("Our Vision");

  const handleToggle = (title) => {
    if (activeItem !== title) {
        setActiveItem(title);
    }
  };

  return (
    // UPDATED: Added px-[50px] and pt-[25px] for mobile view.
    // The original responsive padding for sm, lg, etc., remains the same.
    <section className="px-[50px] pt-[25px] pb-8 sm:px-6 sm:py-12 lg:px-20 bg-[#FFFBF7] font-inter">
      {/* Mobile & Tablet Accordion View (< 1024px) */}
      <div className="lg:hidden flex flex-col gap-4 max-w-xl mx-auto">
        {cardData.map((item) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            headline={item.headline}
            body={item.body}
            isOpen={activeItem === item.title}
            onToggle={() => handleToggle(item.title)}
          />
        ))}
      </div>

      {/* Desktop Hover Card View (>= 1024px) */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-24 max-w-6xl mx-auto justify-items-center font-inter">
        {cardData.map((item) => (
          <HoverCard
            key={item.title}
            title={item.title}
            headline={item.headline}
            body={item.body}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

// This is the component for the mobile-first accordion view.
function AccordionItem({ title, headline, body, isOpen, onToggle }) {
  return (
    <div className="rounded-[10px] shadow-lg overflow-hidden transition-all duration-500 font-inter">
      {/* Content Section (Visible when open) */}
      {isOpen && (
        <div className="bg-[#FEF1F8] p-6 sm:p-8 text-left transition-all duration-500 ease-in-out">
          <p className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
            {headline}
          </p>
          <p className="text-base sm:text-lg leading-relaxed">{body}</p>
        </div>
      )}

      {/* Clickable Header Section */}
      <button
        onClick={onToggle}
        // THE ONLY CHANGE IS HERE: Added a style to remove the mobile tap highlight color.
        style={{ WebkitTapHighlightColor: 'transparent' }}
        className={clsx(
          "w-full p-6 transition-colors duration-300 focus:outline-none",
          {
            "bg-[#EC5A99] hover:bg-[#d84c8a]": !isOpen,
            "bg-[#EC5A99]": isOpen,
          }
        )}
      >
        <h3
          className={clsx(
            "font-bold flex items-center gap-4", // Base styles
            {
              // When closed: Center the content, make text large and white
              "justify-center text-white text-[24px] sm:text-4xl": !isOpen,
              // When open: the content, make text small and pink
              "justify-center text-white text-xl sm:text-2xl": isOpen,
            }
          )}
        >
          {title}
          {/* The arrow only appears when the accordion is closed */}
          {!isOpen && <span className="text-2xl transform transition-transform duration-300">▲</span>}
        </h3>
      </button>
    </div>
  );
}



/**
 * HoverCard Component - RESTORED AND FIXED
 * This version uses your original, perfect animation logic.
 * It now has responsive text sizes and positioning to prevent overlap
 * on screens between 1024px and 1280px.
 */
function HoverCard({ title, headline, body, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Responsive height for better scaling between lg and xl breakpoints.
      className="relative text-center shadow-lg rounded-[12px] w-full max-w-[562.5px] h-[480px] xl:h-[562.5px] overflow-hidden transition-all duration-500 ease-in-out group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
        onError={(e) => { e.target.onerror = null; e.target.style.backgroundImage = `url(https://placehold.co/563x563/d1d5db/374151?text=Image+Not+Found)` }}
      />

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          hovered ? "opacity-70" : "opacity-20"
        }`}
      />
      {/* Bottom dark gradient only on unhover */}
      {!hovered && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
          }}
        />
      )}

      {/* Title - Your original animation logic is preserved here. */}
      <h3
        className={clsx(
          "absolute font-semibold font-inter transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap",
          // Responsive text for the title when it's centered.
          hovered 
            ? "text-white text-[20px]" 
            : "text-white text-[56px] xl:text-[64px]"
        )}
        style={{
          // Adjusted left positioning for better padding on hover.
          left: hovered ? "60px" : "50%",
          top: hovered ? "calc(100% - 72px)" : "83%",
          transform: hovered ? "translate(0, 0)" : "translate(-50%, -50%)",
        }}
      >
        {title}
      </h3>

      {/* Headline + Body */}
      <div
        className="absolute text-white max-w-[calc(100%-100px)] text-left transition-opacity duration-700 ease-in-out"
        style={{
          opacity: hovered ? 1 : 0,
          top: "50%",
          // Adjusted left positioning to match the title and padding.
          left: "60px",
          transform: "translateY(-50%)",
        }}
      >
        {headline && (
          // Responsive text size for the headline to prevent overlap.
          <p className="font-inter font-bold leading-snug mb-4 text-[28px] xl:text-[36px]">
            {headline}
          </p>
        )}
        <br />
        {body && (
          // Responsive text size for the body text.
          <p className="font-inter font-medium justify-center leading-relaxed text-[16px] xl:text-[20px]">
            {body}
            <br />
          </p>
        )}
      </div>
    </div>
  );
}
