import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex fixed bottom-0 left-0 right-0 text-xs sm:text-base justify-center items-center m-4 space-x-1">
      Developed with <Heart className="mx-1 w-4 sm:w-6" /> by <a href="https://www.github.com/yashasvisxena" target="_blank" className="underline underline-offset-4">Yashasvi Saxena</a>
    </div>
  );
};

export default Footer;