import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Discover: React.FC = () => {
  const items = [
    {
      icon: "/starbucks.svg",
      title: "Starbucks",
      description: "Coffee Shop",
      distance: "5 min",
    },
    {
      icon: "/keens.svg",
      title: "Keens Steakhouse",
      description: "Restaurant",
      distance: "5 min",
    },
    {
      icon: "/golden-diner.svg",
      title: "Golden Diner",
      description: "Restaurant",
      distance: "5 min",
    },
    {
      icon: "/via-carota.svg",
      title: "Via Carota",
      description: "Restaurant",
      distance: "5 min",
    },
  ];
  return (
    <div className="container space-y-14 py-[80px]">
      <div className="space-y-6">
        <h2 className="max-w-2xl text-6xl font-bold leading-[74px]">
          Discover the City Like Never Before
        </h2>
        <p className="max-w-xl text-2xl text-gray-600">
          An expedition with{" "}
          <span className="font-medium text-black">Waynaa</span>- Your ultimate
          guide to finding exclusive{" "}
          <span className="font-medium text-black">New & Trending</span>{" "}
          hotspots nearby.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1100px] grid-cols-[356px_1fr_356px]">
        <div className="space-y-7">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Exclusive Coupons</h4>
            <p>Explore the restaurant by the search</p>
          </div>
          <div className="relative mx-auto w-full max-w-sm rounded-lg bg-white/85 p-4 after:absolute after:left-1 after:top-1 after:-z-10 after:h-full after:w-full after:scale-[1.01] after:rounded-xl after:bg-[#B7FF2A]">
            <h4 className="mb-4 text-sm text-gray-800">Near by you</h4>
            <div className="flex flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between border-b border-[#DFFBA3] py-2"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="rounded-full"
                      height={32}
                      width={32}
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500">{item.distance}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="h-[20px] rounded-full border-0 text-xs text-[#B7FF2A]"
                    style={{ fontSize: "10px" }}
                  >
                    Offer Live
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[645px] w-full">
          <Image src="/discover-screen.svg" alt="Waynaa's usage example" fill />
        </div>

        <div>
          <div className="space-y-7">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Exclusive Coupons</h4>
              <p>Explore the restaurant by the search</p>
            </div>

            <div className="border-[#E6E6E6 ] rounded-[30px] border p-[3px]">
              <div className="relative aspect-video w-full">
                <Image src="/starbucks-shop.png" alt="Starbucks" fill />
              </div>
              <div className="space-y-2 px-1 py-4">
                <div className="flex justify-between">
                  <h4 className="font-semibold">Starbucks</h4>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1 border-r pr-1">
                      <Image
                        src="/coupon.svg"
                        width={12}
                        height={20}
                        alt="Coupon icon"
                      />
                      <div className="flex items-center">
                        <Image
                          src="/group.svg"
                          width={10}
                          height={10}
                          alt="Group of people"
                        />
                        <p style={{ fontSize: "10px" }}>217</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 pl-1">
                      <div
                        className="rounded-sm border border-[#080705] bg-[#B7FF2A] p-0.5"
                        style={{ fontSize: "9px" }}
                      >
                        Open
                      </div>
                      <div
                        className="rounded-sm bg-[#F0F0F0] p-0.5"
                        style={{ fontSize: "9px" }}
                      >
                        9 AM • 11 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs">Tyson Street, NYC • Food 🍔</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/walking.svg"
                      width={13}
                      height={13}
                      alt="Walking man"
                    />
                    <p style={{ fontSize: "10px" }}>2 min away</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="max-w-[280px] text-xs">
                    Starbucks brews up coffee drinks and creates a warm,
                    inviting atmosphere for people to gather.
                  </p>
                  <div className="relative h-[30px] w-[30px] rounded-full border border-[#080705] bg-[#B7FF2A]">
                    <Image src="/up-right-line.svg" alt="Right arrow" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
