import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req, res: NextApiResponse) {
  if (req.method !== "POST") {
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Method Not Allowed" }),
      { status: 405 },
    );
  }

  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new NextResponse(
        JSON.stringify({ status: "error", message: "Email is required" }),
        { status: 400 },
      );
    }

    try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: "subscribed",
      });
      return new NextResponse(
        JSON.stringify({
          status: "success",
          message: "Successfully subscribed",
        }),
        { status: 200 },
      );
    } catch (error) {
      console.error(
        "Error subscribing user:",
        error.response ? error.response.body : error,
      );
      if (error.response && error.response.body.title === "Member Exists") {
        return new NextResponse(
          JSON.stringify({
            status: "error",
            message: "You are already subscribed.",
          }),
          { status: 200 },
        );
      }
      return new NextResponse(
        JSON.stringify({ status: "error", message: "Subscription failed" }),
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Invalid request body" }),
      { status: 400 },
    );
  }
}
