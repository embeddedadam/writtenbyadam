import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51OP2yZIZE7h0g1gjJmwwVyVT5GGHXYiz7rIS0ccqClGgmxpvI4tsqzUsK7BcpGwIf9dXa0M9798YEyLPvZtcxwPA00VasjacTk",
  {
    apiVersion: "2023-10-16",
    typescript: true,
  },
);

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
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
    console.error(req.method);
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
