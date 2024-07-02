import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
});

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://www.writtenbyadam.com"
        : "http://localhost:3000";

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
        success_url: `${baseUrl}/contact?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/contact?payment=failed`,
      });

      return new NextResponse(JSON.stringify({ url: session.url }));
    } catch (error) {
      console.log("[STRIPE_ERROR]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  } else {
    console.error(req.method);
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 },
    );
  }
}
