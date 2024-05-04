import { useNavigate } from 'react-router-dom';
import React from "react";
import { useDispatch } from "react-redux";
import { AuthService } from "@/Appwrite/auth";
import { logout } from "@/Store/authSlice";
import { Button } from "../ui/button";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await AuthService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };
  return <Button onClick={logoutHandler} className="p-2" variant="destructive">Logout</Button>;
};

export default LogoutBtn;