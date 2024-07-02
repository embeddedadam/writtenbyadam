import { NextResponse, NextRequest } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
});

export async function POST(req: NextRequest, res: NextResponse) {
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
    } catch (error: any) {
      console.error("[STRIPE_VERIFY_ERROR]", error);
      return new NextResponse(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 },
      );
    }
  } else {
    console.error(req.method);
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 },
    );
  }
}
