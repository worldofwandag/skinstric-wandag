'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ResDiamondLarge from "../assets/ui/ResDiamond-large.png";
import ResDiamondSmall from "../assets/ui/ResDiamond-small.png";
import ResDiamondMedium from "../assets/ui/ResDiamond-medium.png";
import cameraIcon from "../assets/ui/camera-icon.png";

const CameraLoading = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Show the loading state for 2 seconds before redirecting to the camera view
    const timer = setTimeout(() => {
      router.push('/camera/capture');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />
        
        <Image
          src={ResDiamondLarge}
          alt="Diamond Large"
          width={482}
          height={482}
          className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow"
        />
        <Image
          src={ResDiamondMedium}
          alt="DiamondMedium"
          width={444.34}
          height={444.34}
          className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
        />
        <Image
          src={ResDiamondSmall}
          alt="DiamondSmall"
          width={405.18}
          height={405.18}
          className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={cameraIcon}
            alt="Camera Icon"
            width={136}
            height={136}
            className="w-[100px] h-[100px] md:w-[136px] md:h-[136px]"
          />
        </div>
      </div>
      
      <p className="text-sm md:text-base mt-8">SETTING UP CAMERA ...</p>
      
      <div className="mt-12 text-center">
        <p className="text-xs md:text-sm mb-4">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
        <div className="flex justify-center space-x-8">
          <p className="text-xs md:text-sm">◇ NEUTRAL EXPRESSION</p>
          <p className="text-xs md:text-sm">◇ FRONTAL POSE</p>
          <p className="text-xs md:text-sm">◇ ADEQUATE LIGHTING</p>
        </div>
      </div>
    </div>
  );
};

export default CameraLoading;