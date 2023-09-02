import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ element, authenticated }) {
  return authenticated ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
