export default function Stats({ ref3, ref1, viewed1, viewed3 }) {
  return (
    <div className="relative">
      <div ref={ref3}>
        <div className="hidden lg:block -z-50 absolute right-[-0vw] top-[-100px] h-[800px] w-[800px] rounded-[50%] bg-gradient-to-r from-[#FDEDD8] from-0% to-[#FDEDE0] to-100% opacity-40 blur-3xl"></div>
        <img
          className={`hidden lg:block z-10 opacity-0 absolute left-[7vw] top-[15vh] ${
            viewed3 && "animate-but1"
          }`}
          src="/svgs/butterflies/pink.svg"
        />
        <img
          className={`hidden lg:block z-10 opacity-0 absolute right-[9vw] top-[7vh] ${
            viewed3 && "animate-but2"
          }`}
          src="/svgs/butterflies/purple.svg"
        />
        <img
          className={`hidden lg:block z-10 opacity-0 absolute left-[18vw] bottom-[5vh] ${
            viewed3 && "animate-but3"
          }`}
          src="/svgs/butterflies/black.svg"
        />
        <img
          className={`hidden lg:block z-10 opacity-0 absolute right-[25vw] bottom-[10vh] ${
            viewed3 && "animate-but4"
          }`}
          src="/svgs/butterflies/yellow.svg"
        />
        <div
          className={`max-w-[90vw] w-[1336px] m-auto grid grid-cols-2 gap-[20px] lg:gap-[70px]`}
        >
          <div
            className={`bg-white rounded-[16px] lg:shadow-[rgba(227,79,143,0.12)_0px_30px_90px] h-[100px] lg:h-[350px] w-auto lg:w-[650px] lg:max-w-[45vw] flex  flex-col lg:flex-row gap-[25px] gap-y-[5px] lg:justify-center lg:items-center lg:justify-self-end lg:opacity-0 ${
              viewed3 && "lg:animate-f-up-l"
            }`}
          >
            <div className="font-thin text-[48px] lg:text-[80px] xl:text-[100px]">
              200+
            </div>
            <div className="font-bold text-[16px] lg:text-[32px] text-pink max-w-[200px]">
              cups donated
            </div>
          </div>
          <div
            className={`bg-white rounded-[16px] lg:shadow-[rgba(227,79,143,0.12)_0px_30px_90px] h-[100px] lg:h-[350px] w-auto lg:w-[650px] lg:max-w-[45vw] flex  flex-col lg:flex-row gap-[25px] gap-y-[5px] lg:justify-center lg:items-center lg:translate-y-[70px] lg:opacity-0 ${
              viewed3 && "lg:animate-f-up-r"
            }`}
          >
            <div className="font-thin text-[48px] lg:text-[80px] xl:text-[100px]">
              200+
            </div>
            <div className="font-bold text-[16px] lg:text-[32px] text-pink max-w-[200px]">
              volunteers
            </div>
          </div>
          <div
            className={`bg-white rounded-[16px] lg:shadow-[rgba(227,79,143,0.12)_0px_30px_90px] h-[100px] lg:h-[350px] w-auto lg:w-[650px] lg:max-w-[45vw] flex  flex-col lg:flex-row gap-[25px] gap-y-[5px] lg:justify-center lg:items-center lg:justify-self-end lg:opacity-0 ${
              viewed3 && "lg:animate-f-up-l"
            }`}
          >
            <div className="font-thin text-[48px] lg:text-[80px] xl:text-[100px]">
              2500+
            </div>
            <div className="font-bold text-[16px] lg:text-[32px] text-pink max-w-[200px]">
              sustainable pads donated
            </div>
          </div>
          <div
            className={`bg-white rounded-[16px] lg:shadow-[rgba(227,79,143,0.12)_0px_30px_90px] h-[100px] lg:h-[350px] w-auto lg:w-[650px] lg:max-w-[45vw] flex  flex-col lg:flex-row gap-[25px] gap-y-[5px] lg:justify-center lg:items-center lg:translate-y-[70px] lg:opacity-0 ${
              viewed3 && "lg:animate-f-up-r"
            }`}
          >
            <div className="font-thin text-[48px] lg:text-[80px] xl:text-[100px]">
              20+
            </div>
            <div className="font-bold text-[16px] lg:text-[32px] text-pink max-w-[200px]">
              campaigns
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90vw] w-[1336px] m-auto text-pink lg:text-[#E68CBA] font-extralight lg:font-bold text-[32px] lg:text-center mt-[50px] lg:mt-[250px] mb-[30px] lg:mb-[150px]">
        &
      </div>
      <div
        ref={ref1}
        className={`max-w-[90vw] w-[1336px] m-auto flex lg:opacity-0 lg:justify-center items-center text-pink font-bold text-[16px] lg:text-[64px] gap-[30px] mb-[70px] lg:mb-[200px] ${
          viewed1 && "lg:animate-f-up-l"
        }`}
      >
        <img className="h-[50px] lg:h-auto" src="/svgs/infinity.svg" />
        <div>dreams</div>
      </div>
    </div>
  );
}
