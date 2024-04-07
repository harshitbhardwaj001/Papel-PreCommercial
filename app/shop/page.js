"use client";

import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="xs:max-md:ml-0">
        <Navbar />
      </div>
      <div className="pt-[5rem] ">
        <HeroBanner />
      </div>
      <div className="scroll-smooth" id="product">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default page;
