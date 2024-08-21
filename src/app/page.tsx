import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Header } from "./_layout/header";
import { Hero } from "./_layout/hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />

      <div className="container py-16">
        <div className="grid grid-cols-2 gap-y-8">
          <h2 className="font-semibold text-6xl leading-snug">
            Discover the City Like Never Before
          </h2>
          <p className="col-start-1 text-2xl text-gray-600">
            An expedition with{" "}
            <span className="font-medium text-black">Waynaa</span>- Your
            ultimate guide to finding exclusive{" "}
            <span className="font-medium text-black">New & Trending</span>{" "}
            hotspots nearby.
          </p>
          <div className="col-span-2 grid grid-cols-3 gap-y-8"></div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
