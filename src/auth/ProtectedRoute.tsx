import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: User | null | undefined;
  children: JSX.Element;
};

export const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
