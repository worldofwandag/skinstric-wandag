import React from "react";
import DiamondButtons from "../components/ui/DiamondButtons";
import DiamondSmall from "../assets/ui/Diamond-dark-small.png";
import Link from "next/link";
import BackBtn from "../components/ui/BackBtn";
import SumBtn from "../components/ui/SumBtn";

const Page = () => {
  return (
    <div>
      {/* SUBHEADER */}
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      {/* SELECT DEMOGRAPHICS */}
      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
        <DiamondButtons diamondImageSrc={DiamondSmall} />
      </div>

      <div className="pt-4 md:pt-12 pb-8 bg-white sticky md:static bottom-40 mb-0 md:mb-0">
        <div className="flex justify-between max-w-full mx-auto px-13 md:px-9">
          <Link href="/result">
            <BackBtn />
          </Link>
          <Link href="/summary">
            <SumBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
