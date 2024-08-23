import Image from "next/image";

import { Button } from "@/components/ui/button";

export const GrowYourBusiness: React.FC = () => {
  return (
    <div className="rounded-t-[96px] bg-[#EFF1F4] py-[120px]">
      <div className="container space-y-14">
        <div className="space-y-6">
          <h2 className="max-w-2xl text-6xl font-bold leading-[74px]">
            Grow Your Business With Waynaa
          </h2>
          <p className="max-w-2xl text-2xl text-gray-600">
            Increase visibility and reach local customers actively searching for
            businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-20">
          <div className="relative h-[480px] w-[560px]">
            <Image src="/usage-example.png" alt="Usage example screen" fill />
          </div>
          <div className="mt-8 flex flex-col items-stretch gap-[60px]">
            <ul className="flex flex-col gap-3">
              <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                List Your Business on Waynaa&#39;s Live Map
              </li>
              <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                Feature Your Top Products
              </li>
              <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                <Image src="/check.svg" alt="Checked" width={25} height={25} />
                Run Exclusive Discounts Offers
              </li>
            </ul>
            <div>
              <Button
                size="lg"
                className="h-[75px] rounded-full px-8 text-3xl font-normal text-white"
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
