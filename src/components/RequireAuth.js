import React from "react";
import useAuth from "./hooks/UseAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
