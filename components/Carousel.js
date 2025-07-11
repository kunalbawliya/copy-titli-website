const images = [
  "/images/caro1.png",
  "/images/caro2.png",
  "/images/caro3.png",
  "/images/caro4.png",
  "/images/caro5.png",
];

const Carousel = () => {
  return (
    <div className="">
      <div className="animate-inf hidden lg:flex flex-nowrap gap-[50px] items-center my-[70px]">
        {/* <div
        className="rounded-[20px] h-[200px] w-[200px] bg-cover"
        style={{ backgroundImage: `url(${images[2]})` }}
      ></div> */}
        <img
          src={images[4]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[3]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[0]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[1]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[4]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[3]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[0]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[1]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[4]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[3]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[0]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        <img
          src={images[1]}
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw]"
        />
        {/* <div
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw] bg-cover"
          style={{ backgroundImage: `url(${images[4]})` }}
        ></div>
        <div
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw] bg-cover"
          style={{ backgroundImage: `url(${images[3]})` }}
        ></div>
        <div
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw] bg-cover"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <div
          className="rounded-[20px] h-[400px] w-[400px] max-h-[20vw] bg-cover"
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div> */}
      </div>
    </div>
  );
};

export default Carousel;
