"use client";

import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePublicKey =
  "pk_test_51OP2yZIZE7h0g1gjllG9ne14f1tvoKu3pzEdboIUsLtfOSFAho70Wqr7xmrT7ENJ2Vybi2f1R0xMfyqq4xWse9IT00l2ygiOVt";
const stripePromise = loadStripe(stripePublicKey);

const StripeCheckout: React.FC = () => {
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

  return (
    <div className="flex justify-center">
      <button
        className="px-4 py-2 mt-4 font-semibold text-white bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-600"
        onClick={handleCheckout}
      >
        Checkout with Stripe
      </button>
    </div>
  );
};

export default StripeCheckout;
