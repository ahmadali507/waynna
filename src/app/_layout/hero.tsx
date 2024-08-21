import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="bg-black rounded-b-[64px] py-16">
      <div className="grid grid-cols-2 gap-x-8 text-white container">
        <div>
          <h1 className="text-8xl bg-clip-text font-semibold bg-[linear-gradient(to_right_bottom,rgb(255,255,255),rgb(163,230,53))] text-transparent">
            DISCOVER EXPLORE WIN{" "}
            <Image
              src="/small-green.png"
              alt="Vector image"
              width={75}
              height={75}
              className="inline"
            />
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-start">
          <div className="flex items-end gap-8">
            <h3 className="text-5xl font-bold uppercase">
              <span className="text-lime-400 text-7xl">W</span>aynaa
            </h3>
            <div className="relative w-[130px] h-[72px] rounded-full bg-lime-400 flex items-center justify-center overflow-hidden">
              <Image
                src="/small-iphone.png"
                alt="Little example of usage"
                width={72}
                height={52}
              />
            </div>
          </div>
          <p className="text-2xl">
            Experience the vibrant soul of your city over map that reveals where
            life is happening.
          </p>
          <Button
            size="lg"
            className="text-white font-normal text-lg rounded-full px-7 py-5"
          >
            Get Started &rarr;
          </Button>
        </div>
      </div>

      <div className="relative w-[calc(100vw-128px)] aspect-video flex mx-auto mt-32">
        <Image src="/video.png" alt="Video goes here" fill />
      </div>
    </div>
  );
};
