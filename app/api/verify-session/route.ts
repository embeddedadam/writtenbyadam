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

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { session_id } = body;

      if (!session_id) {
        return new NextResponse("Missing session_id", { status: 400 });
      }

      const session = await stripe.checkout.sessions.retrieve(session_id);

      if (session.payment_status === "paid") {
        return new NextResponse(JSON.stringify({ success: true }), {
          status: 200,
        });
      } else {
        return new NextResponse(JSON.stringify({ success: false }), {
          status: 400,
        });
      }
    } catch (error) {
      console.error("[STRIPE_VERIFY_ERROR]", error);
      return new NextResponse(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 },
      );
    }
  } else {
    res.setHeader("Allow", "POST");
    return new NextResponse("Method Not Allowed", { status: 405 });
  }
}