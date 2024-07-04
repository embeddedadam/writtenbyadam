import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Link href="/writing" legacyBehavior>
          <a className="text-black hover:text-gray-700 dark:hover:text-gray-300">
            <FaArrowLeft className="h-6 w-6" />
          </a>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <hr className="border-gray-400 w-full mb-4" />
    </div>
  );
};

export default Heading;
