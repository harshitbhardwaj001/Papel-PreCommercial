"use client";

import { useCart } from "@/Hooks/use-cart";
import Image from "next/image";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";

const Products = () => {
  const [addone, setAddone] = useState(1);
  const [addtwo, setAddtwo] = useState(1);
  const [addthree, setAddthree] = useState(1);

  const { addItem } = useCart();

  const changeAddone = (i) => {
    if (i === -1) {
      if (addone > 1) setAddone(addone - 1);
    } else {
      setAddone(addone + 1);
    }
  };
  const changeAddtwo = (i) => {
    if (i === -1) {
      if (addtwo > 1) setAddtwo(addtwo - 1);
    } else {
      setAddtwo(addtwo + 1);
    }
  };
  const changeAddthree = (i) => {
    if (i === -1) {
      if (addthree > 1) setAddthree(addthree - 1);
    } else {
      setAddthree(addthree + 1);
    }
  };
  const { toast } = useToast();

  return (
    <div className="xs:max-md:relative w-[100vw] h-[110vh] xs:max-md:h-[225vh] flex flex-col pt-[3rem] items-center gap-10 xs:max-md:pt-[5vh] lg:my-[5rem]">
      <div className="absolute top-[160%] bg-[#97D4E3] h-[75vh] w-[100vw] z-[-1] xs:max-md:top-[45%] xs:max-md:h-[130vh]"></div>
      <h1 className="text-[60px] font-extrabold xs:max-md:text-[45px]">
        PRODUCTS
      </h1>
      <p className="text-[22px] text-[#1B3C87] font-medium mt-[-3rem] tracking-wide xs:max-md:text-[13px] xs:max-md:mt-[-3rem] xs:max-md:text-center">
        Here you can see all our products
      </p>
      <div className="flex gap-12 xs:max-md:flex-col xs:max-md:gap-[4rem] xs:max-md:items-center">
        <div className="video-card">
          <div className="flex flex-col gap-8 mx:max-md:gap-[3.8rem] xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[67vw] overflow-hidden">
              <Image
                src="/website-product-6-pack.png"
                alt="product-1"
                width={400}
                height={400}
                className="xs:max-md:pt-[1rem] rounded-[3rem]"
              />
            </div>
            <div className="flex flex-col gap-5 xs:max-md:gap-3">
              <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
                <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                  <h1>Product Name</h1>
                  <h1>Quantity 6 Packs</h1>
                  <h1>Cost &#8377;300</h1>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="xs:max-md:text-[11px]">Quantity</h1>
                  <div className="flex gap-4 xs:max-md:gap-2">
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => {
                        changeAddone(-1);
                      }}
                    >
                      -
                    </button>
                    <div className="text-center text-[22px]">{addone}</div>
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => {
                        changeAddone(1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-[#1B3C87] px-[1.5rem] py-[.5rem] rounded-[.5rem] text-white font-semibold"
                onClick={() => {
                  addItem({
                    id: 1,
                    name: "Product Name",
                    description: "Quantity 6 Packs",
                    quantity: addone,
                    price: 300,
                    image: "/website-product-6-pack.png",
                  });
                  toast({
                    title: "Congratulations!",
                    description: "Your product has been added to the cart",
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-8 xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[67vw] overflow-hidden">
              <Image
                src="/website-product-12-pack.png"
                alt="product-1"
                width={400}
                height={400}
                className="rounded-[3rem]"
              />
            </div>
            <div className="flex flex-col gap-5 xs:max-md:gap-3">
              <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
                <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                  <h1>Product Name</h1>
                  <h1>Quantity 12 Packs</h1>
                  <h1>Cost &#8377;300</h1>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="xs:max-md:text-[11px]">Quantity</h1>
                  <div className="flex gap-4 xs:max-md:gap-2">
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => {
                        changeAddtwo(-1);
                      }}
                    >
                      -
                    </button>
                    <div className="text-center text-[22px]">{addtwo}</div>
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => {
                        changeAddtwo(1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-[#1B3C87] px-[1.5rem] py-[.5rem] rounded-[.5rem] text-white font-semibold"
                onClick={() => {
                  addItem({
                    id: 2,
                    name: "Product Name",
                    description: "Quantity 12 Packs",
                    quantity: addtwo,
                    price: 300,
                    image: "/website-product-12-pack.png",
                  });
                  toast({
                    title: "Congratulations!",
                    description: "Your product has been added to the cart",
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="video-card">
          <div className="flex flex-col gap-8 xs:max-md:items-center">
            <div className="w-[350px] h-[360px] bg-[#fff] shadow-xl rounded-[3rem] xs:max-md:w-[67vw] xs:max-md:h-[67vw] overflow-hidden">
              <Image
                src="/website-product-24-pack.png"
                alt="product-1"
                width={400}
                height={400}
                className="pt-[0rem] rounded-[3rem]"
              />
            </div>
            <div className="flex flex-col gap-5 xs:max-md:gap-3">
              <div className="flex gap-10 px-[0.8rem] xs:max-md:gap-5">
                <div className="flex flex-col text-[20px] xs:max-md:text-[15px]">
                  <h1>Product Name</h1>
                  <h1>Quantity 24 Packs</h1>
                  <h1>Cost &#8377;300</h1>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="xs:max-md:text-[11px]">Quantity</h1>
                  <div className="flex gap-4 xs:max-md:gap-2">
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => changeAddthree(-1)}
                    >
                      -
                    </button>
                    <div className="text-center text-[22px]">{addthree}</div>
                    <button
                      className="w-[30px] h-[30px] bg-[#fff] shadow-lg rounded-[8px] text-center text-[22px]"
                      onClick={() => changeAddthree(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-[#1B3C87] px-[1.5rem] py-[.5rem] rounded-[.5rem] text-white font-semibold"
                onClick={() => {
                  addItem({
                    id: 3,
                    name: "Product Name",
                    description: "Quantity 24 Packs",
                    quantity: addthree,
                    price: 300,
                    image: "/website-product-24-pack.png",
                  });
                  toast({
                    title: "Congratulations!",
                    description: "Your product has been added to the cart",
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
