import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "./components/Common/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Footer from "./components/Footer/Footer";

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

  return !loading ? (
    <div className="flex flex-col w-full h-full">
      <Navbar/>
      <Dashboard />
      <Footer/>
    </div>
  ) : null;
}

export default App;
