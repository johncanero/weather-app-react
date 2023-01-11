import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-sm text-center text-white md:text-base md:block md:py-6 font-Roboto drop-shadow-xl">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/johncanero/"
      >
        <span className="mr-2 font-bold drop-shadow-sm">
          John Cañero
        </span>
      </a>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;