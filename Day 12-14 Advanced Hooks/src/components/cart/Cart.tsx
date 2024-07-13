import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: any) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="card-container">
      <h1 className="card-title">Cart</h1>
      <div className="item-container">
        {cartItems.map((item: any) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <button  
              className="remove-from-cart-btn"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;