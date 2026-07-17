import { createContext, use } from "react";
import type { UserContextState } from "../types";

export const UserContext = createContext<UserContextState | undefined>(undefined);

export function useUserContext() {
  const context = use(UserContext);

  if (!context) {
    throw new Error("useCartContext has to be used within cartContext");
  }

  return context;
}
