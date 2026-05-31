import { Navigate } from 'react-router-dom';
import { useAuth } from '../types/useAuth';
import type { UserRole } from '../types/auth';
import NotFound from '../pages/NotFound';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

export default function ProtectedRoute({  children, requiredRole }: ProtectedRouteProps) {
  const { user } = useAuth();

  // Not logged in → go login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role restriction check
  if (requiredRole && user.role !== requiredRole) {
    // return <Navigate to="/dashboard" replace />;
    return <NotFound />;
  }

  return <>{children}</>;
}