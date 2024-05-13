"use client";

import saveOrder from "../../Hooks/save-order";
import Head from "next/head";
import Link from "next/link";

export default function Failure() {
  const { clearOrder } = saveOrder();

  useEffect(() => {
    clearOrder();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFFDFD]">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          className="w-[50%] h-full mb-4"
          src="/failure.webp"
          alt="Success Icon"
        />
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700 mb-8">
          Sorry, we were unable to process your payment. Please try again later.
        </p>
        <Link href="/">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}
