// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Enum
import { UserRole } from "../enum/enum";

export type User = {
  username: string;
  role: UserRole;
};

type AuthState = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (username, password) => {
        const isValid: boolean = username === UserRole.ADMIN && password === UserRole.ADMIN;

        if (isValid) {
          set({ user: { username, role: UserRole.ADMIN } });
        }

        return isValid;
      },

      logout: () => {
        set({ user: null });

        window.location.href = "/login";
      },
    }),
    {
      name: "auth-storage",
    }
  )
);