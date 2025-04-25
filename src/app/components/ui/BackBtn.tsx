import React from "react";

const BackBtn = () => {
  return (
    <div>
      {/* back button for small screens */}
      <div className=" w-12 h-12 left-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85] md:hidden">
        <span className="rotate-[-45deg] text-xs font-normal md:hidden">BACK</span>
      </div>

      {/* back button for bigs screens */}
      <div className="hidden md:flex flex-row relative justify-center items-center">
        <div className=" w-12 h-12 hidden md:flex justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]"></div>
        <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden md:block">
          ▶
        </span>

        <span className="text-sm font-semibold hidden md:block ml-6">BACK</span>
      </div>
    </div>
  );
};

export default BackBtn;
