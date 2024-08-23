import Image from "next/image";
import Link from "next/link";

import screenBack from "@/../public/screen-back.svg";
import screenFront from "@/../public/screen-front.svg";

export const Cta: React.FC = () => {
  return (
    <div className="bg-[#C9FC8C] py-[40px] lg:rounded-b-[96px] xl:py-[80px]">
      <div className="container space-y-8 xl:space-y-14">
        <div className="space-y-4 xl:space-y-6">
          <h2 className="max-w-5xl text-3xl font-bold leading-[40px] sm:max-w-xl sm:text-4xl xl:text-6xl xl:leading-[74px]">
            Where Are You Heading Today? Yallah! Get Waynaa
          </h2>
          <p className="text-base text-gray-600 sm:text-xl xl:text-2xl">
            See the city come alive
          </p>
        </div>

        <div className="relative mx-auto flex h-[740px] flex-col gap-12 overflow-hidden rounded-3xl bg-[#0C0B0B] text-white lg:h-[680px] lg:w-full">
          <div className="relative left-[30px] top-[40px] flex w-[80%] flex-col gap-8 lg:absolute lg:left-[90px] lg:top-[170px] lg:w-1/3 lg:gap-[72px] xl:w-1/2">
            <h3 className="text-3xl font-bold leading-[30px] lg:text-5xl xl:text-6xl xl:leading-[66px]">
              Let&#39;s Hala <span className="text-[#C9FC8C]">W</span>aynaa and
              start your adventure.
            </h3>

            <div className="z-40 flex items-center gap-3">
              <Link
                href="#"
                className="flex items-start gap-2 rounded-full border border-lime-400 px-4 py-2 shadow-[0_0_54px_rgba(180,247,47,0.2)]"
              >
                <Image
                  src="/apple.svg"
                  alt="App store link"
                  height={24}
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
                <div></div>
              </Link>
            </div>
          </div>
          <div className="relative h-full w-full lg:w-full">
            <Image
              className="absolute bottom-0 z-10 hidden sm:right-60 sm:block lg:block"
              src={screenBack}
              alt="Background usage screen"
            />

            <Image
              className="absolute z-20 sm:right-0 lg:bottom-0 lg:right-8"
              src={screenFront}
              alt="Foreground usage screen"
            />

            <div className="absolute bottom-0 left-0 right-0 z-30 h-[215px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(0,0,0,0.8))]" />
          </div>
        </div>
      </div>
    </div>
  );
};
