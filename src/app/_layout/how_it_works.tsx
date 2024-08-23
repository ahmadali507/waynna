"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import iPhone from "@/../public/iphone-template.svg";
import step1 from "@/../public/image-1.svg";
import step2 from "@/../public/image-2.svg";
import step3 from "@/../public/image-3.svg";
import step4 from "@/../public/image-4.svg";
import step5 from "@/../public/image-5.svg";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Picture = ({ id }: { id: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <div className="relative h-[830px] w-[420px]">
          <Image src={`/image-${id}.svg`} alt={`Step ${id}`} fill />
        </div>
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Open the App",
      description: "Download and open the app to get started.",
    },
    {
      id: 2,
      title: "Explore the Map",
      description:
        "Browse through the interactive map to find nearby businesses, events, and hotspots.",
    },
    {
      id: 3,
      title: "Discover New Places",
      description:
        "Check out detailed listings with reviews, photos, and ratings",
    },
    {
      id: 4,
      title: "Unlock Exclusive Offers",
      description:
        "Tap on your favorite spots to reveal special discounts and deals.",
    },
    {
      id: 5,
      title: "Enjoy Your Experience",
      description:
        "Visit the places you love and enjoy the exclusive benefits.",
    },
  ];

  return (
    <div className="relative -z-10 rounded-[96px] bg-[#080705] py-[120px]">
      <div className="container space-y-14 text-white">
        <div className="grid grid-cols-2 gap-y-8">
          <h2 className="text-6xl font-semibold leading-snug">How It Works</h2>
          <p className="col-span-2 col-start-1 max-w-4xl text-2xl text-gray-400">
            A Quick Guide to Navigating Waynaa
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[110px]">
          <div className="relative flex h-full w-full flex-col items-center rounded-[40px] bg-white py-10 after:absolute after:-left-4 after:-top-4 after:z-[-5] after:h-full after:w-full after:rounded-[40px] after:border-4 after:border-[#C9FC8C] after:bg-[#080705]">
            <div className="h-[830px] w-[420px] overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src={iPhone} quality={80} alt="Iphone template" />
                {[1, 2, 3, 4, 5].map((index) => (
                  <div className="absolute top-0 z-0" key={index}>
                    <Image
                      src={`/image-${index}.svg`}
                      alt={`Step ${index}`}
                      height={780}
                      width={350}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="h-screen w-1 bg-gray-500"></div>
            <div className="flex flex-col gap-20">
              {steps.map((step) => (
                <div key={step.id} className="space-y-4">
                  <p className="text-lg text-[#8B949E]">STEP {step.id}</p>
                  <h4 className="text-4xl text-[#C9FC8C]">{step.title}</h4>
                  <p className="text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
