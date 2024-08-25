import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import usageImg from "@/../public/usage-example.png";

export const GrowYourBusiness: React.FC = () => {
  return (
    <div className="bg-[#EFF1F4] py-[40px] xl:py-[120px]">
      <div className="mx-auto w-[90vw] max-w-[70vw] space-y-8 xl:space-y-14">
        {/* Title and description */}
        <div className="space-y-4 xl:space-y-6">
          <h2 className=" text-3xl font-bold leading-[40px] sm:max-w-sm sm:text-4xl xl:w-[40rem] lg:w-[60vw] xl:text-4xl xl:leading-[54px] lg:text-4xl lg:leading-[54px] block">
            How Waynna Helps Grow your Business
          </h2>
          <p className="text-base text-gray-600 sm:max-w-md sm:text-xl xl:max-w-2xl xl:text-lg lg:text-lg xl:w-[50%] lg:w-[50%]">
            Increase visibility and reach local customers actively searching for
            businesses like yours.
          </p>
        </div>

        {/* Content grid */}
        <div className="gap-x-4 md:grid md:grid-cols-2 md:space-y-0 xl:gap-x-20">
          {/* Image */}
          <Image src={usageImg} alt="Usage example screen" className="w-full h-auto" />

          {/* List and Button */}
          <div className="flex flex-col items-stretch gap-5 xl:mt-8 xl:gap-[60px]">
            {/* List of features */}
            <ul className="text-[rgba(22, 42, 65, 0.7)] flex flex-col gap-3 text-base md:text-sm lg:text-lg  xl:text-[1rem] text-gray-500 font-medium">
              <li className="flex items-center gap-3 rounded-2xl bg-white p-4 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={20} height={20} />
                List Your Business on Waynaa&#39;s Live Map
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-4 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={20} height={20} />
                Feature Your Top Products
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-4 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={20} height={20} />
                Run Exclusive Discounts Offers
              </li>
            </ul>

            {/* Button */}
            <div className="flex justify-start">
              <Button
                size="lg"
                className="h-[30px] rounded-full px-8 text-lg font-normal text-white xl:h-[55px] xl:text-xl"
              >
                Let&#39;s talk &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
