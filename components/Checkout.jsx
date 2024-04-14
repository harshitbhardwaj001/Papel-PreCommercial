"use client";

import React from "react";
import { useCart } from "@/Hooks/use-cart";
import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { X, Loader2 } from "lucide-react";
import Link from "next/link";
import Quantity from "./Quantity";

const Checkout = () => {
  const { items, removeItem } = useCart();
  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const fee = 1;

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
                  <Image
                    src="/papel-product-png.png"
                    fill
                    loading="eager"
                    alt="empty shopping cart"
                  />
                </div>
                <h3 className="font semi-bold text-2-xl">Your cart is empty</h3>
                <p className="text-muted-foreground text-center">
                  Whoops! Nothing to show here yet.
                </p>
                <Link href="/shop#product" className="w-[80%] mx-auto">
                  <button className="w-full hover:underline underline-offset-4 px-[1.5rem] py-[.5rem] rounded-[.5rem] text-[#1B3C87] font-semibold ">
                    Add items to your cart to checkout
                  </button>
                </Link>
              </div>
            ) : null}
            <ul
              className={cn({
                "divide-y divide-gray-200 border-b border-t border-gray-200":
                  items.length > 0,
              })}
            >
              {items.map((product) => {
                console.log(product);
                return (
                  <li key={product.id} className="flex py-6 sm:py-10 gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative h-24 w-24">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="h-full w-full rounded-[0.5rem] object-cover object-center sm:h-48 sm:w-48"
                        />
                      </div>
                    </div>
                    <div className="ml-4 flex justify-between items-center sm:ml-6 w-full">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div>
                            <h3
                              className="text-lg font-medium text-gray-900 hover:text-gray-800"
                              key={product.id}
                            >
                              {product.name}
                            </h3>
                          </div>
                          <h3
                            className="text-sm font-medium text-gray-700"
                            key={product.id}
                          >
                            {product.description}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            <Quantity item={product} />
                          </p>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {formatPrice(product.price * product.quantity)}
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <Button
                          aria-label="remove product"
                          onClick={() => removeItem(product.id)}
                          className="border-[2px] border-[#bb2124] rounded-[0.5rem] flex gap-1 p-2 h-[2rem] text-[#bb2124] hover:underline underline-offset-2"
                        >
                          <X className="h-3 w-3 text-[#bb2124]" />
                          <h1 className="text-[12px]">Remove</h1>
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">
                  {formatPrice(cartTotal)}
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Shipping Fee</p>
                <p className="text-sm font-medium text-gray-900">
                  {formatPrice(fee)}
                </p>
              </div>
            </div>
            

            <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">
                Order Total
              </div>
              <div className="text-base font-medium text-gray-900">
                {formatPrice(cartTotal + fee)}
              </div>
            </div>

            {/* <div className="mt-6">
              <Button
                disabled={items.length === 0 || isLoading}
                onClick={() => createCheckoutSession({ productIds })}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                ) : null}
                Checkout
              </Button>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
