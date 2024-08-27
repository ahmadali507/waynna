import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0B0B] py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-12 rounded-[25rem] mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Copyright Text */}
        <p className="text-[12px] text-gray-200 ">
          Waynaa&copy;2024. All rights reserved!
        </p>

        {/* Social Media Links */}
        <div className="flex gap-4 text-gray-200">
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
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>

          <Link href="#">
            <Image src="/x.svg" alt="X" width={24} height={24} />
          </Link>
        </div>

        {/* Sponsored By Section */}
        <div className="flex items-center text-[12px] text-gray-200 gap-2 md:text-sm lg:gap-4 lg:text-base">
          Sponsored by{" "}
          <Image
            src="/borgfy.svg"
            alt="Borgfy logo"
            height={24}
            width={43}
          />
        </div>
      </div>
    </footer>
  );
};
