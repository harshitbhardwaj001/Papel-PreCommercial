"use client";

import React, { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { Audio } from "react-loader-spinner";

const prisma = new PrismaClient();

// async function getOrders() {
//   try {
//     const orders = await prisma.order.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//     return orders;
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return [];
//   }
// }

async function getOrders() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/orders`, {
      method: "GET",
    });

    if (!response.ok) {
      // Handle HTTP errors
      console.error("HTTP error:", response.statusText);
      return [];
    }

    const orders = await response.json(); // Parse the JSON from the response
    return orders;
  } catch (error) {
    // Handle network errors or other unexpected issues
    console.error("Error fetching orders:", error);
    return [];
  }
}

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        const orders = response.orders; // Assuming 'orders' is the key containing the array of orders
        console.log(orders);
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 min-h-[100vh] pt-[10rem]">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {loading ? ( // Conditionally render loader if loading is true
        <div className="w-full h-[50vh] flex items-center justify-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  State
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Postal Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      timeZone: "IST", // Set the desired time zone if needed
                    }).format(new Date(order.createdAt))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.state}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.postalCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ul>
                      {order.orderDetails.map((item) => (
                        <li key={item.id}>
                          <div className="flex-col">
                            <div className="flex gap-4">
                              <div className="flex flex-col text-[15px] xs:max-md:text-[15px]">
                                <h1>{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1>Cost &#8377;{item.price}</h1>
                              </div>
                              <div className="flex flex-col justify-center bg-[#efefef] px-2 rounded-[.2rem]">
                                <h1 className="xs:max-md:text-[11px]">Qty</h1>
                                <div className="flex gap-4 xs:max-md:gap-2 justify-center">
                                  <div className="text-center text-[15px]">
                                    {item.quantity}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
