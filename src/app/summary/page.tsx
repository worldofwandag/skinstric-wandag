import Link from "next/link";
import React from "react";
import BackBtn from "../components/ui/BackBtn";
import SumBtn from "../components/ui/SumBtn";

const Page = () => {
  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="h-full max-w-full mx-5 px-4 md:px-auto flex flex-col ">
          {/* PARENT FOR MIDDLE SECTION */}

          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0 md:mt-3">
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
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-10 md:gap-4 pb-0 md:pb-0 md:mb-0">
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
              <div className="p-3 cursor-pointer transition-colors bg-[#1A1B1C] text-white flex-1 flex flex-col justify-between">
                <p className="text-base font-semibold">EAST ASIAN</p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>
              <div className="p-3 cursor-pointer transition-colors bg-[#F3F3F4] flex-1 flex flex-col justify-between">
                <p className="text-base font-semibold">20-29</p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>
              <div className="p-3 cursor-pointer transition-colors bg-[#F3F3F4] flex-1 flex flex-col justify-between">
                <p className="text-base font-semibold">MALE</p>
                <h4 className="text-base font-semibold mb-1">GENDER</h4>
              </div>
            </div>

            {/* MIDDLE SESCTION WITH CIRCLE */}
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh]">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-7 top-4">
                East asian
              </p>
              
              {/* CIRCLE */}
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="50"
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-black"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray="251.32741228718345"
                    strokeDashoffset="45.25320423030431"
                    transform="rotate(-90 50 50)"
                    cx="50"
                    cy="50"
                    r="50"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl md:text-5xl font-normal">82%</p>
                </div>
              </div>
              <p className="md:absolute text-xs text-gray-600 md:text-base font-normal mb-1 leading-[24px] md:bottom-[-13%]">
                If A.I. estimate is wrong, select the correct one.
              </p>

              
            </div>

            <div className="bg-gray-100 p-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium mb-2">A.I. CONFIDENCE</h4>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">East asian</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "81.99" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">82.0%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">South asian</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "8.61%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">8.6%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">Southeast asian</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "4.32%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">4.3%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">Latino hispanic</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "1.88%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">1.9%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">Middle eastern</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "1.62%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">1.6%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">White</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "0.93%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">0.9%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-20 truncate">Black</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: "0.65%" }}
                    ></div>
                  </div>
                  <span className="w-8 text-right">0.7%</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="h-[80dvh] flex flex-col items-center justify-center bg-white">
            <div className="absolute bottom-8 w-full flex justify-between px-8">
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
