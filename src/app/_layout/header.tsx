import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="bg-[#0C0B0B]">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo of Waynaa" width={64} height={64} />
          <span className="font-semibold text-white">Waynaa</span>
        </div>

        <Button className="px-6">Let&#39;s talk</Button>
      </div>
    </header>
  );
};
