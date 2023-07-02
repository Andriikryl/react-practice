type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <div>
      <img src={imgUrl} alt="image" width="300" height="300" />
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
}
