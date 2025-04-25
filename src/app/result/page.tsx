import Link from "next/link";
import React from "react";
import Image from "next/image";
import ResDiamondLarge from "../assets/ui/ResDiamond-large.png";
import ResDiamondSmall from "../assets/ui/ResDiamond-small.png";
import ResDiamondMedium from "../assets/ui/ResDiamond-medium.png";
import cameraIcon from "../assets/ui/camera-icon.png";
import ResScanLine from "../assets/ui/ResScanLine.png";
import galleryIcon from "../assets/ui/gallery-icon.png";
import ResGalleryLine from "../assets/ui/ResGalleryLine.png";
import BackBtn from "../components/ui/BackBtn";
import ClientComponentBoundary from "../components/ClientComponentBoundary";

const Page = () => {
  return (
    <div className="min-h-[90vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-20 space-y-16 md:space-y-0">
        {/* LEFT SIDE */}
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[-20%] md:-translate-x-full flex flex-col items-center cursor-pointer justify-center">
          {/* for anchoring */}
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />

          <Image
            src={ResDiamondLarge}
            alt="Diamond Large"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow"
          />
          <Image
            src={ResDiamondMedium}
            alt="DiamondMedium"
            className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
          />
          <Image
            src={ResDiamondSmall}
            alt="DiamondSmall"
            className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
          />

          {/* Camera Icon and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src={cameraIcon}
              alt="Camera Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px]"
              width={136}
              height={136}
            />

            <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
              <p className="text-xs md:text-sm font-normal mt-1 leading-[24px]">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
              <Image
                src={ResScanLine}
                alt="Scan Line"
                className="absolute hidden md:block md:right-[143px] md:top-[20px]"
                width={66}
                height={59}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Client Component Boundary */}
        <ClientComponentBoundary 
          galleryIcon={galleryIcon}
          ResDiamondLarge={ResDiamondLarge}
          ResDiamondMedium={ResDiamondMedium}
          ResDiamondSmall={ResDiamondSmall}
          ResGalleryLine={ResGalleryLine}
        />
      </div>

      <div className="bottom-10 w-full flex justify-between px-10">
        {/* BACK BUTTON */}
        <Link className="relative" aria-label="Back" href="/testing">
          <BackBtn />
        </Link>

        {/* SUMMARY BUTTON*/}
        {/* small screens */}
        <Link href="/result" className="md:hidden">
          <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]">
            <span className="absolute rotate-[-45deg] text-xs font-normal tracking-tighter">
              SUMMARY
            </span>
          </div>
        </Link>

        {/* large screens */}
        <Link href="/result" className="hidden md:flex">
          <div className="flex flex-row relative justify-center items-center">
            <span className="text-sm font-semibold mr-10">
              GET SUMMARY
            </span>
            <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]" />
            <span className="absolute right-[30px] bottom-[13px] scale-[0.9]">
              ▶
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;