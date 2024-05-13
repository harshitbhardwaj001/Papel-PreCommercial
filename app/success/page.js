"use client";
import saveOrder from "@/Hooks/save-order";
import { useCart } from "@/Hooks/use-cart";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
// import { post } from "../api/orders/route";

// async function orderToDb(order) {
//   const response = await fetch("/api/orders", {
//     method: "POST",
//     body: JSON.stringify(order),
//   });

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return await response.json();
// }

async function post(order) {
  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    console.log(JSON.stringify(order));
    if (!response.ok) {
      throw new Error(`Failed to save order: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error saving order:", error);
    throw new Error("Failed to save order. Please try again."); // Rethrow the error with a generic message
  }
}

export default function Success() {
  const { clearCart } = useCart();
  const { clearOrder, orderFinal } = saveOrder();
  const saveOrderToDb = async () => {
    try {
      const savedOrder = await post(orderFinal);
      console.log("Order saved successfully:", savedOrder);
    } catch (error) {
      console.error("Error saving order:", error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    saveOrderToDb();
    clearOrder();
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          className="w-[50%] h-full mb-4"
          src="/success.gif"
          alt="Success Icon"
        />
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link href="/">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[600px]">
            Continue Shopping
          </div>
        </Link>
      </div>
    </div>
  );
}
