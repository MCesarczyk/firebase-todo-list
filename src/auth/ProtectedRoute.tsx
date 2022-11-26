import { User } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from 'components/Fallback';
interface ProtectedRouteProps {
  user: User | null | undefined;
};

export const ProtectedRoute = ({ user }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Outlet />
    </ErrorBoundary>
  );
};
