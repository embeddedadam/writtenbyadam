import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Explore articles by Adam Gałecki on technology, entrepreneurship, and personal growth. Stay informed and inspired with insights from a software engineer with a background in robotics and generative AI."
        />
        <meta
          name="keywords"
          content="Adam Gałecki, articles, technology, entrepreneurship, personal growth, software engineering, robotics, generative AI"
        />
        <meta name="author" content="Adam Gałecki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Adam Gałecki - Articles" />
        <meta
          property="og:description"
          content="Explore articles by Adam Gałecki on technology, entrepreneurship, and personal growth. Stay informed and inspired with insights from a software engineer with a background in robotics and generative AI."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container max-w-3xl py-6 lg:py-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="w-full space-y-4">
            <h1 className="text-2xl">Articles</h1>
            <hr className="border-gray-400 w-full" />
            <div className="space-y-4">
              {/* <Link href="/writing/underneath-llms">
                <a className="block text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  1. Underneath Large Language Models (LLMs)
                </a>
              </Link>
              <Link href="/writing/how-cars-are-talking">
                <a className="block text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  2. How cars are talking
                </a>
              </Link>
              <Link href="/writing/why-good-work-is-better-than-perfect">
                <a className="block text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  3. Why good work is better than perfect
                </a>
              </Link>
              <Link href="/writing/why-challanges-are-worth-it">
                <a className="block text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  4. Why challenges are worth it
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
