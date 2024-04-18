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
import Image from "next/image";
import { useCart } from "@/Hooks/use-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const itemCount = items.length;
  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const { clearCart } = useCart();
  console.log(items);
  const fee = items.reduce((acc, item) => acc + item.shipping, 0);
  return (
    <Sheet className="w-[80vw]">
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <FaCartShopping
          size={28}
          className="flex-shrink-0 xs:max-md:w-[20px]"
        />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-white">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {"(" + items.length + ")"}</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea className="h-72 rounded-md">
                {items.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                {/* <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div> */}
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(cartTotal + fee)}</span>
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
              <button
                className="w-full hover:underline underline-offset-4 px-[1.5rem] py-[.5rem] rounded-[.5rem] text-[#bb2124] border-[1px] border-[#bb2124] font-semibold "
                onClick={() => clearCart()}
              >
                Empty Cart
              </button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-80 w-80 text-muted-foreground">
              <Image
                src="/character-with-product-1.png"
                fill
                alt="empty shopping cart "
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link href="#product" className="w-[80%] mx-auto">
                <button className="w-full hover:underline underline-offset-4 px-[1.5rem] py-[.5rem] rounded-[.5rem] text-[#1B3C87] font-semibold ">
                  Add items to your cart to checkout
                </button>
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
