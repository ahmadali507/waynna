import Image from "next/image";

import { cn } from "@/lib/utils";

export const WhyChoose: React.FC = () => {
  return (
    <div className="container space-y-14 py-[120px]">
      <div className="space-y-6">
        <h2 className="text-6xl font-bold leading-[74px]">
          Why choose Waynaa?
        </h2>
        <p className="text-2xl text-gray-600">See the stats that matter!</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-12">
        <div className="overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="pb-15 space-y-8 p-10">
            <h3 className="text-6xl font-medium">70%</h3>
            <div className="space-y-2">
              <h4 className="text-3xl font-semibold">
                Stay Ahead of Tomorrow&#39;s Trends
              </h4>
              <p className="text-[24px] leading-[40px]">
                70% of people miss out on new and trending hotspots relying on
                internet searches. Waynaa&#39;s let&#39;s you discover them in
                single touch.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-full">
            <Image src="/womans.png" alt="Womans shopping" fill />
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-[#EFF1F4]">
          <div className="pb-15 space-y-8 p-10">
            <h3 className="text-6xl font-medium">80%</h3>
            <div className="space-y-2">
              <h4 className="text-3xl font-semibold">
                Stay Informed and Save More
              </h4>
              <p className="text-[24px] leading-[40px]">
                80% miss local deals - Waynaa&#39;s real-time map help you to
                catch exclusive discounts before they&#39;re gone.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-full">
            <Image
              src="/shop.png"
              alt="Sales sign hanging on shop's door"
              fill
            />
          </div>
        </div>
        <div className="relative col-span-2 rounded-3xl bg-[#EFF1F4] p-10">
          <Image
            src="/quote.svg"
            alt="Double quotation mark"
            className="absolute left-10 top-0 -translate-y-1/2"
            width={80}
            height={50}
          />

          <div className="flex items-center gap-4">
            <Image
              src="/portrait.svg"
              alt="Portrait of Naomi Thomas"
              width={80}
              height={80}
            />

            <div className="flex flex-col gap-0.5">
              <p className="text-xl font-semibold">Naomi Thomas</p>
              <p className="text-lg">CEO, xyz company</p>
            </div>
            <div className="ml-auto mr-0 flex items-center gap-4">
              <div
                className={cn(
                  "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl",
                  "hover:bg-[#EFF1F4]/0.1",
                )}
              >
                <Image
                  src="/left-arrow.svg"
                  alt="Left pointed arrow"
                  width={32}
                  height={32}
                />
              </div>
              <span>1 / 7</span>
              <div
                className={cn(
                  "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl",
                  "hover:bg-[#EFF1F4]/0.8",
                )}
              >
                <Image
                  src="/right-arrow.svg"
                  alt="Right pointed arrow"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          <p className="mt-8 text-3xl leading-[50px] text-[#080705]">
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
