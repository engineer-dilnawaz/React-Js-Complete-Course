import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

//  <li>
//   <Link>Product 1</Link>
// </li>
// <li>
//   <Link>Product 2</Link>
// </li>
// <li>
//   <Link>Product 3</Link>
// </li>
