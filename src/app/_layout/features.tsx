import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <div className="container w-[74vw] space-y-8 py-[40px] xl:space-y-14 xl:py-[80px]">
      <div className="w-[55%] space-y-6">
        <h2 className="w-[25rem] max-w-xs text-3xl font-bold leading-[40px] sm:max-w-sm sm:text-4xl lg:text-4xl lg:leading-[50px] xl:max-w-2xl xl:text-4xl xl:leading-[50px]">
          Waynaa Unlocking, City&#39;s Secrets
        </h2>
        <p className="text-base font-semibold text-gray-500 sm:max-w-lg sm:text-xl lg:text-[16px] xl:max-w-4xl xl:text-[16px]">
          Explore Interactive Maps, Live Updates, and Top-Picked Hotspots While
          Winning Limited Discount Offers to Elevate Your Adventure.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {/* First Row */}
        <div className="relative col-span-4 lg:col-span-3 h-[70vh] overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="/svgs/Girls.svg"
            width={100}
            height={100}
            quality={80}
            alt="Exclusive coupons"
          />
          {/* <p className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2 text-6xl font-bold text-white">
            Exclusive Coupons
          </p> */}
        </div>
        <div className="relative col-span-1 lg:col-span-2 h-[70vh] overflow-hidden rounded-xl bg-[#080705]">
          <Image
            className="h-full w-full object-fill"
            src="/svgs/Navigate.svg"
            width={140}
            height={140}
            quality={100}
            alt="Navigate"
          />
          {/* <div className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2">
            <p className="text-6xl font-medium text-white">Navigate</p>
          </div> */}
        </div>
        {/* Second Row */}
        <div className="relative col-span-1 lg:col-span-2 h-[70vh] overflow-hidden rounded-xl bg-[#080705]">
          <div className="absolute left-1/2 top-0 z-10 flex h-full w-max -translate-x-1/2 flex-col items-center justify-center gap-y-10">
            <Image
              className="object-fill"
              src="/svgs/Crown.svg"
              width={40}
              height={40}
              quality={100}
              alt="Premium"
            />
            <p className="text-4xl font-medium text-[#C9FC8C]">Premium</p>
            <p className="text-[1rem] font-medium text-[#626361]">
              Top-Picked Hotspots Tailored to You.
            </p>
          </div>
        </div>
        <div
          className="relative col-span-1 lg:col-span-3 h-[70vh] overflow-hidden rounded-xl"
          style={{
            backgroundImage: "url('/backgroundImages/bg.svg')",
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-row justify-start mt-3 gap-x-[26rem]">
          <div>
          <Image
            className="absolute left-12 z-10 object-fill"
            src="/backgroundImages/entertainment.svg"
            width={160}
            height={160}
            quality={80}
            alt="Discover"
            />
            </div>
            <div>

          <Image
            className="absolute z-10 object-cover"
            src="/backgroundImages/Food.svg"
            width={160}
            height={160}
            quality={80}
            alt="Discover"
            />
            </div>
          </div>

          <p className="absolute left-1/2 top-1/2 z-10 w-max -translate-x-1/2 -translate-y-1/2 text-6xl font-medium text-white">
            Discover
          </p>
          <Image
            className="absolute bottom-0 left-60 object-cover"
            src="/backgroundImages/Gamingzone.svg"
            width={160}
            height={160}
            quality={80}
            alt="Discover"
          />
        </div>
      </div>
    </div>
  );
};
