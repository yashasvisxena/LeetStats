import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import DarkLight from "./DarkLight";
import logo from "@/assets/logo.png";
import Form from "../Dashboard/Form";
import { Button } from "../ui/button";

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
      <div className="w-full flex justify-between items-center px-4 py-4 relative top-0">
        <Form/>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-center scroll-m-20 border-b text-lg sm:text-4xl font-semibold tracking-tight ">
            LeetStats
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <DarkLight />
          <Button className="p-2" variant="destructive">Logout</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
