import { useActionState } from "react";
import useHttp from "../hooks/useHttp";
import { useCartContext } from "../store/cartContext";
import { useUserProgressContext } from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Error from "./Error";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { API_ENDPOINTS } from "../constants";

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { items, clearCart } = useCartContext();
  const { progress, hideCheckout } = useUserProgressContext();
  const {
    // isLoading: isSending,
    error,
    data,
    sendRequest,
    clearData,
  } = useHttp(API_ENDPOINTS.orders, config);

  function handleClose() {
    hideCheckout();
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  const totalAmount = items.reduce(function (acc, cur) {
    return acc + cur.quantity * cur.price;
  }, 0);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customer = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items,
    //       customer,
    //     },
    //   }),
    // });
  }

  async function checkoutAction(prevState, fd) {
    const customer = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items,
          customer,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items,
    //       customer,
    //     },
    //   }),
    // });
  }

  const [formState, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={progress === "checkout"}
        onClose={progress === "checkout" ? handleClose : null}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within next few
          minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={progress === "checkout"}
      onClose={progress === "checkout" ? handleClose : null}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <form action={formAction}>
        <h2>Checkout</h2>

        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
