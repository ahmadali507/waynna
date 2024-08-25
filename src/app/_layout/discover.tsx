"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";

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

  const [showFinalSection, setShowFinalSection] = useState(false);
  const [progressFirst, setProgressFirst] = useState(0);
  const [progressSecond, setProgressSecond] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(event.target as Node)) {
        event.preventDefault(); // Prevent default scrolling behavior

        let scrollPosition = containerRef.current.scrollTop;
        scrollPosition += event.deltaY;

        const sectionHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;

        // Define the scroll ranges for the progress bars
        const firstThreshold = 0.2 * sectionHeight;
        const secondThreshold = 0.8 * sectionHeight;

        if (scrollPosition < firstThreshold) {
          const progress = Math.min((scrollPosition / firstThreshold) * 5, 100); // Adjust the scaling factor to make it slower
          setProgressFirst(progress);
          setProgressSecond(0);
        } else if (scrollPosition >= firstThreshold && scrollPosition < secondThreshold) {
          const progress = Math.min(
            ((scrollPosition - firstThreshold) / (secondThreshold - firstThreshold)) * 5, // Adjust the scaling factor to make it slower
            100
          );
          setProgressFirst(100);
          setProgressSecond(progress);
          setShowFinalSection(false);
        } else if (scrollPosition >= secondThreshold) {
          setProgressFirst(100);
          setProgressSecond(100);
          setTimeout(()=>{
            
            setShowFinalSection(true); // Show final section when progress is complete
          }, 1800)
          containerRef.current.removeEventListener("wheel", handleWheel); // Remove custom scroll behavior
        }

        containerRef.current.scrollTop = scrollPosition;
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [progressFirst, progressSecond]);
  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      <div
        id="discover-section"
        className="container space-y-8 px-4 pt-10 sm:px-6 lg:max-w-[90%] lg:space-y-14 xl:py-20 2xl:max-w-[80%]"
      >
        {/* Header Section */}
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-2xl font-bold leading-8 sm:text-3xl sm:leading-10 lg:w-[20rem] xl:text-4xl xl:leading-[54px]">
            Discover the City Like Never Before
          </h2>
          <p className="text-sm text-gray-600 sm:max-w-lg sm:text-base lg:text-lg xl:max-w-xl xl:text-[18px]">
            An expedition with{" "}
            <span className="font-medium text-black">Waynaa</span> - Your
            ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto flex flex-col gap-8 lg:grid lg:grid-cols-[250px_1fr_250px] xl:grid-cols-[356px_1fr_356px]">
          {/* Left Column */}
          <div className="relative mt-20 space-y-4 lg:space-y-7">
            {/* Progress Bar */}
            <div className="absolute left-0 top-0 h-[1px]  lg:w-[32.7vw] xl:w-[32.7vw] z-10 bg-gray-200">
              <div
                className="h-full bg-[#1c1d1b]"
                style={{
                  width: `${progressFirst}%`,
                  transition: "width 2s ease-out",
                }}
              />
              <div
                className="absolute top-[-6px] mb-2 h-3 w-3 rounded-full border-2 border-[#B7FF2A]"
                style={{
                  left: `calc(${progressFirst}% - 7px)`,
                  transition: "left 2s ease-out",
                }}
              />{" "}
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
              <h4 className="mb-2 text-sm text-gray-800 lg:mb-4">Nearby You</h4>
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

          {/* Center Image */}
          <div className="relative h-[400px] w-full lg:h-[645px]">
            <Image
              src="/discover-screen.svg"
              alt="Waynaa's usage example"
              fill
              className="object-contain z-0"
            />
          </div>
            {
              showFinalSection && <Image
               src = "/svgs/Starbucks.svg"
               alt = "starbuck Icons "
               width={128}
               height={128}
               className = 'absolute left-[50vw] top-[282.6vh] z-20'
              />
            }

          {/* Right Column with Progress Bar */}
          <div className="relative space-y-4 lg:space-y-7 mt-44">
            {/* Progress Bar */}
            <div className="absolute left-[-6rem] top-0 right-12 mr-12 h-[1px] w-full xl:[32.7vw] lg:w-[32.7vw] bg-gray-200">
              <div
                className="h-full bg-[#1c1d1b]"
                style={{
                  width: `${progressSecond}%`,
                  transition: "width 2s ease-out",
                }}
              />
              <div
                className="absolute top-[-6px] mb-2 mr-2 h-3 w-3 rounded-full  border-2 border-[#B7FF2A] mt-[2px] ml-2"
                style={{
                  left: `calc(${progressSecond}% - 7px)`,
                  transition: "left 2s ease-out",
                }}
              />{" "}
            </div>
            {/* Final Section Animation */}
            {showFinalSection ? (
            <motion.div
            className="z-10 sm:mx-auto sm:w-[350px] lg:w-full"
            initial={{ opacity: 0, y: 50 }} // Starting state for the animation
            animate={showFinalSection ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Define the animate states
            transition={{ duration: 0.5, ease: "easeOut" }} // Transition duration and easing
          >
                <div className="space-y-4 lg:space-y-7">
                  <div className="space-y-1 lg:space-y-2">
                    <h4 className="text-base font-bold sm:text-xl lg:text-xl xl:text-xl">
                      Exclusive Coupons
                    </h4>
                    <p className="text-xs sm:text-base lg:text-base xl:text-md">
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
            ) : (
              <div> show it</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
