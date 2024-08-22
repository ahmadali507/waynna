import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Waynaa",
  description:
    "Experience the vibrant soul of your city over map that reveals where life is happening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          plusJakartaSans.className,
          "h-[100dvh] w-[100dvw] text-[#080705]"
        )}
      >
        {children}
      </body>
    </html>
  );
}
