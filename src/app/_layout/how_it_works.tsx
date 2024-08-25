"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
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
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepsRef.current.indexOf(entry.target as HTMLLIElement);
          if (index !== -1) setActiveStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: "0px 0px -50% 0px",
    });

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center rounded-[8rem] bg-black p-4">
      <div className="w-full max-w-6xl p-8 md:p-12 lg:p-16">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          How It Works
        </h1>
        <p className="mb-8 text-sm text-gray-400 md:text-base">
          A Quick Guide to Navigating Waynaa
        </p>

        {/* Grid Container for responsiveness */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Phone Image */}
          <div className="hidden lg:flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 h-[88vh] w-[28rem] rounded-[2.5rem] p-1 border-2 border-lime-400">
                <div className="flex h-[90vh] w-[28rem] flex-col items-center justify-center rounded-[2.5rem] bg-gray-200">
                  <Image
                    src="/Howitworks/border.svg"
                    alt="Findo App Login Screen"
                    className="relative z-10 w-80 h-[70vh] rounded-[2rem] md:w-72"
                    width={100}
                    height={100}
                  />
                  {activeStep !== null && (
                    <Image
                      src={pictures[activeStep] || pictures[0]}
                      alt={`Step ${activeStep + 1} Image`}
                      className="absolute top-28 z-20 w-[18rem] h-[60vh] rounded-[4rem] md:w-72"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:w-1/2">
            <ol className="relative mb-12 border-l border-gray-700">
              {steps.map((step, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    if (el) stepsRef.current[index] = el;
                  }}
                  className={`group ml-10 transition-all duration-300 ease-in-out lg:w-80 xl:w-80 ${
                    index === activeStep ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <span
                    className={`absolute -left-6 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-gray-900 transition-all duration-300 ml-[5px] ease-in-out ${
                      index === activeStep ? "bg-lime-400" : "bg-gray-500"
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        index === activeStep
                          ? "text-black"
                          : "text-gray-100 z-10 opacity-100"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </span>
                  <h3
                    className={`mt-8 mb-1 flex items-center text-[1rem] font-medium text-gray-500 transition-colors duration-300`}
                  >
                    Step {index + 1}
                  </h3>
                  <h3
                    className={`mt-5 mb-1 flex items-center text-xl font-medium transition-colors duration-300 ${
                      index === activeStep ? "text-lime-300" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm font-normal transition-colors duration-300 ${
                      index === activeStep ? "text-gray-300" : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
