"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

// Define proper types for the component props
interface DiamondButtonsProps {
  diamondImageSrc: StaticImageData;
}

// Define a type for the hovered button state
type ButtonType = "demographics" | "cosmetic" | "skin" | "weather" | null;

const DiamondButtons: React.FC<DiamondButtonsProps> = ({ diamondImageSrc }) => {
  const [hoveredButton, setHoveredButton] = useState<ButtonType>(null);

  // Import medium and large diamond images
  const diamondMedium = require("../../assets/ui/Diamond-medium-medium.png");
  // const diamondLarge = require("../../assets/ui/Diamond-light-large.png");

  return (
    <div className="relative">
      {/* Small diamond - for demographics */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-400 ${
            hoveredButton === "demographics"
              ? "w-[602px] h-[602px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <Image
            src={diamondImageSrc}
            alt="Diamond Small"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Medium diamond - for cosmetic and skin */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-400 ${
            hoveredButton === "cosmetic" || hoveredButton === "skin"
              ? "w-[682px] h-[682px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <Image
            src={diamondMedium}
            alt="Diamond Medium"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Large diamond - for weather */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-400 ${
            hoveredButton === "weather"
              ? "w-[762px] h-[762px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <Image
            src={diamondImageSrc}
            alt="Diamond Large"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
        <div className="flex items-center justify-center col-start-2">
          <Link href="/summary">
            <button
              className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase"
              onMouseEnter={() => setHoveredButton("demographics")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="transform -rotate-45">Demographics</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center row-start-2 col-start-1">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("cosmetic")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Cosmetic Concerns</span>
          </button>
        </div>
        <div className="flex items-center justify-center row-start-2 col-start-3">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("skin")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Skin Type Details</span>
          </button>
        </div>
        <div className="flex items-center justify-center row-start-3 col-start-2">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("weather")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Weather</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiamondButtons;