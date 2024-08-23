import Image from "next/image";

import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/registration_modal";

export const Hero: React.FC = () => {
  return (
    <div className="rounded-b-[96px] bg-[#0C0B0B] py-16">
      <div className="container grid grid-cols-2 gap-x-14 text-white">
        <div>
          <h1 className="flex flex-col text-8xl font-semibold leading-[120px]">
            <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              DISCOVER
            </div>
            <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              EXPLORE
            </div>
            <div className="flex items-center gap-4 bg-[linear-gradient(to_right,rgb(255,255,255),rgb(169,255,0))] bg-clip-text text-transparent">
              WIN{" "}
              <Image
                src="/small-green.png"
                alt="Vector image"
                width={75}
                height={75}
                className="inline"
              />
            </div>
          </h1>
        </div>
        <div className="space-y-14">
          <div className="space-y-8">
            <div className="flex items-end gap-8">
              <h3 className="text-6xl font-extrabold uppercase">
                <span className="text-8xl text-lime-400">W</span>aynaa
              </h3>
              <div className="relative flex h-[72px] w-[130px] items-center justify-center overflow-hidden rounded-full bg-lime-400">
                <Image
                  src="/small-iphone.png"
                  alt="Little example of usage"
                  width={72}
                  height={52}
                />
              </div>
            </div>
            <p className="text-2xl">
              Experience the vibrant soul of your city over map that reveals
              where life is happening.
            </p>
          </div>
          <RegistrationModal />
        </div>
      </div>

      <div className="relative mx-auto mt-32 flex aspect-video w-[calc(100vw-128px)]">
        <Image src="/video.png" alt="Video goes here" fill />
      </div>
    </div>
  );
};
