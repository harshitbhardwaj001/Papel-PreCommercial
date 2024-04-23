import React from "react";

const page = () => {
  return (
    <>
      <div className="flex gap-[20rem] w-[98vw] min-h-[100vh] bg-[#fff] xs:max-md:block xs:max-md:h-auto pt-[8rem] px-[5rem] overflow-hidden">
        <h1 className="text-[40px] font-bold w-[50vw]">Shipping Policy</h1>
        <div className="w-[50vw]">
          <h1 className="text-[25px] font-bold mt-[1rem] font-gilroybold">
            SHIPPING & DELIVERY
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-medium leading-[2rem] my-[1rem] font-gilroymedium">
            We&apos;re happy to deliver our refreshing alkaline water right to
            your doorstep!
          </p>
          <h1 className="text-[22px] font-bold mt-[1rem] font-gilroybold">
            Order Processing
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            Orders are processed within 1-2 business days.
          </p>
          <h1 className="text-[22px] font-bold mt-[3rem] font-gilroybold">
            Delivery Timelines
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            Delivery typically takes 2-5 business days depending on your
            location. We offer faster delivery options at checkout for an
            additional fee.
          </p>
          <h1 className="text-[22px] font-bold mt-[3rem] font-gilroybold">
            Delivery Charges
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            Delivery charges are calculated at checkout based on your order
            total and delivery location.
          </p>
          <h1 className="text-[22px] font-bold mt-[3rem] font-gilroybold">
            Free Delivery
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            Enjoy free delivery on orders above ₹[300]!
          </p>
          <h1 className="text-[22px] font-bold mt-[3rem] font-gilroybold">
            Tracking
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            You&apos;ll receive a tracking number once your order is dispatched.
          </p>
          <h1 className="text-[22px] font-bold mt-[3rem] font-gilroybold">
            Service Area
          </h1>
          <p className="text-[#1A3C86] text-[1.1rem] font-gilroymedium">
            We currently deliver to most major cities and towns across India.
            For specific information on your area, reach out to our customer
            support team at [phone number] or [email address].
          </p>
        </div>
      </div>
      <p className=" text-[20px] text-center h-[10vh] font-bold">
        &#169;2024{" "}
        <span className="text-[#1A3C86]">
          BELLATOR BEVERAGES PRIVATE LIMITED
        </span>
      </p>
    </>
  );
};

export default page;
