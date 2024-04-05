import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import DarkLight from "./DarkLight";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full flex justify-evenly items-center px-4 py-4 relative bg-background top-0">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h2 className="text-center scroll-m-20 border-b text-xl sm:text-4xl font-semibold tracking-tight ">
            LeetStats
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <DarkLight />
          <button className="bg-red-500 text-white text-sm sm:text-lg px-2 py-1 rounded text-center">
            Login
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
