import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import { DarkLight, logo, Form, LogoutBtn, LoginBtn } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full flex justify-between items-center px-4 py-4 relative top-0">
        {authStatus && <Form />}
        {/* <Form/> */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-center scroll-m-20 border-b text-xl sm:text-4xl font-semibold tracking-tight ">
            LeetStats
          </h2>
        </Link>
        <div className="flex items-center justify-center">
          <DarkLight />
          {!authStatus && <LoginBtn />}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
