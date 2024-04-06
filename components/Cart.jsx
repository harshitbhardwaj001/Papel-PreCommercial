"use client";
import { Sheet } from "./ui/sheet";
import React, { useState } from "react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <FaCartShopping
          size={28}
          className="flex-shrink-0 xs:max-md:w-[20px]"
        />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-white">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
