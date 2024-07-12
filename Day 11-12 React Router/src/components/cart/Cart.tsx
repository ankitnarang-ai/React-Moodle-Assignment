import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cart); 
  const dispatch = useDispatch();
  const [count , setCount] = useState(0);

  const remove = (name: string) => {
    dispatch(removeFromCart({ name }));
  };

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item: any) => {
      const price = parseInt(item.price);
      temp += price;
    });
    setCount(temp);
  }, [cartItems]);

  return (
    <>
      <div className="card-container">
        {cartItems.map((item: any, index: number) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <div>
                <button onClick={() => remove(item.name)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="checkout">
        <div><h1>Total: {count}</h1></div>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
