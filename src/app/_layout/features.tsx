import Image from "next/image";

import girlImg1 from "@/../public/girl-1.svg";
import girlImg2 from "@/../public/girl-2.svg";

export const Features: React.FC = () => {
  return (
    <div className="container space-y-8 py-[40px] xl:space-y-14 xl:py-[80px]">
      <div className="space-y-6">
        <h2 className="max-w-xs text-3xl font-bold leading-[40px] sm:max-w-sm sm:text-4xl xl:max-w-2xl xl:text-6xl xl:leading-[74px]">
          Waynaa Unlocking, City&#39;s Secrets
        </h2>
        <p className="text-base text-gray-600 sm:max-w-lg sm:text-xl xl:max-w-4xl xl:text-2xl">
          Explore Interactive Maps, Live Updates, and Top-Picked Hotspots While
          Winning Limited Discount Offers to Elevate Your Adventure.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-5 gap-4">
        <div className="relative col-span-3 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src={girlImg1}
            quality={80}
            alt="Exclusive coupons"
          />
          <p className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2 text-6xl font-bold text-white">
            Exclusive Coupons
          </p>
        </div>
        <div className="relative col-span-2 h-full w-full rounded-xl bg-[#080705]">
          <div className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2">
            <p className="text-6xl font-medium text-white">Navigate</p>
          </div>
        </div>
        <div className="relative col-span-2 h-full w-full overflow-hidden rounded-xl bg-[#080705]">
          <div className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2">
            <p className="text-6xl font-medium text-[#C9FC8C]">Premium</p>
          </div>
        </div>
        <div className="relative col-span-3 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src={girlImg2}
            quality={80}
            alt="Discover"
          />
          <p className="absolute left-1/2 top-0 z-10 w-max -translate-x-1/2 text-6xl font-medium text-white">
            Discover
          </p>
        </div>
      </div>
    </div>
  );
};
