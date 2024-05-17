import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import { DarkLight, logo, Form, LogoutBtn, LoginBtn } from "../index";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname)

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
      <div className="w-full flex sm:justify-around justify-between items-center px-4 py-4  left-0 right-0 top-0">
        {authStatus && <Form />}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-center scroll-m-20 border-b text-xl sm:text-4xl font-semibold tracking-tight ">
            LeetStats
          </h2>
        </Link>
        <div className="flex items-center justify-center">
          <DarkLight />
          {authStatus && pathname != "/dashboard" && (
            <Link to="/dashboard">
              <Button
                variant="link"
                className="p-1 sm:p-4 text-xs sm:text-base"
              >
                Go to DashBoard
              </Button>
            </Link>
          )}
          {!authStatus && <LoginBtn />}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
