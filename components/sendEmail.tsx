"use client";

import Head from "next/head";
import emailjs from "emailjs-com";
import { useState } from "react";

const SendEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_yk616ib",
        "template_r3h1ble",
        formData,
        "fG0BrUlybL8YRN-Nk",
      );
      setMessage("Thank you for your message! I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Adam Gałecki</title>
        <meta
          name="description"
          content="Get in touch with Adam Gałecki via the contact form. Send your message directly and receive a prompt response."
        />
        <meta name="keywords" content="Adam Gałecki, contact, email, message" />
        <meta name="author" content="Adam Gałecki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Contact Adam Gałecki" />
        <meta
          property="og:description"
          content="Get in touch with Adam Gałecki via the contact form. Send your message directly and receive a prompt response."
        />
        {/* <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.adamgalecki.com/contact" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="text-center bg-white p-6 shadow-md rounded-lg text-black mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 border border-black rounded"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2 border border-black rounded"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-2 border border-black rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default SendEmail;
