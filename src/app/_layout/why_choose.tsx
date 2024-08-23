import Image from "next/image";

import { cn } from "@/lib/utils";

import womansImg from "@/../public/womans.png";
import shopImg from "@/../public/shop.png";

export const WhyChoose: React.FC = () => {
  return (
    <div className="container space-y-8 py-[40px] xl:space-y-14 xl:py-[120px]">
      <div className="space-y-4 xl:space-y-6">
        <h2 className="text-3xl font-bold leading-[40px] sm:text-4xl xl:text-6xl xl:leading-[74px]">
          Why choose Waynaa?
        </h2>
        <p className="text-base text-gray-600 sm:text-xl xl:text-2xl">
          See the stats that matter!
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-12 lg:space-y-0">
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="lg:pb-15 space-y-4 p-6 lg:space-y-8 lg:p-10">
            <h3 className="text-4xl font-medium lg:text-5xl xl:text-6xl">
              70%
            </h3>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold lg:text-xl xl:text-3xl">
                Stay Ahead of Tomorrow&#39;s Trends
              </h4>
              <p className="text-base leading-[24px] lg:text-2xl lg:leading-[40px]">
                70% of people miss out on new and trending hotspots relying on
                internet searches. Waynaa&#39;s let&#39;s you discover them in
                single touch.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <Image
              className="h-full w-full object-cover"
              src={womansImg}
              alt="Womans shopping"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="lg:pb-15 space-y-4 p-6 lg:space-y-8 lg:p-10">
            <h3 className="text-4xl font-medium lg:text-5xl xl:text-6xl">
              80%
            </h3>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold lg:text-xl xl:text-3xl">
                Stay Informed and Save More
              </h4>
              <p className="text-base leading-[24px] lg:text-2xl lg:leading-[40px]">
                80% miss local deals - Waynaa&#39;s real-time map help you to
                catch exclusive discounts before they&#39;re gone.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <Image
              className="h-full w-full object-cover"
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
            width={80}
            height={50}
          />

          <div className="xs:flex-row xs:items-center flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/portrait.svg"
                alt="Portrait of Naomi Thomas"
                width={80}
                height={80}
              />

              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold lg:text-xl">Naomi Thomas</p>
                <p className="text-xs lg:text-lg">CEO, xyz company</p>
              </div>
            </div>
            <div className="xs:ml-auto xs:mr-0 flex items-center gap-4">
              <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl">
                <Image
                  src="/left-arrow.svg"
                  alt="Left pointed arrow"
                  width={32}
                  height={32}
                />
              </div>
              <span>1 / 7</span>
              <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl">
                <Image
                  src="/right-arrow.svg"
                  alt="Right pointed arrow"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-base leading-[24px] text-[#080705] lg:text-2xl lg:leading-[40px] xl:mt-8 xl:text-3xl xl:leading-[50px]">
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
