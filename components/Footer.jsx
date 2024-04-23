import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] h-[80vh] flex gap-[8rem] bg-[#101821] px-[5rem] items-center xs:max-md:hidden">
        <div className="flex flex-col gap-3 w-[35vw] mt-[6rem]">
          {/* <h1 className="text-[35px] font-semibold text-white">ABOUT PAPEL</h1>
          <p className="text-[18px] text-[#d6d6d6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            pariatur porro a ad quasi veniam aliquid quaerat. Reiciendis vel
            accusamus beatae eum ea, dignissimos pariatur ipsa, veritatis
            ratione iusto maiores. Minus numquam incidunt corporis recusandae
            enim, iste aliquid possimus asperiores molestiae, molestias qui
            maxime quisquam! maiores. Minus numquam incidunt corporis recusandae
            enim, iste aliquid possimus asperiores molestiae, molestias qui
            maxime quisquam!
          </p> */}
          <Image
            src="/papel-logo-white.png"
            alt="logo"
            width={300}
            height={500}
          />
          {/* <p className="text-[18px] text-[#d6d6d6]">
            Subscribe to our newsletter
          </p> */}
          <Image
            src="/wave-design-white.png"
            alt="wave"
            width={400}
            height={200}
            className="ml-[-0.8rem]"
          />
          <div className="flex gap-5">
            <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
              <Link
                href="https://www.instagram.com/papelwater/"
                target="_blank"
              >
                <FaInstagram size={30} className="text-[#101821]" />
              </Link>
            </div>
            <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
              <Link href="#" target="_blank">
                <FaFacebook size={30} className="text-[#101821]" />
              </Link>
            </div>
            <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
              <Link
                href="https://www.linkedin.com/company/papel-water/"
                target="_blank"
              >
                <FaLinkedin size={30} className="text-[#101821]" />
              </Link>
            </div>
            {/* <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center">
              <FaTwitter size={30} className="text-[#101821]" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[28px] font-medium text-[#fff] w-[20vw]">
          <Link href="#">
            <h1>INVESTORS</h1>
          </Link>
          <Link href="/terms">
            <h1>TERMS OF USE</h1>
          </Link>
          <Link href="/privacy">
            <h1>PRIVACY POLICY</h1>
          </Link>
          <Link href="/return">
            <h1>RETURN & REFUND</h1>
          </Link>
          <Link href="#">
            <h1>CONTACT US</h1>
          </Link>
        </div>
        <div className="flex flex-col gap-[1.2rem] mt-[5.4rem] xs:max-md:hidden">
          <h1 className="font-medium text-[28px] text-white">Payment</h1>
          <h1 className="font-medium text-[22px] text-[#bebebe] leading-[1.5rem] ">
            Secured payments <br /> powered by
          </h1>
          <div className="w-[17vw] h-[21vh] bg-none mt-[0.8rem] relative">
            <Image
              src="/PhonePe-Logo.png"
              alt="Phonepe"
              width={220}
              height={220}
              className="absolute top-[-2.5rem] left-[-1.8rem]"
            />
          </div>
          <h1 className="text-white text-[12px] text-left mt-[4rem]">
            &#169; BELLATOR BEVERAGES PRIVATE LIMITED
          </h1>
        </div>
      </div>
      <div className="w-[100vw] h-[93vh] flex flex-col gap-[1.5rem] bg-[#101821] px-[2rem] md:hidden">
        <div>
          <h1 className="text-[24px] font-semibold text-white mt-[1rem] leading-[4rem]">
            ABOUT PAPEL
          </h1>
          <p className="text-[13px] text-[#d6d6d6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            pariatur porro a ad quasi veniam aliquid quaerat. Reiciendis vel
            accusamus beatae eum ea, dignissimos pariatur ipsa, veritatis
            ratione iusto maiores. Minus numquam incidunt corporis recusandae
            enim, iste aliquid possimus asperiores molestiae, molestias qui
            maxime quisquam! maiores. Minus numquam incidunt corporis recusandae
            enim, iste aliquid possimus asperiores molestiae, molestias qui
            maxime quisquam!
          </p>
        </div>
        <div className="flex gap-[2.5rem]">
          <div className="flex flex-col gap-[0.3rem] text-[15px] font-medium text-white">
            <h1>PAPEL FAQs</h1>
            <h1>INVESTORS</h1>
            <h1>PRIVACY POLICY</h1>
            <h1>TERMS OF USE</h1>
            <h1>CONTACT US</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[16px] text-white">Payment</h1>
            <h1 className="font-medium text-[14px] text-[#bebebe] ">
              Secured payments <br /> powered by
            </h1>
            <div className="w-[40vw] h-[11vh] bg-[#fff] mt-[0.8rem] flex justify-center items-center">
              <Image
                src="/PhonePe-Logo.png"
                alt="Phonepe"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <Image
          src="/wave-design-white.png"
          alt="wave"
          width={250}
          height={200}
          className="ml-[-0.8rem] mt-[-1.3rem]"
        />
        <div className="flex gap-[2.5rem] mt-[-1.2rem]">
          <div className="flex gap-2">
            <div className="w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center items-center">
              <FaInstagram size={20} className="text-[#101821]" />
            </div>
            <div className="w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center items-center">
              <FaFacebook size={20} className="text-[#101821]" />
            </div>
            <div className="w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center items-center">
              <FaLinkedin size={20} className="text-[#101821]" />
            </div>
            {/* <div className="w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center items-center">
              <FaTwitter size={20} className="text-[#101821]" />
            </div> */}
          </div>
          <h1 className="text-white text-[13px] text-right mt-[0.3rem] ml-[-1rem]">
            &#169;BELLATOR BEVERAGES
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
