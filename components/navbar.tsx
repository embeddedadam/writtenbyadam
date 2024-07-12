import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import profilePicture from "../public/profilePicture.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black-900 mb-20 flex items-center justify-between py-6 px-4 sm:px-8">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-4">
          <Image src={profilePicture} alt="logo" className="h-8 w-8" />
          <span className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300">
            Adam Gałecki
          </span>
        </a>
        <div className="h-8 w-px bg-gray-300 dark:bg-gray-500 mx-4"></div>
        <a
          href="/writing"
          className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300 mx-2"
        >
          Writing
        </a>
        <a
          href="/contact"
          className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300 mx-2"
        >
          Contact
        </a>
      </div>
      <div className="hidden sm:flex items-center gap-4 text-2xl">
        <a
          href="https://github.com/embeddedadam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-galecki"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/pon_o_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-black hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
