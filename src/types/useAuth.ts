import { useContext, createContext } from "react";
import type { User, UserRole } from "../types/auth";


interface AuthContextType {
  user: User | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);



export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
