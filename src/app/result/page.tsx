import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative md:pt-[64px]">
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="text-black font-semibold text-xs md:text-sm">
          TO START ANALYSIS
        </p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative mb-32 md:mb-60 space-y-16 md:space-y-0">
        <div className="relative md:absolute md:left-[40%] md:-translate-x-full flex flex-col items-center cursor-pointer">
          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[120px] !h-[120px] md:!w-[300px] md:!h-[300px] rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "rotate(233.856deg)",
            }}
          ></div>

          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[110px] !h-[110px] md:!w-[290px] md:!h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "translate(-50%, -50%) rotate(104.863deg)"
            }}
          ></div>

          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[100px] !h-[100px] md:!w-[280px] md:!h-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "translate(-50%, -50%) rotate(347.596deg)",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-camera w-6 h-6 md:w-12 md:h-12"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
            <div className="absolute top-[55%] right-[-40px] md:right-[-90px] translate-y-[-20px]">
              <div className="w-[40px] md:w-[80px] h-px bg-black"></div>
              <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:absolute md:left-[60%] flex flex-col items-center cursor-pointer mt-12 md:mt-0">
          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[120px] !h-[120px] md:!w-[300px] md:!h-[300px] rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "rotate(233.856deg)",
            }}
          ></div>

          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[110px] !h-[110px] md:!w-[290px] md:!h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "translate(-50%, -50%) rotate(104.863deg)",
            }}
          ></div>

          <div
            className="w-[350px] h-[350px] border border-dotted border-gray-800 rotate-45 !w-[100px] !h-[100px] md:!w-[280px] md:!h-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-gray-800"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
              transform: "translate(-50%, -50%) rotate(347.596deg)",
            }}
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-image w-6 h-6 md:w-12 md:h-12"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <div className="absolute top-[55%] left-[-40px] md:left-[-90px] translate-y-[20px]">
              <div className="w-[40px] md:w-[80px] h-px bg-black"></div>
              <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
            </div>
          </div>
        </div>
        <input type="file" accept="image/*" className="hidden" />
      </div>
      <div className="absolute top-4 right-4 md:top-0 md:right-8">
        <h1 className="text-xs md:text-sm font-extrabold mb-1">Preview</h1>
        <div className="w-24 h-24 md:w-32 md:h-32 border rounded overflow-hidden"></div>
      </div>
      <div className="absolute bottom-48 md:!bottom-28  left-6 md:left-8">
        <div className="relative w-10 h-10 md:!w-12 md:h-12 flex items-center justify-center border border-black rotate-45">
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            BACK
          </span>
          <a className="absolute inset-0" aria-label="Back" href="/"></a>
        </div>
      </div>
      <div className="absolute bottom-48 md:bottom-28  right-6 md:right-8">
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-black rotate-45 cursor-pointer ">
          <span className="absolute rotate-[-45deg] text-xs scale-[0.7] md:scale-[0.8] font-semibold">
            PROCESS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
