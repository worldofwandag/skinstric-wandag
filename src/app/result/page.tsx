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
import ProcessBtn from "../components/ui/ProcessBtn";

const Page = () => {
  return (
    <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
        {/* LEFT SIDE */}
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center cursor-pointer justify-center">
          {/* for anchoring */}
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />

          <Image
            src={ResDiamondLarge}
            alt="Diamond Large"
            width={482}
            height={482}
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slower"
          />
          <Image
            src={ResDiamondMedium}
            alt="DiamondMedium"
            width={444.34}
            height={444.34}
            className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slow"
          />
          <Image
            src={ResDiamondSmall}
            alt="DiamondSmall"
            width={405.18}
            height={405.18}
            className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
          />

          {/* Camera Icon and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src={cameraIcon}
              alt="Camera Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
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

      <div className="absolute bottom-8 w-full flex justify-between px-8">
        {/* BACK BUTTON */}
        <Link className="relative" aria-label="Back" href="/testing">
          <BackBtn />
        </Link>

        {/* SUMMARY BUTTON*/}
        {/* small screens */}
        <Link href="/select">
          <ProcessBtn />
        </Link>
      </div>
    </div>
  );
};

export default Page;