import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
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
