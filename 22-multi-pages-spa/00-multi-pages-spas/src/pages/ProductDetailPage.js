import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  //   console.log(params);

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
}
