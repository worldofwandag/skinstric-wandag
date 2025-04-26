import React from "react";
import DiamondButtons from "../components/ui/DiamondButtons";
import DiamondSmall from "../assets/ui/Diamond-dark-small.png";

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
      <div className="h-[80dvh] flex flex-col items-center justify-center bg-white">
        <DiamondButtons diamondImageSrc={DiamondSmall} />
        
        <div className="absolute bottom-8 w-full flex justify-between px-8">
          <a href="/result">
            <div className="relative w-12 h-12 flex items-center justify-center border border-black rotate-45 cursor-pointer">
              <span className="absolute rotate-[-45deg] text-xs font-semibold">
                Back
              </span>
            </div>
          </a>
          <a href="/">
            <div className="relative w-12 h-12 flex items-center justify-center border border-black rotate-45 cursor-pointer">
              <span className="absolute rotate-[-45deg] text-xs font-semibold">
                Home
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;