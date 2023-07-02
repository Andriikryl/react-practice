import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <div>
      <h1>Store</h1>
      <div>
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
