import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducer/loginSlice';
import { addToCart } from '../../reducer/cartSlice';

interface CardProps {
  image: string;
  name: string;
  price: string;
  id: any;
}

const Card: React.FC<CardProps> = ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);
  const cartItems = useSelector((state: any) => state.cart.cart);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (email && password) {
      dispatch(login());
    }
  }, [dispatch]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('Please Login');
      return;
    }
    const existingItem = cartItems.find((item: any) => item.name === name);
    if (existingItem) {
  
      alert("Already added into card")
    } else {
      
      dispatch(addToCart({ image, name, price, id }));
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="Price">{price}</p>
        <button onClick={handleAddToCart} className="card-button">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
