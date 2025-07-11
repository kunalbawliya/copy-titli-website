export default function BrandList() {
  return (
    <div className="grid grid-cols-4 md:flex flex-wrap gap-x-[20px] gap-y-[20px] justify-between items-center justify-items-center max-w-[90vw] w-[1336px] m-auto my-[50px] lg:my-[100px]">
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain"
        src="/images/brands/mirrorNow.png"
      />
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain"
        src="/images/brands/peeSafe.png"
      />
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain row-start-2 col-span-2"
        src="/images/brands/sos.png"
      />
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain"
        src="/images/brands/dreamDozen.png"
      />
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain"
        src="/images/brands/iit.png"
      />
      <img
        className="h-[40px] lg:h-auto w-[auto] object-contain row-start-2 col-span-3"
        src="/images/brands/paralove.png"
      />
    </div>
  );
}
