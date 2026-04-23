// Libraries
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

// Store
import { useAuthStore, type User } from "../../store/auth.store";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user: User | null = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}