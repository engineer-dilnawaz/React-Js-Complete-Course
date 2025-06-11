import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useCartContext } from "../store/cartContext";
import { useUserProgressContext } from "../store/UserProgressContext";

export default function Header() {
  const { showCart } = useUserProgressContext();
  const { items } = useCartContext();

  function handleShowCart() {
    showCart();
  }

  const totalCartItems = items.reduce(function (acc, cur) {
    return acc + cur.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
