import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShopingCarContext";

export default function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="container">
      <div>nav</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>
      {cartQuantity > 0 && (
        <button onClick={openCart}>
          Cart <div>{cartQuantity} </div>
        </button>
      )}
    </div>
  );
}
