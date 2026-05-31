import { useMemo, useState, useEffect, type ReactNode } from "react";
import type { User, UserRole } from "../types/auth";
import { AuthContext } from "../types/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  // Load user from localStorage on startup
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("auth_user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth_user');
    }
  }, [user]);

  const login = (username: string, role: UserRole) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
