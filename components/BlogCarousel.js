import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useRef } from "react";

export default function BlogCarousel({ blogs = [] }) {
  const swiperRef = useRef(null);

  const swipePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const swipeNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="bg-[#f4eef5] mt-[90px] pt-12 pb-2">
      <div className="relative max-w-[1074px] mx-auto px-4 align-middle ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          loopedSlides={blogs.length}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {blogs.map(({ slug, title, description, coverImage, author }, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blog/${slug}`}>
                <div className="rounded-[18px] overflow-hidden transition">
                  <img
                    src={`/${coverImage}`}
                    alt={title}
                    className="w-[512px] h-[400px] object-cover rounded-[18px] hover:shadow-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-[28px] font-inter leading-none line-clamp-2 min-h-[72px]">
                      {title}
                    </h3>
                    <p className="text-[20px] font-inter line-clamp-2 min-h-[72px]">
                      {author}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Left Arrow */}
        <button
          onClick={swipePrev}
          className="absolute left-[-70px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-[20px]"
        >
          &#8249;
        </button>
        {/* Right Arrow */}
        <button
          onClick={swipeNext}
          className="absolute right-[-70px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-[20px]"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
