import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/cartSlice';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const items = useSelector((state: any) => state.item.items);
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item: any) => {
    const userData = localStorage.getItem('user')
    if(!userData) {
      alert('Please login first')
      navigate('/login')
    }
    else if(cartItems.includes(item)) {
      alert("Already added into card")
      return 
    }
    else{
      dispatch(addToCart(item));
      alert("Item added to cart")
    }

  };

  return (
    <div className="card-container">
      <h1 className="card-title">Products</h1>
      <div className="item-container">
        {items.map((item: any) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;