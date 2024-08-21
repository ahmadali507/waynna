import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="bg-black">
      <div className="container flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" alt="Logo of Waynaa" width={64} height={64} />
          <span className="font-semibold text-white">Waynaa</span>
        </div>

        <Button className="px-6">Let&#39;s talk</Button>
      </div>
    </header>
  );
};
