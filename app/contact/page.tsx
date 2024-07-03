import React from "react";
import Head from "next/head";
import BookConsultation from "@/components/consultation";
import SendEmail from "@/components/sendEmail";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with Adam Gałecki via social media or email. Book a consultation to discuss technology, entrepreneurship, and personal growth."
        />
        <meta
          name="keywords"
          content="Adam Gałecki, contact, social media, email, consultation, technology, entrepreneurship, personal growth"
        />
        <meta name="author" content="Adam Gałecki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Contact Adam Gałecki" />
        <meta
          property="og:description"
          content="Get in touch with Adam Gałecki via social media or email. Book a consultation to discuss technology, entrepreneurship, and personal growth."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <main className="flex justify-center px-4 sm:px-8">
        <div className="m-8 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="mb-4">
            Feel free to reach out to me on social media or send me an email
            using the form below.
          </p>

          <div className="flex justify-around mb-8">
            <a
              href="https://github.com/embeddedadam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-galecki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://x.com/pon_o_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FaTwitterSquare size={40} />
            </a>
          </div>

          <SendEmail />
          <div className="flex justify-center my-4">or</div>
          <div>
            <BookConsultation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
