// Home.tsx
import { Provider } from "react-redux";
import { Navbar, Card } from "../../components";
import React from "react";
import store from "../../store/Store";

const Home: React.FC = () => {

  const products = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyg8IqVEUjazPI3R3dT6EJKKDIhgAOsdaew&s',
      name: 'Flower 1',
      price: '10',
      id: Date.now()
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyg8IqVEUjazPI3R3dT6EJKKDIhgAOsdaew&s',
      name: 'Flower 2',
      price: '20',
      id: Date.now()
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyg8IqVEUjazPI3R3dT6EJKKDIhgAOsdaew&s',
      name: 'Flower 3',
      price: '30',
      id: Date.now()
    },
  ];

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="card-container">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </Provider>
  );
};

export default Home;
