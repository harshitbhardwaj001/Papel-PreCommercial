"use client";

import AboutPapel from "@/components/AboutPapel";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Slogan from "@/components/Slogan";
import AboutUs from "@/components/AboutUs";
import Videos from "@/components/Videos";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Subscription from "@/components/Subscription";

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
      {/* <Videos />
      <AboutPapel />
      <Slogan />

      <AboutUs />
      <Testimonials />
      <Subscription /> */}

      <Footer />
    </div>
  );
};

export default page;
