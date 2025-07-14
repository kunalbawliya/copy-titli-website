import { useState } from "react";
import clsx from "clsx";

export default function VisionMission() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-4 bg-[#ffffff] text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl mx-auto">
        {/* Vision */}
        <HoverCard
          title="Our Vision"
          description="To create a world where every child and woman has equal access to education,
          health, and opportunities to thrive — empowering them to lead with dignity and independence."
        />

        {/* Mission */}
        <HoverCard
          title="Our Mission"
          description="Through grassroots programs and community partnerships, we aim to uplift underprivileged
          communities by providing education, menstrual health awareness, and sustainable support systems."
        />
      </div>
    </section>
  );
}

function HoverCard({ title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative text-center shadow-lg rounded-[12px] p-6 md:p-8 h-[500px] overflow-hidden transition-all duration-500 ease-in-out ${
        hovered ? "bg-pink" : "bg-[#fdc0d8]"
      }`}
    >
      {/* Title that slides smoothly */}
      <h3
        className={`font-semibold absolute whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          hovered ? "no-underline text-white" : "underline text-black"
        }`}
        style={{
          left: hovered ? "24px" : "50%",
          top: hovered ? "calc(100% - 72px)" : "20%",
          transform: hovered ? "translate(0, 0)" : "translate(-50%, -50%)",
          color: hovered ? "white" : "#000000",
          fontSize: hovered ? "1.75rem" : "3.75rem", // 3xl -> 6xl
        }}
      >
        {title}
      </h3>

      {/* Description fades in */}
      <p
        className="absolute text-white max-w-[85%] text-[16px] md:text-[18px] leading-relaxed text-left transition-opacity duration-700 ease-in-out"
        style={{
          opacity: hovered ? 1 : 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
