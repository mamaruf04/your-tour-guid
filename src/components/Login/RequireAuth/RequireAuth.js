import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { auth } from "../../../Firebase/Firebase.init";
import EmailVerifiedAuth from "../EmailVerifiedAuth/EmailVerifiedAuth";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return <EmailVerifiedAuth></EmailVerifiedAuth>;
  }
  return children;
};

export default RequireAuth;
