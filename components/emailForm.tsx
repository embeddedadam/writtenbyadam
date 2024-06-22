"use client";

import { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/mailchimp", { email });
      if (response.data.status === "success") {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="text-center bg-white p-6 shadow-md rounded-lg text-black mt-8">
      <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
      <p className="mb-4">Subscribe to get the latest updates and articles.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-black rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default EmailForm;
