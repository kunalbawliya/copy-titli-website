import { useState } from "react";
import clsx from "clsx";

export default function VisionMission() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-4 bg-[#ffffff] text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl mx-auto">
        {/* Vision */}
        <HoverCard
          title="Our Vision"
          headline="“Make sustainable menstruation products accessible to all”"
          body="At Titli, we envisage a world where menstruation is no longer a taboo and sustainable menstrual products are easily accessible to all and Titli works tirelessly for the same."
          image="/images/vision.png"
        />

        {/* Mission */}
        <HoverCard
          title="Our Mission"
          headline="“Break the taboo”"
          body="Create awareness around menstrual hygiene, break generational taboos around it and promote sustainable practices through a change in menstrual habits."
          image="/images/mission.png"
        />
      </div>
    </section>
  );
}

function HoverCard({ title, headline, body, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-center shadow-lg rounded-[12px] w-full max-w-[562.5px] h-[562.5px] overflow-hidden transition-all duration-500 ease-in-out group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
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

      {/* Title */}
      <h3
        className={clsx(
          "absolute font-semibold font-inter transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap",
          hovered ? "text-white text-[20px]" : "text-white text-[64px]"
        )}
        style={{
          left: hovered ? "83px" : "50%" /* shift the text to left */,
          top: hovered ? "calc(100% - 72px)" : "83%",
          transform: hovered ? "translate(0, 0)" : "translate(-50%, -50%)",
        }}
      >
        {title}
      </h3>

      {/* Headline + Body */}
      <div
        className="absolute text-white max-w-[75%] text-left transition-opacity duration-700 ease-in-out"
        style={{
          opacity: hovered ? 1 : 0,
          top: "50%",
          left: "83px",
          transform: "translateY(-50%)",
        }}
      >
        {headline && (
          <p className="text-[36px] font-inter font-bold leading-snug mb-4">
            {headline}
          </p>
        )}
        <br />
        {body && (
          <p className="text-[20px] font-inter font-medium justify-center  leading-relaxed">
            {body}
            <br />
          </p>
        )}
      </div>
    </div>
  );
}
