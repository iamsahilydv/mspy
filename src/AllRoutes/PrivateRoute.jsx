import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

const PrivateRoute = ({ children }) => {
  let { loginStatus } = useContext(LoginContext);
  if (!loginStatus) return <Navigate to={"/login"}></Navigate>;

  return children;
};

export default PrivateRoute;
