import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// const req = NextApiRequest;
// const res = NextApiResponse;

export async function POST(request) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }).status(405);
  }

  // Try saving the order data
  try {
    const orderData = await request.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      country,
      details,
    } = orderData;
    console.log(name);
    const savedOrder = await prisma.order.create({
      data: {
        name: name,
        email: email,
        contact: phone,
        address: address,
        city: city,
        state: state,
        postalCode: postalCode,
        country: country,
        orderDetails: details,
      },
    });

    return NextResponse.json({ savedOrder }).status(201);
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.error("Failed to save order").status(500);
  }
}

export async function GET(request) {
  if (request.method !== "GET") {
    return NextResponse.json({ message: "Method Not Allowed" }).status(405);
  }

  try {
    const { page, pageSize } = request.json();
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return NextResponse.json({ orders }).status(200);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.error("Failed to fetch orders").status(500);
  }
}
