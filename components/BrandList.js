export default function BrandList() {
  const brands = [
    "/images/brands/Delhi police.png",
    "/images/brands/Dream a dozen_.png",
    "/images/brands/gaims-logo-1.png",
    "/images/brands/IIT Kanpur Logo_.png",
    "/images/brands/mid-day logo.png",
    "/images/brands/pee-safe.png",
    "/images/brands/Rajdhani college.png",
    "/images/brands/Sirona.png",
    "/images/brands/SK Children foundation_.png",
    "/images/brands/SOS Children_s Village.png",
    "/images/brands/Sudha Rani foundation_.png",
  ];

  return (
    <div className="overflow-hidden mt-[50px] lg:mt-[100px]">
      <div className="flex gap-[60px] whitespace-nowrap animate-scroll">
        {[...Array(3)].map((_, i) => (
          <div className="flex gap-[60px] shrink-0" key={i}>
            {brands.map((src, idx) => (
              <img
                key={i + "-" + idx}
                src={src}
                alt={`brand-${idx}`}
                className="h-[40px] lg:h-auto w-auto object-contain shrink-0"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="text-center text-[16px] text-gray-600 pt-[50px]">
        Backing our misson, sharing our vision.
      </div>
    </div>

    
  );
}
