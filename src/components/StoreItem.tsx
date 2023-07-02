import { useShoppingCart } from "../context/ShopingCarContext";
import { formatCurrency } from "../utilites/formatCurency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quntity = getItemQuantity(id);
  return (
    <div>
      <img src={imgUrl} alt="image" width="300" height="300" />
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{formatCurrency(price)}</span>
      </div>
      <div>
        {quntity === 0 ? (
          <button onClick={() => increaseCartQuantity(id)}>
            + add to cart
          </button>
        ) : (
          <div>
            <div>
              <button onClick={() => increaseCartQuantity(id)}>plus</button>
              <div>
                <span>{quntity}</span>
              </div>
              <button onClick={() => decreaseCartQuantity(id)}>minus</button>
              <div>
                <button onClick={() => removeFromCart(id)}>remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
