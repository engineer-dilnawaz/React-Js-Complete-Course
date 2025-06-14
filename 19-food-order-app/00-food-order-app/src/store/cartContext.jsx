import { use } from "react";
import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      //   state.items.push(action.item); // not good due to mutating object
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

// return <CartContext.Provider>{children}</CartContext.Provider> // old way of adding provider before React 19
export function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;

export function useCartContext() {
  return use(CartContext);
}
