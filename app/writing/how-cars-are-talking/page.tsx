import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Page: React.FC = () => {
  return (
    <div className="container max-w-3xl py-6 lg:py-10 mx-auto">
      <div className="flex items-center mb-4">
        <Link href="/writing" legacyBehavior>
          <a className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300">
            <FaArrowLeft className="h-6 w-6" />
          </a>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">How Cars Are Talking</h1>
      <hr className="border-gray-400 w-full mb-4" />
    </div>
  );
};

export default Page;
