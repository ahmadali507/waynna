import Image from "next/image";

import { Button } from "@/components/ui/button";
import usageImg from "@/../public/usage-example.png";

export const GrowYourBusiness: React.FC = () => {
  return (
    <div className="rounded-t-[48px] bg-[#EFF1F4] py-[40px] xl:rounded-t-[96px] xl:py-[120px] xl:w-[70vw] lg:w-[70vw]">
      <div className="container space-y-8 xl:space-y-14 xl:w-[70vw] lg:w-[70vw]">
        <div className="space-y-4 xl:space-y-6">
          <h2 className="max-w-xs text-3xl font-bold leading-[40px] sm:max-w-sm sm:text-4xl xl:max-w-2xl xl:text-6xl xl:leading-[74px]">
            Grow Your Business With Waynaa
          </h2>
          <p className="text-base text-gray-600 sm:max-w-md sm:text-xl xl:max-w-2xl xl:text-2xl">
            Increase visibility and reach local customers actively searching for
            businesses like yours.
          </p>
        </div>

        <div className="gap-x-4 space-y-8 md:grid md:grid-cols-2 md:space-y-0 xl:gap-x-20">
          <Image src={usageImg} alt="Usage example screen" />

          <div className="flex flex-col items-stretch gap-5 xl:mt-8 xl:gap-[60px]">
            <ul className="text-[rgba(22, 42, 65, 0.7)] flex flex-col gap-3 text-base md:text-sm lg:text-xl xl:text-2xl">
              <li className="flex items-center gap-3 rounded-2xl bg-white p-6 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                List Your Business on Waynaa&#39;s Live Map
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-6 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                Feature Your Top Products
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-6 lg:gap-6">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                Run Exclusive Discounts Offers
              </li>
            </ul>
            <div>
              <Button
                size="lg"
                className="h-[50px] rounded-full px-8 text-lg font-normal text-white xl:h-[75px] xl:text-3xl"
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
