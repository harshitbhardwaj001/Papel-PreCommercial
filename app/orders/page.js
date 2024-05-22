import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Orders from "../../components/Orders";
import React from "react";


const page = async () => {
  return (
    <>
      <div className="xs:max-md:ml-0">
        <Navbar />
      </div>
      <Orders />
      <Footer />
    </>
  );
};

export default page;
