import Image from "next/image";
import "@fontsource/inter";
import { cn } from "@/lib/utils";

import womansImg from "@/../public/womans.png";
import shopImg from "@/../public/shop.png";

export const WhyChoose: React.FC = () => {
  return (
    <div className="container space-y-2 py-[40px] xl:space-y-6 xl:pt-[80px] xl:w-[70vw] lg:w-[70vw]">
      <div className="space-y-4 xl:space-y-2">
        <h2 className="text-3xl font-bold  font-inter leading-[40px] sm:text-4xl xl:text-[2.4rem] xl:leading-[54px] lg:text-3xl lg:leading-[44px]">
          Why Choose Waynaa?
        </h2>
        <p className="text-base text-[#162A41] opacity-[90%] sm:text-xl xl:text-lg lg:text-xl">
          See the Stats That matter!
        </p>
      </div>
      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 lg:space-y-0 xl:gap-y-2">
        <div className="flex flex-col justify-between h-[85%] overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="lg:pb-15 space-y-4 p-6 lg:space-y-8 lg:p-10">
            <h3 className="text-4xl  lg:text-3xl xl:text-[2.5rem] font-inter font-medium">
              70%
            </h3>
            <div className="space-y-2">
              <h4
                className="text-lg font-medium lg:text-xl xl:text-[1.4rem] xl:w-full lg:w-full xl:font-inter"
                style={{
                  fontWeight: "550",
                  opacity: "90%",
                }}
              >
                Stay Ahead of Tomorrow&#39;s Trends
              </h4>
              <p className="text-black font-inter leading-[24px] lg:text-lg lg:leading-[30px] xl:w-[26rem] ">
                70% of people miss out on new and trending hotspots relying on
                internet searches. Waynaa&#39;s let&#39;s you discover them in
                single touch.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <Image
              className=" h-[100%] w-full xl:h-full xl:w-full object-contain"
              src={womansImg}
              alt="Womans shopping"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-[70%] lg:h-[90%] xl:h-[90%] overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="lg:pb-15 space-y-4 p-6 lg:space-y-8 lg:p-10">
            <h3 className="text-4xl font-medium lg:text-3xl xl:text-[2.5rem] font-inter">
              80%
            </h3>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold lg:text-xl xl:text-xl">
                Stay Informed and Save More
              </h4>
              <p className="text-base leading-[24px] lg:text-lg lg:leading-[30px]">
                80% miss local deals - Waynaa&#39;s real-time map help you to
                catch exclusive discounts before they&#39;re gone.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <Image
              className="h-[100%] w-full xl:h-full xl:w-full object-contain"
              src={shopImg}
              alt="Sales sign hanging on shop's door"
            />
          </div>
        </div>
        <div className="relative col-span-2 rounded-3xl bg-[#EFF1F4] p-6 lg:p-10">
          <Image
            src="/quote.svg"
            alt="Double quotation mark"
            className="absolute left-10 top-0 -translate-y-1/2"
            width={60}
            height={60}
          />

          {/* Adjusted Flex and Responsive Classes for Arrow Positioning */}
          <div className=" flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/portrait.svg"
                alt="Portrait of Naomi Thomas"
                width={60}
                height={60}
              />

              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold lg:text-sm xl:text-[16px]">Naomi Thomas</p>
                <p className="text-xs lg:text-sm xl:text-xs text-[#080705] opacity-[80%]">CEO, xyz company</p>
              </div>
            </div>

            {/* Arrows section with responsive order */}
            <div className="flex  flex-row items-center justify-center gap-4 lg:ml-auto lg:mr-0 order-last lg:order-none mt-4 lg:mt-0">
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-black opacity-[30%] text-2xl">
                <Image
                  className="opacity-[70%]"
                  src="/left-arrow.svg"
                  alt="Left pointed arrow"
                  width={22}
                  height={22}
                />
              </div>
              <span className="text-xs">1 / 7</span>
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl">
                <Image
                  src="/right-arrow.svg"
                  alt="Right pointed arrow"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-base leading-[24px] text-[#080705] order-first xl:order-last lg:order-last lg:text-[24px] lg:leading-[40px] xl:mt-8 xl:text-[23px] xl:font-medium xl:leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};
