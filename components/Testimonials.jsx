import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-20 w-[100vw] h-[110vh] mt-[-16rem] bg-[#97D4E3] items-center justify-center xs:max-md:px-[2rem] xs:max-md:pt-[5vh] xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-[70vh] xs:max-md:mt-[18rem]">
      <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center">
        TESTIMONIALS
      </h1>
      <div className="flex gap-[4rem] xs:max-md:flex-col xs:max-md:gap-[2rem]">
        <div className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
          <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
          <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
            Great Cause, Great People & Absolutely Great For The Environment.
          </h1>
          <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
            NAME
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-[30vw] xs:max-md:w-full">
          <div className="w-[100px] h-[100px] rounded-full bg-[white] xs:max-md:w-[60px] xs:max-md:h-[60px]"></div>
          <h1 className="text-[28px] font-semibold text-center text-[#1B3C87] xs:max-md:text-[20px]">
            Great Cause, Great People & Absolutely Great For The Environment.
          </h1>
          <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[18px]">
            NAME
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
