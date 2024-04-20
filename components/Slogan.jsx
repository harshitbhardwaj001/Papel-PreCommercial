import Image from "next/image";
import React from "react";

const Slogan = () => {
  return (
    <div className="w-[100vw] h-[120vh] bg-[#97D4E3] flex gap-[8rem] px-[8rem] pt-[12rem] xs:max-md:px-[2rem] xs:max-md:pt-[5vh] justify-center xs:max-md:flex-col xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-[100vh]">
      <div className="flex flex-col gap-[1rem] ">
        <h1 className="text-[70px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center xs:max-md:leading-[2rem] xs:max-md:mt-[5rem]">
          DRINK <br className="xs:max-md:hidden" />
          THE <br /> CHANGE
        </h1>
        <p className="text-[22px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center">
          You say you love the planet. <br className="xs:max-md:hidden" /> And
          if you truly do, <br className="xs:max-md:hidden" /> you must&apos;ve
          felt that guilt while grabbing a plastic{" "}
          <br className="xs:max-md:hidden" /> water bottle in your hands...{" "}
          <br className="xs:max-md:hidden" /> We know the feeling...{" "}
          <br className="xs:max-md:hidden" />
          And that&apos;s why, we, at PAPEL believe that our{" "}
          <br className="xs:max-md:hidden" />
          hydration shouldn&apos;t hurt our home.{" "}
          <br className="xs:max-md:hidden" /> Grab your eco-friendly hydration
          products to give a <br className="xs:max-md:hidden" /> loving hug to
          nature.
        </p>
        <p className="text-[25px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center">
          With{" "}
          <strong className="text-[32px] xs:max-md:text-[23px] italic">
            PAPEL
          </strong>
          , here&apos;s your chance to
        </p>
        <h1 className="text-[35px] text-[#1B3C87] font-bold italic xs:max-md:text-[23px] xs:max-md:text-center">
          Drink The Change
        </h1>
      </div>
      <div className="w-[35vw] h-[95vh] rounded-[3rem] shadow-lg bg-[#fff] xs:max-md:w-[75vw] xs:max-md:h-[40vh] xs:max-md:rounded-none">
        <Image
          src="/slogan.jpg"
          alt="slogan"
          width={500}
          height={500}
          className="w-[35vw] h-[95vh] xs:max-md:w-[75vw] xs:max-md:h-[40vh] rounded-[3rem] shadow-lg xs:max-md:rounded-none"
        />
      </div>
    </div>
  );
};

export default Slogan;
