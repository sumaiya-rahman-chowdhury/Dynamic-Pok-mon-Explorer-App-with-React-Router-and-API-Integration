import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (loading) {
    // Show a loading spinner or placeholder while determining authentication status
    return <div>Loading...</div>;
  }
  console.log(user);
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
  return user? children : <Navigate to="/login" state={{ from: location }} replace />;
}
