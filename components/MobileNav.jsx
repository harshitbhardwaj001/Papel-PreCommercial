import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet className="w-[100vw] bg-white">
      <SheetTrigger>
        <Hamburger size={20} toggle={false} toggled={null} />
      </SheetTrigger>
      <SheetContent
        className="flex w-full flex-col pr-0 sm:max-w-lg bg-[#fff] items-center"
        side="left"
      >
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center justify-center">
            <Image
              src="/papel-logo-black.png"
              alt="logo"
              width={140}
              height={140}
            />
          </SheetTitle>
          <div className="flex w-full flex-col pr-10 pt-[3rem]">
            <nav>
              <ul className="flex flex-col gap-5 text-[28px] md:max-xl:text-[14px] text-[#1B3C87] md:max-xl:gap-12 font-medium ml-[2rem]">
                <li>
                  <a href="#">Shop</a>
                  <Image
                    src="/wave-design-gray.png"
                    alt="wave"
                    width={180}
                    height={210}
                    className="opacity-50 ml-6"
                  />
                </li>

                {/* <Separator className="bg-[#1B3C87]" /> */}
                <li>
                  <a href="#">About Us</a>
                  <Image
                    src="/wave-design-gray.png"
                    alt="wave"
                    width={180}
                    height={210}
                    className="opacity-50 ml-6"
                  />
                </li>
                {/* <Separator /> */}
                <li>
                  <a href="#">B2B</a>
                  <Image
                    src="/wave-design-gray.png"
                    alt="wave"
                    width={180}
                    height={210}
                    className="opacity-50 ml-6"
                  />
                </li>
                {/* <Separator /> */}
                <li>
                  <a href="#">Sustainability</a>
                  <Image
                    src="/wave-design-gray.png"
                    alt="wave"
                    width={180}
                    height={210}
                    className="opacity-50 ml-6"
                  />
                </li>
                {/* <Separator /> */}
                <li>
                  <a href="#">Verify your Papel</a>
                  <Image
                    src="/wave-design-gray.png"
                    alt="wave"
                    width={180}
                    height={210}
                    className="opacity-50 ml-6"
                  />
                </li>
                {/* <Separator /> */}
              </ul>
            </nav>
          </div>
        </SheetHeader>
        <SheetFooter>
          <h1 className="text-black text-[13px] text-right mt-[3.5rem] pr-10">
            &#169; PAPEL WATER
          </h1>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
