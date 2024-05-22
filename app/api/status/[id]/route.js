import axios from "axios";
import { SHA256 } from "crypto-js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.formData();
  console.log(data);
  const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");

  const st =
    `/pg/v1/status/${merchantId}/${transactionId}` +
    process.env.NEXT_PUBLIC_SALT_KEY;

  const datasha256 = SHA256(st);
  const checkSum = datasha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

  const options = {
    method: "GET",
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checkSum,
      "X-MERCHANT-ID": merchantId,
    },
  };

  // Check Payment Status
  const response = await axios.request(options);
  console.log("r ===>", response.data.code);

  if (response.data.code === "PAYMENT_SUCCESS") {
    return NextResponse.redirect("https://www.papelwater.in/transaction", {
      status: 301,
    });
  } else {
    return NextResponse.redirect("https://www.papelwater.in/failure", {
      status: 301,
    });
  }
}
