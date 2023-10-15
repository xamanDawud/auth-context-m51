import React, { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  let { user, loading } = useContext(authContext);
  if (loading) {
    return <p>Data is Loading</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
