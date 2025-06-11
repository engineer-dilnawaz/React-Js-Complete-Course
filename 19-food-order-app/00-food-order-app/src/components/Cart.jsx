import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

import { useCartContext } from "../store/cartContext";
import { currencyFormatter } from "../utils/formatting";
import { useUserProgressContext } from "../store/UserProgressContext";

export default function Cart() {
  const { progress, hideCart, showCheckout } = useUserProgressContext();
  const { items, addItem, removeItem } = useCartContext();

  function handleCloseCart() {
    hideCart();
  }

  function handleGoToCheckout() {
    showCheckout();
  }

  const cartTotal = items.reduce(function (acc, cur) {
    return acc + cur.quantity * cur.price;
  }, 0);

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => addItem(item)}
              onDecrease={() => removeItem(item.id)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
