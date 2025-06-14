import { use } from "react";
import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'progress'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgresssContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext value={userProgressCtx}>
      {children}
    </UserProgressContext>
  );
}

export function useUserProgressContext() {
  return use(UserProgressContext);
}
