import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import { showNotification } from "./store/ui-slice";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const { cartIsVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function sendCartData() {
  //     dispatch(
  //       showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending cart data",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-http-d445a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Sending cart data failed.");
  //     }
  //     dispatch(
  //       showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "Send cart data successfully",
  //       })
  //     );
  //   }

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch((error) => {
  //     dispatch(
  //       showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Send cart data failed",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
