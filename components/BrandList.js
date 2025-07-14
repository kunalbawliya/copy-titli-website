export default function BrandList() {
  const brands = [
    "/images/brands/mirrorNow.png",
    "/images/brands/peeSafe.png",
    "/images/brands/sos.png",
    "/images/brands/dreamDozen.png",
    "/images/brands/iit.png",
    "/images/brands/paralove.png",
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
