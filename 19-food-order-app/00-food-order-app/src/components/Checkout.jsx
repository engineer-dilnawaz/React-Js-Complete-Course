import { useCartContext } from "../store/cartContext";
import { useUserProgressContext } from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
  const { items } = useCartContext();
  const { progress, hideCheckout } = useUserProgressContext();

  function handleClose() {
    hideCheckout();
  }

  const totalAmount = items.reduce(function (acc, cur) {
    return acc + cur.quantity * cur.price;
  }, 0);

  return (
    <Modal
      open={progress === "checkout"}
      onClose={progress === "checkout" ? handleClose : null}
    >
      <form>
        <h2>Checkout</h2>

        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
