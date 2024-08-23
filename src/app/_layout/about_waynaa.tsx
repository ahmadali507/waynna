import Image from "next/image";

export const AboutWaynaa: React.FC = () => {
  return (
    <div className="container space-y-14 py-[80px]">
      <div className="space-y-6">
        <h2 className="text-6xl font-bold leading-[74px]">About Waynaa</h2>
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
  );
};
