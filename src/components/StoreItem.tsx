import { formatCurrency } from "../utilites/formatCurency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quntity = 0;
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
          <button>+ add to cart</button>
        ) : (
          <div>
            <div>
              <button>plus</button>
              <div>
                <span>{quntity}</span>
              </div>
              <button>minus</button>
              <div>
                <button>remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
