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
import CameraSectionClient from "../components/CameraSectionClient";
import ResultClientWrapper from "../components/ResultClientWrapper";

const Page = () => {
  return (
    <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      
      {/* Wrap the client components in our context provider */}
      <ResultClientWrapper>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
          {/* LEFT SIDE - Client Component with Camera UI and Modal */}
          <CameraSectionClient 
            cameraIcon={cameraIcon}
            ResScanLine={ResScanLine}
            ResDiamondLarge={ResDiamondLarge}
            ResDiamondMedium={ResDiamondMedium}
            ResDiamondSmall={ResDiamondSmall}
          />

          {/* RIGHT SIDE - Client Component Boundary */}
          <ClientComponentBoundary 
            galleryIcon={galleryIcon}
            ResDiamondLarge={ResDiamondLarge}
            ResDiamondMedium={ResDiamondMedium}
            ResDiamondSmall={ResDiamondSmall}
            ResGalleryLine={ResGalleryLine}
          />
        </div>
      </ResultClientWrapper>

      <div className="absolute bottom-8 w-full flex justify-between px-8">
        {/* BACK BUTTON */}
        <Link className="relative" aria-label="Back" href="/testing">
          <BackBtn />
        </Link>

        {/* SUMMARY BUTTON*/}
        <Link href="/select">
          <ProcessBtn />
        </Link>
      </div>
    </div>
  );
};

export default Page;