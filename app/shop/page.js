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
      <div className="pt-[4rem] ">
        <HeroBanner />
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default page;
