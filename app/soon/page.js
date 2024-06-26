import Link from "next/link";
import { TbShoppingCartSearch } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <img
        src="/papel-llogoo.png"
        alt="logo"
        className="absolute top-8 w-[50px] left-12 xs:max-md:w-[80px] xs:max-md:relative xs:max-md:mx-auto xs:max-md:top-[40px] xs:max-md:left-0"
      />
      <div className="absolute top-8 right-12 z-10 xs:max-md:hidden">
        <Link
          href="/"
          className="text-[18px] font-bold hover:underline underline-offset-8 hover:text-[#1A3C86] xs:max-md:text-[15px] xs:max-md:font-medium xs:max-md:underline-offset-4 flex gap-2"
        >
          <TbShoppingCartSearch className="text-[25px] xs:max-md:text-[20px]" />
          SHOP NOW
        </Link>
      </div>
      <div className="flex gap-32 w-[100vw] h-[100vh] bg-[#fff] xs:max-md:block xs:max-md:h-auto">
        <div className="flex flex-col gap-10 w-[40vw] pt-[8rem] pl-[10rem] xs:max-md:pl-[0rem] xs:max-md:items-center xs:max-md:w-[100vw] xs:max-md:pt-[5rem]">
          <h1 className="text-[35px] text-[#1A3C86] text-left font-medium tracking-wide mb-[-2rem] xs:max-md:text-[18px] xs:max-md:text-center">
            We&apos;re almost there
          </h1>
          <h1 className="text-[150px] text-black text-left font-semibold leading-[7.9rem] tracking-wider ml-[-0.8rem] xs:max-md:text-[45px] xs:max-md:font-extrabold xs:max-md:leading-[2.5rem] xs:max-md:ml-[0rem] xs:max-md:text-center">
            Coming Soon
          </h1>
          <div className="md:hidden">
            <img
              src="/character-with-product-1.png"
              alt="sample"
              className="w-[520px] "
            />
          </div>
          <p className="text-black text-[18px] xs:max-md:text-[15px] xs:max-md:text-center xs:max-md:w-[80vw]">
            Join our newsletter to be the first to know when our website
            launches and receive updates on every upcoming news.
          </p>
          <div className="flex gap-5 xs:max-md:items-center xs:max-md:gap-3 xs:max-md:mb-[5rem]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[20rem] h-[3rem] border-[1px] border-[#000] pl-[1rem] text-black font-medium text-[18px] xs:max-md:w-[13rem] xs:max-md:text-[15px]"
            />
            <button className="bg-[#1A3C86] text-[#fff] w-[10rem] h-[3rem] font-medium xs:max-md:w-[7rem] xs:max-md:text-[15px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="overflow-hidden xs:max-md:hidden">
          <img src="/character-with-product-1.png" alt="sample" />
        </div>
      </div>
    </>
  );
}
