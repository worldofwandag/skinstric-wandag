import Link from "next/link";

export default function Home() {
  return (
    <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
      <div className="flex flex-col items-center justify-center  h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        {/* Background Dotted Borders */}
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="w-[350px] h-[350px] border border-dotted border-black rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="w-[420px] h-[420px] border border-dotted border-black rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
        </div>

        {/* Main Heading */}
        <div className="relative z-10 text-center transition-transform duration-700 ease-in-out translate-x-0">
          <h1 className="text-[60px] lg:text-[100px] font-inter font-normal tracking-tighter leading-none">
            Sophisticated
            <br />
            <span className="block transition-transform duration-700 ease-in-out translate-x-0">
              skincare
            </span>
          </h1>
        </div>

        {/* Subheading for Small Screens */}
        <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground text-[#1a1b1c83]">
          Skinstric developed an A.I. that creates a highly-personalized routine
          tailored to what your skin needs.
        </p>

        {/* Button for Small Screens */}
        <div className="z-10 mt-4 lg:hidden">
          <a href="/testing">
            <button className="relative flex items-center gap-4">
              <span className="text-[12px] font-bold cursor-pointer">
                ENTER EXPERIENCE
              </span>
              <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>
              <span className="absolute left-[129px] scale-[0.5]">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current text-black"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>

        {/* Subheading for Large Screens */}
        <div className="hidden lg:block fixed bottom-[calc(-7vh)]  left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
          <p>
            Skinstric developed an A.I. that creates a
            <br />
            highly-personalized routine tailored to
            <br />
            what your skin needs.
          </p>
        </div>

        {/* Left Section for Large Screens */}
        <div className="hidden lg:block fixed left-[calc(-55vw)] top-1/2 -translate-y-1/2  w-[500px] h-[500px] transition-opacity duration-500 ease-in-out opacity-100">
          <div className="relative w-full h-full">
            {/* left diamond here */}
            <div className="w-full h-full border border-dotted border-black rotate-45 fixed inset-0"></div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 px-3 py-1">
              Discover A.I.
              <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 cursor-pointer"></div>
              <span className="absolute left-[108px] scale-[0.6]">▶</span>
            </button>
          </div>
        </div>

        {/* Right Section for Large Screens */}
        <div className="hidden lg:block fixed top-1/2 right-[calc(-55vw)] -translate-y-1/2 w-[500px] h-[500px] transition-opacity duration-500 ease-in-out opacity-100">
          <div className="relative w-full h-full">
            {/* right diamond here */}
            <div className="w-full h-full border border-dotted border-black rotate-45 absolute inset-0"></div>
            <Link href="/testing">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 px-3 py-1">
                <div className="w-[30px] h-[30px] border border-solid border-black rotate-45"></div>
                <span className="absolute left-[20px] scale-[0.6] rotate-180 cursor-pointer">
                  ▶
                </span>
                Take the Test
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
