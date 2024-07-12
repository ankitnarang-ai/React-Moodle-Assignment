import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cart); 
  console.log("cartItems", cartItems);

  return (
    <div className="card-container">
      {cartItems.map((item: any, index: number) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="card-content">
          <p>{item.name}</p>
          <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
