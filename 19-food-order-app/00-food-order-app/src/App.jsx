import { CartContextProvider } from "./store/cartContext";

import Header from "./components/Header";
import Meals from "./components/Meals";
import { UserProgresssContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgresssContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgresssContextProvider>
  );
}

export default App;
