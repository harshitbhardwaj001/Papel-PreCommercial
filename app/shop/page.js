import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="ml-[6%] xs:max-md:ml-0">
        <Navbar />
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default page;
