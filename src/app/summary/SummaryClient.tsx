"use client";

import React, { useState } from "react";
import Image from "next/image";
import radioButton from "../assets/ui/radioButton.png";
import activeRadioButton from "../assets/ui/activeRadioButton.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDemographicData, DemographicData } from "../components/DemographicDataProvider";

const needDominantBaselineFix = true;

// Define the types for option data
interface DemographicOption {
  name: string;
  confidence: number;
}

const SummaryClient: React.FC = () => {
  // Get data from context
  const { data } = useDemographicData();
  
  // This should never happen as the provider handles the null case,
  // but TypeScript requires this check
  if (!data) {
    return null;
  }

  // Create a local state to manage user selections
  const [localData, setLocalData] = useState<DemographicData>(data);

  // Default active category is "race"
  const [activeCategory, setActiveCategory] = useState<"race" | "age" | "sex">(
    "race"
  );

  // Function to handle category box click
  const handleCategoryClick = (category: "race" | "age" | "sex") => {
    setActiveCategory(category);
  };

  // Function to handle option selection (when user clicks on an option in the right section)
  const handleOptionSelect = (
    category: "race" | "age" | "sex",
    selectedOption: DemographicOption
  ) => {
    // Update the data state with the new selection
    setLocalData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        prediction: selectedOption.name,
        confidence: selectedOption.confidence,
      },
    }));
  };

  // Get active category data
  const activeData = localData[activeCategory];
  
  // Function to sort options based on category
  const getSortedOptions = (category: "race" | "age" | "sex", options: DemographicOption[]) => {
    if (category === "age") {
      // Define the correct order of age ranges
      const ageOrder = ["0-2", "3-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"];
      
      // Create a new sorted array based on the predefined order for age
      return [...options].sort((a, b) => {
        return ageOrder.indexOf(a.name) - ageOrder.indexOf(b.name);
      });
    }
    
    // For other categories, keep the default sorting (by confidence)
    return options;
  };

  return (
    <>
      {/* MIDDLE SECTION BOX SELECTOR */}
      <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
        <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
          {/* RACE BOX */}
          <div
            className={`p-3 cursor-pointer  ${
              activeCategory === "race"
                ? "bg-[#1A1B1C] text-white hover:bg-black"
                : "bg-[#F3F3F4]"
            } flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t`}
            onClick={() => handleCategoryClick("race")}
          >
            <p className="text-base font-semibold">{localData.race.prediction}</p>
            <h4 className="text-base font-semibold mb-1">RACE</h4>
          </div>

          {/* AGE BOX */}
          <div
            className={`p-3 cursor-pointer  ${
              activeCategory === "age"
                ? "bg-[#1A1B1C] text-white hover:bg-black"
                : "bg-[#F3F3F4]"
            } flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t`}
            onClick={() => handleCategoryClick("age")}
          >
            <p className="text-base font-semibold">{localData.age.prediction}</p>
            <h4 className="text-base font-semibold mb-1">AGE</h4>
          </div>

          {/* SEX BOX */}
          <div
            className={`p-3 cursor-pointer  ${
              activeCategory === "sex"
                ? "bg-[#1A1B1C] text-white hover:bg-black"
                : "bg-[#F3F3F4]"
            } flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t`}
            onClick={() => handleCategoryClick("sex")}
          >
            <p className="text-base font-semibold">{localData.sex.prediction}</p>
            <h4 className="text-base font-semibold mb-1">SEX</h4>
          </div>
        </div>

        {/* MIDDLE SECTION WITH CIRCLE */}
        <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
          {/* RACE TITLE */}
          {activeCategory === "race" && (
            <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
              {localData.race.prediction}
            </p>
          )}

          {/* AGE TITLE */}
          {activeCategory === "age" && (
            <p className="hidden md:block md:absolute text-[40px] mb-2 left-7 top-4">
              {localData.age.prediction} y.o.
            </p>
          )}

          {/* SEX TITLE */}
          {activeCategory === "sex" && (
            <p className="hidden md:block md:absolute text-[40px] mb-2 left-7 top-4">
              {localData.sex.prediction}
            </p>
          )}

          {/* ACTIVE CIRCLE (RACE/AGE/SEX) */}
          <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
            {/* This additional wrapper with zoom-resistant styling fixes the zoom issue */}
            <div style={{ 
              width: '100%', 
              height: '100%', 
              maxHeight: '384px',
              position: 'relative',
              transform: 'scale(1)',
              transformOrigin: 'center'
            }}>
              <CircularProgressbar
                value={activeData.confidence}
                strokeWidth={1.7}
                className="text-[#1A1B1C]"
                styles={buildStyles({
                  pathColor: "#1A1B1C",
                  textColor: "#1A1B1C",
                  pathTransitionDuration: 0.8,
                  strokeLinecap: "butt",
                  textSize: "14px",
                })}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl md:text-[40px] font-normal">
                  {activeData.confidence}
                  <span className="absolute text-xl md:text-3xl">%</span>
                </p>
              </div>
            </div>
          </div>

          <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
            If A.I. estimate is wrong, select the correct one.
          </p>
        </div>

        {/* RIGHT SECTION - Dynamic options based on active category */}
        <div className="bg-gray-100 pt-4 pb-4 md:border-t">
          <div className="space-y-0">
            <div className="flex justify-between px-4">
              <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                {activeCategory.toUpperCase()}
              </h4>
              <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                A.I. CONFIDENCE
              </h4>
            </div>

            {/* Dynamically render options based on active category with custom sorting */}
            {getSortedOptions(activeCategory, activeData.options).map((option, index) => {
              // Check if this option is the currently selected prediction
              const isSelected = option.name === activeData.prediction;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ${
                    isSelected ? "bg-[#1A1B1C] text-white hover:bg-black" : ""
                  }`}
                  onClick={() => handleOptionSelect(activeCategory, option)}
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src={isSelected ? activeRadioButton : radioButton}
                      alt="radio button"
                      className={`w-[12px] h-[12px] mr-2`}
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      {option.name}
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    {option.confidence}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryClient;