import React from 'react';

const ProcessBtn = () => {
    return (
        <div>
          <div className="md:hidden">  
          <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]">
            <span className="absolute rotate-[-45deg] text-xs font-normal tracking-tighter">
              PROCESS
            </span>
          </div>
          </div>
       

        {/* large screens */}
        
        <div className="hidden md:flex">
          <div className="flex flex-row relative justify-center items-center">
            <span className="text-sm font-semibold mr-10">
              PROCESS
            </span>
            <div className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]" />
            <span className="absolute right-[30px] bottom-[13px] scale-[0.9]">
              ▶
            </span>
          </div></div>
        
        </div>
    );
}

export default ProcessBtn;
