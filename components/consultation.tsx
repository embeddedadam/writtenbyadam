"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { getCalApi } from "@calcom/embed-react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

const stripePublicKey =
  "pk_test_51OP2yZIZE7h0g1gjllG9ne14f1tvoKu3pzEdboIUsLtfOSFAho70Wqr7xmrT7ENJ2Vybi2f1R0xMfyqq4xWse9IT00l2ygiOVt";
const stripePromise = loadStripe(stripePublicKey);

const BookConsultation: React.FC = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }

    try {
      const response = await axios.get("/api/create-checkout-session");
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");

    if (sessionId) {
      axios
        .post("/api/verify-session", { session_id: sessionId })
        .then((response) => {
          if (response.data.success) {
            setPaymentSuccess(true);
          }
        })
        .catch((error) => {
          console.error("Error verifying session:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (paymentSuccess) {
      (async function () {
        const cal = await getCalApi({});
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [paymentSuccess]);

  return (
    <div className="flex justify-center">
      {!paymentSuccess ? (
        <button
          className="flex items-center px-4 py-2 mt-4 font-semibold text-white bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-600"
          onClick={handleCheckout}
        >
          Book a consultation call
          <FaBookOpen className="ml-2" />
        </button>
      ) : (
        <button
          className="flex items-center relative px-4 py-2 mt-4 font-semibold text-white bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-600"
          data-cal-namespace=""
          data-cal-link="adam-gałecki/consultation-call"
          data-cal-config='{"layout":"month_view"}'
        >
          Schedule your call here
          <FaLongArrowAltLeft className="ml-2" />
          <span className="absolute inset-0 bg-gloss opacity-50 rounded-lg pointer-events-none"></span>
        </button>
      )}
    </div>
  );
};

export default BookConsultation;
