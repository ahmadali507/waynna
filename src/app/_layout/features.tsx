import Image from "next/image";
import "@fontsource/inter";

export const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:w-[70vw] xl:w-[70vw] xl:py-16">
      <div className="space-y-6 xl:space-y-12">
        <div className="w-full max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl xl:w-[25rem] xl:text-[2.3rem] xl:leading-tight">
            Waynaa Unlocking, City&#39;s Secrets
          </h2>
          <p className="text-base font-medium text-[rgb(22,42,65)] opacity-[80%] sm:text-lg lg:text-lg xl:text-lg">
            Explore Interactive Maps, Live Updates, and Top-Picked Hotspots
            While Winning Limited Discount Offers to Elevate Your Adventure.
          </p>
        </div>

        {/* Grid Container for the Images */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-5 lg:gap-[12px] w-full lg:w-[65vw]">
          {/* First Row - Adjust for Mobile and Larger Screens */}
          <div className="relative col-span-1 h-[40vh] sm:col-span-2 md:col-span-1 md:h-[50vh] lg:col-span-3 lg:h-[70vh] overflow-hidden rounded-xl">
            <Image
              className="h-full w-full rounded-2xl object-cover"
              src="/svgs/Glrls.svg"
              layout="fill"
              quality={80}
              alt="Exclusive coupons"
            />
          </div>

          <div className="relative col-span-1 h-[40vh] sm:col-span-2 md:col-span-1 md:h-[50vh] lg:col-span-2 lg:h-[70vh] xl:h-[69.6vh] xl:w-[28vw] overflow-hidden rounded-xl bg-[#080705]">
            <Image
              className="h-full w-full object-cover"
              src="/svgs/Navigate.svg"
              layout="fill"
              quality={100}
              alt="Navigate"
            />
          </div>

          {/* Second Row - Adjust for Mobile and Larger Screens */}
          <div className="relative col-span-1 h-[40vh] sm:col-span-2 md:col-span-1 md:h-[50vh] lg:col-span-2 lg:h-[70vh] xl:h-[66.6vh] xl:w-[28.6vw] overflow-hidden rounded-xl bg-[#080705]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-6 p-4">
              <Image
                className="object-cover"
                src="/svgs/Crown.svg"
                width={30}
                height={30}
                quality={100}
                alt="Premium"
              />
              <p className="text-[2.4rem] font-inter text-[#C9FC8C]">Premium</p>
              <p className="text-sm font-medium text-[#7c7c7b]">
                Top-Picked Hotspots Tailored to You.
              </p>
            </div>
          </div>

          <div className="relative col-span-1 h-[40vh] sm:col-span-2 md:col-span-1 rounded-2xl md:h-[50vh] lg:col-span-3 lg:h-[70vh] xl:-right-10 xl:h-[100%] xl:w-[97.6%] xl:rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/backgroundImages/bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "inset 0px -30px 15px rgba(0, 0, 0, 0.9), inset 0px -90px 10px rgba(0, 0, 0, 0.34), inset 0px -150px 10px rgba(0, 0, 0, 0.24)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-start justify-start p-4">
                <div className="relative flex w-full justify-between">
                  <Image
                    className="absolute left-12 -top-2 xl:-top-10 xl:w-[9rem] xl:h-[10rem]"
                    src="/backgroundImages/entertainment.svg"
                    width={100}
                    height={100}
                    quality={80}
                    alt="Discover"
                  />
                  <Image
                    className="absolute -right-4 -mt-3 xl:w-[9rem] xl:h-[10rem]"
                    src="/backgroundImages/Food.svg"
                    width={100}
                    height={100}
                    quality={80}
                    alt="Discover"
                  />
                </div>
                <p className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-4xl font-medium text-white">
                  Discover
                </p>
                <Image
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:w-[9rem] xl:h-[10rem]"
                  src="/backgroundImages/Gamingzone.svg"
                  width={100}
                  height={100}
                  quality={80}
                  alt="Discover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
