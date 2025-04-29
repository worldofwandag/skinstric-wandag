import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ResDiamondLarge from "../assets/ui/ResDiamond-large.png";
import ResDiamondSmall from "../assets/ui/ResDiamond-small.png";
import ResDiamondMedium from "../assets/ui/ResDiamond-medium.png";
import cameraIcon from "../assets/ui/camera-icon.png";
import CameraLoading from "../components/CameraLoading";

const CameraPage = () => {
  return (
    <div className="md:h-[85vh] h-[65vh] bg-white flex items-center justify-center">
      <CameraLoading />
    </div>
  );
};

export default CameraPage;