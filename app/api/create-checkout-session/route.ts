import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: "price_1PSdUcIZE7h0g1gjj9jF279U", // Replace with your price ID
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
      });

      return new NextResponse(JSON.stringify({ url: session.url }));
    } catch (error) {
      console.log("[STRIPE_ERROR]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
