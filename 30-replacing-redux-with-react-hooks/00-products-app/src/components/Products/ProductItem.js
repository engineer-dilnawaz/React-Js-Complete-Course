// import React, { useContext } from "react";
// import { useDispatch } from 'react-redux';

import { memo } from "react";
import { useStore } from "../../hooks-store/store";
import Card from "../UI/Card";
import "./ProductItem.css";
// import { ProductContext } from "../../context/product-context";
// import { toggleFav } from '../../store/actions/products';

const ProductItem = (props) => {
  const [state, dispatch] = useStore(false);
  // const { toggleFav } = useContext(ProductContext);
  // const dispatch = useDispatch();
  console.log("Rendering");
  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
    // dispatch(toggleFav(props.id));
    // toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default memo(ProductItem);
