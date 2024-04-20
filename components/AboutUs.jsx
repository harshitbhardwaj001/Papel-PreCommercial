import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[100vw] h-[130vh] bg-[#97D4E3] flex gap-[8rem] px-[8rem] pt-[12rem] justify-center xs:max-md:px-[2rem] xs:max-md:pt-[7vh] xs:max-md:flex-col xs:max-md:gap-[1.5rem] xs:max-md:items-center xs:max-md:justify-start xs:max-md:h-[112vh]">
      <Image
        src="/wave-design-white.png"
        alt="wave"
        width={400}
        height={100}
        className="absolute top-[560%] left-[35%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
      />
      <Image
        src="/wave-design-white.png"
        alt="wave"
        width={400}
        height={100}
        className="absolute top-[565%] left-[32%] md:max-xl:left-[48%] md:max-xl:top-[17%] xs:max-md:hidden"
      />
      <div className="w-[35vw] h-[75vh] rounded-[3rem] shadow-lg bg-[#97D4E3] xs:max-md:hidden overflow-hidden">
        <Image
          src="/about.jpg"
          alt="about"
          width={500}
          height={500}
          className="w-[55vw] h-[76vh] xs:max-md:w-[75vw] xs:max-md:h-[40vh]"
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-[50px] font-extrabold leading-[5rem] xs:max-md:text-[30px] xs:max-md:text-center xs:max-md:mt-[10rem]">
          ABOUT US
        </h1>
        <p className="text-[20px] text-[#1B3C87] xs:max-md:text-[16px] xs:max-md:text-center">
          We started{" "}
          <strong className="text-[28px] xs:max-md:text-[23px] ">PAPEL</strong>{" "}
          with one single goal: <br className="xs:max-md:hidden" />{" "}
          <strong className="text-[24px] xs:max-md:text-[23px] ">
            To make India's most eco-friendly
          </strong>
          <br className="xs:max-md:hidden" />{" "}
          <strong className="text-[24px] xs:max-md:text-[23px]">
            functional beverage.
          </strong>
          <br className="xs:max-md:hidden" /> Enriched with vitamins & minerals,
          this is
          <br className="xs:max-md:hidden" />{" "}
          <strong className="text-[24px] xs:max-md:text-[23px]">
            India's first paper-based Alkaline water,
          </strong>
          <br className="xs:max-md:hidden" />
          which means
          <br className="xs:max-md:hidden" />
          <strong className="text-[24px] xs:max-md:text-[23px]">
            you can't see the water, but you'll feel the change...
          </strong>
          <br className="xs:max-md:hidden" /> That's how we've crafted PAPEL for
          you...
          <br className="xs:max-md:hidden" /> So you get nothing less than
          <br className="xs:max-md:hidden" />
          <strong className="text-[24px] xs:max-md:text-[23px]">
            a refreshing, crisp sipeach time.
          </strong>
        </p>
      </div>
      <div className="w-[35vw] h-[95vh] rounded-[3rem] shadow-lg bg-[#97D4E3] md:hidden xs:max-md:w-[75vw] xs:max-md:h-[40vh] xs:max-md:rounded-none">
        <Image
          src="/about.jpg"
          alt="about"
          width={500}
          height={500}
          className="w-[35vw] h-[95vh] xs:max-md:w-[75vw] xs:max-md:h-[40vh] "
        />
        {/* mobile mei about us waale section mei photo ke peeche white background aa rha hai  */}
      </div>
    </div>
  );
};

export default AboutUs;
