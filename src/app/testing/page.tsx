import React from "react";
import Image from "next/image";
import DiamondLarge from "../assets/ui/Diamond-light-large.png";
import DiamondSmall from "../assets/ui/Diamond-dark-small.png";
import DiamondMedium from "../assets/ui/Diamond-medium-medium.png";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center ">
      <div className="absolute top-16 left-9 text-left">
        <p className="text-black font-semibold text-xs">TO START ANALYSIS</p>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
        <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
          CLICK TO TYPE
        </p>
        
        <input
          className="text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[432px]  pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-2"
          placeholder="Introduce Yourself"
          type="text"
          defaultValue=""
        ></input>
        
          <Image
            src={DiamondLarge}
            alt="Diamond Large"
            width={762} // Explicitly set the width
            height={762} // Explicitly set the height
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
          ></Image>
          <Image
            src={DiamondMedium}
            alt="Diamond Medium"
            width={682} // Explicitly set the width
            height={682} // Explicitly set the height
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
          ></Image>
          <Image
            src={DiamondSmall}
            alt="Diamond Small"
            width={602} // Explicitly set the width
            height={602} // Explicitly set the height
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
          ></Image>
        
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="relative w-12 h-12 left-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]">
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            BACK
          </span>
        </div>
        <Link className="absolute inset-0" aria-label="Back" href="/"></Link>
      </div>
      <div
        role="region"
        aria-label="Notifications (F8)"
        tab-index="-1"
        className="pointer-events-auto"
      >
        <ol
          tab-index="-1"
          className="fixed top-4 right-4 z-[100] flex max-h-screen w-full flex-col p-4 max-w-[300px] md:max-w-[420px]"
        ></ol>
      </div>
    </div>
  );
};

export default Page;
