import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-sm text-center text-gray-500 md:text-base md:block md:py-6 font-ShareTechMono">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/johncanero/"
      >
        <span className="mr-2 font-bold text-gray-900 dark:text-green-400">
          John Cañero
        </span>
      </a>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;