import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import { DarkLight, logo, Form, LogoutBtn } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full flex justify-between items-center px-4 py-4 relative top-0">
        {authStatus && <Form />}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-center scroll-m-20 border-b text-lg sm:text-4xl font-semibold tracking-tight ">
            LeetStats
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <DarkLight />
          {authStatus && null}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
