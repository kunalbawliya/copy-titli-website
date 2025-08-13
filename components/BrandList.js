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
      {/* Marquee container matching Figma specs */}
      <div class="w-full h-[200px] overflow-hidden bg-white relative 
     shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="marquee flex absolute left-0 h-full items-center">
          {/* Duplicate brands array for a seamless loop */}
          {[...brands, ...brands].map((src, idx) => (
            <div
              key={idx}
              className="w-[200px] flex-shrink-0 flex items-center justify-center px-8"
            >
              <img
                src={src}
                alt={`brand-${idx}`}
                className="max-h-[100px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caption matching Figma specs */}
      <div className="mt-[50px] text-center text-[20px] text-black">
        Backing our mission, sharing our vision.
      </div>
    </div>
  );
}