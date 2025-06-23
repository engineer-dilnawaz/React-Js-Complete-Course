const { createContext, useState } = require("react");

export const PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export default function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState(PRODUCTS);

  function toggleFavourite(productId) {
    setProductList((prev) => {
      const prodIndex = prev.findIndex((p) => p.id === productId);
      const newFavStatus = !prev[prodIndex].isFavorite;
      const updatedProducts = [...prev];
      updatedProducts[prodIndex] = {
        ...prev[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  }

  return (
    <ProductContext.Provider
      value={{ productList, toggleFav: toggleFavourite }}
    >
      {children}
    </ProductContext.Provider>
  );
}
