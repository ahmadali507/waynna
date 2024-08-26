'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set());
  const stepsRef = useRef<HTMLLIElement[]>([]);

  const steps: Step[] = [
    {
      title: "Open the App",
      description: "Download and open the app to get started",
    },
    {
      title: "Explore the Map",
      description:
        "Browse through the interactive map to find nearby businesses, events, and hotspots.",
    },
    {
      title: "Discover New Places",
      description:
        "Check out detailed listings with reviews, photos, and ratings.",
    },
    {
      title: "Unlock Exclusive Offers",
      description:
        "Tap on your favorite spots to reveal special discounts and deals.",
    },
    {
      title: "Enjoy Your Experience",
      description:
        "Visit the places you love and enjoy the exclusive benefits.",
    },
  ];

  const pictures = [
    "/Howitworks/1.svg",
    "/Howitworks/2.svg",
    "/Howitworks/3.svg",
    "/Howitworks/4.svg",
    "/Howitworks/5.svg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Center of the screen
      let newActiveStep: number | null = null;

      stepsRef.current.forEach((step, index) => {
        if (step) {
          const rect = step.getBoundingClientRect();
          const topOffset = rect.top + window.scrollY;

          if (scrollPosition > topOffset) {
            newActiveStep = index;
          }
        }
      });

      if (newActiveStep !== null && newActiveStep !== activeStep) {
        setActiveStep(newActiveStep);
        setVisitedSteps((prev) => new Set(prev).add(newActiveStep as number));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-w-screen flex min-h-screen items-center justify-center rounded-[4rem] bg-black p-4"
    >
      <div className="w-full p-8 md:p-12 lg:p-16 xl:w-[74vw]">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-inter mb-2 pb-6 text-3xl font-bold text-white opacity-[95%] md:text-4xl lg:text-[2.4rem]"
        >
          How It Works
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-inter mb-8 leading-[16px] text-[#FFFFFF] md:text-base xl:text-[1.1rem]"
          style={{
            fontWeight: "400",
          }}
        >
          A Quick Guide to Navigating Waynaa
        </motion.p>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-0">
          <div className="hidden justify-center lg:flex lg:justify-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.9, delay: 0.6 }}
              className="relative"
            >
              <div className="border-[ #C9FC8C] absolute inset-0 h-[73vh] w-[20rem] rounded-[1.5rem] border-2 p-1 border-[#C9FC8C]">
                <div className="flex h-[73vh] w-[20rem] flex-col items-center justify-center rounded-[1.5rem] bg-gray-100">
                  <Image
                    src="/Howitworks/border.svg"
                    alt="Findo App Login Screen"
                    className="relative z-40 h-[65vh] w-80 rounded-[2rem] md:w-72"
                    width={100}
                    height={100}
                  />
                  {activeStep !== null && (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={pictures[activeStep] || pictures[0]}
                        alt={`Step ${activeStep + 1} Image`}
                        className="absolute top-[2.7rem] left-1 z-20 h-[60vh] xl:w-[20rem] rounded-[4rem] md:w-72"
                        width={100}
                        height={100}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <ol className="relative mb-12 border-l border-gray-700">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  ref={(el) => {
                    if (el) stepsRef.current[index] = el;
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: index * 0.4 }}
                  className={`group ml-10 transition-all duration-300 ease-in-out lg:w-80 xl:w-80 ${
                    (index === activeStep || visitedSteps.has(index))
                      ? "opacity-100"
                      : "opacity-80"
                  }`}
                >
                  <motion.span
                    animate={{
                      backgroundColor:
                        index === activeStep ? "#C9FC8C" : "#6B7280",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -left-6 ml-[11px] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-gray-900`}
                  >
                    <motion.span
                      animate={{
                        color: index === activeStep ? "#000000" : "#F3F4F6",
                      }}
                      transition={{ duration: 0.3 }}
                      className="z-10 text-[10px]"
                    >
                      {index + 1}
                    </motion.span>
                  </motion.span>
                  <h3 className="mt-8 flex items-center text-[0.8rem] font-medium text-gray-300">
                    STEP {index + 1}
                  </h3>
                  <motion.h3
                    animate={{
                      color: index === activeStep ? "#C9FC8C" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-1 mt-5 flex items-center text-xl font-medium"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    animate={{
                      color: index === activeStep ? "#FFFFFF" : "#9CA3AF",
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 text-[12px] font-normal w-[30vw] mt-4"
                  >
                    {step.description}
                  </motion.p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}