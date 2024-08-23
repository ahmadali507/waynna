import Image from "next/image";

import userImg from "@/../public/user.png";

export const AboutWaynaa: React.FC = () => {
  return (
    <div className="container space-y-8 py-[40px] xl:space-y-14 xl:py-[80px]">
      <div className="space-y-4 xl:space-y-6">
        <h2 className="text-3xl font-bold leading-[40px] sm:text-4xl xl:text-6xl xl:leading-[74px]">
          About Waynaa
        </h2>
        <p className="text-base text-gray-600 sm:max-w-md sm:text-xl xl:max-w-2xl xl:text-2xl">
          Are you a business owner looking to attract more customers and boost
          your sales?
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[500px_1fr] lg:gap-x-12">
        <Image src={userImg} quality={80} alt="Man looking at his phone" />

        <div className="flex flex-col gap-4 lg:gap-8">
          <h3 className="text-3xl xl:text-7xl">Hello there!</h3>
          <p className="text-sm leading-[24px] sm:text-base sm:leading-[30px] xl:text-2xl xl:leading-[40px]">
            The name Waynaa is inspired by the Arabic word &#34;Wayn,&#34;
            meaning &#34;where,&#34; combined with the English word
            &#34;way.&#34; This fusion reflects our innovative map concept,
            which reveals where the buzz is happening in real-time with an
            interactive &#34;soul map&#34; of the city.
          </p>
          <p className="text-sm leading-[24px] sm:text-base sm:leading-[30px] xl:text-2xl xl:leading-[40px]">
            Waynaa is developed by Borgfy Venture Studio and aims to be a key
            player in Saudi Vision 2030, contributing to the nation&#39;s
            vibrant future and empowering its youth. Discover what&#39;s new,
            exciting, and trending around you with Waynaa, and make every
            exploration an adventure.
          </p>
        </div>
      </div>
    </div>
  );
};
