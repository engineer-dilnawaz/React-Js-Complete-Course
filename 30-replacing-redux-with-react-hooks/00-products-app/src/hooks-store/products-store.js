import { PRODUCTS } from "../context/product-context";
import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        products: updatedProducts,
      };
    },
  };

  initStore(actions, { products: [...PRODUCTS] });
};

export default configureStore;
