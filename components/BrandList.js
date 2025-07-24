export default function BrandList() {
  const brands = [
    "/images/brands/Delhi police.png",
    "/images/brands/Dream a dozen_.png",
    "/images/brands/mid-day logo.png",
    "/images/brands/gaims-logo.jpeg",
    "/images/brands/IIT Kanpur Logo_.png",
    "/images/brands/pee-safe.png",
    "/images/brands/Rajdhani college.png",
    "/images/brands/Sirona.png",
    "/images/brands/SK Children foundation_.jpg",
    "/images/brands/SOS Children_s Village.png",
    "/images/brands/Sudha Rani foundation_.jpg",
  ];

  return (
    <div className="my-10 h- flex flex-col items-center bg-slate-300">
      {/* Marquee container with fixed height and shadow */}
      <div className="w-full h-[200px] overflow-hidden bg-slate-200 shadow-lg rounded-md relative py-12">
        <div className="marquee flex absolute left-0 top-0 h-full items-center">
          {[...brands, ...brands].map((src, idx) => (
            <div
              key={idx}
              className="w-[180px] h-auto flex items-center justify-center px-[30px]"
            >
              <img
                src={src}
                alt={`brand-${idx}`}
                className="max-h-[80px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-12 text-center text-[16px] text-gray-600">
        Backing our mission, sharing our vision.
      </div>
    </div>
  );
}
