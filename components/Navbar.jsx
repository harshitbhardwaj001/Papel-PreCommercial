"use client";

import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex gap-12 justify-center mr-[4rem] xs:max-md:hidden fixed w-full bg-[white] z-[10]">
        <div className="flex gap-[5rem] md:max-xl:gap-[2rem] h-[11vh] justify-center items-center bg-[#fff]">
          <div className="nav-left">
            <nav className="xs:max-md:hidden">
              <ul className="flex gap-20 text-[18px] md:max-xl:text-[14px] md:max-xl:gap-12 font-medium ml-[2rem]">
                <li>
                  <a href="/soon">About</a>
                </li>
                <li>
                  <a href="/">Shop</a>
                </li>
                <li>
                  <a href="/soon">Verify your Papel</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-center">
            <Link href="/soon">
              <Image
                src="/papel-logo-black.png"
                alt="logo"
                width={180}
                height={180}
                className="md:max-xl:w-[130px] xs:max-md:w-[130px]"
              />
            </Link>
          </div>
          <div className="nav-right">
            <nav className="xs:max-md:hidden">
              <ul className="flex gap-20 text-[18px] md:max-xl:text-[14px] md:max-xl:gap-12 font-medium">
                <li>
                  <a href="/soon">B2B</a>
                </li>
                <li>
                  <a href="/soon">Sustainaibility</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="corner-right flex gap-[3.5rem] items-center ml-[-2rem] xs:max-xl:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {/* <FaCartShopping size={28} className="" /> */}
            <Cart />
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex justify-between px-[1rem] md:hidden w-[100vw] h-[11vh] items-center fixed bg-[white] z-[10]">
        <MobileNav />
        <Image
          src="/papel-logo-black.png"
          alt="logo"
          width={140}
          height={80}
          className="h-[36px]"
        />
        {/* <FaCartShopping size={24} className="" /> */}
        <Cart />
      </div>
    </>
  );
};

export default Navbar;
