import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Header } from "./_layout/header";
import { Hero } from "./_layout/hero";
import { HowItWorks } from "./_layout/how_it_works";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HomePage: React.FC = () => {
  const items = [
    {
      icon: "/starbucks.png",
      title: "Starbucks",
      description: "Coffee Shop",
      distance: "5 min",
    },
    {
      icon: "/keens_steakhouse.png",
      title: "Keens Steakhouse",
      description: "Restaurant",
      distance: "5 min",
    },
    {
      icon: "/golden_diner.png",
      title: "Golden Diner",
      description: "Restaurant",
      distance: "5 min",
    },
    {
      icon: "/via_carota.png",
      title: "Via Carota",
      description: "Restaurant",
      distance: "5 min",
    },
  ];
  return (
    <div>
      <Header />
      <Hero />

      <div className="container space-y-14 py-[80px]">
        <div className="space-y-6">
          <h2 className="max-w-2xl text-7xl font-bold leading-[100px]">
            Discover the City Like Never Before
          </h2>
          <p className="max-w-xl text-2xl text-gray-600">
            An expedition with{" "}
            <span className="font-medium text-black">Waynaa</span>- Your
            ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
        </div>
        <div className="relative mt-12 h-[826px] w-full">
          <Image src="/screen.png" alt="Waynaa's usage example" fill />
        </div>
      </div>

      <div className="container space-y-14 py-[80px]">
        <div className="space-y-6">
          <h2 className="max-w-2xl text-7xl font-semibold leading-[100px]">
            Waynaa Unlocking, City&#39;s Secrets
          </h2>
          <p className="max-w-4xl text-2xl leading-[35px] text-gray-600">
            Explore Interactive Maps, Live Updates, and Top-Picked Hotspots
            While Winning Limited Discount Offers to Elevate Your Adventure.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-5 gap-4">
          <div className="relative col-span-3 h-[650px] w-full overflow-hidden rounded-xl">
            <Image src="/image-1.png" alt="Exclusive coupons" fill />
          </div>
          <div className="relative col-span-2 h-full w-full overflow-hidden rounded-xl">
            <Image src="/image-2.png" alt="Navigate" fill />
          </div>
          <div className="relative col-span-2 h-full w-full overflow-hidden rounded-xl">
            <Image src="/image-3.png" alt="Premium" fill />
          </div>
          <div className="relative col-span-3 h-[650px] w-full overflow-hidden rounded-xl">
            <Image src="/image-4.png" alt="Discover" fill />
          </div>
        </div>
      </div>

      <HowItWorks />

      <div className="container space-y-14 py-[120px]">
        <div className="space-y-6">
          <h2 className="text-7xl font-bold leading-[100px]">
            Why choose Waynaa?
          </h2>
          <p className="text-2xl text-gray-600">See the stats that matter!</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          <div className="overflow-hidden rounded-3xl bg-[#EFF1F4]">
            <div className="pb-15 space-y-8 p-10">
              <h3 className="text-9xl font-medium">70%</h3>
              <div className="space-y-2">
                <h4 className="text-3xl font-semibold">
                  Stay Ahead of Tomorrow&#39;s Trends
                </h4>
                <p className="text-[22px] leading-[40px]">
                  70% of people miss out on new and trending hotspots relying on
                  internet searches. Waynaa&#39;s let&#39;s you discover them in
                  single touch.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <Image src="/womans.png" alt="Womans shopping" fill />
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#EFF1F4]">
            <div className="pb-15 space-y-8 p-10">
              <h3 className="text-9xl font-medium">80%</h3>
              <div className="space-y-2">
                <h4 className="text-3xl font-semibold">
                  Stay Informed and Save More
                </h4>
                <p className="text-[22px] leading-[40px]">
                  80% miss local deals - Waynaa&#39;s real-time map help you to
                  catch exclusive discounts before they&#39;re gone.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <Image
                src="/shop.png"
                alt="Sales sign hanging on shop's door"
                fill
              />
            </div>
          </div>
          <div className="relative col-span-2 rounded-3xl bg-[#EFF1F4] p-10">
            <Image
              src="/quote.svg"
              alt="Double quotation mark"
              className="absolute left-10 top-0 -translate-y-1/2"
              width={80}
              height={50}
            />

            <div className="flex items-center gap-4">
              <Image
                src="/portrait.svg"
                alt="Portrait of Naomi Thomas"
                width={80}
                height={80}
              />

              <div className="flex flex-col gap-0.5">
                <p className="text-xl font-semibold">Naomi Thomas</p>
                <p className="text-lg">CEO, xyz company</p>
              </div>
              <div className="ml-auto mr-0 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl",
                    "hover:bg-[#EFF1F4]/0.1",
                  )}
                >
                  <Image
                    src="/left-arrow.svg"
                    alt="Left pointed arrow"
                    width={32}
                    height={32}
                  />
                </div>
                <span>1 / 7</span>
                <div
                  className={cn(
                    "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-black text-2xl",
                    "hover:bg-[#EFF1F4]/0.8",
                  )}
                >
                  <Image
                    src="/right-arrow.svg"
                    alt="Right pointed arrow"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>
            <p className="mt-8 text-3xl leading-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className="container space-y-14 py-[80px]">
        <div className="space-y-6">
          <h2 className="text-7xl font-bold leading-[100px]">About Waynaa</h2>
          <p className="max-w-2xl text-2xl text-gray-600">
            Are you a business owner looking to attract more customers and boost
            your sales?
          </p>
        </div>
        <div className="grid grid-cols-[500px_1fr] gap-x-12">
          <div className="relative h-full w-full">
            <Image src="/user.png" alt="Man looking at his phone" fill />
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-7xl">Hello there!</h3>
            <p className="text-2xl leading-[40px]">
              The name Waynaa is inspired by the Arabic word &#34;Wayn,&#34;
              meaning &#34;where,&#34; combined with the English word
              &#34;way.&#34; This fusion reflects our innovative map concept,
              which reveals where the buzz is happening in real-time with an
              interactive &#34;soul map&#34; of the city.
            </p>
            <p className="text-2xl leading-[40px]">
              Waynaa is developed by Borgfy Venture Studio and aims to be a key
              player in Saudi Vision 2030, contributing to the nation&#39;s
              vibrant future and empowering its youth. Discover what&#39;s new,
              exciting, and trending around you with Waynaa, and make every
              exploration an adventure.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-t-[96px] bg-[#EFF1F4] py-[120px]">
        <div className="container space-y-14">
          <div className="space-y-6">
            <h2 className="max-w-3xl text-7xl font-bold leading-[100px]">
              Grow Your Business With Waynaa
            </h2>
            <p className="max-w-2xl text-2xl text-gray-600">
              Increase visibility and reach local customers actively searching
              for businesses like yours.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-20">
            <div className="relative h-[480px] w-[560px]">
              <Image src="/usage-example.png" alt="Usage example screen" fill />
            </div>
            <div className="mt-8 flex flex-col items-start gap-[60px]">
              <ul className="flex flex-col gap-3">
                <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                  <Image
                    src="/check.svg"
                    alt="Checked"
                    width={25}
                    height={25}
                  />
                  List Your Business on Waynaa&#39;s Live Map
                </li>
                <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                  <Image
                    src="/check.svg"
                    alt="Checked"
                    width={25}
                    height={25}
                  />
                  Feature Your Top Products
                </li>
                <li className="text-[rgba(22, 42, 65, 0.7)] flex items-center gap-6 rounded-2xl bg-white p-6 text-2xl">
                  <Image
                    src="/check.svg"
                    alt="Checked"
                    width={25}
                    height={25}
                  />
                  Run Exclusive Discounts Offers
                </li>
              </ul>
              <Button
                size="lg"
                className="h-[75px] rounded-full px-8 text-3xl font-normal text-white"
              >
                Let&#39;s talk &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-b-[96px] bg-[#C9FC8C] py-20">
        <div className="container space-y-14">
          <div className="space-y-6">
            <h2 className="max-w-6xl text-7xl font-bold leading-[100px]">
              Where Are You Heading Today? Yallah! Get Waynaa
            </h2>
            <p className="text-2xl text-gray-600">See the city come alive</p>
          </div>

          <div className="relative h-[680px] overflow-hidden rounded-3xl bg-[#0C0B0B] text-white">
            <div className="absolute left-[90px] top-[170px] flex w-1/2 flex-col gap-[72px]">
              <h3 className="text-6xl font-bold leading-[66px]">
                Let&#39;s Hala <span className="text-[#C9FC8C]">W</span>aynaa
                and start your adventure.
              </h3>

              <div className="flex items-center gap-3">
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
              <div className="-z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-12 py-8">
        <div className="flex justify-between rounded-full bg-[#0C0B0B] px-[270px] py-8 text-white">
          <p>Waynaa&copy;2024. All rights reserved!</p>
          <div className="flex gap-6">
            <Link href="#">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>

            <Link href="#">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>

            <Link href="#">
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>

            <Link href="#">
              <Image src="/x.svg" alt="X" width={24} height={24} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            Sponsored by{" "}
            <Image src="/borgfy.svg" alt="Borgfy logo" height={32} width={53} />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
