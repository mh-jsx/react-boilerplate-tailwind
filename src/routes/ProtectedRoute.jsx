import React from "react";
import { Navigate } from "react-router-dom";

const redirectPath = "/home";

function ProtectedRoute({ children }) {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to={redirectPath} replace />;
}

export default ProtectedRoute;
