"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/registration_modal";
import { useEffect, useState } from "react";

export const Hero: React.FC = () => {
  // we will have create a useEffect for the icons effect...
  const [showBuildingIcons, setShowBuildingIcons] = useState(false);
  useEffect(() => {
    const AnimateIcons = () => {
      if (!showBuildingIcons) {
        setTimeout(() => {
          setShowBuildingIcons(true);
        }, 5340);
      }
      if (showBuildingIcons) {
        setTimeout(() => {
          setShowBuildingIcons(false);
        }, 3410);
      }
    };
  
    AnimateIcons();
  }, [showBuildingIcons]);
  return (
    <div className="rounded-b-[48px] bg-[#0C0B0B] py-8 lg:py-16 xl:rounded-b-[96px]">
      {/* Set the container width to 90% on large screens */}
      <div className="container mx-auto w-full space-y-1 text-white sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:w-[90vw] lg:gap-x-8 xl:w-[80vw] 2xl:w-[80vw] 2xl:gap-x-14">
        <div>
          {/* Apply text size classes for lg, xl, and 2xl screens */}
          <h1 className="flex flex-col text-4xl font-semibold leading-[60px] sm:text-4xl lg:text-[80px] xl:text-[80px] xl:leading-[90px]">
            <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              DISCOVER
            </div>
            <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              EXPLORE
            </div>
            <div className="flex items-center gap-4 bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              WIN{" "}
              <div className="relative h-[48px] w-[48px] xl:h-[75px] xl:w-[75px]">
                <Image
                  src="/svgs/Group.svg"
                  alt="Vector image"
                  fill
                  className="inline"
                />
              </div>
            </div>
          </h1>
        </div>
        <div className="space-y-6">
          <div className="space-y-6 sm:space-y-4 xl:space-y-4">
            <div className="flex items-center gap-4 lg:gap-8">
              <h3 className="text-3xl font-extrabold uppercase xl:text-4xl">
                <span className="text-5xl text-lime-400 xl:text-6xl">W</span>
                aynaa
              </h3>
              <div className="relative flex h-[45px] w-[78px] items-center justify-center overflow-hidden rounded-full bg-lime-400 xl:h-[72px] xl:w-[130px]">
                <div className="relative h-[45px] w-[45px] xl:h-[52px] xl:w-[72px]">
                  <Image
                    src="/small-iphone.png"
                    alt="Little example of usage"
                    fill
                  />
                </div>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-xl xl:text-xl">
              Experience the vibrant soul of your city over a map that reveals
              where life is happening.
            </p>
          </div>
          {/* Apply the box-shadow style to the button inside the RegistrationModal */}
          <RegistrationModal />
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex aspect-video w-[calc(100vw-64px)] overflow-hidden rounded-[20px] lg:w-[calc(100vw-128px)] lg:rounded-[40px] xl:mt-32">
        <video src="/video.mp4" autoPlay muted loop />

        {showBuildingIcons && (
          <>
            <div className="absolute left-[25%] top-[23%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
              <Image src="/meal.svg" alt="Meal" fill className="" />
            </div>

            <div className="absolute left-[60%] top-[20%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
              <Image src="/party.svg" alt="Meal" fill className="" />
            </div>

            <div className="absolute left-[48%] top-[10%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
              <Image src="/game.svg" alt="Meal" fill className="" />
            </div>

            <div className="absolute left-[75%] top-[10%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
              <Image src="/film.svg" alt="Meal" fill className="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
