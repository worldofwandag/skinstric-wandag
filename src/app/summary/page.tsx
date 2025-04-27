import Link from "next/link";
import React from "react";
import BackBtn from "../components/ui/BackBtn";
import SumBtn from "../components/ui/SumBtn";
import Image from "next/image";
import radioButton from "../assets/ui/radioButton.png";
import SummaryClient from "./SummaryClient";

// Server component that will prefetch and prepare data
const Page = async () => {
  // In the future, you could fetch data from your API here
  // For now, we'll use hardcoded data
  const demographicData = {
    race: {
      prediction: "East Asian",
      confidence: 82,
      options: [
        { name: "East Asian", confidence: 82 },
        { name: "South Asian", confidence: 9 },
        { name: "Southeast Asian", confidence: 4 },
        { name: "Latino Hispanic", confidence: 2 },
        { name: "Middle Eastern", confidence: 1 },
        { name: "White", confidence: 1 },
        { name: "Black", confidence: 1 },
      ]
    },
    age: {
      prediction: "20-29",
      confidence: 70,
      options: [
        { name: "0-9", confidence: 0 },
        { name: "10-19", confidence: 4 },
        { name: "20-29", confidence: 96 },
        { name: "30-39", confidence: 2 },
        { name: "40-49", confidence: 0 },
        { name: "50-59", confidence: 0 },
        { name: "60-69", confidence: 0 },
        { name: "70+", confidence: 0 },
      ]
    },
    sex: {
      prediction: "MALE",
      confidence: 96,
      options: [
        { name: "MALE", confidence: 96 },
        { name: "FEMALE", confidence: 4 },
      ]
    }
  };

  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col ">
          {/* TOP SECTION */}
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">
              PREDICTED RACE &amp; AGE
            </h4>
          </div>
          
          {/* Client component handles all interactivity */}
          <SummaryClient data={demographicData} />

          {/* BOTTOM */}
          <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
            <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
              <Link href="/select">
                <BackBtn />
              </Link>
              <Link href="/">
                <SumBtn />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;