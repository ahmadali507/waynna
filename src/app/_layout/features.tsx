import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <div className="container space-y-14 py-[80px]">
      <div className="space-y-6">
        <h2 className="max-w-2xl text-6xl font-bold leading-[74px]">
          Waynaa Unlocking, City&#39;s Secrets
        </h2>
        <p className="max-w-4xl text-2xl leading-[35px] text-gray-600">
          Explore Interactive Maps, Live Updates, and Top-Picked Hotspots While
          Winning Limited Discount Offers to Elevate Your Adventure.
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
  );
};
