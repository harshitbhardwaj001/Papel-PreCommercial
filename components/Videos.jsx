import React from "react";

const Videos = () => {
  return (
    <div className="w-[100vw] h-[120vh] flex flex-col pt-[7vh] items-center gap-10 xs:max-md:pt-[5vh] xs:max-md:h-[100vh] ">
      <div className="absolute top-[295%] bg-[#97D4E3] h-[70vh] w-[100vw] z-[-1] xs:max-md:top-[397%] xs:max-md:h-[100vh]"></div>

      <h1 className="text-[40px] font-extrabold xs:max-md:text-[22px] xs:max-md:mt-[6rem]">
        WE GOT THE 'GRAM TALKING
      </h1>
      <h1 className="text-[40px] font-extrabold xs:max-md:text-[30px] mt-[-3rem]">
        ABOUT PAPEL...
      </h1>

      <div className="flex gap-12 xs:max-md:gap-5">
        <div className="video-card">
          <iframe
            width="305"
            height="542"
            src="/video_1.mp4"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[249px] xs:max-md:h-[442px]"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card xs:max-md:hidden">
          <iframe
            width="305"
            height="542"
            src="/video_2.mp4"
            className="rounded-[3rem] shadow-xl xs:max-md:w-[200px] xs:max-md:h-[300px]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-card xs:max-md:hidden">
          <iframe
            width="305"
            height="542"
            src="/video_3.mp4"
            className="rounded-[3rem] shadow-xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
