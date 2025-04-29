import React from "react";

const BackBtn = () => {
  return (
    <div>
      {/* back button for small screens */}
      <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
        <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">BACK</span>
      </div>

      {/* back button for bigs screens */}
      <div className="hidden sm:flex flex-row relative justify-center items-center">
        <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85]"></div>
        <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC]">
          ▶
        </span>

        <span className="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">BACK</span>
      </div>
    </div>
  );
};

export default BackBtn;
