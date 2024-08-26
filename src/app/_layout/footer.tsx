import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="lg:py-8 xl:px-12 ">
      <div className="flex flex-col items-center justify-center bg-[#0C0B0B] py-8 text-white lg:flex-row lg:rounded-full lg:px-[100px] xl:px-[50px] h-16 xl:gap-x-64">
        <p className="text-[11px] text-gray-200">
          Waynaa&copy;2024. All rights reserved!
        </p>
        <div className="flex gap-6">
          <Link href="#">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={18}
              height={18}
            />
          </Link>

          <Link href="#">
            <Image src="/youtube.svg" alt="YouTube" width={18} height={18} />
          </Link>

          <Link href="#">
            <Image src="/linkedin.svg" alt="Linkedin" width={18} height={18} />
          </Link>

          <Link href="#">
            <Image src="/x.svg" alt="X" width={18} height={18} />
          </Link>
        </div>
        <div className="flex items-center text-xs gap-4 text-[11px] text-gray-200">
          Sponsored by{" "}
          <Image src="/borgfy.svg" alt="Borgfy logo" height={24} width={43} />
        </div>
      </div>
    </footer>
  );
};
