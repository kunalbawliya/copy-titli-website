export default function BrandList() {
  const brands = [
    "/images/brands/Delhi police.png",
    "/images/brands/Dream a dozen_.png",
    "/images/brands/mid-day logo.png",
    "/images/brands/Sudha Rani foundation_.jpg",
    "/images/brands/pee-safe.png",
    "/images/brands/Sirona.png",
    "/images/brands/SOS Children_s Village.png",
    "/images/brands/gaims-logo.jpeg",
    "/images/brands/IIT Kanpur Logo_.png",
    "/images/brands/Rajdhani college.png",
    "/images/brands/SK Children foundation_.jpg",
  ];

  return (
    <div className="w-full flex flex-col items-center py-12">
      {/* --- ✨ Marquee container is now responsive ✨ --- */}
      <div
        className="w-full h-[70px] md:h-[120px] lg:h-[200px] overflow-hidden bg-white relative 
      shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]"
      >
        <div className="marquee flex absolute left-0 h-full items-center">
          {/* Duplicate brands array for a seamless loop */}
          {[...brands, ...brands].map((src, idx) => (
            // --- ✨ Logo container size is now responsive ✨ ---
            <div
              key={idx}
              className="w-[120px] md:w-[160px] lg:w-[200px] flex-shrink-0 flex items-center justify-center px-4 md:px-8"
            >
              <img
                src={src}
                alt={`brand-${idx}`}
                // --- ✨ Logo image size is now responsive ✨ ---
                className="max-h-[50px] md:max-h-[75px] lg:max-h-[100px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- ✨ Caption text is now responsive ✨ --- */}
      <div className="lg:mt-[50px] mt-[15px] text-center text-[15px] md:text-[18px] lg:text-[20px] text-black px-4">
        Backing our mission, sharing our vision.
      </div>
    </div>
  );
}