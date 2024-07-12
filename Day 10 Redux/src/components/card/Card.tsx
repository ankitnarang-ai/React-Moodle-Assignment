import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducer/loginSlice';
import { addToCart } from '../../reducer/cartSlice';

interface CardProps {
  imageUrl: string;
  price: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, price, name }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    
    if (email && password) {
      dispatch(login());
    }
  }, [dispatch]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please Login");
      return;
    }

    dispatch(addToCart({
      image: imageUrl,
      name,
      price,
    }));
  };

  return (
    <div className='card'>
      <img src={imageUrl} alt={name} />
      <div className="card-content">
        <h4>{name}</h4>
        <div className="card-list">
          <h4>{price}</h4>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
