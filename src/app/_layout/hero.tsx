import Image from "next/image";

import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/registration_modal";

export const Hero: React.FC = () => {
  return (
    <div className="rounded-b-[48px] bg-[#0C0B0B] py-8 lg:py-16 xl:rounded-b-[96px]">
      <div className="container space-y-6 text-white sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:gap-x-8 2xl:gap-x-14">
        <div>
          <h1 className="flex flex-col text-5xl font-semibold leading-[60px] lg:text-7xl xl:text-8xl xl:leading-[120px]">
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
                  src="/small-green.png"
                  alt="Vector image"
                  fill
                  className="inline"
                />
              </div>
            </div>
          </h1>
        </div>
        <div className="space-y-6">
          <div className="space-y-6 sm:space-y-4 xl:space-y-8">
            <div className="flex items-center gap-4 lg:gap-8">
              <h3 className="text-3xl font-extrabold uppercase xl:text-6xl">
                <span className="text-5xl text-lime-400 xl:text-8xl">W</span>
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
            <p className="text-base sm:text-sm lg:text-base xl:text-2xl">
              Experience the vibrant soul of your city over map that reveals
              where life is happening.
            </p>
          </div>
          <RegistrationModal />
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex aspect-video w-[calc(100vw-64px)] overflow-hidden rounded-[20px] lg:w-[calc(100vw-128px)] lg:rounded-[40px] xl:mt-32">
        <video src="/video.mp4" autoPlay muted loop />
        <div className="absolute left-[20%] top-[16%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
          <Image src="/meal.svg" alt="Meal" fill className="" />
        </div>

        <div className="absolute left-[55%] top-[25%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
          <Image src="/party.svg" alt="Meal" fill className="" />
        </div>

        <div className="absolute left-[48%] top-[10%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
          <Image src="/game.svg" alt="Meal" fill className="" />
        </div>

        <div className="absolute left-[70%] top-[15%] z-10 h-[36px] w-[36px] lg:h-[72px] lg:w-[72px]">
          <Image src="/film.svg" alt="Meal" fill className="" />
        </div>
      </div>
    </div>
  );
};
