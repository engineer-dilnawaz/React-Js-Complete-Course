import React, { useContext } from "react";
// import { useSelector } from 'react-redux';

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { ProductContext } from "../context/product-context";
import { useStore } from "../hooks-store/store";

const Products = (props) => {
  const [state, dispatch] = useStore();
  // const { productList } = useContext(ProductContext);
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
