import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 xl:w-[70vw] lg:w-[70vw] xl:py-16">
      <div className="space-y-6 xl:space-y-12 ">
        <div className="w-full max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl xl:text-5xl xl:leading-tight">
            Waynaa Unlocking, City&#39;s Secrets
          </h2>
          <p className="text-base font-semibold text-gray-500 sm:text-lg lg:text-lg xl:text-xl">
            Explore Interactive Maps, Live Updates, and Top-Picked Hotspots While
            Winning Limited Discount Offers to Elevate Your Adventure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* First Row */}
          <div className="relative col-span-2 md:col-span-1 lg:col-span-3 h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover"
              src="/svgs/Glrls.svg"
              width={100}
              height={100}
              quality={80}
              alt="Exclusive coupons"
            />
          </div>
          <div className="relative col-span-2 md:col-span-1 lg:col-span-2 h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl bg-[#080705]">
            <Image
              className="h-full w-full object-cover"
              src="/svgs/Navigate.svg"
              width={140}
              height={140}
              quality={100}
              alt="Navigate"
            />
          </div>

          {/* Second Row */}
          <div className="relative col-span-2 md:col-span-1 lg:col-span-2 h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl bg-[#080705]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 p-4">
              <Image
                className="object-cover"
                src="/svgs/Crown.svg"
                width={40}
                height={40}
                quality={100}
                alt="Premium"
              />
              <p className="text-2xl font-medium text-[#C9FC8C]">Premium</p>
              <p className="text-sm font-medium text-[#626361]">
                Top-Picked Hotspots Tailored to You.
              </p>
            </div>
          </div>
          <div
            className="relative col-span-2 md:col-span-1 lg:col-span-3 h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl"
            style={{
              backgroundImage: "url('/backgroundImages/bg.svg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-start justify-start p-4">
              <div className="relative flex justify-between w-full">
                <Image
                  className="absolute left-4"
                  src="/backgroundImages/entertainment.svg"
                  width={80}
                  height={80}
                  quality={80}
                  alt="Discover"
                />
                <Image
                  className="absolute right-4"
                  src="/backgroundImages/Food.svg"
                  width={80}
                  height={80}
                  quality={80}
                  alt="Discover"
                />
              </div>
              <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-medium text-white">
                Discover
              </p>
              <Image
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                src="/backgroundImages/Gamingzone.svg"
                width={80}
                height={80}
                quality={80}
                alt="Discover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
