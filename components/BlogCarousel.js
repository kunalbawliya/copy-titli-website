import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useRef } from "react";

export default function BlogCarousel({ blogs = [] }) {
  const swiperRef = useRef(null);
  
  // --- ✨ STYLE OBJECT ADDED HERE ✨ ---
  // Style to remove tap highlight, applied to all clickable elements
  const noTapHighlight = { WebkitTapHighlightColor: 'transparent' };

  const swipePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const swipeNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="bg-[#f4eef5] mt-[90px] pt-12 pb-12">
      <div className="relative max-w-[1074px] mx-auto px-4">
        <div className="[&_.swiper-pagination]:xl:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            loopedSlides={blogs.length}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 2, spaceBetween: 30 },
            }}
          >
            {blogs.map(({ slug, title, description, coverImage, author }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-w-[316px] sm:max-w-sm md:max-w-md lg:max-w-[450px] xl:max-w-[512px] mx-auto" style={noTapHighlight}>
                  <Link href={`/blog/${slug}`}>
                    {/* --- ✨ STYLE PROP APPLIED HERE ✨ --- */}
                    <div
                      className="rounded-[18px] overflow-hidden transition"
                      style={noTapHighlight}
                    >
                      <img
                        src={`/${coverImage}`}
                        alt={title}
                        className="w-full aspect-[4/3] object-cover rounded-[18px] hover:shadow-xl"
                      />
                      <div className="p-4">
                        <h3 className="font-inter leading-tight line-clamp-2 text-[18px] lg:text-[24px] xl:text-[28px] min-h-[44px] lg:min-h-[60px] xl:min-h-[72px]">
                          {title}
                        </h3>
                        <p className="font-inter line-clamp-2 text-[14px] lg:text-[18px] xl:text-[20px] min-h-[34px] lg:min-h-[44px] xl:min-h-[72px]">
                          {author}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          onClick={swipePrev}
          className="absolute left-[-70px] top-[180px] z-30 text-5xl w-14 h-14 hidden lg:flex items-center justify-center rounded-[20px]"
        >
          &#8249;
        </button>
        <button
          onClick={swipeNext}
          className="absolute right-[-70px] top-[180px] z-30 text-5xl w-14 h-14 hidden lg:flex items-center justify-center rounded-[20px]"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}