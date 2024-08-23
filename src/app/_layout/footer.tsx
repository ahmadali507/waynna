import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="lg:py-8 xl:px-12">
      <div className="flex flex-col items-center justify-between gap-6 bg-[#0C0B0B] py-8 text-white lg:flex-row lg:rounded-full lg:px-[100px] xl:px-[270px]">
        <p className="text-sm sm:text-base">
          Waynaa&copy;2024. All rights reserved!
        </p>
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
            <Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} />
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
  );
};
