"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";

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

  // Refs for the animated columns
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);

  // Setting `once: false` to trigger animations whenever the section comes into view
  const isFirstColumnInView = useInView(firstColumnRef, {
    once: false,
    margin: "0px 0px -200px 0px",
  });
  const isThirdColumnInView = useInView(thirdColumnRef, {
    once: false,
    margin: "0px 0px -200px 0px",
  });

  const firstColumnControls = useAnimation();
  const thirdColumnControls = useAnimation();

  useEffect(() => {
    if (isFirstColumnInView) {
      firstColumnControls.start({ opacity: 1, y: 0 });
    } else {
      firstColumnControls.start({ opacity: 0, y: 50 }); // Reset animation when out of view
    }
  }, [isFirstColumnInView, firstColumnControls]);

  useEffect(() => {
    if (isThirdColumnInView) {
      thirdColumnControls.start({ opacity: 1, y: 0 });
    } else {
      thirdColumnControls.start({ opacity: 0, y: 50 }); // Reset animation when out of view
    }
  }, [isThirdColumnInView, thirdColumnControls]);

  return (
    <div className="min-h-screen overflow-auto">
      <div
        id="discover-section"
        className="container mx-auto space-y-8 px-4 pt-6 sm:min-w-full sm:px-6 lg:w-[70vw] lg:space-y-8 xl:min-w-[70vh] xl:py-12"
      >
        <div className="space-y-2 lg:space-y-6">
          <h2 className="w-[64%] text-[1.7rem] font-bold leading-10 sm:text-3xl sm:leading-10 lg:w-[20rem] xl:w-[25rem] xl:text-[2.4rem] xl:leading-[54px]">
            Discover the City Like Never Before
          </h2>
          <p className="font-plus-jakarta-sans text-left text-lg font-medium leading-[25px] text-[#162A41CC] sm:max-w-lg sm:text-base lg:text-lg xl:w-[26rem] xl:text-[16px]">
            An expedition with{" "}
            <span className="font-medium text-[#162A41]">Waynaa</span> - Your
            ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
        </div>

        <div className="mx-auto flex max-w-full flex-col gap-x-2 lg:grid lg:grid-cols-[150px_1fr_150px] xl:grid-cols-2 xl:gap-x-60">
          {/* First Column */}
          <div className = "grid grid-cols-2 items-start xl:w-[40vw] gap-1 ">
            <motion.div
              ref={firstColumnRef}
              className="z-10 sm:mx-auto sm:w-[250px] lg:w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={firstColumnControls}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative mt-20 space-y-4 lg:space-y-4 xl:mt-20">
                <div className="item-center flex flex-row justify-start">
                  <div className="absolute mr-12 h-[1px] w-full bg-gray-400 lg:top-2 lg:w-[22.7vw] xl:-left-[2.5rem] xl:-top-8 xl:w-[28vw]" />
                  <div className="absolute xl:z-10 -right-3 -top-2 h-4 w-4 rounded-full border-2 border-lime-400 bg-black xl:-right-[2.1rem] xl:-top-10" />
                </div>
                <div className="mt-10 space-y-1 lg:space-y-2">
                  <h4 className="text-xs font-bold sm:text-xl lg:text-xl">
                    Exclusive Coupons
                  </h4>
                  <p className="w-60 text-[8px] sm:text-base lg:w-80 lg:text-base xl:w-80 xl:text-[13px]">
                    Explore the restaurant by the search
                  </p>
                </div>
                <div className="relative w-[170px]  h-60  max-w-sm rounded-lg bg-white/85 p-4 after:absolute after:left-1 after:top-1 after:-z-10 after:h-full after:w-full after:scale-[1.01] after:rounded-xl after:bg-[#B7FF2A] lg:mx-auto lg:h-[18rem] lg:w-[16rem] xl:h-[18rem] xl:w-[16rem]">
                  <h4 className="mb-2 text-[8px] lg:text-[10px] xl:text-xs text-gray-800 lg:mb-4">
                    Nearby You
                  </h4>
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
                            height={22}
                            width={22}
                          />
                          <div>
                            <h3 className=" xl:text-xs lg:text-xs text-[8px] font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            <p className=" lg:text-[9px] xl:text-[9px] text-[7px] text-gray-800">
                              {item.description}
                            </p>
                            <p className=" lg:text-[8px] xl:text-[8px] text-[7px] text-gray-900">
                              {item.distance}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className=" xl:h-[20px] lg:h-[20px] h-4 w-[10vw] xl:w-12 rounded-full border-0 text-xs  text-[#B7FF2A]"
                          style={{ fontSize: "7px" }}
                        >
                          Offer Live
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Always visible middle picture */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="relative h-[400px] w-full lg:h-[500px] xl:h-[500px] xl:z-0"
            >
              <Image
                src="/discover-screen.svg"
                alt="Waynaa's usage example"
                fill
                className=" object-contain"
              />
            </motion.div>
          </div>

          {/* Third Column */}
          <motion.div
            ref={thirdColumnRef}
            className="relative mt-20 space-y-4 lg:space-y-7"
            initial={{ opacity: 0, y: 50 }}
            animate={thirdColumnControls}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="item-center flex flex-row justify-start">
              <div className="absolute -left-3 -top-2 h-4 w-4 rounded-full border-2 border-lime-400 bg-black xl:-left-[3.4rem] xl:top-0" />
              <div className="xl:[2.7vw] absolute mr-12 h-[1px] w-full bg-gray-400 lg:top-2 lg:w-[22.7vw] xl:-left-[2.5rem] xl:top-2" />
            </div>
            <div className="w-[20rem] space-y-1 lg:space-y-2">
              <h4 className="text-base font-bold sm:text-xl lg:text-xl xl:text-xl">
                Exclusive Coupons
              </h4>
              <p className="text-xs sm:text-base lg:text-base xl:text-[13px]">
                Explore the restaurant by the search
              </p>
            </div>

            <div className="w-[19rem] rounded-[30px] border border-[#E6E6E6]">
              <div className="relative aspect-video h-full w-full">
                <Image src="/svgs/discover.svg" alt="Starbucks" fill />
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
                      {/* <Image
                        src="/coupon.svg"
                        width={12}
                        height={20}
                        alt="Coupon icon"
                      /> */}
                      <div className="border-1 h-6 w-10 rounded-md border-white bg-lime-400">
                        <p
                          style={{
                            fontSize: "10px",
                            textAlign: "center",
                            paddingTop: "4px",
                          }}
                        >
                          Open
                        </p>
                      </div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="font-inter font-semibold text-black"
                      >
                        9Am - 11Am
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <p className="text-xs font-semibold text-[#646262]">
                      Tyson Street, NYC • Food 🍔
                    </p>
                  </div>

                  <div className="flex flex-row items-center">
                    <Image
                      src="svgs/walk.svg"
                      alt="walkling"
                      width={18}
                      height={18}
                    />
                    <p className="text-xs font-semibold text-[#646262]">
                      2 mins away
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <p className="font-inter w-[75%] text-[9px] font-semibold text-[#363333]">
                    Starbucks brews up coffee drinks and creates a warm,
                    inviting atmosphere for people to gather.
                  </p>
                  <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full border-[2px] border-black bg-[#B7FF2A]">
                    <Image
                      src="/svgs/tiltedarrow.svg"
                      alt="left down arrow"
                      width={12}
                      height={12}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
