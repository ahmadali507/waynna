import Image from "next/image";
import Link from "next/link";

import screenBack from "@/../public/screen-back.svg";
import screenFront from "@/../public/screen-front.svg";

export const Cta: React.FC = () => {
  return (
    <div className="bg-[#C9FC8C] py-5 sm:py-8 lg:rounded-b-[96px] xl:py-20">
      <div className="container mx-auto px-4 space-y-6 sm:space-y-8 xl:space-y-14 xl:w-[70vw] lg:w-[70vw]">
        <div className="space-y-3 sm:space-y-4 xl:space-y-6">
          <h2 className="max-w-full text-2xl font-bold leading-tight sm:max-w-xl sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-snug xl:text-[2.3rem] xl:leading-[54px]">
            Where Are You Heading Today? Yallah! Get Waynaa
          </h2>
          <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
            See the city come alive
          </p>
        </div>

        <div className="relative mx-auto flex h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex-col gap-6 sm:gap-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0C0B0B] text-white lg:w-full xl:h-[90vh]">
          <div className="relative px-4 py-4 sm:py-6 lg:absolute lg:left-[5%] lg:top-[20%] lg:w-1/3 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight sm:leading-snug lg:text-3xl xl:text-4xl xl:w-[20rem] xl:leading-[56px]">
              Let&#39;s Hala <span className="text-[#C9FC8C]">W</span>aynaa and start your adventure.
            </h3>

            <div className="z-40 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="#"
                className="flex items-start gap-2 rounded-full border border-lime-400 px-4 py-2 shadow-[0_0_54px_rgba(180,247,47,0.2)]"
              >
                <Image
                  src="/apple.svg"
                  alt="App store link"
                  height={20}
                  width={20}
                />
                <div className="flex flex-col justify-start gap-0.5">
                  <Image
                    src="/apple-download.svg"
                    alt="Download"
                    width={76}
                    height={7}
                  />
                  <Image
                    src="/app-store.svg"
                    alt="App store"
                    width={81}
                    height={17}
                  />
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-start gap-2 rounded-full border border-lime-400 px-4 py-2 shadow-[0_0_54px_rgba(180,247,47,0.2)]"
              >
                <Image
                  src="/google.svg"
                  alt="App store link"
                  height={24}
                  width={20}
                />
                <div className="flex flex-col justify-start gap-0.5">
                  <Image
                    src="/google-download.svg"
                    alt="Download"
                    width={43}
                    height={7}
                  />
                  <Image
                    src="/google-play.svg"
                    alt="App store"
                    width={81}
                    height={17}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="relative h-full w-full flex justify-center items-center lg:justify-between">
            {/* Background Screen */}
            <Image
              className="z-10 w-[40%] sm:w-[30%] md:w-[25%] lg:w-[30%] h-auto lg:absolute lg:bottom-0 lg:left-72 lg:h-[30rem] xl:absolute xl:left-[25rem]"
              src={screenBack}
              alt="Background usage screen"
            />
            
            {/* Foreground Screen */}
            <Image
              className="z-20 w-[50%] sm:w-[35%] lg:w-[45%] xl:w-[35%] h-auto lg:absolute lg:right-[6%] lg:bottom-0 lg:h-[100vh] xl:absolute xl:right-[6%]
              "
              src={screenFront}
              alt="Foreground usage screen"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[100px] sm:h-[130px] md:h-[150px] lg:h-[215px] bg-gradient-to-b from-transparent to-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
