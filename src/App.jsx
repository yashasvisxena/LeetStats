import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Loader } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" app flex flex-col w-full h-full absolute">
      <Navbar />
      <main className=" flex w-full h-full justify-center items-center">
      {!loading ? <Outlet /> : <Loader/>}
      </main>
      <Footer />
    </div>
  ) 
}

export default App;
