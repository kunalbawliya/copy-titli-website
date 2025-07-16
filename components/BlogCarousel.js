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
    <div className="bg-[#f4eef5] pt-12 pb-2">
      <div className="relative max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          loopedSlides={blogs.length}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {blogs.map(({ slug, title, description, coverImage }, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blog/${slug}`}>
                <div className="rounded-[18px] overflow-hidden transition">
                  <img
                    src={`/${coverImage}`}
                    alt={title}
                    className="w-full h-[400px] object-cover rounded-[18px] hover:shadow-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-[36px] font-semibold leading-none line-clamp-2 min-h-[72px]">
                      {title}
                    </h3>
                    <p className="text-[20px] text-gray-500 line-clamp-2 min-h-[3rem] relative">
                      {description.length > 100 ? (
                        <>
                          {description.slice(0, 100)}...{" "}
                          <span className="text-pink-600 underline cursor-pointer">
                            Read More
                          </span>
                        </>
                      ) : (
                        description
                      )}
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
          className="absolute left-[-50px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-full"
        >
          &#8249;
        </button>
        {/* Right Arrow */}
        <button
          onClick={swipeNext}
          className="absolute right-[-50px] top-[180px] z-30 text-5xl w-14 h-14 flex items-center justify-center rounded-full"
        >
          &#8250;
        </button>{" "}
      </div>
    </div>
  );
}
