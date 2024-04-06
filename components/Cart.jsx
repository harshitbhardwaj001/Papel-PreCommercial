"use client";
import { Sheet, SheetFooter } from "./ui/sheet";
import React, { useState } from "react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FaCartShopping } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Cart = () => {
  const itemCount = 1;
  const fee = 1;
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
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">Cart Items</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>0</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total </span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link href="/cart" className="w-full">
                    <button className="w-full bg-[#1B3C87] px-[1.5rem] py-[.5rem] rounded-[.5rem] text-white font-semibold">
                      Continue to Checkout
                    </button>
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
