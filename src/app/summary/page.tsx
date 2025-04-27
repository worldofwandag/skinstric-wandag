import Link from "next/link";
import React from "react";
import BackBtn from "../components/ui/BackBtn";
import SumBtn from "../components/ui/SumBtn";
import Image from "next/image";
import radioButton from "../assets/ui/radioButton.png";

const Page = () => {
  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col ">
          {" "}
          {/* PARENT FOR MIDDLE SECTION */}
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
          {/* MIDDLE SECTION */}
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%] ">
              {/* RACE BOX */}
              <div className="p-3 cursor-pointer transition-colors bg-[#1A1B1C] text-white flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">EAST ASIAN</p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>
              {/* AGE BOX */}
              <div className="p-3 cursor-pointer transition-colors bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">20-29</p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>
              {/* SEX BOX */}
              <div className="p-3 cursor-pointer transition-colors bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">MALE</p>
                <h4 className="text-base font-semibold mb-1">SEX</h4>
              </div>
            </div>

            {/* MIDDLE SECTION WITH CIRCLE */}
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                East Asian
              </p>
              {/* HIDDEN UNTIL APPROPRIATE BOX IS CLICKED */}
              <p className="hidden md:hidden md:absolute text-[40px] mb-2 left-7 top-4">
                20-29 y.o.
              </p>
              <p className="hidden md:hidden md:absolute text-[40px] mb-2 left-7 top-4">
                Male
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
                    className="circle"
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
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%]  2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            {/* RIGHT SECTION */}
            {/* RACE PERCENTAGES */}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t ">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    RACE
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4 ">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      East Asian
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    82%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      South Asian
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    9%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Southeast Asian
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    4%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Latino Hispanic
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    2%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Middle Eastern
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    1%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      White
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    1%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Black
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    1%
                  </span>
                </div>
              </div>
            </div>

            {/* HIDDEN RIGHT SIDE UNTIL APPROPRIATE BOX IS SELECTED / CLICKED / ACTIVE */}
            {/* AGE PERCENTAGES*/}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t hidden">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    AGE
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4 ">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      0-9
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      10-19
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    4%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      20-29
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    96%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      30-39
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    2%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      40-49
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      50-59
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      60-69
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      70+
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>
              </div>
            </div>

            {/* SEX PERCENTAGES */}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t hidden">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    SEX
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4 ">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      MALE
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    96%
                  </span>
                </div>

                <div className="flex items-center justify-between h-[48px]  hover:bg-[#E1E1E2] px-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={radioButton}
                      alt="radio button"
                      className="w-[12px] h-[12px] mr-2"
                    />
                    <span className="font-normal text-base leading-6 tracking-tight">
                      FEMALE
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    4%
                  </span>
                </div>
              </div>
            </div>
          </div>
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
