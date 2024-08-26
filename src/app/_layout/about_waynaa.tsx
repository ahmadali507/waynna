import Image from "next/image";

import userImg from "@/../public/user.png";

export const AboutWaynaa: React.FC = () => {
  return (
    <div className="container space-y-8 py-[40px] xl:space-y-14 xl:py-[80px] xl:w-[70vw] lg:w-[70vw]">
      <div className="space-y-4 xl:space-y-2">
        <h2 className="text-2xl font-bold leading-[40px] sm:text-4xl xl:text-[2.5rem] font-inter xl:leading-[54px]">
          About Wayna
        </h2>
        <p className="text-base text-gray-800 sm:max-w-md sm:text-xl xl:max-w-2xl xl:text-lg lg:text-xl w-[30rem]">
          Are you a business owner looking to attract more customers and boost
          your sales?
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-12">
        <Image src={userImg} quality={80} alt="Man looking at his phone" className="w-[24rem] h-[100%]" />

        <div className="flex flex-col gap-2 w-[100%]">
          <h3 className="text-2xl xl:text-5xl">Hello there!</h3>
          <p className="text-sm leading-[24px] text-[#243446] sm:text-base sm:leading-[30px] pt-4 xl:text-[18px] xl:leading-[30px] lg:text-[17px] lg:leading-[30px] font-medium opacity-[90%]">
            The name Waynaa is inspired by the Arabic word &#34;Wayn,&#34;
            meaning &#34;where,&#34; combined with the English word
            &#34;way.&#34; This fusion reflects our innovative map concept,
            which reveals where the buzz is happening in real-time with an
            interactive &#34;soul map&#34; of the city.
          </p>
          <p className="text-sm text-[#162A41] leading-[24px] sm:text-base pt-4 sm:leading-[30px] xl:text-[18px] xl:leading-[30px] lg:text-[17px] lg:leading-[30px] font-medium opacity-[90%]">
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
