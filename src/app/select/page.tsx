import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* SUBHEADER */}
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">A.I. ANALYSIS</h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      {/* SELECT DEMOGRAPHICS */}
      <div className="h-[80dvh] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute border-2 border-dotted border-gray-400 transform rotate-45 opacity-0 cursor-pointer"
              style={{
                width: "400px",
                height: "400px",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "rotate(45deg) scale(0.8, 0.8)",
                opacity: "0",
              }}
            ></div>

            
          </div>

          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-[1px]">
            <div className="flex items-center justify-center col-start-2">
              <Link href="/final">
                <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-4 cursor-pointer">
                  <span className="transform -rotate-45">Demographics</span>
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-4 cursor-not-allowed">
                <span className="transform -rotate-45">Cosmetic Concerns</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-4 cursor-not-allowed">
                <span className="transform -rotate-45">Skin Type Details</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-4 cursor-not-allowed">
                <span className="transform -rotate-45">Weather</span>
              </button>
            </div>
          </div>


        </div>
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
