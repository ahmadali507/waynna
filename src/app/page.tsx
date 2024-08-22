import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Header } from "./_layout/header";
import { Hero } from "./_layout/hero";
import { HowItWorks } from "./_layout/how_it_works";

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

      <div className="container py-[80px] space-y-14">
        <div className="space-y-6">
          <h2 className="font-bold text-7xl leading-[100px] max-w-2xl">
            Discover the City Like Never Before
          </h2>
          <p className="text-2xl text-gray-600 max-w-xl">
            An expedition with{" "}
            <span className="font-medium text-black">Waynaa</span>- Your
            ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
        </div>
        <div className="w-full h-[826px] relative mt-12">
          <Image src="/screen.png" alt="Waynaa's usage example" fill />
        </div>
      </div>

      <div className="container py-[80px] space-y-14">
        <div className="space-y-6">
          <h2 className="font-semibold text-7xl leading-[100px] max-w-2xl">
            Waynaa Unlocking, City&#39;s Secrets
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl leading-[35px]">
            Explore Interactive Maps, Live Updates, and Top-Picked Hotspots
            While Winning Limited Discount Offers to Elevate Your Adventure.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-5 gap-4">
          <div className="col-span-3 rounded-xl overflow-hidden w-full aspect-square relative">
            <Image src="/image-1.png" alt="Exclusive coupons" fill />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden w-full h-full relative">
            <Image src="/image-2.png" alt="Navigate" fill />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden w-full h-full relative">
            <Image src="/image-3.png" alt="Premium" fill />
          </div>
          <div className="col-span-3 rounded-xl overflow-hidden w-full aspect-square relative">
            <Image src="/image-4.png" alt="Discover" fill />
          </div>
        </div>
      </div>

      <HowItWorks />

      <div className="container space-y-14 py-[120px]">
        <div className="space-y-6">
          <h2 className="font-bold text-7xl leading-[100px]">
            Why choose Waynaa?
          </h2>
          <p className="text-2xl text-gray-600">See the stats that matter!</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          <div className="rounded-3xl bg-[#EFF1F4] overflow-hidden">
            <div className="p-10 pb-15 space-y-8">
              <h3 className="text-9xl font-medium">70%</h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-3xl">
                  Stay Ahead of Tomorrow&#39;s Trends
                </h4>
                <p className="text-[22px] leading-[40px]">
                  70% of people miss out on new and trending hotspots relying on
                  internet searches. Waynaa&#39;s let&#39;s you discover them in
                  single touch.
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] relative">
              <Image src="/womans.png" alt="Womans shopping" fill />
            </div>
          </div>
          <div className="bg-[#EFF1F4] rounded-3xl overflow-hidden">
            <div className="p-10 pb-15 space-y-8">
              <h3 className="text-9xl font-medium">80%</h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-3xl">
                  Stay Informed and Save More
                </h4>
                <p className="text-[22px] leading-[40px]">
                  80% miss local deals - Waynaa&#39;s real-time map help you to
                  catch exclusive discounts before they&#39;re gone.
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] relative">
              <Image
                src="/shop.png"
                alt="Sales sign hanging on shop's door"
                fill
              />
            </div>
          </div>
          <div className="col-span-2 p-10 bg-[#EFF1F4] rounded-3xl space-y-8">
            <div className="flex gap-4">
              {/* TODO: Enter image */}
              <div className="rounded-full bg-orange-500 h-[60px] w-[60px]"></div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold text-xl">Naomi Thomas</p>
                <p className="text-lg">CEO, xyz company</p>
              </div>
              <div className="ml-auto mr-0 flex items-center gap-4">
                {/* TODO: Change arrow */}
                <div className="h-[60px] w-[60px] rounded-full border border-black flex items-center justify-center text-2xl">
                  &larr;
                </div>
                <span>1 / 7</span>
                <div className="h-[60px] w-[60px] rounded-full border border-black flex items-center justify-center text-2xl">
                  &rarr;
                </div>
              </div>
            </div>
            <p className="text-3xl leading-[50px]">
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

      <div className="container py-[80px] space-y-14">
        <div className="space-y-6">
          <h2 className="font-bold text-7xl leading-[100px]">About Waynaa</h2>
          <p className="text-2xl text-gray-600 max-w-2xl">
            Are you a business owner looking to attract more customers and boost
            your sales?
          </p>
        </div>
        <div className="grid grid-cols-5 gap-x-12">
          <div className="w-full h-full bg-orange-500 col-span-2"></div>
          <div className="flex flex-col gap-8 col-span-3">
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

      <div className="bg-[#EFF1F4] rounded-t-[96px] py-[120px]">
        <div className="container space-y-14">
          <div className="space-y-6">
            <h2 className="font-bold text-7xl leading-[100px] max-w-3xl">
              Grow Your Business With Waynaa
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Increase visibility and reach local customers actively searching
              for businesses like yours.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="bg-orange-500 w-full aspect-square"></div>
            <div className="flex flex-col items-start">
              <ul className="flex flex-col gap-3">
                <li className="py-4 px-6 bg-white rounded-2xl text-2xl flex gap-3 items-center">
                  List Your Business on Waynaa&#39;s Live Map
                </li>
                <li className="py-4 px-6 bg-white rounded-2xl text-2xl flex gap-3 items-center">
                  Feature Your Top Products
                </li>
                <li className="py-4 px-6 bg-white rounded-2xl text-2xl flex gap-3 items-center">
                  Run Exclusive Discounts Offers
                </li>
              </ul>
              <Button
                size="lg"
                className="text-white font-normal text-3xl h-[75px] rounded-full px-8"
              >
                Let&#39;s talk &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lime-400 rounded-b-[96px] py-20">
        <div className="container space-y-14">
          <div className="space-y-6">
            <h2 className="font-bold text-7xl leading-[100px] max-w-6xl">
              Where Are You Heading Today? Yallah! Get Waynaa
            </h2>
            <p className="text-2xl text-gray-600">See the city come alive</p>
          </div>

          <div className="bg-[#0C0B0B] h-[680px] rounded-3xl grid grid-cols-2 text-white ">
            <div className="flex flex-col">
              <h3 className="text-6xl font-bold leading-[66px]">
                Let&#39;s Hala <span className="text-lime-400">W</span>aynaa and
                start your adventure.
              </h3>

              <div className="flex items-center gap-3">
                <Image
                  src="/app-store.svg"
                  alt="App store link"
                  height={48}
                  width={150}
                />
                <Image
                  src="/google-play.svg"
                  alt="Google Play link"
                  height={48}
                  width={150}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-12">
        <div className="rounded-full bg-[#0C0B0B] py-8 px-[270px] flex justify-between text-white">
          <p>Waynaa&copy;2024. All rights reserved!</p>
          <div>Social links</div>
          <div>Sponsored by</div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
