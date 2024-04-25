import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex fixed bottom-0 left-0 right-0 text-sm sm:text-base justify-center items-center m-4 space-x-2">
      Developed with <Heart className="mx-2" /> by <a href="github.com/yashasvisxena" className="underline underline-offset-4">Yashasvi Saxena</a>
    </div>
  );
};

export default Footer;