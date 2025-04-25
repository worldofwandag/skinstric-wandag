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

const Page = () => {
  return (
    <div className="min-h-[90vh] flex flex-col bg-white relative md:pt-[64px]">
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-20 md:mb-60 space-y-16 md:space-y-0">
        {/* LEFT SIDE */}
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[-20%] md:-translate-x-full flex flex-col items-center cursor-pointer justify-center">
          {/* for anchoring */}
          <div className="w-[380px] h-[380px] md:w-[482px] md:h-[482px]" />

          <Image
            src={ResDiamondLarge}
            alt="Diamond Large"
            className="absolute w-[380px] h-[380px] md:w-[482px] md:h-[482px] animate-spin-slow"
          />
          <Image
            src={ResDiamondMedium}
            alt="DiamondMedium"
            className="absolute w-[340px] h-[340px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
          />
          <Image
            src={ResDiamondSmall}
            alt="DiamondSmall"
            className="absolute w-[300px] h-[300px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
          />

          {/* Camera Icon and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src={cameraIcon}
              alt="Camera Icon"
              className="absolute"
              width={136}
              height={136}
            />

            <div className="absolute bottom-[9%] right-[90px]  md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
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

        {/* RIGHT SIDE */}
        <div className="relative md:absolute md:left-[50%] lg:left-[55%] xl:left-[60%] flex flex-col items-center cursor-pointer mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%]">
          <div className="w-[380px] h-[380px] md:w-[482px] md:h-[482px]" />

          <Image
            src={ResDiamondLarge}
            alt="Diamond Large"
            className="absolute w-[380px] h-[380px] md:w-[482px] md:h-[482px] animate-spin-slow"
            width={380}
            height={380}
          />
          <Image
            src={ResDiamondMedium}
            alt="DiamondMedium"
            className="absolute w-[340px] h-[340px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
            width={340}
            height={340}
          />
          <Image
            src={ResDiamondSmall}
            alt="DiamondSmall"
            className="absolute w-[300px] h-[300px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
            width={220}
            height={220}
          />

          {/* PHOTO GALLERY UPLOAD  */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src={galleryIcon}
              alt="Photo Upload Icon"
              className="absolute"
              width={136}
              height={136}
            />
            <div className="absolute top-[75%] md:top-[70%]  md:left-[17px] translate-y-[-10px]">
              <p className="text-[12px] md:text-[14px] font-normal mt-1 leading-[24px] text-right">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
              <Image
                src={ResGalleryLine}
                alt="Gallery Line"
                className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
                width={66.33}
                height={59.37}
              />
            </div>
          </div>
        </div>
        <input type="file" accept="image/*" className="hidden" />
      </div>

      <div className="absolute top-4 right-4 md:top-0 md:right-8">
        <h1 className="text-xs md:text-sm font-extrabold mb-1">Preview</h1>
        <div className="w-24 h-24 md:w-32 md:h-32 border rounded overflow-hidden"></div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-between px-10">
        {/* BACK BUTTON */}
        {/* small screens */}
        <Link className="relative inset-0 md:hidden" aria-label="Back" href="/">
          <BackBtn />
        </Link>

        {/* PROCESS BUTTON*/}

        {/* small screens */}
        <Link href="/result" className="md:hidden">
          <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85] md:hidden">
            <span className="absolute rotate-[-45deg] text-xs font-normal md:hidden tracking-tighter">
              SUMMARY
            </span>
          </div>
        </Link>

        {/* larges screens */}
        <Link href="/result" className="hidden md:block">
          <div className="flex flex-row relative justify-center items-center">
            <span className="text-sm font-semibold md:block mr-10">
              GET SUMMARY
            </span>
            <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85] md:block" />
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
