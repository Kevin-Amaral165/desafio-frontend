import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  username: string;
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
        const isValid = username === "admin" && password === "admin";

        if (isValid) {
          set({ user: { username } });
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