// import React, { useContext } from "react";
// import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
// import { ProductContext } from "../context/product-context";
import { useStore } from "../hooks-store/store";

const Favorites = (props) => {
  const state = useStore()[0];
  const favouriteProducts = state.products.filter((p) => p.isFavorite);
  // const productList = useContext(ProductContext).productList.filter(
  //   (p) => p.isFavorite
  // );
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favouriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favouriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
