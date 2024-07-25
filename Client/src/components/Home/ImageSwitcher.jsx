import React, { useEffect, useState } from "react";

const ImageSwitcher = () => {
  // Array of image objects with paths for light and dark modes
  const images = [
    {
      id: 1,
      light: "/src/components/Home/signuplight.png",
      dark: "/src/components/Home/signupdark.png",
    },
    {
      id: 2,
      light: "/src/components/Home/loginlight.png",
      dark: "/src/components/Home/logindark.png",
    },
    {
      id: 3,
      light: "/src/components/Home/statslight.png",
      dark: "/src/components/Home/statsdark.png",
    },
    {
      id: 4,
      light: "/src/components/Home/datalight.png",
      dark: "/src/components/Home/datadark.png",
    },
  ];


  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      {/* Grid layout for images */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.dark}
            alt={`Image ${image.id}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwitcher;
