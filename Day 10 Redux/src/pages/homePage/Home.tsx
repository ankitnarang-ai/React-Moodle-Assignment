import { Provider } from "react-redux";
import { Navbar,Card } from "../../components"
import React from "react";
import  store from "../../store/Store";
const Home : React.FC = () => {
  const products = [
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$10', name: 'Laptop' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$20', name: 'Product 2' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$30', name: 'Product 3' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$40', name: 'Product 4' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$50', name: 'Product 5' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$60', name: 'Product 6' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$70', name: 'Product 7' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$80', name: 'Product 8' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$90', name: 'Product 9' },
    { imageUrl: 'https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp', price: '$100', name: 'Product 10' },
  ];
  return (
    <div>
      <Provider store={store}>
      <Navbar />

      <div className="card-container">

      {products.map((product, index) => (
        <Card key={index} imageUrl={product.imageUrl} price={product.price} name={product.name} />
      ))}
      </div>
      </Provider>
   
    </div>
  )
}

export default Home
