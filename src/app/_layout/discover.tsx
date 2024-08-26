"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

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

  const [isLocked, setIsLocked] = useState(true); // To lock the scroll
  const [showFinalSection, setShowFinalSection] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use scroll hook for animation
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  // Map scroll progress to progress bar and final section display
  const progressFirst = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const progressSecond = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    ["0%", "100%"],
  );

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value >= 0.9) {
        setShowFinalSection(true);
        setIsLocked(false); // Unlock scroll when progress bars are full
      } else {
        setShowFinalSection(false);
        setIsLocked(true); // Lock scroll again if below threshold
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isLocked) {
        e.preventDefault(); // Prevent scrolling if locked
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, [isLocked]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${isLocked ? "overflow-hidden" : "overflow-auto"}`}
    >
      <div
        id="discover-section"
        className="container mx-auto space-y-8 px-4 pt-6 sm:px-6 lg:max-w-[70vw] lg:space-y-8 xl:py-12"
      >
        {/* Header Section */}
        <div className="space-y-2 lg:space-y-6">
          <h2 className="text-2xl font-bold leading-8 sm:text-3xl sm:leading-10 lg:w-[20rem] xl:w-[25rem] xl:text-[2.4rem] xl:leading-[54px]">
            Discover the City Like Never Before
          </h2>
          <p className="font-plus-jakarta-sans text-left text-sm font-medium leading-[35px] text-[#162A41CC] sm:max-w-lg sm:text-base lg:text-lg xl:w-[26rem] xl:text-[16px]">
            An expedition with{" "}
            <span className="text-[#162A41] font-medium">
              Waynaa
            </span>{" "}
            - Your ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto flex max-w-full flex-col gap-8 lg:grid lg:grid-cols-[150px_1fr_150px] xl:grid-cols-[200px_1fr_200px]">
          {/* Left Column */}
          <motion.div
            className="z-10 sm:mx-auto sm:w-[250px] lg:w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative mt-20 space-y-4 lg:space-y-4 xl:mt-0">
              {/* Progress Bar */}
              <div className="absolute left-0 top-0 z-10 h-[1px] bg-gray-200 lg:w-[32.7vw] xl:w-[32.7vw]">
                <motion.div
                  className="h-full bg-[#1c1d1b]"
                  style={{
                    width: progressFirst,
                    transition: "width 2s ease-out",
                  }}
                />
                <motion.div
                  className="absolute top-[-6px] mb-2 h-3 w-3 rounded-full border-2 border-[#B7FF2A]"
                  style={{
                    left: `calc(${progressFirst}`,
                    transition: "left 2s ease-out",
                  }}
                />
              </div>

              {/* Content */}
              <div className="space-y-1 lg:space-y-2">
                <h4 className="text-base font-bold sm:text-xl lg:text-xl">
                  Exclusive Coupons
                </h4>
                <p className="text-xs sm:text-base lg:text-base">
                  Explore the restaurant by the search
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-sm rounded-lg bg-white/85 p-4 after:absolute after:left-1 after:top-1 after:-z-10 after:h-full after:w-full after:scale-[1.01] after:rounded-xl after:bg-[#B7FF2A]">
                <h4 className="mb-2 text-sm text-gray-800 lg:mb-4">
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
                          <p className="text-xs text-gray-500">
                            {item.distance}
                          </p>
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
          </motion.div>

          {/* Center Image */}
          <div className="relative h-[300px] w-full lg:h-[500px]">
            <Image
              src="/discover-screen.svg"
              alt="Waynaa's usage example"
              fill
              className="z-0 object-contain"
            />
          </div>

          {/* Right Column with Progress Bar */}
          <div className="relative mt-20 space-y-4 lg:space-y-7">
            {/* Progress Bar */}
            <div className="xl:[22.7vw] absolute left-[-6rem] right-12 top-0 mr-12 h-[1px] w-full bg-gray-200 lg:w-[22.7vw]">
              <motion.div
                className="h-full bg-[#1c1d1b]"
                style={{
                  width: progressSecond,
                  transition: "width 2s ease-out",
                }}
              />
              <motion.div
                className="absolute top-[-6px] mb-2 ml-2 mr-2 mt-[2px] h-3 w-3 rounded-full border-2 border-[#B7FF2A]"
                style={{
                  left: `calc(${progressSecond.get()}% - 7px)`,
                  transition: "left 2s ease-out",
                }}
              />
            </div>

            {/* Final Section Animation */}
            {showFinalSection && (
              <motion.div
                className="z-10 sm:mx-auto sm:w-[250px] lg:w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <div className="space-y-4 lg:w-[120%] lg:space-y-7">
                  <div className="space-y-1 lg:space-y-2">
                    <h4 className="text-base font-bold sm:text-xl lg:text-xl xl:text-xl">
                      Exclusive Coupons
                    </h4>
                    <p className="xl:text-md text-xs sm:text-base lg:text-base">
                      Explore the restaurant by the search
                    </p>
                  </div>

                  <div className="rounded-[30px] border border-[#E6E6E6] p-[3px]">
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
                            <Image
                              src="/coupon.svg"
                              width={12}
                              height={20}
                              alt="Coupon icon"
                            />
                            <p style={{ fontSize: "10px" }}>8</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm">Coffee Shop</p>
                      <Button className="w-full rounded-full bg-[#1c1d1b] py-2 text-xs text-white">
                        Get Offer
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
