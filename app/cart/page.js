"use client";
import { useCart } from "@/Hooks/use-cart";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const page = () => {
  const { items, removeItem } = useCart();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font.bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div
            className={cn("lg:col-span-7", {
              "rounded-lg border-2 border-dashed border-zinc-200 p-12":
                items.length === 0,
            })}
          >
            <h2 className="sr-only">Items in your Shopping Cart</h2>
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-1">
                <div className="relative mb-4 h-40 w-40 text-muted-foreground">
                    <Image src='/papel-product-png.png' fill loading='eager' alt="empty shopping cart"/>
                </div>
                <h3 className="font semi-bold text-2-xl">Your cart is empty</h3>
                <p className="text-muted-foreground text-center">Whoops! Nothing to show here yet.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
