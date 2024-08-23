import Image from "next/image";
import Link from "next/link";

export const Cta: React.FC = () => {
  return (
    <div className="rounded-b-[96px] bg-[#C9FC8C] py-20">
      <div className="container space-y-14">
        <div className="space-y-6">
          <h2 className="max-w-5xl text-6xl font-bold leading-[74px]">
            Where Are You Heading Today? Yallah! Get Waynaa
          </h2>
          <p className="text-2xl text-gray-600">See the city come alive</p>
        </div>

        <div className="relative h-[680px] overflow-hidden rounded-3xl bg-[#0C0B0B] text-white">
          <div className="absolute left-[90px] top-[170px] flex w-1/2 flex-col gap-[72px]">
            <h3 className="text-6xl font-bold leading-[66px]">
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
          <div className="relative h-full w-full">
            <div className="absolute bottom-0 right-0 z-10 -translate-x-[80%]">
              <Image
                src="/screen-back.svg"
                alt="Background usage screen"
                width={322}
                height={635}
              />
            </div>
            <div className="absolute bottom-0 right-8 z-20">
              <Image
                src="/screen-front.svg"
                alt="Foreground usage screen"
                width={415}
                height={817}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[215px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(0,0,0,0.8))]" />
          </div>
        </div>
      </div>
    </div>
  );
};
