import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  if (request.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const { payload, checksum } = await request.json();
  console.log("Payload:" + payload);
  console.log("CheckSum:" + checksum);
  const UAT_PAY_API_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
  // const UAT_PAY_API_URL =
  //   "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  try {
    const response = await axios.post(
      UAT_PAY_API_URL,
      { request: payload },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
      }
    );
    console.log("Payment response:", response.data);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { message: "Failed to process payment", details: error.response.data },
      { status: 500 }
    );
  }
}
